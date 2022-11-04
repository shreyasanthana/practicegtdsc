import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Input,
  Button
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
      <Box borderWidth = "1px" borderRadius = "1g">
        <Text fontSize = "lg" align = "center">
          Create Account
        </Text>
        <Text fontSize = "lg" align = "center">
          Already Have An Account? <Link>Login</Link>
        </Text>
        <Input placeholder = "Username"/>
        <Input placeholder = "Password"/>
        <Button colorScheme='blue'>Login</Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
