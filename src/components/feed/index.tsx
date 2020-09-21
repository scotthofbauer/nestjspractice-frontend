import * as React from 'react'
import {IPost} from '../../schemas/Post.d'
import useFeedService from './feedService';

const Feed: React.FC = () => {
    
    
     const state = useFeedService();
    return (
        <div>
        {state.error && <pre>ERROR! {state.error}...</pre>}
        {state.isPending && <pre>LOADING...</pre>}
        {state.posts.map((post :IPost) => {
            return(
                <div key={post.id}> 
                <div><pre>{JSON.stringify(post, null, 2)}</pre></div>
                 </div>
            )
        })}
    </div>
    )
};

export default Feed;