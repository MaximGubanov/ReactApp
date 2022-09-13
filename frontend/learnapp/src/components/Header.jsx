import React from 'react'
import styled from 'styled-components'

import { Container } from './Container'
import { Navbar } from './Navbar'
import { SearchInput } from './Input'


const HeaderEl = styled.header`
    height: 4rem;
    box-shadow: 0px 5px 10px rgba(9, 11, 30, 0.5);
    background-color: #090B1E;
    position: fixed;
    top: 0;
    width: 100%;
`;

const WrapperNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const SearcDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const Header = () => {

    return (
        <HeaderEl>
            <Container>
                <WrapperNav>
                    <Navbar />
                    <SearcDiv>
                        <SearchInput />
                    </SearcDiv>
                </WrapperNav>
            </Container>
        </HeaderEl>
    )
}