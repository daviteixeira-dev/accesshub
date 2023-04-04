import { 
  Text,
  Flex,
  Link,
  Image
} from '@chakra-ui/react';

import logo from '../../assets/logo-accesshub.png'

function Logo(props: any, to = '/'){
  return(
    <Flex
      {...props}
      alignItems='center'
    >
      <Link href="/">
        <Image
          src={logo}
          boxSize='50px'
          borderRadius='full'
          alt='Logomarca do AccessHub.'
        />
      </Link>
      
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