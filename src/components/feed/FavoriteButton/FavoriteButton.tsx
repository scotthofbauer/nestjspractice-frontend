import React from "react"
import { Button } from "react-bootstrap"
import axios from 'axios'



const FavoriteButton : React.FC<number> = (props) => {

    const favoritePost = (postId: number) => {
        console.log(postId)
        const newFavorite = {
            userId: 9,
            postId: postId,
        }
        axios.post('http://localhost:3001/favorite', newFavorite).then(response => console.log(response))
    }

    return (
    <div className='col-md-4'>
            <Button onClick={()=>{favoritePost(props)}}>Like</Button>
    </div>
    )}
export default FavoriteButton