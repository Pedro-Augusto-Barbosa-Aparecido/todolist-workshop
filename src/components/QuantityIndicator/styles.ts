import styled from "styled-components";

export const Indicator = styled.span`
    background-color: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-200"]};

    line-height: 15px;
    font-size: .75rem;
    font-weight: bold;

    /* width: 25px; */
    height: 19px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;

    padding: 0.125rem 0.5rem;

`
