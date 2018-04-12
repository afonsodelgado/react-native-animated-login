// @flow
import React, { type Node } from 'react';
import { View, TextInput } from 'react-native';
import Styled from 'styled-components';

type Props = {
    children? : Node,
    rest: any
}
const CustomTextField = ({ children, ...rest }: Props) => {
    return (
        <TextInput {... rest}>{children}</TextInput>
    );
};

export default CustomTextField;
