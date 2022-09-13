import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Card } from './Card'


export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const CardsList = ({words}) => {

    const filterSearch = useSelector(state => state.words.filterSearch)

    if (filterSearch) {
        words = words.filter(
            word => word.en.toLowerCase().startsWith(filterSearch) || word.ru.toLowerCase().startsWith(filterSearch))
    }

    return (
        <Cards>
            { words.map(card => <Card card={card} key={card.id} />) }
        </Cards>
    )
}