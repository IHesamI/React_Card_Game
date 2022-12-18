import React, { useState } from 'react';
import { Card, Stack, Box, CardActionArea, Button } from '@mui/material';
import '../index.css';

const PictureCard = ({ index, handle_clicked, name, checked }) => {
    const [className, setClassName] = useState('card');
    return (
        <>
            {checked ?
                <Box className={'scene'}>
                    <Box
                        className='card_face'
                        component={'img'}
                        width={'192px'}
                        height={'151px'}
                        src={name}
                        alt="image" />
                </Box>

                :

                <Box
                    className='scene scene--card'
                    component={'div'}>
                    <Box
                        className={className}
                        onClick={() => {
                            setClassName(className == 'card' ? 'card is-flipped' : 'card')
                            handle_clicked(index,)
                        }}>
                        <Box
                            className='card_face card_face--front'
                            component={'img'}
                            width={'192px'}
                            height={'151px'}
                            src={name}
                            alt="image" />
                        <Box
                            className='card_face card_face--back'>
                        </Box>
                    </Box>
                </Box >}
        </>
    );
}

export default PictureCard;
