import React from 'react'
import styled from 'styled-components'


const Span = styled.span`
    display: block;
    border-radius: 6px;
    background-color: blue;
    padding: 4px;
    color: white;
    text-align: center;
    box-shadow: 0 4px 4px rgba(11, 0, 17, 0.4);
    cursor: pointer;
    &:hover {
        background-color: rgb(34, 34, 255);
    }
`;

export const Button = ({title}) => {
    return (
        <Span>{title}</Span>
    )
}