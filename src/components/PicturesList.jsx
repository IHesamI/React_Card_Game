import React, { useReducer, useState, useEffect } from 'react';
import PictureCard from './PictureCard';
import { Box, Stack } from '@mui/material';
import CardArray from './utils';
const initialpicture = CardArray();

const PicturesList = ({ deacreaseHearts, increaseScore }) => {

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
            case 'hidden': {
              return  pictures.map(t => {
                    return {
                        index: t.index,
                        name: t.name,
                        checked: false
                    }
                })

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

    const [pictures, picturedispatch] = useReducer(pictureReduced, initialpicture);
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
                    picturedispatch({ type: 'update', index: index, name: name })
                    picturedispatch({ type: 'update', index: state[0].index, name: state[0].name })
                    increaseScore();
                    dispatch({ type: 'delete' })
                }
                else {
                    deacreaseHearts()
                    dispatch({ type: 'delete' })
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
    useEffect(() => {
        const timer = setTimeout(() => picturedispatch({ type: 'hidden' }), 5000)

    }, []);

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent={'center'}>
            {pictures.map(card =>
                <PictureCard key={card.index} index={card.index} handle_clicked={handle_clicked} name={card.name} checked={card.checked} />
            )}
        </Stack>
    );
}

export default PicturesList;
