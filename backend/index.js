import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import AWS from 'aws-sdk'
import fs from 'fs'

const app = express()

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAQ3EGWNE3KEIUS4ND',
  secretAccessKey: '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'
})

const s3 = new AWS.S3()


const params = {
  Bucket: 'cookbookpicturebucket',
  Key: 'myFile.txt',
  Body: fs.createReadStream('./myFile.txt')
}

s3.upload(params, (err, data) => {
  if (err) {
    console.log('Error uploading file:', err)
  } else {
    console.log('File uploaded successfully. File location:', data.Location)
  }
})

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

app.get('/recipe/:recipeid', (req, res) => {
  const recipeid = req.params.recipeid
  const q = 'SELECT title, author, `desc`, picture FROM recipes WHERE recipeid = ?'
  db.query(q, [recipeid], (err, data) => {
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
