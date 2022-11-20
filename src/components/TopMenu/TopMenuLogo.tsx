import { 
  Text,
  Flex 
} from '@chakra-ui/react';

function Logo(props: any){
  return(
    <Flex {...props} alignItems='center'>
      <Text fontSize='lg' fontWeight='bold'>
        AccessHub
      </Text>
    </Flex>
  );
};

export default Logo;