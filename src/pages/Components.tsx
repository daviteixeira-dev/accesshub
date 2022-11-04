import {
  Flex,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'

import ComponentCardItem from '../components/ComponentCardItem/ComponentCardItem'

const Components = () => {
  return (
    <Flex bg='blackAlpha.50'>
      
      <MenuSideBar />
      
      <Container maxW='container.xl' height='100vh' overflowY='auto'>

        <Heading 
          as='h1' 
          my='1rem'
          fontSize='2rem' 
          color='gray.900' 
        >
          Componentes
        </Heading>

        <Text 
          my='2rem' 
          fontSize='1rem' 
          fontWeight='normal'
        >
          O AcessHub fornece um guia de implementação dos componentes para ajudá-lo a construir 
          seus projetos mais rapidamente. Aqui está uma visão geral das categorias de componentes:
        </Text>

        <Heading 
          my='2rem'
          fontSize='1.5rem' 
        >
          Exemplo de botões
        </Heading>

        <Flex justifyContent='space-evenly' mb='2rem'>
          <ComponentCardItem 
            cardTitle='Títulos' 
            pagLink='/titulos' 
            altImage='teste 1'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 2'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 3'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 4'
            imgLink='https://via.placeholder.com/150' 
          />
        </Flex>

        <Heading 
          my='2rem'
          fontSize='1.5rem' 
        >
          Exemplo de botões
        </Heading>
        
        <Flex justifyContent='space-evenly' mb='2rem'>
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 1'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 2'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 3'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Botão' 
            pagLink='/button' 
            altImage='teste 4'
            imgLink='https://via.placeholder.com/150' 
          />
        </Flex>

      </Container>
    </Flex>
  )
}

export default Components