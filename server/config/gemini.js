import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const gemini = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

export default gemini;