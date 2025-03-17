import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  verifyKeyMiddleware,
} from "discord-interactions";

const app = express();
app.use(express.json());

app.post(
  "/interactions",
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  (req, res) => {
    const { type, data } = req.body;

    if (type === InteractionType.APPLICATION_COMMAND) {
      if (data.name === "challenge") {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "Rock Paper Scissors Challenge! Choose your move:",
          },
        });
      }
      if (data.name === "rules") {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: "Here Are Some Rules for ya:"
          }
        })
      }
    }
  }
);

const appId = process.env.APP_ID;

const commands = [
  {
    name: "challenge",
    description: "Challenge someone to Rock Paper Scissors!",
    options: [
      {
        name: "choice",
        description: "Pick your move",
        type: 3, // String type
        required: true,
        choices: [
          { name: "Rock", value: "rock" },
          { name: "Paper", value: "paper" },
          { name: "Scissors", value: "scissors" },
        ],
      },
    ],
  },
  {
    name: "rules",
    description: "If You Really Want to know the Rules",
  },
];

InstallGlobalCommands(appId, commands);

app.listen(3000, () => {
  console.log("Listening on port 3000 and updating commands...");
});