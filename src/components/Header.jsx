import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { ReactComponent as StarIcon } from '../assets/star.svg';
import { ReactComponent as ClockIcon } from '../assets/clock.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';

const Header = () => {
    return (
        <Stack className='header'
            direction="row"
            justifyContent={'space-evenly'}
            alignItems={'end'}>
            <Stack direction={'row'}
                gap={0.5}
                alignItems={'end'}
                sx={{ py: 0.5 }}>
                <StarIcon
                    width={'50px'}
                    height={'50px'} />
                <Typography color="#EFCE4A" variant='h4' >0</Typography>
            </Stack>
            <Stack
                direction={'row'}
                gap={0.5}
                alignItems={'end'}
                sx={{ py: 0.5 }}>
                <ClockIcon
                    width={'50px'}
                    height={'50px'} />
                <Typography variant='h4' >0:30</Typography>
            </Stack>

            <Stack
                direction={'row'}
                gap={0.5}
                alignItems={'center'}
                sx={{ py: 0.5 }}>
                <HeartIcon
                    width={'45px'}
                    height={'45px'} />
                <Typography variant='h4' color={'#E34326'} >5</Typography>
            </Stack>
            <Button
                sx={{ m: 1.5 }}
                variant={'contained'}
                size={'small'}
                color={'warning'}
                style={{
                    fontSize: 10,
                    textTransform: 'none'
                }}>
                Refresh
            </Button>
        </Stack>

    );
}

export default Header;
