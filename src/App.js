import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex bg="orange.100" h='72px' mb='2'> 
          <Box bg="red.400" p='9'> 
            box 1
          </Box>
          <Spacer>
          </Spacer>
          <Box bg='red.100' p='9'> 
         </Box>
         </Flex>
         <Flex h="xl" w="xl" margin='auto' bg="red.100" mb='2'>
         </Flex>
         <Flex h="xl" w="xl" margin='auto' bg="red.400" mb='2'>
         </Flex> 
         <Flex h="xl" w="xl" margin='auto' bg="red.100" mb='2'>
         </Flex>
         <Flex h="xl" w="xl" margin='auto' bg="red.400" mb='2'>
         </Flex> 
         
         
    </ChakraProvider>
  );
}

export default App;
