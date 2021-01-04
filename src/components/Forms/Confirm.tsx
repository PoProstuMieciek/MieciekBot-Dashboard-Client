import React from 'react';

import './Confirm.css';
import { Button } from 'react-bootstrap';

type Props = {
    message?: string;
    isBtnDisabled: boolean;
    resetAction: any;
}

export const Confirm = ({
    message = 'Careful — you have unsaved changes!',
    isBtnDisabled,
    resetAction
} : Props) => {

    return (
        <div className='confirm-wrapper'>
            <div className='confirm-container'>
                <div className="confirm-content">
                    
                    <div className="confirm-message">{message}</div>
                    
                    <div className="confirm-buttons">
                        <Button type='button' variant='outline-secondary' size='sm' disabled={isBtnDisabled} onClick={resetAction}>Reset</Button>
                        <Button type='submit' variant='success' size='sm' disabled={isBtnDisabled}>Save Changes</Button>
                    </div>
                
                </div>
            </div>
        </div>
    );
}