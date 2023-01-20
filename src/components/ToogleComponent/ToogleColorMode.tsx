import { Button, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToogleColorMode = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Button onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? <FaSun  color='orange.200'/> : <FaMoon color='blue.700'/>}
        </ Button>
    );
};

export default ToogleColorMode;