import React from 'react'
import styled from 'styled-components'


const Text = styled.span`
    font-size: 50px;
`;

export const Loader = () => {
    return (
        <>
            <Text>Loading...</Text>
        </>
    )
}