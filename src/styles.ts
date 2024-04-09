// Main Style

import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
    background: '#EEF0F4',
    green: '#18a045',
    gray: '#878787',
    lightGray: '#C5C5C5',
    cyan: '#88FDB6',
    darkCyan: '#65bc87',
    white: '#fff',
    black: '#000',
    red: '#FB2E54',
    lightBlue: '#82c2e5',
    blue: '#0CA4EB',
    darkBlue: '#007ada',
    darkBlue2: '#005da5',
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

export const Container = styled.div`
    max-width: 740px;
    width: 80%;
    margin: 0 auto;

    @media (min-width: ${breakpoints.desktop}) {
        width: 100%;
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 90%;
    }
`

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: ${Colors.background};
    }
`
export default GlobalStyle
