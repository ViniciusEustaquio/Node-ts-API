import { repositoryPodcast } from "../repositories/repository-podcast";


export const serviceListPodcast = async () => {
    const data = repositoryPodcast();
    
    return data
}


