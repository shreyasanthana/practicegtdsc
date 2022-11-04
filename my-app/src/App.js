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
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {Logo} from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Box bg='tomato' w='100%' p={4} color='white' borderWidth="1px" borderRadius="lg">
         <Text fontSize="lg" align="center">Create account</Text>
         <Text fontSize="lg" align="center">Already have account? <Link>Log in</Link></Text>
         <Input placeholder='Username'></Input>
         <Input placeholder='Password'></Input>
         <Button colorScheme='blue'>Confirm</Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
