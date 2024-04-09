import styled from "styled-components"
import { breakpoints } from "../../styles"

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50% auto;

    @media (min-width: ${breakpoints.tablet}) {
        margin: 20% auto;
    }
`