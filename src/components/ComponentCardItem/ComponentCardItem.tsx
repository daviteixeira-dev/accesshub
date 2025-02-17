import { 
    Flex, 
    Image, 
    Heading,
    useColorModeValue 
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

interface ComponentCardItem {
    pagLink: string,
    imgLink: string,
    altImage: string,
    cardTitle: string
};

const ComponentCardItem = (props: ComponentCardItem) => {

    const cardBgColor = useColorModeValue('blue.400', 'gray.700');
    const cardBgColorHover = useColorModeValue('blue.500', 'gray.600');
    const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

    return (
        <Flex
            p='0'
            mb='1rem'
            as='article'
            bg={cardBgColor}
            borderRadius='.3rem'
            flexDirection='column'
            _hover={{ bg: cardBgColorHover }}
            transition='box-shadow 0.1s ease-out 0s'
            width={['100%', '100%', '10.5rem', '15rem']}
            boxShadow='0 .5rem .5rem 0 rgba(0, 0, 0, 0.05)'
        >
            <NavLink to={props.pagLink}>
                
                <Flex
                    my={['1rem', '1rem', 0, 0]}
                    mx={['3.5rem', '3.5rem', 0, 0]}
                >
                    <Image 
                        h='10rem'
                        alt={props.altImage}
                        borderRadius={['.5rem', '.5rem', 0, 0]}
                        fallbackSrc={props.imgLink} 
                        w={['100%', '100%', '100%', '100%']} 
                    />
                </Flex>
                
                <Flex
                    p='.5rem'
                    m='.5rem' 
                    textAlign='center' 
                    justifyContent='center' 
                >
                    <Heading
                        as='h2'
                        display='flex'
                        fontSize='1rem'
                        textAlign='center'
                        fontFamily='Inter'
                        fontWeight='extrabold'
                        color={headingsColor}
                        justifyContent='center'
                    >
                        {props.cardTitle}
                    </Heading>
                </Flex>
                
            </NavLink>
        </Flex>
    );
};

export default ComponentCardItem;