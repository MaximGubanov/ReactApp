import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { addWordToLearned, addWordToRepetition } from '../redux/wordsSlice'
import { fetchImage, openModal } from '../redux/modalSlice'


export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    border: 1px solid rgb(34, 34, 255);
    border-radius: 6px;
    align-items: center;
    background-color: rgb(255, 255, 199);

    &:hover {box-shadow: 0 0 8px gray}
`;

const Word = styled.div`
    width: 100%;
    text-align: center;
    font-size: xx-large;
    padding: 0.2rem;
`;

const Span = styled.span`
    display: block;
    margin-top: 1rem;
    border-radius: 6px;
    background-color: #9e92f9;
    padding: 8px;
    color: white;
    text-align: center;
    box-shadow: 0 4px 4px gray;
    cursor: pointer;
    
    &:hover {
        background-color: #b3aafa;
    }
`;

export const Card = ({card}) => {
   
    const dispatch = useDispatch()

    const open = () => {
        dispatch(fetchImage(card.en))
        dispatch(openModal())
    }

    return (
        <CardBody className={ card.learned? 'done' : '' }>
            <Word>{ card.show_translate ? `${card.en} - ${card.ru}` : card.en }</Word>
            <ul style={{ padding: '2rem 0', gap: '1rem' }}>
            
                <li><Span onClick={() => dispatch(addWordToLearned(card.id))}>{ card.repeat ? 'Изучил' : 'Знаю' }</Span></li>
                <li><Span onClick={open}>Подсказка</Span></li>
                
                {card.repeat === false ? 
                    <li><Span onClick={() => dispatch(addWordToRepetition(card.id))}>Повторить</Span></li>
                    : null}
            </ul>
        </CardBody>
    )
}
