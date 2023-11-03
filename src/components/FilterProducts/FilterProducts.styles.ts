import styled from "styled-components";

interface FilterItemProps {
    selected: boolean
}

export const Filters = styled.ul`
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    padding-left: 5rem;
    position: relative;
`

export const Filter = styled.li<FilterItemProps>`
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    font-family: 'Fira Sans';
    font-weight: ${props => props.selected ? 500 : 400};
    border-bottom: ${props => props.selected ? '4px solid  #6734ff' : ''};
    font-size: 15px;
    color: black;
`