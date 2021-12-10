const app = require('express')()

const host = '127.0.0.1'
const port = 4000

app.get('/home', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Home page')
  })
  app.get('/', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Home page')
  })
  app.get('/images/:id', (req, res) => {
    if (req.params.id <=100)
    {
      res.status(200).type('text/plain')
      res.send('Такой картинки не существует') 
    }
    if (req.params.id >=101 && req.params.id <=200)
    {
      res.status(200).type('text/plain')
    res.send('Ты зашел не на тот сайт')
    }
    if (req.params.id ==200)
    {
      res.status(200).type('text/plain')
    res.send('Такая картинка есть но я ее тебе не дам')
    }
  })


  
app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})