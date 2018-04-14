import Styled from 'styled-components';

const TextField = Styled.TextInput`
    width: ${props => props.width ? props.width : '90%'};
    height:  ${props => props.height ? props.height : '40px'};
    font-size: 18px;
    color: #444;
    background-color: #ddd;
    border-radius: 8px;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
    padding-horizontal: 8px;
`;

export default TextField;
