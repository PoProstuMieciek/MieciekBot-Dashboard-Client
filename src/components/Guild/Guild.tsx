import React from 'react';
import { Link } from 'react-router-dom';
import { GuildInfo } from '../../util';

import { Button } from 'react-bootstrap';
import { GuildIcon } from '.';

type Params = {
    guild: GuildInfo;
}

export const Guild = ({ guild } : Params) => {

    const link = `/dashboard/${guild.id}`;

    const btn_id = `btn-dashboard-${guild.id}`;

    return (
        <div className='guild' onClick={() => document.getElementById(btn_id)!.click()}>
            
            <div className='guild-info'>
                <GuildIcon guild={guild} />    
                
                <h3 className='guild-name'>{guild.name}</h3>
            </div>
            
            <Button variant='success' size='sm' as={Link} to={link} id={btn_id}>Go to Dashboard</Button>
        
        </div>
    );
}