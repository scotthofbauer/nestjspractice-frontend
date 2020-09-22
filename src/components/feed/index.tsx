import * as React from 'react'
import { useState } from 'react';
import { IPost } from '../../schemas/Post.d'
import FeedItem from './FeedItem/feedItem';
import useFeedService from './services/feedService';

const Feed: React.FC = () => {
    const emptyList: IPost[] = []
    const [state, setState] = useState({
        posts: emptyList,
        error: null,
        isPending: true
    });
    const renderedState = useFeedService(state, setState)
    console.log(state)
    return (
        <div>
            <button onClick={() => setState({posts: renderedState.posts, error: renderedState.error,isPending: true})}>refresh</button>
            {renderedState.error && <pre>ERROR! {state.error}...</pre>}
            {renderedState.isPending && <pre>LOADING...</pre>}
            {renderedState.posts.map((post: IPost) => {
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