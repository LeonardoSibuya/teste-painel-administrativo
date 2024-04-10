import styled from "styled-components";
import { Colors, breakpoints } from "../../styles";

export const Section = styled.section`
    margin: 32px auto;

    h2 {
        font-size: 18px;
        text-align: center;
        text-shadow: 0px 1px 1px ${Colors.gray};

        @media (min-width: ${breakpoints.desktop}) {
            font-size: 24px;
        }
    }
`

export const ListContainer = styled.div`
    background-color: ${Colors.white};
    margin-top: 24px;
    border-radius: 24px;
    padding: 16px 8px;
    border-radius: 16px;
    box-shadow: 0 0 6px ${Colors.gray};
    height: 60vh;
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
            font-size: 12px;
            width: 40%;
            outline: none;

            &:focus {
                border-color: ${Colors.blue};
            }
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
            font-size: 12px;
            cursor: pointer;

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
                transform: scale(0.6);
                transition: 0.1s ease;

                img {
                    transform: scale(0.6);
                    transition: 0.1s ease;
                }
            }
        }

        @media (min-width: ${breakpoints.desktop}) {
            input {
                font-size: 16px;
                padding: 8px;
            }

            button {
                font-size: 18px;

                img {
                    width: 22px;
                    height: 22px;
                }

                &:active {
                    transform: scale(0.9);
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
    max-height: 70%;
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

        h4,
        span {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        h4 {
            font-size: 16px;
            max-width: 100%;
        }

        span {
            font-size: 12px;
            color: ${Colors.gray};
            font-style: italic;
            max-width: 100%;
        }

        img {
            width: 14px;
        }

        @media (min-width: ${breakpoints.desktop}) {
            h4 {
                font-size: 18px;
            }

            span {
                font-size: 16px;
            }
        }
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 32px;

    button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        @media (min-width: ${breakpoints.desktop}) {
            font-size: 18px;
            transition: 0.1s ease;

            &:active {
                transform: scale(0.9);
                transition: 0.1s ease;
            }
        }
    }
`