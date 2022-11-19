import {
  Flex,
  Text,
  Heading,
  Container
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
            cardTitle='Cabeçalhos' 
            pagLink='/componentes/cabecalhos' 
            altImage='Componente de Cabeçalhos'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Pular navegação' 
            pagLink='/componentes/pular-navegacao' 
            altImage='Componente de Pular Navegação'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Breadcrumb'
            pagLink='/componentes/breadcrumb' 
            altImage='Componente de Breadcrumb'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Tabela' 
            pagLink='/componentes/tabela' 
            altImage='Componente de Tabela'
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
            cardTitle='Formulario' 
            pagLink='/componentes/formulario' 
            altImage='Componente de Formulario'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='HTML Inicial' 
            pagLink='/componentes/html-estrutura-inicial' 
            altImage='Componente de Estrutura Inicial HTML'
            imgLink='https://via.placeholder.com/150'
          />
          <ComponentCardItem 
            cardTitle='Links' 
            pagLink='/componentes/links' 
            altImage='Componente de Links'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Imagens' 
            pagLink='/componentes/imagens' 
            altImage='Componente de Imagens'
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
            cardTitle='Vídeos' 
            pagLink='/componentes/videos' 
            altImage='Componente de Vídeo'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Áudios' 
            pagLink='/componentes/audios' 
            altImage='Componente de Áudio'
            imgLink='https://via.placeholder.com/150' 
          />
          <ComponentCardItem 
            cardTitle='Recomendações' 
            pagLink='/componentes/recomendacoes' 
            altImage='Componente de Recomendações'
            imgLink='https://via.placeholder.com/150' 
          />
        </Flex>

      </Container>
    </Flex>
  )
}

export default Components