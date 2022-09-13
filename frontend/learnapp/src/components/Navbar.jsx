import styled from "styled-components"
import { Link } from "react-router-dom"


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const Navlist = styled.ul`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: #7D71D8;
    gap: 1rem;
    `;

const ListItem = styled.li`
    a {
        transition: all 0.3s linear 0.1s;
    }
    &:hover a {
        color: #c5bdff;
        transition: all 0.3s linear 0.1s;
    }
`;

export const Navbar = () => {
    return (
        <Nav>
            <Navlist>
                <ListItem>
                    <Link to='/'>Главная</Link>
                </ListItem>
                <ListItem>
                    <Link to='/about'>О проекте</Link>
                </ListItem>
            </Navlist>
        </Nav>
    )
}