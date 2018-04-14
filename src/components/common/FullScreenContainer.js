import Styled from 'styled-components';

const FullScreenContainer = Styled.KeyboardAvoidingView`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
`;

export default FullScreenContainer;
