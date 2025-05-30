import styled, { css } from "styled-components";

const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    max-height: fit-content;
    width: 100vw;
    height: 100vh;
    padding: 10vw;
    margin-top: 10%;
    margin: 0 auto;
    border: 1px solid gray;
    border-radius: 8px;

`;

export const Box = styled.div`
    ${Container}
    background-color: whitesmoke;
`;

export const Title = styled.h1`
    font-size: 3rem;
`

export const Input = styled.input`
    margin: 10px 0;
    border: 1px solid black;
    justify-content:space-between;
    border-radius: 4px;
    flex-grow: 1;
    border: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
    width: 50%;
    text-align: center;
`

export const TextArea = styled.textarea`
    margin: 10px 0;
    border: 1px solid black;
    justify-content:space-between;
    border-radius: 4px;
    flex-grow: 1;
    border: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
    width: 100%;
    text-align: center;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 8px 10px;
    font-weight: bold;
    border: none;
    color: white;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
`

export const Ol = styled.ol`
    color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Pre = styled.pre`
    font-size: 1rem;
    color: #333333;
`

export const Hr = styled.hr`
    height: 2px;
    background-color: black;
    border: none;
`