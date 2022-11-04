import {
  Flex,
  Text,
  Link,
  Icon,
  Button,
  Heading
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { FaGithub, FaArrowRight } from 'react-icons/fa'

const HomePage = () => {
  return (
    <Flex
      width='100%'
      bg='gray.100'
      textAlign='center'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      height={['100%', '100%', '100vh', '100vh']}
    >
      <Flex
        padding='1rem'
        flexDirection='column'
        width={['100%', '100%', '50%', '50%']}
      >
        <Heading
          as='h1'
          color='gray.900'
          fontSize='2.5rem'
          textTransform='uppercase'
        >
          Desenvolva e deixe o seu site mais <Text as='span' color='blue.400'>acessível</Text>
        </Heading>
        <Text
          color='gray.800'
          marginTop='1rem'
          fontSize='1.1rem'
        >
          AcessHub é um guia sobre funcionalidades de acessibilidade para desenvolvedores Web,
          possibilitando a apresentação de padrões e materiais de suporte para ajudar na
          construção de páginas Web acessíveis.
        </Text>
      </Flex>

      <Flex
        display='flex'
        marginTop='2rem'
        justifyContent='space-evenly'
        width={['100%', '100%', '50%', '40%']}
        flexDirection={['column', 'column', 'row', 'row']}
      >

        <NavLink to='/introducao'>
          <Button
            bg='blue.500'
            fontSize='1.2rem'
            fontWeight='bold'
            color='whiteAlpha.900'
            mb={['1rem', '1rem', '0', '0']}
            _hover={{ backgroundColor: 'blue.400' }}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
            padding={['1rem', '1rem', '1rem', '1.5rem 2rem']}
          >
            Introdução
            <Icon as={FaArrowRight} ml='.5rem'/>
          </Button>
        </NavLink>

        <Link
          isExternal
          _hover={{ textDecor: 'none' }}
          href='https://github.com/daviteixeira-btm/acesshub'
        >
          <Button
            bg='gray.300'
            color='gray.800'
            fontSize='1.2rem'
            fontWeight='bold'
            mb={['1rem', '1rem', '0', '0']}
            _hover={{ backgroundColor: 'gray.400' }}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '10rem']}
            padding={['1rem', '1rem', '1rem', '1.5rem 2rem']}
          >
            <Icon as={FaGithub} mr='.5rem' />
            GitHub
          </Button>
        </Link>

      </Flex>
    </Flex>
  )
}

export default HomePage