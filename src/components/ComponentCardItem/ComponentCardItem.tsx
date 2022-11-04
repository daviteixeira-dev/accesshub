import { 
    Flex, 
    Image, 
    Heading, 
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

interface ComponentCardItem {
    pagLink: string,
    imgLink: string,
    altImage: string,
    cardTitle: string
}

const ComponentCardItem = (props: ComponentCardItem) => {
    return (
        <Flex
            as='article'
            bg='gray.100'
            width='12rem'
            padding='1rem'
            borderRadius='.5rem'
            flexDirection='column'
            _hover={{ bg: 'gray.200' }}
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
                    color='gray.800'
                    fontSize='1.2rem'
                >
                    {props.cardTitle}
                </Heading>
            </NavLink>
        </Flex>
    )
}

export default ComponentCardItem