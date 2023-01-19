import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

export const SearchBar = styled.input.attrs({ type: 'submit', value: 'Submit'})`
    background-color: red;
    width:200px;
    height:50px;
`