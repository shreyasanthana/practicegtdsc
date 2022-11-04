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
  Stack,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <Container>
      <Box bg = "gray" borderWidth="1px" borderRadius="lg">
        <Text textColor = "White" fontSize="l" align="center">Create Account</Text>
        <Stack width="50%" allign="center" justifyContent="center" allignItems="center" justifyItems="center">
          <Input variant="flushed" placeholder="Username"/>
          <Input allign="center" placeholder="Password"/>
        </Stack>  
      </Box>
      <Box display="grid" bg = "gray" borderWidth="1px" borderRadius="lg" gridTemplateColumns="auto auto"> 
        <Button fontSize="lg" align="center">Already have an account?</Button>
        <Button>Log in</Button>
      </Box>
    </Container>
  );
}

export default App;
