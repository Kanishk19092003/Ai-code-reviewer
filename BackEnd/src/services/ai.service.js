const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response.text;
}

module.exports = main;