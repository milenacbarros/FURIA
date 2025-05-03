import { useState, useEffect } from "react";
import io from "socket.io-client";
import "./index.css"; // garante que a animação e fonte personalizada sejam aplicadas

const socket = io("http://localhost:3001");

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("FãAnon");
  const [gameStatus, setGameStatus] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    socket.on("game status", (status) => {
      setGameStatus(status);
    });
    socket.on("quiz question", (q) => {
      setQuizQuestion(q);
    });
    return () => {
      socket.off("chat message");
      socket.off("game status");
      socket.off("quiz question");
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    socket.emit("chat message", { user: username, text: input });
    setInput("");
  };

  const sendQuizAnswer = () => {
    socket.emit("quiz answer", { user: username, answer: quizAnswer });
    setQuizAnswer("");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-gamer flex items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-xl">
          🔥 FURIA Fã Chat 🔥
        </h1>

        {gameStatus && (
          <div className="bg-purple-900 border border-purple-500 text-white text-center p-3 rounded-lg shadow-md">
            <span className="text-green-400 font-bold">🟢 Ao Vivo:</span> {gameStatus}
          </div>
        )}

        <div className="h-64 md:h-80 overflow-y-auto bg-zinc-800 border border-zinc-600 rounded-lg p-4 space-y-2 shadow-inner scroll-messages">
          {messages.map((msg, i) => (
            <div key={i} className="fade-in">
              <strong className="text-purple-400">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="flex-1 p-2 rounded bg-zinc-800 border border-zinc-600 text-white placeholder-gray-400"
            placeholder="Seu nome (opcional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 p-2 rounded bg-zinc-800 border border-zinc-600 text-white placeholder-gray-400"
            placeholder="Mensagem para a FURIA..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold shadow-md transition-all duration-300 focus:ring-2 focus:ring-purple-400"
          >
            Enviar
          </button>
        </div>

        <div className="text-center">
          <button
            className="mt-2 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow-lg animate-pulse transition-all"
            onClick={() => setQuizMode((prev) => !prev)}
          >
            {quizMode ? "Fechar Quiz" : "🎯 Participar do Quiz da FURIA"}
          </button>
        </div>

        {quizMode && quizQuestion && (
          <div className="bg-purple-200 text-black p-4 rounded-lg space-y-3 shadow-lg">
            <p><strong>Pergunta:</strong> {quizQuestion.question}</p>
            <input
              className="w-full p-2 rounded border"
              placeholder="Sua resposta..."
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value)}
            />
            <button
              onClick={sendQuizAnswer}
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 mt-2"
            >
              Enviar Resposta
            </button>
          </div>
        )}

        <p className="text-sm text-gray-400 text-center mt-10">
          💬 Projeto interativo para fãs da FURIA acompanharem os jogos em tempo real.
        </p>
      </div>
    </div>
  );
}
