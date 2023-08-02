import express, { Express, Request, Response } from 'express';


const app: Express = express();
const port: number = 3000;


app.get('/time', (req: Request, res: Response) => {
  let date: Date = new Date();
  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  res.send(hours + ':' + minutes);
})

app.listen(port);
