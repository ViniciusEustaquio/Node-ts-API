import * as http from 'http'
import 'dotenv/config';
import { getFilterEpisode, getListPodcast } from './controllers/podcast-controller';
import { Router } from './routes/router';


const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse ) => {
    
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
    
    if(request.method === "GET" && baseUrl === Router.LIST ) {
        getListPodcast(request, response);
    }
    
    if(request.method === "GET" && baseUrl === Router.EPISODE ) {
        getFilterEpisode(request, response)
    }
})



const port = process.env.PORT


server.listen(port, () => {
    console.log(`Servidor online na porta ${port} `)
    
})