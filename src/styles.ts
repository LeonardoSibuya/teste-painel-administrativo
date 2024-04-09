// Main Style

import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
    background: '#EEF0F4',
    green: '#18a045',
    lightBlue: '#B9E5FD',
    lightGray: '#C5C5C5',
    cyan: '#88FDB6',
    darkCyan: '#65bc87',
    yellow: '#e9ff1a',
    gray: '#878787',
    white: '#fff',
    black: '#000',
    blue: '#0CA4EB',
    red: '#FB2E54',

    darkBlue: '#006da0',
}

export const breakpoints = {
    desktop: '1440px',
    tablet: '1024px'
}

export const Container = styled.div`
    max-width: 740px;
    width: 80%;
    margin: 0 auto;

    /* @media (min-width: ${breakpoints.tablet}) {
        width: 95%;
    } */
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
