import { useEffect, useState } from "react";
import { IPost } from "../../../schemas/Post.d";

const emptyList: IPost[] = []
    
    const getPostsData = async () =>  {
        return fetch('http://localhost:3001/posts').then(async(response) => {
          if (response.status !== 200) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
            return await response.json();
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
          }, [state]);
          return state
    
}

export default useFeedService