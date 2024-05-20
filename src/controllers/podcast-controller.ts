import {IncomingMessage, ServerResponse  } from 'http'
import { serviceListPodcast } from '../services/list-podcast-service';
import { serviceFilterEpisodes } from '../services/filter-podcast-service';




export const getListPodcast = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceListPodcast();
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
    
};


export const getFilterEpisode =  async (req: IncomingMessage, res: ServerResponse) => {
    
    
    
    const content =  await serviceFilterEpisodes(req.url);
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
    
}