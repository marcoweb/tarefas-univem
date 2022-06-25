import styled from "styled-components";

const InputPannel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75vw;
    margin: auto;
`

const InputText = styled.input`
    flex-grow: 4;
    border-radius: 10px;
    font-size: larger;
`

const InputButton = styled.button`
    flex-grow: 1;
    font-weight: bolder;
    border-radius: 10px;
    font-size: larger;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
`

export {InputPannel, InputText, InputButton}