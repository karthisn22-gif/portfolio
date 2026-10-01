import { useState } from 'react'

export default function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setStatus('sending'); setMsg('')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const d = await r.json()
      if (!r.ok) throw new Error(d.error || 'Something went wrong')
      setStatus('sent'); setMsg('Thanks. Your message was sent.'); setF({ name: '', email: '', message: '' })
    } catch (err) { setStatus('error'); setMsg(err.message) }
  }

  return (
    <form className="cf" onSubmit={submit} noValidate>
      <p className="mono">Send a message</p>
      <label>Name<input value={f.name} onChange={on('name')} required maxLength={80} autoComplete="name" /></label>
      <label>Email<input type="email" value={f.email} onChange={on('email')} required maxLength={120} autoComplete="email" /></label>
      <label>Message<textarea rows={4} value={f.message} onChange={on('message')} required maxLength={2000} /></label>
      <div><button className="btn p" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button></div>
      <p className={'st' + (status === 'error' ? ' err' : '')} role="status" aria-live="polite">{msg}</p>
    </form>
  )
}
