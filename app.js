const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'App',
    subtitle: 'Implementación de entorno dinámico',
    text: 'Aplicación de ejemplo creada para este proyecto ૮ ⚆ ﻌ⚆ ა',
    imageUrl: 'https://cataas.com/cat',
    altText: 'Gato aleatorio',
    colorfondo: '#f3aa9a',
    titleBoxColor: '#e07a5f'
  });
});

app.get('/posts', (req, res) => {
  res.render('posts', {
    postTitle: 'Posts',
    postText: 'Aqui estarán todos los posts ૮ ・ﻌ・ა',
    postFondoColor: '#f3aa9a'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});
