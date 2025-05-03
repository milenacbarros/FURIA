# 🔥 FURIA Fã Chat

Um chat interativo em tempo real para fãs do time de CS:GO da FURIA, com integração de mensagens, status ao vivo e quiz temático. Desenvolvido como desafio de experiência conversacional com foco em design gamer, tecnologia em tempo real e interações dinâmicas.

![preview](https://user-images.githubusercontent.com/your-image-url/aqui.png)

---

## 🧠 Funcionalidades

- 💬 Chat em tempo real entre fãs
- 🔴 Status ao vivo de partidas
- 🎯 Quiz interativo da FURIA
- 🎮 Visual gamer moderno com Tailwind
- 🔗 Comunicação via WebSocket

---

## 🚀 Tecnologias

### Frontend:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Socket.IO Client](https://socket.io)

### Backend:
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Socket.IO](https://socket.io)
- [CORS](https://www.npmjs.com/package/cors)

---

## 🛠️ Como rodar localmente

### Pré-requisitos:
- Node.js instalado (recomendo usar o [Node Version Manager](https://github.com/nvm-sh/nvm))

### Passo 1: Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia-fan-chat.git
cd furia-fan-chat
```

---

### Passo 2: Instale o servidor

```bash
cd server
npm install
npm start
```

O servidor ficará rodando em `http://localhost:3001`

---

### Passo 3: Rode o frontend

```bash
cd ../client
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`

---

## 👩‍💻 Estrutura do projeto

```
furia-fan-chat/
├── client/         # Frontend React + Vite + TailwindCSS
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/         # Backend com Express e Socket.IO
│   └── server.js
```

---

## 🤖 Interações

- Usuários se conectam com um nome e podem mandar mensagens no chat
- O servidor envia um status simulado da partida atual
- Uma pergunta de quiz é enviada a todos
- Usuários podem responder e recebem feedback automatizado pelo "QuizBot"

---

## 📸 Demonstração

> Você pode adicionar aqui o link do vídeo de 3 minutos ou um gif da interação no chat.

---

## 📄 Licença

Este projeto é livre para uso acadêmico e demonstrativo.  
Sinta-se livre para adaptar ou expandir como quiser.

---

## 🙋‍♀️ Feito por

Milena Barros — 2025  
Desenvolvido com ❤️ para o desafio FURIA Conversational Experience.