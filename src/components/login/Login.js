// @flow
import React, { Component } from 'react';
import { FullScreenContainer, IconTextField } from './../common';
import { Button, Logo, TextFieldWrapper } from './components';
import theme from './../../theme';


type Props = {}
type State = {
    dataUsername: string,
    dataPassword: string
}

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            dataUsername: '',
            dataPassword: ''
        };
    }

    handleFieldChange = (value: string, field: string) => {
        let newState = this.state;
        newState[field] = value;
        this.setState(newState);
    };

    handleFieldErase = (field: string) => {
        let newState = this.state;
        newState[field] = '';
        this.setState(newState);
    };

    render() {
        return (
            <FullScreenContainer justifyContent='space-around' behavior={'padding'}>
                <Logo height={150} width={150} />

                <TextFieldWrapper>
                    <IconTextField
                        id='dataUsername'
                        iconName='md-person' iconColor={theme.palette.primaryColor}
                        placeholder='Login'
                        autoCorrect={false}
                        autoCapitalize='none'
                        selectionColor={theme.palette.primaryColor}
                        marginBottom='16px'
                        value={this.state.dataUsername}
                        onChangeText={(value) => this.handleFieldChange(value, 'dataUsername')}
                        onEraseField={this.handleFieldErase}
                    />

                    <IconTextField
                        id='dataPassword'
                        iconName='md-lock' iconColor={theme.palette.primaryColor}
                        placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize='none'
                        selectionColor={theme.palette.primaryColor}
                        secureTextEntry
                        marginBottom='48px'
                        value={this.state.dataPassword}
                        onChangeText={(value) => this.handleFieldChange(value, 'dataPassword')}
                        onEraseField={this.handleFieldErase}
                    />

                    <Button/>
                </TextFieldWrapper>

            </FullScreenContainer>
        );
    }
}

export default Login;
