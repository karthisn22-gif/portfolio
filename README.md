# Karthikeyan S N - MERN Portfolio

MongoDB + Express + React (Vite) + Node. The contact form posts to `/api/contact`, which validates and stores the message in MongoDB.

## Requirements
- Node.js 18.11 or newer
- MongoDB (optional): local install or a free Atlas cluster. Without it the API keeps messages in memory.

## Run in VS Code
1. Open this folder in VS Code, then open the terminal (Ctrl+`).
2. `npm run setup`  (installs server and client packages)
3. Copy `.env.example` to `.env` and set `MONGO_URI` and `ADMIN_KEY`.
4. `npm run dev`
5. Open http://localhost:5173

## Production
`npm run build` then `npm start`, open http://localhost:5000

## Read saved messages
`curl -H "x-admin-key: YOUR_ADMIN_KEY" http://localhost:5000/api/messages`

## Structure
- server/: Express API and the Mongoose Message model
- client/src/sections/: one React component per portfolio section
- client/src/animations/motion.js: GSAP + ScrollTrigger animation
- client/src/components/: Header, Footer, ContactForm
