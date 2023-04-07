import { 
    IconButton, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react';

import { FaMoon, FaSun } from 'react-icons/fa';

const ToogleColorMode = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();
    const bgButton = useColorModeValue('blue.400', 'gray.700');
    const bgButtonHover = useColorModeValue('blue.500', 'gray.600');
    
    return (
        <IconButton 
            w='3rem' 
            bg={bgButton}
            _hover={{bg: bgButtonHover }}
            onClick={() => toggleColorMode()} 
            aria-label='Alterar o contraste do site'
            icon={colorMode === 'dark' ? <FaSun  /> : <FaMoon />}
        />
    );
};

export default ToogleColorMode;