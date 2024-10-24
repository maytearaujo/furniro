import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(cors({ origin: 'https://furniro-lake.vercel.app' }));

server.use(middlewares)

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}

server.use(router)

export default server;
