import styled from "styled-components";

import { Colors, breakpoints } from "../../styles";

export const SectionForm = styled.section`
    min-height: 60vh;
    margin: 32px auto;
    padding: 16px 24px;
    border-radius: 16px;
    background-color: ${Colors.white};
    box-shadow: 0 0 6px ${Colors.gray};

    h3 {
        font-size: 18px;
        text-align: center;
        text-shadow: 0px 1px 1px ${Colors.gray};
    }

    @media (min-width: ${breakpoints.desktop}) {
        height: 70vh;

        h3 {
            font-size: 24px;
        }
    }
`

export const Form = styled.form`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    label {
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        label {
            font-size: 18px;
        }
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;

    input {
        width: 100%;
        border-radius: 8px;
        border: 2px solid ${Colors.black};
        padding: 4px 8px;
        outline: none;
        transition: 0.3s ease;

        &.error {
            border: 2px solid ${Colors.red};
        }

        &.invisible {
            display: none;
        }

        &.visible {
            display: block;
        }

        &:focus {
            border-color: ${Colors.blue};
            border-radius: 16px;
            transition: 0.3s ease;
        }
    }

    @media (min-width: ${breakpoints.desktop}) {
        align-items: center;

        input {
            font-size: 18px;
            padding: 12px;
            width: 60%;
        }
    }
`

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;

    select {
        width: 100%;
        border-radius: 8px;
        border: 2px solid ${Colors.black};
        padding: 4px 8px;
        outline: none;
        transition: 0.3s ease;
        font-size: 12px;

        &:focus {
            border-color: ${Colors.blue};
            border-radius: 16px;
            transition: 0.3s ease;
        }

        
        option {
            font-weight: bold;
            font-size: 16px;
        }
    }

    @media (min-width: ${breakpoints.desktop}) {
        align-items: center;

        select {
            width: 60%;
            padding: 12px;
            font-size: 18px;
        }
    }
`

export const ButtonForm = styled.button`
    background-image: 
    linear-gradient(185deg, 
        ${Colors.lightBlue} 0,
        ${Colors.blue} 25%, 
        ${Colors.blue} 50%,
        ${Colors.darkBlue} 75%,
        ${Colors.darkBlue2} 100%);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${Colors.white};
    border-radius: 16px;
    border: 1px solid ${Colors.blue};
    padding: 6px 8px;
    margin-top: 8px;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 16px;
        text-align: center;
        width: 30%;
        padding: 8px;
    }
`

export const SubmitedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 80px;
    text-align: center;

    img {
        width: 80px;
        height: 80px;
    }

    p {
        font-size: 16px;
        font-weight: bold;
        color: ${Colors.green};
    }

    @media (min-width: ${breakpoints.desktop}) {
        img {
            width: 120px;
            height: 120px;
        }

        p {
            font-size: 20px;
            text-align: center;
        }
    }
`