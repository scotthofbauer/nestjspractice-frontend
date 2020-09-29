import * as React from 'react'
import {IPost} from '../../schemas/Post.d'
import FeedItem from './FeedItem/feedItem';
import useFeedService from './services/feedService';

const Feed: React.FC = () => {
    
    const refreshState = () => {
        window.location.reload()
    }
    
     let state = useFeedService();
     console.log(state)
    return (
        <div>
        <button onClick={refreshState}>Refresh</button>
        {state.error && <pre>ERROR! {state.error}...</pre>}
        {state.isPending && <pre>LOADING...</pre>}
        {state.posts.map((post :IPost) => {
            return(
                <div key={post.id}> 
                <FeedItem {...post}/>
                 </div>
            )
        })}
    </div>
    )
};

export default Feed;