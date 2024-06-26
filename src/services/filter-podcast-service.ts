import { repositoryPodcast } from "../repositories/repository-podcast"


export const serviceFilterEpisodes = async (podcastName: string | undefined) => {
    
    
    const queryString = podcastName?.split("?p=")[1] ?? '';
    
    const data = await repositoryPodcast(queryString);
    
    return data
    
}