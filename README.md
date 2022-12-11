# ChatGPT Discord Bot

- [Invite to your discord server](https://discord.com/api/oauth2/authorize?client_id=1051342700940640286&permissions=2147485696&scope=bot)
- Hosted via [mogenius](https://www.mogenius.com)
- Built with [ChatGPT JS API](https://www.npmjs.com/package/chatgpt) and [Discord.js](https://discord.js.org)
## Usage
- To give a command to ChatGPT, enter /chat followed by your command
### Example: 
![Example of using /chat command](https://i.gyazo.com/1cde13549fa81520a351f62176b106b0.png)

## Local Setup

- Create a discord application and bot: https://www.discord.com/developers
- Clone the repo
- Get a ChatGPT session token. Instructions can be found here: [https://www.npmjs.com/package/chatgpt](https://www.npmjs.com/package/chatgpt?activeTab=readme#session-tokens)
- Enter your bot token, bot client id, and ChatGPT session token into .env.example
- Rename .env.example to .env
- Run "yarn install" in the project directory

## Run

#### Node
- yarn start

#### Docker
- docker compose build
- docker compose up

## Credits
- Travis Fischer for creating the chatgpt JS package
- [OpenAI](https://openai.com) for creating [ChatGPT](https://openai.com/blog/chatgpt)
