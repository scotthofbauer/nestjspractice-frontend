import * as React from 'react'
import { useState } from 'react';
import { IPost } from '../../schemas/Post.d'
import FeedItem from './FeedItem/FeedItem';
import useFeedService from './services/feedService';

const Feed: React.FC = () => {
    const emptyList: IPost[] = []
    const initState = {
        posts: emptyList,
        error: null,
        isPending: true
    } 
    const [state, setState] = useState(initState);
    useFeedService(state, setState)
    console.log(state)
    return (
        <div>
            <button onClick={() => setState(initState)}>Refresh Feed</button>
            {state.error && <pre>ERROR! {state.error}...</pre>}
            {state.isPending && <pre>LOADING...</pre>}
            {state.posts.map((post: IPost) => {
                return (
                    <div key={post.id}>
                        <FeedItem {...post} />
                    </div>
                )
            })}
        </div>
    )
};

export default Feed;