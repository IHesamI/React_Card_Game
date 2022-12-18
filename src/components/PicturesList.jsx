import React, { useReducer, useState, useEffect } from 'react';
import PictureCard from './PictureCard';
import { Box, Stack } from '@mui/material';
import imagesrc from '../assets/yandex.png';


const PicturesList = () => {
    function pictureReduced(pictures, action) {
        switch (action.type) {
            case 'update':
                {
                    return pictures.map(t => {
                        if (t.index == action.index)
                            return {
                                index: action.index,
                                name: action.name,
                                checked: true
                            }
                        else return t
                    })

                }
            case 'add': {
                return [...pictures, {
                    index: action.index,
                    name: action.name,
                    checked: true
                }]

            }
        }

    }


    function CardReducer(cards, action) {
        switch (action.type) {
            case ('add'): {
                return [...cards, {
                    index: action.index,
                    name: action.name
                }];
            }
            case ('delete'):
                {
                    return []
                }
        }
    }

    const [relode, setrelode] = useState(false);
    const [pictures, picturedispatch] = useReducer(pictureReduced, []);
    for (let i = 0; i < 24; i++) {
        picturedispatch({ type: 'add', index: i, name: imagesrc, checked: false })
    };

    const clicked_cards = [];
    const [state, dispatch] = useReducer(CardReducer, clicked_cards);


    const handle_clicked = (index, name) => {
        if (state.length == 1) {
            if (state[0].index == index) {
                dispatch({ type: 'delete' })
            }
            else {
                if (state[0].name == name) {
                    console.log('here')
                    // pictures[state[0].index] = <PictureCard name={imagesrc} checked={true} />
                    // pictures[index] = <PictureCard name={imagesrc} checked={true} />
                    dispatch({ type: 'delete' })
                    setrelode(true);

                }

            }
        }
        else {
            console.log('length 0')
            dispatch({
                type: 'add',
                index: index,
                name: name,
            })

        }
        console.log(state)
    }



    return (
        // <PictureCard />
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent={'center'}
        >
            {pictures.map(card =>
                <PictureCard key={card.index} index={card.index} handle_clicked={handle_clicked} name={card.name} checked={card.checked} />
            )}
        </Stack>
    );
}

export default PicturesList;
