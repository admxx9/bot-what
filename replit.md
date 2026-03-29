# NaufraBot V3

A WhatsApp bot built with Node.js and the Baileys library. It includes RPG games, download features, AI integrations, group protection (anti-link, anti-spam), and payment integration via Efí Bank PIX.

## Project Structure

- `index.js` — Main bot entry point; handles WhatsApp connection and message routing
- `efipay.js` — Efí Bank PIX payment integration (REST API)
- `paymentHandler.js` — Payment handling logic
- `userSystem.js` — User management system
- `database/` — JSON-based data storage (users, payments, active plans)
- `sessao/` & `session/` — WhatsApp session/auth state files (Baileys)
- `settings/` — Bot configuration and per-user/group settings
- `fuction/` — Command handlers (downloads, stickers, etc.)
- `Games/` — RPG game logic
- `certificado.pem` / `certificado.p12` — TLS certificates for Efí Bank API

## Setup

- Runtime: Node.js 20
- Package manager: npm
- Dependencies installed via `npm install`

## Running

The bot runs as a console workflow:
```
node index.js
```

On first run (or when session is expired), it will prompt for a QR code or pairing code to authenticate with WhatsApp.

## Configuration

Edit the top of `index.js` to set:
- `dono` — Bot owner WhatsApp number
- `EFI_CLIENT_ID` / `EFI_CLIENT_SECRET` — Efí Bank credentials
- `EFI_SANDBOX` — Set to `false` for production
- `EFI_PIX_KEY` — Your PIX key

Environment variables are also stored in `.env`.
