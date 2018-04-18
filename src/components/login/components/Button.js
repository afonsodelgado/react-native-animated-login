// @flow
import React, { Component } from 'react';
import Styled from 'styled-components';
import { Keyboard, ActivityIndicator, Dimensions, Animated, LayoutAnimation } from 'react-native';
import theme from './../../../theme';

let hideLabelTimeout;

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

type Props = {
    onPress: Function
};

type State = {
    isLoggingIn: bool,
    buttonRadius: number,
    buttonWidth: number,
    labelOpacity: number,
    isLabelVisible: boolean
};

class Button extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            buttonWidth: windowWidth * 0.9,
            buttonRadius: 4,
            labelOpacity: 1,
            isLabelVisible: true
        };
    }

    componentWillUnmount() {
        clearTimeout(hideLabelTimeout);
    }

    hideLabel = () => {
        this.setState({ isLabelVisible: false });
    };

    handleLogin = () => {
        Keyboard.dismiss();
        
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        this.setState({ isLoggingIn: true, buttonWidth: 60, buttonRadius: 30, labelOpacity: 0 });
        hideLabelTimeout = setTimeout(() => {
            this.hideLabel();
        }, 150);
    };

    render() {
        return (
            <AnimatedButton
                onPress={!this.state.isLoggingIn ? this.handleLogin : null}
                style={{ width: this.state.buttonWidth, borderRadius: this.state.buttonWidth }}
                activeOpacity={!this.state.isLoggingIn ? 0.5 : 1}
            >
                {this.state.isLabelVisible ? <AnimatedLabel style={{ opacity: this.state.labelOpacity }}>Login</AnimatedLabel> : null}
                <ActivityIndicator style={{ display: this.state.isLoggingIn ? 'flex' : 'none' }} color={theme.palette.backgroundColor}/>
            </AnimatedButton>
        );
    }
}

export default Button;
