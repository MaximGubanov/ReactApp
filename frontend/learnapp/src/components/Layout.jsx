import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './Header'
import { Statebar } from './StateBar'
import { Footer } from './Footer'
import { Container } from './Container'
import { Modal } from '../components/Modal'


const Main = styled.main`
    margin-top: 6rem;
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    padding: 2rem 0;

    @media (max-width: 1024px) {
    }
`;

const Content = styled.div`
    padding: 2rem 0;
`;


const Layout = () => {

    const isVisible = useSelector(state => state.modal.isModalVisible)
    const promptImage = useSelector(state => state.modal.imageURL)

    return (
        <>
            <Modal isVisible={isVisible} content={promptImage} />
            <Header />
            <Main>
                <Container>
                    <Statebar />
                    <Section>
                        <Content>
                            <Outlet />
                        </Content>
                    </Section>
                </Container>
            </Main>
            <Footer />
        </>
    )
}

export { Layout }