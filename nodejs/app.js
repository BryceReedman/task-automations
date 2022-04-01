const express = require('express')
const app = express()
const port = 3000

const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`)
  })