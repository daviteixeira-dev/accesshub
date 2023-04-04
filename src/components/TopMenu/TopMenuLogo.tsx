import { 
  Text,
  Flex,
  Image
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo-accesshub.png'

function Logo(props: any){
  return(
    <Flex
      {...props}
      alignItems='center'
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
        ml={['.5rem', '.5rem', '1rem', '1rem']}
        fontSize={['1rem', '1rem', '1.5rem,', '1.5rem']}
      >
        AccessHub
      </Text>
    </Flex>
  );
};

export default Logo;