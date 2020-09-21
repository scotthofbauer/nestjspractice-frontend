import * as React from 'react'
import { useEffect, useState } from 'react';
import {IPost} from '../../schemas/Post.d'
const Feed: React.FC = () => {

    const emptyList: IPost[] = []
    const getPostsData = () =>  {
        return fetch('http://localhost:3001/posts').then(response => {
          if (response.status !== 200) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
          });
      }
    const useFeedService = () => {
        const [state, setState] = useState({
            posts: emptyList,
            error: null,
            isPending: true
          });
        useEffect(() => {
            getPostsData()
              .then(value => setState({ posts: value, error: null, isPending: false }))
              .catch(error => setState({ ...state, error: error.toString(), isPending: false }));
          }, emptyList);
          const { posts, error, isPending } = state;
          return [posts,error,isPending]
    }

    const [posts, error,isPending] = useFeedService();
    console.log([posts, error,isPending])

    return (
        <div>
        {error && <pre>ERROR! {error}...</pre>}
        {isPending && <pre>LOADING...</pre>}
        {
            <div><pre>{JSON.stringify(posts, null, 2)}</pre></div>
        }
    </div>
    )
};

export default Feed;