import { 
    Flex,
    Link,
    Text,
    Image,
    ListItem,
    UnorderedList,
    useColorModeValue
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo-accesshub.png';

const Footer = () => {

  const footerColor = useColorModeValue('blue.600', 'gray.800');

  return (
    <Flex
        h='auto'
        w='100%'
        as='footer'
        padding='1rem'
        bg={footerColor}
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='0px 4px 12px 4px rgba(0, 0, 0, 0.05)'
    >
        <Flex
            p='1rem'
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
        >

            <Flex
                p='.5rem'
                mb='1rem'
                flexDirection='row'
                alignItems='center' 
                justifyContent='start'
            >
                <NavLink to="/">
                    <Image
                        src={logo}
                        boxSize='50px'
                        borderRadius='full'
                        alt='Logomarca do AccessHub no footer.'
                    />
                </NavLink>

                <Text
                    ml='1rem'
                    fontWeight='600' 
                    fontSize='1.3rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    AccessHub
                </Text>
            </Flex>

            <UnorderedList
                mb='1rem'
                textAlign='start'
                style={{listStyle: 'none'}}
            >
                
                <ListItem
                    fontWeight='600' 
                    fontSize='1.1rem'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    Documentação
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <NavLink to='/componentes'>
                        Componentes
                    </NavLink>
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <NavLink to='/credits'>
                        Créditos
                    </NavLink>
                </ListItem>
            </UnorderedList>

            <UnorderedList
                mb='1rem'
                textAlign='start'
                style={{listStyle: 'none'}}
            >
                
                <ListItem
                    fontWeight='600' 
                    fontSize='1.1rem'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    Comunidade
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <Link 
                        isExternal
                        _hover={{ textDecoration: 'none' }}
                        href='https://github.com/daviteixeira-btm/acesshub'
                    >
                        GitHub
                    </Link>
                </ListItem>
            </UnorderedList>

        </Flex>
        
        <Flex
            p='1rem'
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'column', 'row']}
        >
            <Flex></Flex>

            <Link
                mb='1rem'
                isExternal
                lineHeight='3rem'
                fontSize='1rem'
                textAlign='center'
                bg='blackAlpha.900' 
                padding='.3rem 1rem'
                borderRadius='.5rem'
                color='whiteAlpha.900'
                href='https://vercel.com/'
                _hover={{ textDecoration: 'none' }}
            >
                Deployed by ▲ Vercel 
            </Link>

            <Flex
                p='1rem'
                mb='1rem'
                alignItems='center'
            >
                <Text
                    fontWeight='400' 
                    fontSize='1.1rem'
                    textAlign='start'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    © 2023 Davi Teixeira. This site, library and examples 
                    are licensed under <Link _hover={{ textDecoration: 'none' }} isExternal fontWeight='bold' href='https://choosealicense.com/licenses/mit/'>
                        MIT
                    </Link>.
                </Text>
            </Flex>
        </Flex>

    </Flex>
  );
};

export default Footer;