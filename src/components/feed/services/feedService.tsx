import { useEffect } from "react";
import { IPost } from "../../../schemas/Post.d";
const useFeedService = (state: {
  posts: IPost[],
  error: null,
  isPending: boolean
}, setState: Function) => {
        useEffect(() => {
          const getPostsData = () =>  {  
            return fetch('http://localhost:3001/posts').then(async(response) => {
              if (response.status !== 200) {
                  throw new Error(`${response.status} ${response.statusText}`);
                }
                return await response.json()
              });
          }
          if(state.isPending){
            getPostsData()
              .then(value => setState({ posts: value, error: null, isPending: false }))
              .catch(error => setState({ ...state, error: error.toString(), isPending: false }));
          }
          }, [state, setState]);
          return state
        }
export default useFeedService