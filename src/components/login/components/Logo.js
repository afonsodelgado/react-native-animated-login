import React, { PureComponent } from 'react';
import { Keyboard, Animated, Easing } from 'react-native';
import Styled from 'styled-components';
import theme from './../../../theme';

const TestLogo = Styled.View`
    background-color: ${theme.palette.primaryColor};
`;

const AnimatedTestLogo = Animated.createAnimatedComponent(TestLogo);

type Props = {
    height: number,
    width: number
}

class Logo extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);
        this.width = new Animated.Value(this.props.height);
        this.height = new Animated.Value(this.props.width);
    }

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.handleKeyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.handleKeyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener.remove();
    }

    animateSize = (event, increase) => {
        Animated.parallel([
            Animated.timing(this.width, {
                toValue: increase ? this.props.width : this.props.width / 2,
                duration: event.duration,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1)
            }),
            Animated.timing(this.height, {
                toValue: increase ? this.props.height : this.props.height / 2,
                duration: event.duration,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1)
            })
        ]).start();
    };

    handleKeyboardWillShow = (event) => {
        this.animateSize(event, false);
    };

    handleKeyboardWillHide = (event) => {
        this.animateSize(event, true);
    };

    render() {
        return (
            <AnimatedTestLogo style={{ height: this.height, width: this.width, borderRadius: this.width }}/>
        );
    }
}

export default Logo;
