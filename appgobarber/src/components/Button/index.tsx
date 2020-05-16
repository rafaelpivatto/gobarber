import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtontText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtontText>{children}</ButtontText>
    </Container>
  );
};

export default Button;
