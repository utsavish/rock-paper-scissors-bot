# Rock‑Paper‑Scissors Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)
[![License](https://img.shields.io/badge/License-GNU-blue)](LICENSE.txt)
![Discord](https://img.shields.io/badge/Discord-Bot-blueviolet)

A Discord bot built with JavaScript that lets users play the classic **rock‑paper‑scissors** game in a Discord server.

## 🚀 Try It
You can directly add the bot to your Discord server using this link:  
👉 [Invite Rock‑Paper‑Scissors Bot](https://discord.com/oauth2/authorize?client_id=1340965551387709512)

## Features
- Choose between rock, paper, or scissors.
- Play directly via chat commands.
- Simple game logic with instant outcome texting back to user.

## Repository Structure
```
.
├── app.js           # Main bot setup and Discord client initialization
├── commands.js      # Command handling logic
├── game.js          # Core game logic (random choice, outcome determination)
├── utils.js         # Helper utility functions
├── Procfile         # For deployment (e.g., Heroku)
├── package.json     # Project dependencies and scripts
└── package-lock.json
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- A Discord bot token and permissions to run commands in your server.

### Installation
1. Clone the repo:
    ```bash
    git clone https://github.com/utsavish/rock-paper-scissors-bot
    cd rock-paper-scissors-bot
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file or set environment variables:
    ```env
    DISCORD_TOKEN=<your-discord-bot-token>
    PREFIX=!
    ```
4. Run the bot locally:
    ```bash
    node app.js
    ```

## Usage
- In your Discord server, type:
  ```
  !rps rock
  !rps paper
  !rps scissors
  ```
- The bot will respond with its choice and the outcome (win/lose/tie).

## Game Logic (via `game.js`)
The game mechanics typically follow this approach:
1. Validate user input: ensure it's `rock`, `paper`, or `scissors`.
2. Randomly select the bot's choice.
3. Compare choices; respond with:
   - Tie (both choices equal),
   - User win,
   - Bot win.

## Deployment
- This bot is Heroku-ready, thanks to the included `Procfile`.
- To deploy, push to your Heroku remote. Bot should start automatically.

## Contributing
All contributions are welcome—whether it’s improving command parsing, adding features, or enhancing the README. Feel free to submit a PR or open an issue!

## License
Distributed under the GNU General Public License (GPL). See [LICENSE](LICENSE.txt) for more details.