import styled from 'styled-components';


export const ButtonContainer = styled.button<{ disabled?: boolean}>`

    opacity: ${props => (props.disabled ? 0.5 : 1)}; 
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`