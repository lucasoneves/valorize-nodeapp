import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  return response.send("Olá, Aluno!")
})

app.post('/test-post', (request, response) => {
  return response.send('Olá, NLW. Método Post')
})

app.listen(3000, () => {
  console.log('Server is running')
})