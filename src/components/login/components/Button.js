// @flow
import React, { Component } from 'react';
import Styled from 'styled-components';
import { Keyboard, ActivityIndicator, Dimensions, Animated, LayoutAnimation } from 'react-native';
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

const AnimatedLabel = Animated.createAnimatedComponent(Label);
const AnimatedButton = Animated.createAnimatedComponent(Container);

type Props = {};

type State = {
    isLoggingIn: bool,
    buttonRadius: number,
    buttonWidth: number,
    labelOpacity: number
};

class Button extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            buttonWidth: windowWidth * 0.9,
            buttonRadius: 4,
            labelOpacity: 1
        };
    }

    animateLoggedIn = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        this.setState({ isLoggingIn: false });
    };

    handleLogin = () => {
        Keyboard.dismiss();

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        this.setState({ isLoggingIn: true, buttonWidth: 60, buttonRadius: 30, labelOpacity: 0 });
        setTimeout(() => {
            this.animateLoggedIn();
        }, 4000);
    };

    render() {
        return (
            <AnimatedButton
                onPress={!this.state.isLoggingIn ? this.handleLogin : null}
                style={{ width: this.state.buttonWidth, borderRadius: this.state.buttonWidth }}
                activeOpacity={!this.state.isLoggingIn ? 0.5 : 1}
            >
                <AnimatedLabel style={{ opacity: this.state.labelOpacity }}>Login</AnimatedLabel>
                <ActivityIndicator style={{ display: this.state.isLoggingIn ? 'flex' : 'none' }} />
            </AnimatedButton>
        );
    }
}

export default Button;
