import * as React from 'react'
import {IPost} from '../../schemas/Post.d'
const Feed: React.FC = () => {

    const useFeedService = () => {
        return {
            posts: [{
                id: 1,
                test: "placeholder"
            },
            {
                id: 2,
                test: "second placeholder"
            }],
            error: null,
            isPending: false
        }
    }
    const { posts, error, isPending } = useFeedService();


    return (
        <div>
        {error && <pre>ERROR! {error}...</pre>}
        {isPending && <pre>LOADING...</pre>}
        {posts.map((post :IPost) => {
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