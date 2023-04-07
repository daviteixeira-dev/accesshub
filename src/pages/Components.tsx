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

import form from '../../public/form.png';
import link from '../../public/link.png';
import table from '../../public/table.png';
import audio from '../../public/audio.png';
import video from '../../public/video.png';
import images from '../../public/images.png';
import skipNav from '../../public/skipNav.png';
import headers from '../../public/headers.png';
import fontSize from '../../public/fontSize.png';
import contrast from '../../public/contrast.png';
import breadcrumb from '../../public/breadcrumb.png';
import inicialHTML from '../../public/inicialHTML.png';
import recommendations from '../../public/recommendations.png';
import imageDescription from '../../public/imageDescription.png';
import keyboardNavigation from '../../public/keyboardNavigation.png';

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
            mb='1rem'
            fontSize='2rem'
            fontWeight='700'
            fontFamily='Inter' 
            color={headingsColor}
            mt={['6rem', '6rem', '1.5rem', '1.5rem']}
          >
            Componentes
          </Heading>

          <Text 
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            O AccessHub fornece um guia de implementação dos componentes para ajudá-lo a construir 
            seus projetos mais rapidamente. Aqui está uma visão geral das categorias de componentes:
          </Text>

          <Heading 
            as='h2'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter' 
          >
            Exemplos 01
          </Heading>

          <Flex 
            mb='1rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']} 
          >
            <ComponentCardItem 
              cardTitle='Cabeçalhos' 
              pagLink='/componentes/cabecalhos' 
              altImage='Componente de Cabeçalhos'
              imgLink={headers} 
            />
            <ComponentCardItem 
              cardTitle='Pular Navegação' 
              pagLink='/componentes/pular-navegacao' 
              altImage='Componente de Pular Navegação'
              imgLink={skipNav} 
            />
            <ComponentCardItem 
              cardTitle='Breadcrumb'
              pagLink='/componentes/breadcrumb' 
              altImage='Componente de Breadcrumb'
              imgLink={breadcrumb}
            />
            <ComponentCardItem 
              cardTitle='Tabela' 
              pagLink='/componentes/tabela' 
              altImage='Componente de Tabela'
              imgLink={table}
            />
          </Flex>

          <Heading 
            as='h3'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter'
          >
            Exemplos 02
          </Heading>

          <Flex
            mb='1rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <ComponentCardItem 
              cardTitle='Formulário' 
              pagLink='/componentes/formulario' 
              altImage='Componente de Formulario'
              imgLink={form} 
            />
            <ComponentCardItem 
              cardTitle='HTML Inicial' 
              pagLink='/componentes/html-estrutura-inicial' 
              altImage='Componente de Estrutura Inicial HTML'
              imgLink={inicialHTML}
            />
            <ComponentCardItem 
              cardTitle='Links' 
              pagLink='/componentes/links' 
              altImage='Componente de Links'
              imgLink={link}
            />
            <ComponentCardItem 
              cardTitle='Imagens' 
              pagLink='/componentes/imagens' 
              altImage='Componente de Imagens'
              imgLink={images}
            />
          </Flex>

          <Heading 
            as='h4'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter' 
          >
            Exemplo 03
          </Heading>

          <Flex
            mb='1rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <ComponentCardItem 
              cardTitle='Vídeos' 
              pagLink='/componentes/videos' 
              altImage='Componente de Vídeo'
              imgLink={video}
            />
            <ComponentCardItem 
              cardTitle='Áudios' 
              pagLink='/componentes/audios' 
              altImage='Componente de Áudio'
              imgLink={audio}
            />
            <ComponentCardItem 
              cardTitle='Recomendações' 
              pagLink='/componentes/recomendacoes' 
              altImage='Componente de Recomendações'
              imgLink={recommendations}
            />
            <ComponentCardItem 
              cardTitle='Função para alterar o Tamanho da Fonte' 
              pagLink='/componentes/alterar-tamanho-da-fonte' 
              altImage='Componente para alterar o tamanho da fonte'
              imgLink={fontSize}
            />
          </Flex>

          <Heading 
            as='h5'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter' 
          >
            Exemplo 04
          </Heading>

          <Flex
            mb='1rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <ComponentCardItem 
              cardTitle='Função para alterar o contraste do site' 
              pagLink='/componentes/alterar-contraste-do-site' 
              altImage='Componente para alterar o contraste do site'
              imgLink={contrast}
            />
            <ComponentCardItem 
              cardTitle='Função para ouvir a descrição da imagem' 
              pagLink='/componentes/ouvir-descricao-da-imagem' 
              altImage='Componente para ouvir a descrição da imagem'
              imgLink={imageDescription}
            />
            <ComponentCardItem 
              cardTitle='Navegação pelo Teclado' 
              pagLink='/componentes/navegacao-pelo-teclado' 
              altImage='Componente para navegação via teclado'
              imgLink={keyboardNavigation}
            />
          </Flex>

        </Flex>
        
        <Footer />

      </Container>
    </Flex>
  );
};

export default Components;