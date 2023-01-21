import { 
    Button, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react';

import { FaMoon, FaSun } from 'react-icons/fa';

const ToogleColorMode = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();

    const bgButton = useColorModeValue('blue.400', 'gray.700');
    const bgButtonHover = useColorModeValue('blue.500', 'gray.600');
    
    return (
        <Button 
            w='3rem' 
            bg={bgButton} 
            _hover={{bg: bgButtonHover }}
            onClick={() => toggleColorMode()} 
        >
            {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </ Button>
    );
};

export default ToogleColorMode;