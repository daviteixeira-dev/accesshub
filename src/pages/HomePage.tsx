import {
  Flex,
  Text,
  Link,
  Icon,
  Card,
  Stack,
  Avatar,
  Heading,
  CardBody
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  
  return (
    <Flex
      width='100%'
      bg='gray.100'
      textAlign='center'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      height={['100%', '100%', '100%', '100%']}
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
          color='gray.900'
          textTransform='uppercase'
          fontSize={['2.5rem', '2.5rem', '3rem', '3.5rem']}
        >
          Desenvolva e deixe o seu site mais <Text as='span' color='blue.500'>acessível</Text>
        </Heading>
        <Text
          color='gray.800'
          marginTop='1rem'
          fontSize='1.5rem'
        >
          AccessHub é um guia sobre funcionalidades de acessibilidade para desenvolvedores Web,
          possibilitando a apresentação de padrões e materiais de suporte para ajudar na
          construção de páginas Web acessíveis.
        </Text>

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
          
          <Heading 
            fontSize='1.2rem' 
            color='whiteAlpha.900'
          >
            Este site está em construção
          </Heading>
        </Flex>
      </Flex>

      <Flex
        mb='1rem'
        display='flex'
        alignItems='center'        
        justifyContent='space-evenly'
        width={['100%', '100%', '50%', '40%']}
        flexDirection={['column', 'column', 'row', 'row']}
      >

        <NavLink to='/introducao'>
          <Flex
            bg='blue.600'
            fontSize='1.2rem'
            fontWeight='bold'
            alignItems='center'
            borderRadius='.5rem'
            color='whiteAlpha.900'
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            _hover={{ backgroundColor: 'blue.400' }}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
            padding={['1rem', '1rem', '1rem', '1.5rem 2rem']}
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
            bg='gray.300'
            color='gray.800'
            fontSize='1.2rem'
            fontWeight='bold'
            alignItems='center'
            borderRadius='.5rem'
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            _hover={{ backgroundColor: 'gray.400' }}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
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
        bg='gray.200'
        height='100%'
        padding='1rem'
        alignItems='center'
        flexDirection='column'
      >
        <Flex 
          width={['100%', '100%', '60%', '60%']}
        >
          <Heading
            as='h1'
            color='gray.900'
            fontSize={['1.5rem', '1.5rem', '1.8rem', '1.8rem']}
          >
            Nosso objetivo, é fornecer exemplos de implementações, 
            auxiliando no processo de programação de 
            <Text as='span' color='blue.500'>funcionalidades</Text> de acessibilidade 
          </Heading>
        </Flex>

        <Flex 
          w='100%' 
          mt='1rem' 
          justifyContent='space-evenly'
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Card maxW='sm' mt='1rem'>
            <CardBody>
              <Avatar name='Segun Adebayo' src='https://via.placeholder.com/50' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Padrões de Referências</Heading>
                <Text>
                  Desenvolver material de referência para o suporte na implementação das 
                  funcionalidades de acessibilidade Web por desenvolvedores.
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW='sm' mt='1rem'>
            <CardBody>
              <Avatar name='Segun Adebayo' src='https://via.placeholder.com/50' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Conjunto de Recomendações</Heading>
                <Text>
                  Sugerir um conjunto de recomendações para apoiar a implementação das 
                  funcionalidades de acessibilidade Web.
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW='sm' mt='1rem'>
            <CardBody>
              <Avatar name='Segun Adebayo' src='https://via.placeholder.com/50' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Exemplos Open Source</Heading>
                <Text>
                  Disponibilizar exemplos de código open source para apoiar a 
                  implementação das funcionalidades de acessibilidade Web.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          
        </Flex>
      
      </Flex>

      <Footer />
    </Flex>
  );
};

export default HomePage;