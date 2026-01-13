
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAssistantResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are a friendly and helpful AI Health Assistant for Awas Hospital. Provide general health information, explain hospital services, and encourage users to book an appointment for specific medical concerns. Always mention that you are an AI and not a doctor. Be professional, compassionate, and concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the health database. Please call our direct line for assistance.";
  }
};
