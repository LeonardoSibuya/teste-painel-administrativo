import styled from "styled-components"
import { Link } from "react-router-dom"

import { Colors } from "../../styles"

export const Nav = styled.nav`
    background-color: ${Colors.blue};
    color: ${Colors.white};
    padding: 24px 0;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0 0 6px ${Colors.black};
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
    margin-bottom: 16px;

    img {
        width: 24px;
    }

    h1 {
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-shadow: 0px 1px 4px ${Colors.black};
    }
`

export const ListLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

export const LinkItem = styled(Link)`
    font-size: 12px;
    color: ${Colors.white};
    text-decoration: none;
    text-shadow: 0px 1px 4px ${Colors.black};
`