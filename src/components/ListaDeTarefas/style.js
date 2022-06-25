import styled from "styled-components";

const ListPannel = styled.ul`
    display: flex;
    flex-direction: column;
    width: 75vw;
    margin: 10px auto;
    background-color: #F0F0F0;
    border-radius: 10px;
    list-style: none;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: row-reverse;
    font-weight: bolder;
    padding: 5px;
    & span {
        margin-right: auto;
    }
`

const ListButton = styled.button`
    margin-left: 5px;
    font-weight: bolder;
    border-radius: 10px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
`

export { ListPannel, ListItem, ListButton }