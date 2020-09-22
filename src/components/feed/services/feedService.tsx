import { useEffect, useState } from "react";
import { IPost } from "../../../schemas/Post.d";
const useFeedService = () => {
const emptyList: IPost[] = []
const [state, setState] = useState({
  posts: emptyList,
  error: null,
  isPending: true
});
    
    const getPostsData = async () =>  {
      
        return fetch('http://localhost:3001/posts').then(async(response) => {
          if (response.status !== 200) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
            return await response.json();
          });
      }
      
    const FeedService = () => {    
        useEffect(() => {
            getPostsData()
              .then(value => setState({ posts: value, error: null, isPending: false }))
              .catch(error => setState({ ...state, error: error.toString(), isPending: false }));
          }, []);
          return state
    
}
return FeedService()
}
export default useFeedService