import {client} from '@/sanity/lib/client';
import { STARTUP_QUERY_BY_AUTHOR_ID } from '@/sanity/lib/queries';
import { StartupCardType } from './StarupCard';
import StartupCard from './StarupCard';

const UserStartups = async ({id} : {id: string}) => {  
     
    
    const startups = await client.fetch(STARTUP_QUERY_BY_AUTHOR_ID, {id});

    return <>
        {startups.length > 0 ? 
            startups.map((startup: StartupCardType) => (
                <StartupCard key={startup._id} post={startup} />
            ))  :
            <p className='no-result'>Este usuario no ha subido ninguna startup.</p>  
    }
    </>;
}

export default UserStartups;