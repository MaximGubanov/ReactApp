import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './Header'
import { SideBar } from './SideBar'
import { Footer } from './Footer'
import { Container } from './Container'


const Main = styled.main`
    margin-top: 6rem;
`;

const Section = styled.section`
    display: grid;
    grid-template-columns: auto 300px;
    padding: 2rem 0;
    /* @media (min-width: 768px) {
        grid-template-rows: 40px auto;
        grid-template-columns: repeat(4, 1fr);
    } */
`;

const Content = styled.div`
    padding-right: 2rem;
`;

const SideBarWrapper = styled.div`

`;

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Section>
                        <Content>
                            <Outlet />
                        </Content>
                        <SideBarWrapper>
                            <SideBar />
                        </SideBarWrapper>
                    </Section>
                </Container>
            </Main>
            <Footer />
        </>
    )
}

export { Layout }