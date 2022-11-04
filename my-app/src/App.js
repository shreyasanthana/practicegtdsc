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
  Container
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {  
  return (
    <ChakraProvider theme={theme}>
      <Container align="center">
        <Box borderWidth="1px" borderRadius="1g">
          <Text fintSize="1g" align="center">
            Create Account
          </Text>

          <Text fontSize="1g" align="center">
            Already have an account? <Link> Login </Link>
          </Text>

        </Box>

      </Container>
    </ChakraProvider>
  );
}

export default App;
