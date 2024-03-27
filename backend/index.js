import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Overkill-483',
  database: 'cookbook'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('hello this is the backend')
})

app.get('/recipes', (req, res) => {
  const q = 'SELECT * from recipes'
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/recipes', (req, res) => {
  const q = 'INSERT INTO recipes(`title`, `desc`, `author`, `picture`) VALUES (?)'

  const values = [
    req.body.title,
    req.body.desc,
    req.body.author,
    req.body.picture
  ]

  // const values = ["title from backend", "desc from backend", "Ryan", "picture from backend"]

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.listen(8800, () => {
  console.log('Conneted to backend')
})
