import { 
    Box,
    Flex, 
    Text, 
    Link,
    Hide,
    Show,
    Image,
    Heading,  
    Container  
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

import figura01 from '../../assets/figura-01.jpg';
import figura02 from '../../assets/figura-02.jpg';
import figura03 from '../../assets/figura-03.jpg';
import figura04 from '../../assets/figura-04.png';
import figura05 from '../../assets/figura-05.jpg';
import figura06 from '../../assets/figura-06.png';
import figura07 from '../../assets/figura-07.png';

const PageAboutImages = () => {

    const { t } = useTranslation();

    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('imagesPage.skipToMainContent')}
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
                        mt={['5rem', '5rem', '1rem', '1rem']}
                    >
                        {t('imagesPage.title')}
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        {t('imagesPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('imagesPage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('imagesPage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image 
                            src={figura01} 
                            alt='Foto de uma bicicleta de carga verde com caixas laranjas encostada numa parede.' 
                        />
                    </Flex>

                    <PostComponent article_name={'images_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura02}
                            alt='Guia de Serviços – Consulte serviços públicos de forma fácil'
                        />
                    </Flex>

                    <PostComponent article_name={'images_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.fourthParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura03}
                            alt='Infográfico sobre selos e certificações conscientes'
                        />
                    </Flex>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.fifthParagraph')}
                    </Text>

                    <PostComponent article_name={'images_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.sixthParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura04}
                            alt='Grafico de respostas por regiões do país.'
                        />
                    </Flex>

                    <PostComponent article_name={'images_04'} />

                    <Heading
                        as='h3'
                        my='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.subtitle')}
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.seventhParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.eightParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.ninthParagraph')} 
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura05}
                            alt='Foto de uma árvore pau-brasil'
                        />
                    </Flex>

                    <PostComponent article_name={'images_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.firstSubtitle.tenthParagraph')}
                    </Text>

                    <Heading
                        as='h2'
                        mb='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        {t('imagesPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('imagesPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('imagesPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.thirdParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura06}
                            alt='Imagem com alternativas [A] e [B]'
                            useMap="#Map"
                        />
                        <Box
                            as='map'
                            name='Map'
                            id='Map'
                        >  
                            <Box
                                as='area'
                                shape='rect'
                                coords='8,10,63,59'
                                href='#'
                                alt='Link para a seção [A]'
                            />
                            <Box
                                as='area'
                                shape='rect'
                                coords='77,9,126,61'
                                href='#'
                                alt='Link para a seção [B]'
                            />
                        </Box>
                    </Flex>

                    <PostComponent article_name={'images_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.fifthParagraph')}
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Box 
                            display='flex' 
                            textAlign='center' 
                            backgroundSize='cover' 
                            flexDirection='column'
                            backgroundRepeat='no-repeat' 
                        >
                            <Image
                                src={figura07}
                                alt='Bandeira do Brasil (Links a seguir)'
                            />
                            <Text mt='1rem'>
                                <Link href='areaVerde.html'>{t('imagesPage.secondSubtitle.greenArea')}</Link> - 
                                <Link href='areaAmarela.html'>{t('imagesPage.secondSubtitle.yellowArea')}</Link> - 
                                <Link href='areaAzul.html'>{t('imagesPage.secondSubtitle.blueArea')}</Link>
                            </Text>
                        </Box>
                    </Flex>

                    <PostComponent article_name={'images_07'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('imagesPage.secondSubtitle.sixthParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutImages;