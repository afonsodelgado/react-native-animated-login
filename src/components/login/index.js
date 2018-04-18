// @flow
import React, { Component, Fragment } from 'react';
import { LayoutAnimation, Dimensions } from 'react-native';
import { FullScreenContainer, IconTextField } from './../common';
import { Button, Logo, TextFieldWrapper } from './components';
import theme from './../../theme';

const windowHeight = Dimensions.get('window').height;

type Props = {};
type State = {
    dataUsername: string,
    dataPassword: string,
    isLoggedIn: boolean,
    overlayHeight: number,
    overlayRadius: number
};

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            dataUsername: '',
            dataPassword: '',
            isLoggedIn: false,
            overlayHeight: 0,
            overlayRadius: windowHeight / 2
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

    handleLoginPress = () => {
        setTimeout(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({ overlayHeight: windowHeight, overlayRadius: 0 });
        }, 2000);
    };

    render() {
        return (
            <Fragment>
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

                        <Button onPress={this.handleLoginPress} />
                    </TextFieldWrapper>

                </FullScreenContainer>

                <FullScreenContainer
                    backgroundColor='#ddd'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: this.state.overlayHeight,
                        borderRadius: this.state.overlayRadius
                    }}/>
            </Fragment>
        );
    }
}

export default Login;
