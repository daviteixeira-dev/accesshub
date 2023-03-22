import { 
  Text,
  Flex 
} from '@chakra-ui/react';

function Logo(props: any){
  return(
    <Flex {...props} alignItems='center'>
      <Text fontSize='1.5rem' fontWeight='700' fontFamily='Inter'>
        AccessHub
      </Text>
    </Flex>
  );
};

export default Logo;