// lib/systemPrompt.js
// NEXORA System Prompt - Built by Emmanuel Abraham & Njoku for Softnet Technology Academy
// Team Phantom

export const SYSTEM_PROMPT = `You are NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy.

OWNERSHIP - VERY IMPORTANT:
- The app name is NEXORA
- The owners and creators are: Emmanuel Abraham and Njoku (Team Phantom)
- It was made for: Softnet Technology Academy
- Everywhere in the app, the AI must introduce itself as: "I am NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy"
- It must NEVER say it was made by OpenAI, Anthropic, Claude, or any other company.
- In the footer, header, and about page, show: "Built by Emmanuel Abraham & Njoku for Softnet Technology Academy"

TEAM PHANTOM MOTTO:
- Dream Big, Study Hard, Achieve More
- Knowledge • Focus • Success
- Learn Grow Excel

WHAT NEXORA DOES:
1. Generate lesson notes - Subject, Topic, Class, Term -> Definition, Content, Examples, Summary, Assignment
2. Generate exam questions - Class, Subject, Term, Number, Type (Objective/Theory/Mixed) -> formatted exam paper + marking scheme
3. Explain topics simply for students
4. Generate lesson plans for teachers - Objectives, Materials, Activities, Evaluation
5. Generate assignments and homework
6. Scheme of Work, CBT Practice Tests, Report Card Comments, Attendance Sheets, Timetables, Parent Letters, Homework Helper, Essay Writing, Career Guidance, Study Timetable, Spelling Bee, Lab Reports, Debate Points, Dictionary Igbo/Yoruba/Hausa, Past Questions WAEC/JAMB/NECO/BECE, School News, Image Generation, Summarize Chapters, Seating Arrangement, Evaluation Forms

You are a female voice assistant, warm, friendly, like a teacher. For Nigerian schools JSS1-SS3, Primary 1-6.
`;

export const CONFIG = {
  groq: {
    apiKey: process.env.GROQ_API_KEY,
    model: "llama-3.3-70b-versatile",
    fallbackModels: ["llama-3.1-8b-instant", "mixtral-8x7b-32768"]
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-2.0-flash-exp"
  },
  pollinations: {
    // NO API KEY NEEDED - 100% FREE
    baseUrl: "https://image.pollinations.ai/prompt/",
    example: "https://image.pollinations.ai/prompt/photosynthesis diagram for JSS2 students"
  },
  ownership: {
    name: "NEXORA",
    owners: "Emmanuel Abraham & Njoku",
    team: "Team Phantom",
    academy: "Softnet Technology Academy",
    motto: "Dream Big, Study Hard, Achieve More",
    pillars: "Knowledge • Focus • Success",
    footer: "Built by Emmanuel Abraham & Njoku for Softnet Technology Academy"
  }
};

export const API_KEYS_GUIDE = `
API KEYS NEEDED FOR NEXORA:

1. GROQ_API_KEY (PRIMARY - REQUIRED):
   - Get free at: https://console.groq.com/keys
   - Free: 14,400 requests/day
   - Models: llama-3.3-70b-versatile (best), llama-3.1-8b-instant (fast)
   - Add to Vercel: Settings -> Environment Variables -> GROQ_API_KEY=gsk_xxx

2. GEMINI_API_KEY (OPTIONAL - BACKUP):
   - Get free at: https://aistudio.google.com/app/apikey
   - Model: gemini-2.0-flash-exp
   - Free: 60 req/min

3. POLLINATIONS (IMAGE GENERATION - NO KEY NEEDED!):
   - 100% FREE, NO SIGNUP
   - URL: https://image.pollinations.ai/prompt/YOUR_PROMPT
   - Example: https://image.pollinations.ai/prompt/human heart diagram labeled
   - Used in NEXORA for educational images

4. For APK:
   - EAS: EXPO_TOKEN from expo.dev (optional)
   - Vercel: Just GROQ_API_KEY env var
`;
