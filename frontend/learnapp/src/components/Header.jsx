import React from 'react'
import styled from 'styled-components'

import { Container } from './Container'
import { Navbar } from './Navbar'
import { SearchInput } from './Input'


const HeaderEl = styled.header`
    box-shadow: 0px 5px 10px rgba(9, 11, 30, 0.5);
    background-color: #090B1E;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: .5rem 0;
`;

const WrapperNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
`;


export const Header = () => {

    return (
        <HeaderEl>
            <Container>
                <WrapperNav>
                    <Navbar />
                    <SearchInput />
                </WrapperNav>
            </Container>
        </HeaderEl>
    )
}