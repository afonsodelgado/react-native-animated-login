// @flow
import React, { Component } from 'react';
import Styled from 'styled-components';
import { View, Text, ActivityIndicator, Dimensions, Animated, LayoutAnimation } from 'react-native';
import theme from './../../../theme';

const windowWidth = Dimensions.get('window').width;

const Container = Styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${windowWidth * 0.9};
    height: 60;
    background-color: ${theme.palette.primaryColor};
`;

const Label = Styled.Text`
    font-family: 'Raleway-Regular'
    color: ${theme.palette.backgroundColor};
    font-size: 20px;
`;

const AnimatedButton = Animated.createAnimatedComponent(Container);

type Props = {
    animatedButtonWidth: number,
    animatedButtonBorderRadius: number
};

type State = {
    isLoggingIn: bool,
    animatedButtonRadius: number,
    animatedButtonWidth: number
};

class Button extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            animatedButtonWidth: windowWidth * 0.9,
            animatedButtonRadius: 4
        };
    }

    animateLoggedIn = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        this.setState({ isLoggingIn: false });
    };

    handleLogin = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        this.setState({ isLoggingIn: true, animatedButtonWidth: 60, animatedButtonRadius: 30 });
        setTimeout(() => {
            this.animateLoggedIn();
        }, 4000);
    };

    render() {
        return (
            <AnimatedButton
                onPress={!this.state.isLoggingIn ? this.handleLogin : null}
                style={{ width: this.state.animatedButtonWidth, borderRadius: this.state.animatedButtonWidth }}
                activeOpacity={!this.state.isLoggingIn ? 0.5 : 1}
            >
                {!this.state.isLoggingIn ? <Label>Login</Label> : <ActivityIndicator />}
            </AnimatedButton>
        );
    }
}

export default Button;
