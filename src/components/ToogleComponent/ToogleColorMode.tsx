import { 
    Button, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react';

import { FaMoon, FaSun } from 'react-icons/fa';

const ToogleColorMode = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();

    const bgButton = useColorModeValue('blue.400', 'gray.700');
    
    return (
        <Button onClick={() => toggleColorMode()} bg={bgButton}>
            {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </ Button>
    );
};

export default ToogleColorMode;