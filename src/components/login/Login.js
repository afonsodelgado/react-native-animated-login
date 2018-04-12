// @flow
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styled from 'styled-components';
import CustomTextField from './../common/CustomTextField';

type Props = {}
class Login extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default Login;
