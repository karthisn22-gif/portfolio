import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import Message from './models/Message.js'

const app = express()
const PORT = process.env.PORT || 5000
const ADMIN_KEY = process.env.ADMIN_KEY || ''
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.json({ limit: '20kb' }))

// MongoDB is optional: without it, messages are kept in memory so the site still runs.
let useDb = false
const memory = []
if (process.env.MONGO_URI) {
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 4000 })
    useDb = true
    console.log('MongoDB connected')
  } catch (e) {
    console.warn('MongoDB unavailable, using in-memory store:', e.message)
  }
} else {
  console.warn('MONGO_URI not set, using in-memory store')
}

// Tiny in-memory rate limit: 5 messages per hour per IP
const hits = new Map()
function limited(ip) {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 3600_000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 5
}

app.get('/api/health', (_req, res) => res.json({ ok: true, db: useDb }))

app.post('/api/contact', async (req, res) => {
  if (limited(req.ip)) return res.status(429).json({ error: 'Too many messages. Please try again later.' })
  const { name = '', email = '', message = '' } = req.body || {}
  const doc = { name: String(name).trim(), email: String(email).trim().toLowerCase(), message: String(message).trim() }
  if (!doc.name || doc.name.length > 80) return res.status(400).json({ error: 'Please enter your name.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(doc.email)) return res.status(400).json({ error: 'Please enter a valid email.' })
  if (doc.message.length < 5 || doc.message.length > 2000) return res.status(400).json({ error: 'Message must be 5-2000 characters.' })
  try {
    if (useDb) await Message.create(doc)
    else memory.unshift({ ...doc, createdAt: new Date().toISOString() })
    res.status(201).json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Could not save your message.' })
  }
})

// Read messages: curl -H "x-admin-key: <ADMIN_KEY>" http://localhost:5000/api/messages
app.get('/api/messages', async (req, res) => {
  if (!ADMIN_KEY || req.get('x-admin-key') !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' })
  res.json(useDb ? await Message.find().sort({ createdAt: -1 }).limit(100) : memory)
})

// Production: serve the built React app
const dist = path.join(__dirname, '../client/dist')
if (fs.existsSync(dist)) {
  app.use(express.static(dist))
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')))
}

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
