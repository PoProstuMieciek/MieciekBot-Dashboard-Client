/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { getUserDetails, User } from '../../util';

import './styles.css';
import { Navbar } from '../../components';

export const HomePage = () => {
    
    const [ user, setUser ] = React.useState<User>();

    React.useEffect(() => {

        getUserDetails()
        .then(res => setUser(res))
        .catch(err => {
            setUser(null as any);
            console.log("[INFO] Not logged in");
        });

    }, []);

    return (
        <div>
            <Navbar user={user} />
            
            <div className='app'>
                <img
                    className='mieciekbot-img'
                    src='https://cdn.discordapp.com/avatars/511219391539445761/067aec30675c8483654c344bfabd2c19.png?size=4096'
                    alt='MieciekBot Avatar'
                />
                <h1 className='mieciekbot-name'>MieciekBot</h1>
                <p className='description'>Includes moderation, leveling, music and much more!</p>
            </div>
        </div>
    );
}