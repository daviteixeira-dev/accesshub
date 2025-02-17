import { 
  Flex,
  Link,
  Text,
  Hide,
  Show,
  Image,
  Heading,
  ListItem,
  Container,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';

import puzzle from '../../public/puzzle.png';

const Introduction = () => {

  const { t } = useTranslation();

  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

  return (
    <Flex>
      
      <SkipNavLink zIndex={2}>
        {t('introductionPage.skipToMainContent')}
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
            mb='1.5rem'
            fontSize='2rem'
            fontWeight='700'
            fontFamily='Inter'
            mt={['6rem', '6rem', '1.5rem', '1.5rem']}
          >
            {t('introductionPage.title')}
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.firstParagraph')}
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.secondParagraph')}
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.thirdParagraph')}
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.fourthParagraph')}
          </Text>

          <Heading
            as='h2'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter'
          >
            {t('introductionPage.objectives.title')}
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.objectives.firstParagraph')}
          </Text>

          <UnorderedList>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              {t('introductionPage.objectives.firstItemOnTheList')}
            </ListItem>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              {t('introductionPage.objectives.secondItemOnTheList')}
            </ListItem>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              {t('introductionPage.objectives.thirdItemOnTheList')}
            </ListItem>
          </UnorderedList>

          <Flex
            p='1rem'
            my='2rem'
            textAlign='center'
            alignItems='center'
            borderRadius='1rem'
            flexDirection='column'
            justifyContent='center'
            background={bgColor}
          >
            <Image
              src={puzzle}
              boxSize='6rem'
              borderRadius='full'
              title='Nessa imagem temos uma mão mostrando uma peça de quebra-cabeça, usada para referenciar a ideia de contribuição com o projeto.'
            />

            <Heading
              as='h3'
              my='1rem'
              fontWeight='600'
              color={textColor}
              fontSize='1.5rem'
              fontFamily='Inter'
            >
              {t('introductionPage.howToContribute.title')}
            </Heading>

            <Text
              mb='1rem'
              fontWeight='500'
              fontSize='1.2rem'
              color={textColor}
              fontFamily='Inter'
            >
              {t('introductionPage.howToContribute.firstParagraphPartOne')} <Link color='blue.900' textDecor='underline' href='https://github.com/daviteixeira-dev/accesshub/pulls' isExternal >{t('introductionPage.howToContribute.firstParagraphTextLink')}</Link> {t('introductionPage.howToContribute.firstParagraphPartTwo')}
            </Text>

          </Flex>

          <Heading
            as='h4'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter'
          >
            {t('introductionPage.references.title')}
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            {t('introductionPage.references.firstParagraphPartOne')} <Link fontWeight='bold' color='blue.900' href='https://repositorio.ufc.br/handle/riufc/73954' textDecor='underline' isExternal>{t('introductionPage.references.firstParagraphTextLink')}</Link> {t('introductionPage.references.firstParagraphPartTwo')}
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            <Text as='span' fontWeight='bold' >{t('introductionPage.references.quote')}</Text>{t('introductionPage.references.author')}<Text as='b'>{t('introductionPage.references.projectName')}</Text> {t('introductionPage.references.academicWorkInformation')}
          </Text>

        </Flex>

        <Footer />

      </Container>
    </Flex>
  );
};

export default Introduction;