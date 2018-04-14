// @flow
import React, { Component } from 'react';
import { FullScreenContainer, TextField } from './../common';
import { Button, Logo, TextFieldWrapper } from './components';


type Props = {}
type State = {
    imageHeight: number,
    imageWidth: number
}

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <FullScreenContainer justifyContent='space-around' behavior={'padding'}>
                <Logo height={150} width={150} />

                <TextFieldWrapper>
                    <TextField
                        placeholder='Login'
                        autoCorrect={false}
                        autoCaptalize={false}
                        marginBottom='16px'
                    />

                    <TextField
                        placeholder='Password'
                        autoCorrect={false}
                        autoCaptalize={false}
                        secureTextEntry
                        marginBottom='48px'
                    />

                    <Button/>
                </TextFieldWrapper>

            </FullScreenContainer>
        );
    }
}

export default Login;
