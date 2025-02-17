import {
  Flex,
  Text,
  Hide,
  Show,
  Heading,
  Container,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

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
import readingMask from '../../public/readingMask.png';
import recommendations from '../../public/recommendations.png';
import imageDescription from '../../public/imageDescription.png';
import keyboardNavigation from '../../public/keyboardNavigation.png';

const dataForTheComponentCardItem = [
  {
    componentCardTitle: 'componentsPage.initialHTMLCard',
    componentCardPageLink: '/componentes/html-estrutura-inicial',
    componentCardAltImage: 'Componente de Estrutura Inicial HTML',
    componentCardImgLink: inicialHTML,
  },
  {
    componentCardTitle: 'componentsPage.recommendationsCard',
    componentCardPageLink: '/componentes/recomendacoes',
    componentCardAltImage: 'Componente de Recomendações',
    componentCardImgLink: recommendations,
  },
  {
    componentCardTitle: 'componentsPage.headingCard',
    componentCardPageLink: '/componentes/cabecalhos',
    componentCardAltImage: 'Componente de Cabeçalhos',
    componentCardImgLink: headers,
  },
  {
    componentCardTitle: 'componentsPage.skipNavigationCard',
    componentCardPageLink: '/componentes/pular-navegacao',
    componentCardAltImage: 'Componente de Pular Navegação',
    componentCardImgLink: skipNav,
  },
  {
    componentCardTitle: 'componentsPage.breadcrumbsCard',
    componentCardPageLink: '/componentes/breadcrumbs',
    componentCardAltImage: 'Componente de Breadcrumb',
    componentCardImgLink: breadcrumb,
  },
  {
    componentCardTitle: 'componentsPage.tablesCard',
    componentCardPageLink: '/componentes/tabelas',
    componentCardAltImage: 'Componente de Tabela',
    componentCardImgLink: table,
  },
  {
    componentCardTitle: 'componentsPage.formsCard',
    componentCardPageLink: '/componentes/formularios',
    componentCardAltImage: 'Componente de Formulario',
    componentCardImgLink: form,
  },
  {
    componentCardTitle: 'componentsPage.linksCard',
    componentCardPageLink: '/componentes/links',
    componentCardAltImage: 'Componente de Links',
    componentCardImgLink: link,
  },
  {
    componentCardTitle: 'componentsPage.imagesCard',
    componentCardPageLink: '/componentes/imagens',
    componentCardAltImage: 'Componente de Imagens',
    componentCardImgLink: images,
  },
  {
    componentCardTitle: 'componentsPage.videosCard',
    componentCardPageLink: '/componentes/videos',
    componentCardAltImage: 'Componente de Vídeo',
    componentCardImgLink: video,
  },
  {
    componentCardTitle: 'componentsPage.audiosCard',
    componentCardPageLink: '/componentes/audios',
    componentCardAltImage: 'Componente de Áudio',
    componentCardImgLink: audio,
  },
  {
    componentCardTitle: 'componentsPage.changeFontSizeCard',
    componentCardPageLink: '/componentes/alterar-tamanho-da-fonte',
    componentCardAltImage: 'Componente para alterar o tamanho da fonte',
    componentCardImgLink: fontSize,
  },
  {
    componentCardTitle: 'componentsPage.changeSiteContrastCard',
    componentCardPageLink: '/componentes/alterar-contraste-do-site',
    componentCardAltImage: 'Componente para alterar o contraste do site',
    componentCardImgLink: contrast,
  },
  {
    componentCardTitle: 'componentsPage.listenToDescriptionCard',
    componentCardPageLink: '/componentes/ouvir-descricao-da-imagem',
    componentCardAltImage: 'Componente para ouvir a descrição da imagem',
    componentCardImgLink: imageDescription,
  },
  {
    componentCardTitle: 'componentsPage.keyboardNavigationCard',
    componentCardPageLink: '/componentes/navegacao-pelo-teclado',
    componentCardAltImage: 'Componente para navegação via teclado',
    componentCardImgLink: keyboardNavigation,
  },
  {
    componentCardTitle: 'componentsPage.readingMaskCard',
    componentCardPageLink: '/componentes/mascara-de-leitura',
    componentCardAltImage: 'Componente para utilização da máscara de leitura',
    componentCardImgLink: readingMask,
  }
]

const Components = () => {

  const { t } = useTranslation();

  const bodyColor = useColorModeValue('blackAlpha.50', 'gray.800');
  const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

  return (
    <Flex bg={bodyColor}>

      <SkipNavLink zIndex={2}>
        {t('componentsPage.skipToMainContent')}
      </SkipNavLink>
      
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

        <Flex
          p='1rem'
          flexDirection='column'
        >

          <SkipNavContent />
          
          <Heading 
            as='h1'
            mb='1rem'
            fontSize='2rem'
            fontWeight='700'
            fontFamily='Inter' 
            color={headingsColor}
            mt={['6rem', '6rem', '1.5rem', '1.5rem']}
          >
            {t('componentsPage.title')}
          </Heading>

          <Text 
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('componentsPage.firstParagraph')}
          </Text>

          <SimpleGrid 
            spacing={4}
            columns={[1, 1, 4, 4]}
          >
            {
              dataForTheComponentCardItem.map((item, index) => (
                <ComponentCardItem
                  key={index}
                  cardTitle={t(item.componentCardTitle)}
                  pagLink={item.componentCardPageLink}
                  altImage={item.componentCardAltImage}
                  imgLink={item.componentCardImgLink}
                />
              ))
            }
          </SimpleGrid>

        </Flex>
        
        <Footer />

      </Container>
    </Flex>
  );
};

export default Components;