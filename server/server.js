import http from 'http';
import app from './app';

const server = http.createServer(app);
const port = 3000;
server.listen(port);
server.on('listening', () => {
  console.log(`Server listening on port: ${port}. http://localhost:${port}/`);
});

app.get('/', (req, res) => {
  res.end('Hello Express');
});
