import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import {Post as PostProps} from './Interfaces/Post';

function Post({ username, caption, imageUrl } : PostProps) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar
                    className='post__avatar'
                    alt={'suntmatei'}
                    src='https://instagram.fclj2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/226882691_1491434571209657_5574412679158581588_n.jpg?_nc_ht=instagram.fclj2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=aFR-1gqiF5YAX8pgB7i&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-S4dQ9qghqG1rCEh1EadyyTtTO5viwhsDXi0Bo-3IabA&oe=61F65F40&_nc_sid=7bff83'
                />
                <h3>{username}</h3>
            </div>
            <img className='post__image' src={imageUrl} alt="Darth Vader" />
            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
        </div>
    );
}

export default Post;