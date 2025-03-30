import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";
const client = new OpenAI({
    apiKey: GPT_API_KEY,
    dangerouslyAllowBrowser: true
});

export default client;