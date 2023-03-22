import {
  Flex,
  Text,
  Link,
  Icon,
  Card,
  Stack,
  Avatar,
  Heading,
  CardBody,
  useColorModeValue
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  
  const bodyColor = useColorModeValue('gray.100', 'gray.800');
  const textSpanBlue = useColorModeValue('blue.600', 'blue.400');
  const bgBottonGithub = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.800');
  const cardsColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const bodySection2Color = useColorModeValue('gray.200', 'gray.700');
  const bgBottonGithubHover = useColorModeValue('gray.300', 'gray.500');
  const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const bgBottonIntroduction = useColorModeValue('blue.600', 'blue.400');
  const bgBottonIntroductionHover = useColorModeValue('blue.400', 'blue.600');

  const cardItem = [
    {
      avatarIMG: 'https://via.placeholder.com/50',
      cardTitle: 'Padrões de Referências',
      cardText: 'Desenvolver material de referência para o suporte na implementação das funcionalidades de acessibilidade Web por desenvolvedores.'
    },
    {
      avatarIMG: 'https://via.placeholder.com/50',
      cardTitle: 'Conjunto de Recomendações',
      cardText: 'Sugerir um conjunto de recomendações para apoiar a implementação das funcionalidades de acessibilidade Web.'
    },
    {
      avatarIMG: 'https://via.placeholder.com/50',
      cardTitle: 'Exemplos Open Source',
      cardText: 'Disponibilizar exemplos de código open source para apoiar a implementação das funcionalidades de acessibilidade Web.'
    }
  ]

  return (
    <Flex
      width='100%'
      height='100%'
      bg={bodyColor}
      textAlign='center'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <TopMenu />

      <Flex
        mb='1rem'
        height='100%'
        padding='1rem'
        flexDirection='column'
        pt={['6rem', 0, 0, 0 ]}
        mt={[0, 0, '6rem', '6rem']}
        width={['100%', '100%', '60%', '60%']}
      >
        <Heading
          as='h1'
          fontWeight='700'
          fontFamily='Inter'
          color={headingsColor}
          textTransform='uppercase'
          fontSize={['2.5rem', '2.5rem', '3rem', '3.5rem']}
        >
          Desenvolva e deixe o seu site mais <Text as='span' color={textSpanBlue}>acessível</Text>
        </Heading>

        <Heading
          as='h2'
          marginTop='1rem'
          fontWeight='400'
          fontSize='1.3rem'
          fontFamily='Inter'
          color={textColor}
        >
          AccessHub é um guia sobre funcionalidades de acessibilidade para desenvolvedores Web,
          possibilitando a apresentação de padrões e materiais de suporte para ajudar na
          construção de páginas Web acessíveis.
        </Heading>

        <Flex 
          mt='1rem' 
          bg='gray.500'
          padding='.5rem' 
          alignItems='center' 
          borderRadius='.5rem'
          justifyContent='center'
          _hover={{ bg: 'gray.400', cursor: 'pointer' }} 
        >
          <Flex 
            as='span' 
            mr='.5rem' 
            width='1rem' 
            height='1rem' 
            rounded='full' 
            bg='yellow.500'
            border='1px solid gray' 
          ></Flex>
          
          <Text 
            fontSize='1rem' 
            color='whiteAlpha.900'
          >
            Este site está em construção
          </Text>
        </Flex>
      </Flex>

      <Flex
        mb='2rem'
        display='flex'
        alignItems='center'        
        justifyContent='space-evenly'
        width={['100%', '100%', '50%', '40%']}
        flexDirection={['column', 'column', 'row', 'row']}
      >

        <NavLink to='/introducao'>
          <Flex
            fontSize='1.2rem'
            fontWeight='700'
            fontFamily='Inter'
            alignItems='center'
            borderRadius='.5rem'
            color='whiteAlpha.900'
            bg={bgBottonIntroduction}
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
            padding={['1rem', '1rem', '1rem', '1.5rem 2rem']}
            _hover={{ backgroundColor: bgBottonIntroductionHover }}
          >
            Introdução
            <Icon as={FaArrowRight} ml='.5rem'/>
          </Flex>
        </NavLink>

        <Link
          isExternal
          _hover={{ textDecor: 'none' }}
          href='https://github.com/daviteixeira-btm/acesshub'
        >
          <Flex
            color={textColor}
            fontSize='1.2rem'
            fontWeight='700'
            fontFamily='Inter'
            alignItems='center'
            bg={bgBottonGithub}
            borderRadius='.5rem'
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
            _hover={{ backgroundColor: bgBottonGithubHover }}
            padding={['1rem', '1rem', '1rem', '1.5rem 2rem']}
          >
            <Icon as={FaGithub} mr='.5rem' />
            GitHub
          </Flex>
        </Link>

      </Flex>

      <Flex
        mt='2rem'
        width='100%'
        height='100%'
        padding='1rem'
        alignItems='center'
        flexDirection='column'
        bg={bodySection2Color}
      >
        <Flex 
          width={['100%', '100%', '60%', '60%']}
        >
          <Heading
            as='h3'
            fontWeight='500'
            fontFamily='Inter'
            color={headingsColor}
            fontSize={['1.5rem', '1.5rem', '1.8rem', '1.8rem']}
          >
            Nosso objetivo, é fornecer exemplos de implementações, 
            auxiliando no processo de programação 
            de <Text as='span' color={textSpanBlue}>funcionalidades</Text> de acessibilidade.
          </Heading>
        </Flex>

        <Flex 
          w='100%' 
          mt='1rem' 
          justifyContent='space-evenly'
          flexDirection={['column', 'column', 'row', 'row']}
        >

          {
            cardItem.map((item, index) => (
              <Card maxW='sm' mt='1rem' bg={cardsColor} key={index}> 
                <CardBody>
                  <Avatar name='Card Info' src={item.avatarIMG} />
                  <Stack mt='6' spacing='3'>
                    <Heading as='h4' fontFamily='Inter' fontWeight='700' size='md'>
                      {item.cardTitle}
                    </Heading>
                    <Text fontFamily='Inter' fontWeight='400' size='md'>
                      {item.cardText}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))
          }
          
        </Flex>
      
      </Flex>

      <Footer />
    </Flex>
  );
};

export default HomePage;