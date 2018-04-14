// @flow
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styled from 'styled-components';
import { FullScreenContainer, TextField } from './../common';
import { Button, Logo } from './components';

type Props = {}
class Login extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <FullScreenContainer justifyContent='space-around'>
                <Logo />

                <TextField
                    placeholder='Login'
                    autoCorrect={false}
                    autoCaptalize={false}
                />
                <TextField
                    placeholder='Password'
                    autoCorrect={false}
                    autoCaptalize={false}
                    secureTextEntry
                />

                <Button/>
            </FullScreenContainer>
        );
    }
}

export default Login;
