import * as React from 'react'
import { Button } from 'react-bootstrap';
import * as mockUser from '../../../mockUser.json'
import { IPost } from '../../../schemas/Post.d';

import axios from 'axios'
const FeedItem: React.FC<IPost> = (props) => {

    const favoritePost = (postId: number) => {
        console.log(postId)
        const newFavorite = {
            userId: mockUser.id,
            postId: postId,
        }
        axios.post('http://localhost:3001/favorite', newFavorite).then(response => console.log(response))
    }

    return (
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div key={props.id} className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div>{`${props.author.first_name} ${props.author.last_name}`}</div>
                            </div>
                             <div className='col-md-4'>
                            <Button onClick={() => { favoritePost(props.id) }}>Like</Button>
                        </div>
                        </div>
                        <div>{`${props.title}`}</div>
                    </div>
                    <div className='card-body'>
                        <div>{`message: ${props.message}`}</div>
                        <ul>
                            {props.categories.map(category => {
                                return (
                                    <div key={category.id}>
                                        <li>{category.hashtag}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='card-footer'>
                        <div>{`favorites: ${props.favorites.length}`}</div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
};

export default FeedItem;