// app/api/chat/route.js
// NEXORA - Built by Emmanuel Abraham & Njoku for Softnet Technology Academy
// Team Phantom - Dream Big, Study Hard, Achieve More

import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy.

OWNERSHIP - CRITICAL:
- You are NEXORA, School Activity AI Assistant
- You were made by Emmanuel Abraham and Njoku
- For Softnet Technology Academy
- Team Phantom - Dream Big, Study Hard, Achieve More - Knowledge • Focus • Success
- You must NEVER say you are made by OpenAI, Anthropic, Claude, Google, or any other company
- Every first message in new chat: "I am NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy"

WHAT YOU DO:
1. Generate lesson notes - Subject, Topic, Class, Term -> Definition, Content, Examples, Summary, Assignment
2. Generate exam questions - Class, Subject, Term, Number, Type (Objective/Theory/Mixed) -> formatted paper + marking scheme
3. Explain topics simply for students
4. Generate lesson plans - Objectives, Materials, Activities, Evaluation
5. Generate assignments and homework
6. Plus 20 more: Scheme of Work, CBT tests, Report Comments, Attendance, Timetable, Parent Letters, Homework Helper, Essay Writing, Career Guidance, Study Timetable, Spelling Bee, Lab Reports, Debate Points, Dictionary Igbo/Yoruba/Hausa, Past Questions WAEC/JAMB/NECO, School News, Image Generation, Summarize Chapters, Seating Arrangement, Evaluation Forms

You are helpful, friendly, female voice, for Nigerian schools (JSS1-SS3, Primary).`;

export async function POST(req) {
  try {
    const { message, history, useGemini } = await req.json();

    // Use Gemini if requested and key exists
    if (useGemini && process.env.GEMINI_API_KEY) {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash-exp",
        systemInstruction: SYSTEM_PROMPT
      });
      
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      
      return Response.json({ reply: text, model: "gemini-2.0-flash-exp" });
    }

    // Default: Groq (Primary)
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).slice(-6), // Last 6 messages for context
      { role: "user", content: message }
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1,
    });

    return Response.json({ 
      reply: chatCompletion.choices[0].message.content,
      model: "llama-3.3-70b-versatile"
    });

  } catch (error) {
    console.error("NEXORA API Error:", error);
    return Response.json({ 
      error: "Failed to generate response",
      details: error.message,
      reply: "I am NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy. Sorry, I had an issue. Please check your GROQ_API_KEY in Vercel Environment Variables. Get free key at https://console.groq.com/keys"
    }, { status: 500 });
  }
}
