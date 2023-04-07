import { 
  Text,
  Flex,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo-accesshub.png'

function Logo(props: any){

  const bgColor = useColorModeValue('blue.600', 'gray.800');

  return(
    <Flex
      {...props}
      alignItems='center'
      background={bgColor}
    >
      <NavLink to="/">
        <Image
          src={logo}
          boxSize='50px'
          borderRadius='full'
          alt='Logomarca do AccessHub.'
        />
      </NavLink>
      
      <Text
        fontWeight='700'
        fontFamily='Inter'
        background={bgColor}
        ml={['.5rem', '.5rem', '1rem', '1rem']}
        fontSize={['1rem', '1rem', '1.5rem,', '1.5rem']}
      >
        AccessHub
      </Text>
    </Flex>
  );
};

export default Logo;