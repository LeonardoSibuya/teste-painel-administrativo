import styled from "styled-components";
import { Colors } from "../../styles";

export const Section = styled.section`
    margin: 32px auto;

    h2 {
        font-size: 18px;
        text-align: center;
        text-shadow: 0px 1px 1px ${Colors.gray};
    }
`

export const ListContainer = styled.div`
    background-color: ${Colors.white};
    margin-top: 24px;
    border-radius: 24px;
    padding: 16px 8px;
    border-radius: 16px;
    box-shadow: 0 0 6px ${Colors.gray};
    height: 80vh;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 0 auto;

    input {
            display: block;
            border-radius: 8px;
            border: 2px solid ${Colors.black};
            padding: 4px 8px;
            text-align: center;
        }

        button {
            background-color: ${Colors.cyan};
            padding: 6px;
            border-radius: 8px;
            border: none;
            transition: 0.1s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
                width: 16px;
                height: 16px;
                transition: 0.1s ease;
            }

            &:hover {
                background-color: ${Colors.darkCyan};
                transition: 0.1s ease;
            }

            &:active {
                img {
                    transform: scale(0.6);
                    transition: 0.1s ease;
                }
            }
        }
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 16px;
    margin-top: 16px;
    padding: 16px;
    max-height: 80%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background-color: ${Colors.lightGray};
        width: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${Colors.blue};
        width: 3px;
    }

    li {
        box-shadow: 0px 1px 6px ${Colors.gray};
        width: 100%;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 8px;

        h4 {
            font-size: 16px;
        }

        span {
            font-size: 14px;
            color: ${Colors.gray};
            font-style: italic;
        }
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;

    button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: bold;
    }
`