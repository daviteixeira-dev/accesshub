import { 
    Flex, 
    Image, 
    Heading,
    useColorModeValue, 
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

interface ComponentCardItem {
    pagLink: string,
    imgLink: string,
    altImage: string,
    cardTitle: string
};

const ComponentCardItem = (props: ComponentCardItem) => {

    const cardBgColor = useColorModeValue('gray.100', 'gray.700');
    const cardBgColorHover = useColorModeValue('gray.200', 'gray.600');
    const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

    return (
        <Flex
            as='article'
            width='12rem'
            padding='1rem'
            bg={cardBgColor}
            borderRadius='.5rem'
            flexDirection='column'
            _hover={{ bg: cardBgColorHover }}
            transition='box-shadow 0.1s ease-out 0s'
            boxShadow='0 .5rem .5rem 0 rgba(0, 0, 0, 0.05)'
        >
            <NavLink to={props.pagLink}>

                <Image 
                    w='12rem' 
                    h='10rem' 
                    src='gibbresh.png' 
                    alt={props.altImage} 
                    fallbackSrc={props.imgLink} 
                />

                <Heading
                    as='h2'
                    mt='1rem'
                    display='flex'
                    fontSize='1.2rem'
                    color={headingsColor}
                >
                    {props.cardTitle}
                </Heading>
            </NavLink>
        </Flex>
    );
};

export default ComponentCardItem;