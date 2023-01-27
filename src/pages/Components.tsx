import {
  Flex,
  Text,
  Hide,
  Show,
  Heading,
  Container,
  useColorModeValue
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import ComponentCardItem from '../components/ComponentCardItem/ComponentCardItem';

const Components = () => {

  const bodyColor = useColorModeValue('blackAlpha.50', 'gray.800');
  const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

  return (
    <Flex bg={bodyColor}>
      
      <Hide below='md'>
        <MenuSideBar />
      </Hide>
      
      <Container 
        p='0'
        height='100vh' 
        overflowY='auto' 
        maxW='container.xl' 
      >

        <Show below='md'>
          <MenuMobile marginBottom='0'/>
        </Show>

        <Flex flexDirection='column' p='1rem'>
          
          <Heading 
            as='h1' 
            my='1rem'
            fontSize='2rem' 
            color={headingsColor} 
          >
            Componentes
          </Heading>

          <Text 
            my='1rem' 
            fontSize='1rem' 
            fontWeight='normal'
          >
            O AccessHub fornece um guia de implementação dos componentes para ajudá-lo a construir 
            seus projetos mais rapidamente. Aqui está uma visão geral das categorias de componentes:
          </Text>

          <Heading 
            my='1rem'
            fontSize='1.5rem' 
          >
            Exemplos 01
          </Heading>

          <Flex 
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']} 
          >
            <ComponentCardItem 
              cardTitle='Cabeçalhos' 
              pagLink='/componentes/cabecalhos' 
              altImage='Componente de Cabeçalhos'
              imgLink='https://via.placeholder.com/150' 
            />
            <ComponentCardItem 
              cardTitle='Pular Navegação' 
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
            my='1rem'
            fontSize='1.5rem' 
          >
            Exemplos 02
          </Heading>

          <Flex
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <ComponentCardItem 
              cardTitle='Formulário' 
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
            my='1rem'
            fontSize='1.5rem' 
          >
            Exemplo 03
          </Heading>

          <Flex
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
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
            <ComponentCardItem 
              cardTitle='Função para alterar o Tamanho da Fonte' 
              pagLink='/componentes/alterar-tamanho-da-fonte' 
              altImage='Componente para alterar o tamanho da fonte'
              imgLink='https://via.placeholder.com/150' 
            />
          </Flex>

          <Heading 
            my='1rem'
            fontSize='1.5rem' 
          >
            Exemplo 04
          </Heading>

          <Flex
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <ComponentCardItem 
              cardTitle='Função para alterar o contraste do site' 
              pagLink='/componentes/alterar-contraste-do-site' 
              altImage='Componente para alterar o contraste do site'
              imgLink='https://via.placeholder.com/150' 
            />
            <ComponentCardItem 
              cardTitle='Função para ouvir a descrição da imagem' 
              pagLink='/componentes/ouvir-descricao-da-imagem' 
              altImage='Componente para ouvir a descrição da imagem'
              imgLink='https://via.placeholder.com/150' 
            />
          </Flex>

        </Flex>
        
        <Footer />

      </Container>
    </Flex>
  );
};

export default Components;