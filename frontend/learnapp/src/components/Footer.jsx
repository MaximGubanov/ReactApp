import styled from 'styled-components'
import { Container } from './Container'


const FooterBlock = styled.footer`
`;

export const Footer = () => {
    return (
        <Container>
            <FooterBlock>
                <small>Created by MaximGubanov</small>
            </FooterBlock>
        </Container>
    )
}