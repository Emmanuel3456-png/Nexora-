# NEXORA - School Activity AI Assistant

**Built by Emmanuel Abraham & Njoku for Softnet Technology Academy**
**Team Phantom - Dream Big, Study Hard, Achieve More**

**Knowledge • Focus • Success | Learn Grow Excel**

## What is NEXORA?

NEXORA is a voice assistant like Gemini, but for schools. Like ChatGPT and Claude, but made for Nigerian schools.

**I am NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy**

## Features (25+)

### Academic Core
1. Lesson Notes Generator - Subject, Topic, Class, Term -> Definition, Content, Examples, Summary, Assignment
2. Exam Questions + Marking Scheme - Objective/Theory/Mixed
3. Explain Topics Simply
4. Lesson Plans - Objectives, Materials, Activities, Evaluation
5. Assignments & Homework
6. Image Generation - Educational diagrams via Pollinations (FREE, no key)
7. Summarize Chapters

### Teacher Tools
8. Scheme of Work Generator
9. Attendance Sheet
10. Timetable Generator
11. Report Card Comments
12. Parent Meeting Letters
13. Seating Arrangement
14. Lesson Evaluation Forms

### Student Tools
15. CBT Practice Tests with timer
16. Homework Helper Step-by-Step
17. Essay & Letter Writing
18. Career Guidance
19. Study Timetable
20. Spelling Bee & Vocabulary

### Advanced
21. Lab Report Generator
22. Debate Points
23. Dictionary & Translation (Igbo/Yoruba/Hausa)
24. Past Questions WAEC/JAMB/NECO/BECE
25. School News Generator

Plus: Female Voice Assistant, Moving Background, Voice Mode like Gemini Live

## Tech Stack

- Next.js 14, Tailwind CSS
- Groq API (llama-3.3-70b-versatile) - Primary
- Gemini API - Backup
- Pollinations API - Images (FREE, no key)
- Capacitor + EAS for APK
- Vercel for hosting

## API Keys Needed

### 1. GROQ_API_KEY (PRIMARY - REQUIRED)
- Get FREE at https://console.groq.com/keys
- 14,400 requests/day FREE
- Model: llama-3.3-70b-versatile

### 2. GEMINI_API_KEY (OPTIONAL)
- Get FREE at https://aistudio.google.com/app/apikey
- Model: gemini-2.0-flash-exp

### 3. POLLINATIONS (NO KEY NEEDED!)
- 100% FREE, no signup
- https://image.pollinations.ai/prompt/YOUR_PROMPT
- Used for educational image generation

## Setup

### Termux (On Phone)
```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
git clone https://github.com/YOURUSERNAME/nexora.git
cd nexora
npm install
cp .env.local.example .env.local
# Edit .env.local and add your GROQ_API_KEY
nano .env.local
npm run dev
```

### GitHub
```bash
git init
git add .
git commit -m "NEXORA by Emmanuel Abraham & Njoku - Team Phantom"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/nexora.git
git push -u origin main
```

### Vercel Deploy (Add API Key)
1. Go to vercel.com, Import GitHub repo
2. Settings -> Environment Variables -> Add:
   - Name: GROQ_API_KEY, Value: gsk_xxx
   - Name: GEMINI_API_KEY, Value: your_gemini_key (optional)
3. Deploy -> https://nexora.vercel.app

### EAS APK Build
```bash
npm install -g eas-cli
eas login
npx cap init NEXORA com.teamphantom.nexora
npx cap add android
npx cap copy android
eas build -p android --profile preview
# Or: npx cap open android -> Build in Android Studio
```

## Creators

**Emmanuel Abraham - Empire Emm** - Co-Founder & Lead Developer - Voice Assistant, UI, Glowing Design
**Njoku - Vectors Oasis** - Co-Founder & AI Engineer - Groq Integration, Lesson Engine

**Team Phantom - Dream Big, Study Hard, Achieve More**

## Ownership

Built by Emmanuel Abraham & Njoku for Softnet Technology Academy
2026

## License

For Softnet Technology Academy
