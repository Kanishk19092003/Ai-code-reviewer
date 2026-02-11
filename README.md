# 🤖 AI Code Reviewer

AI Code Reviewer is a full-stack web application that allows users to paste source code into an interactive code editor and receive AI-powered feedback, suggestions, and error detection.

This project is built using React, Tailwind CSS, Node.js, Express.js, and Gemini API.

---

## ✨ Features

- 📝 Interactive code editor for writing or pasting code
- 🤖 AI-powered code analysis using Gemini API
- 🐞 Detects logical errors and potential bugs
- 💡 Provides optimization suggestions
- 🎨 Responsive and clean UI using Tailwind CSS
- 🔄 Real-time API communication between frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios / Fetch API

### Backend
- Node.js
- Express.js
- RESTful APIs

### AI Integration
- Google Gemini API

---

## 📂 Project Structure

```
ai-code-reviewer/
│
├── client/              # React Frontend
│   ├── components/
│   ├── pages/
│   └── App.js
│
├── server/              # Node + Express Backend
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── .env
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-link>
cd ai-code-reviewer
```

### 2️⃣ Install Dependencies

#### For Frontend
```bash
cd client
npm install
```

#### For Backend
```bash
cd server
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file inside the server folder:

```
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

### 4️⃣ Run the Application

#### Start Backend
```bash
cd server
nodemon server.js
```

#### Start Frontend
```bash
cd client
npm start
```

Frontend runs on:
```
http://localhost:3000
```

Backend runs on:
```
http://localhost:5000
```

---

## 🔄 How It Works

1. User pastes source code into the editor.
2. Frontend sends the code to the backend via REST API.
3. Backend forwards the code to Gemini API.
4. Gemini analyzes the code and returns feedback.
5. The response is displayed in the UI with suggestions and improvements.

---

## 🧠 Concepts Applied

- RESTful API integration
- AI API consumption
- Asynchronous JavaScript (async/await)
- Environment variable management
- Modular backend structure
- Clean UI with Tailwind CSS

---

## 🎯 Project Objective

The main goal of this project was to:

- Integrate AI into a real-world web application
- Understand API handling and prompt structuring
- Improve backend-to-AI communication flow
- Build a practical developer utility tool

---

## 📌 Future Improvements

- Support multiple programming languages
- Add syntax highlighting
- Implement user authentication
- Save review history
- Deploy with Docker

---

## 👨‍💻 Author

**Kanishk Yadav**  
MERN Stack Developer
