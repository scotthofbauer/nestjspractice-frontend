import * as React from 'react'
import { IPost } from '../../../schemas/Post.d';

const FeedItem: React.FC<IPost> = (props) => {
    
    
    return (
        <div>
                <div key={props.id}> 
                <div>{`Author: ${props.author.first_name} ${props.author.last_name}`}</div>
                <div>{`Title: ${props.title}`}</div>
                <div>{`message: ${props.message}`}</div>
                <ul>
                {props.categories.map(category => {return(
                    <div key={category.id}>
                    <li>{category.hashtag}</li>
                    </div>
                )}) }
                </ul>
                <div>{`favorites: ${props.favorites.length}`}</div>
                 </div> 
                 <br/>
    </div>
    )
};

export default FeedItem;