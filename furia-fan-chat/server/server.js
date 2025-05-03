const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const quizQuestions = [
  { question: 'Em que ano a FURIA foi fundada?', answer: '2017' },
  { question: 'Qual jogador é conhecido como arT?', answer: 'Andrei' },
];

let currentQuestion = quizQuestions[0];

io.on('connection', (socket) => {
  console.log('Fã conectado 🎧');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.emit('game status', 'FURIA 10 x 7 NAVI - Mapa Mirage');
  socket.emit('quiz question', currentQuestion);

  socket.on('quiz answer', (data) => {
    const correct = data.answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    const feedback = {
      user: 'QuizBot',
      text: `${data.user} respondeu \"${data.answer}\" - ${correct ? '✅ Correto!' : '❌ Errado'}`
    };
    io.emit('chat message', feedback);
  });
});

server.listen(3001, () => {
  console.log('Servidor da FURIA rodando em http://localhost:3001');
});
