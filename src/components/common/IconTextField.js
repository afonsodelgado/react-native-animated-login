// @flow
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './../../theme';

const CustomTextInput = Styled.TextInput`
    width: ${props => props.width ? props.width : '85%'};
    height:  ${props => props.height ? props.height : '40px'};
    display: flex;
    align-self: stretch;
    font-size: 18px;
    color: #444;
    border-radius: 8px;
    padding-left: 16px;
`;

const Container = Styled.View`
    width: 90%
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
    border-bottom-color: ${theme.palette.primaryColor};
    border-bottom-width: 0.5px;
`;

const EraseIconPlaceholder = Styled.View`
    width: 18;
    height: 18;
`;

type Props = {
    id: string,
    iconName: string,
    iconColor: string,
    placeholder: string,
    value: string,
    marginBottom: string,
    onEraseField: Function,
};

class IconTextField extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleErasePress = () => {
        this.props.onEraseField(this.props.id);
    };

    render() {
        const { marginBottom, iconName, iconColor, ... textFieldProps } = this.props;
        return (
            <Container marginBottom={marginBottom}>
                <Icon
                    name={iconName}
                    size={32}
                    color={iconColor}
                />

                <CustomTextInput {... textFieldProps}/>
            
                {textFieldProps.value.length > 0 ?
                    <TouchableOpacity onPress={this.handleErasePress}>
                        <Icon
                            style={{ alignSelf: 'flex-end' }}
                            name={'ios-close-circle'}
                            size={24}
                            color={'#ddd'}
                        />
                    </TouchableOpacity> : <EraseIconPlaceholder />}
            </Container>
        );
    }
}

export default IconTextField;
