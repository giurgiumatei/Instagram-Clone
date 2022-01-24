import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post() {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar
                    className='post__avatar'
                    alt={'suntmatei'}
                    src='https://instagram.fclj2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/226882691_1491434571209657_5574412679158581588_n.jpg?_nc_ht=instagram.fclj2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=aFR-1gqiF5YAX8pgB7i&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-S4dQ9qghqG1rCEh1EadyyTtTO5viwhsDXi0Bo-3IabA&oe=61F65F40&_nc_sid=7bff83'
                />
                <h3>Username</h3>
            </div>
            
            {/* header -> avatar + username */}

            <img className='post__image' src="http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg" alt="Darth Vader" />

            <h4 className='post__text'><strong>suntmatei</strong> Acesta este Radu Lupsa</h4>
        </div>
    );
}

export default Post;