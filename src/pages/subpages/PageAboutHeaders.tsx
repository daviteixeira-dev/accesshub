import { 
    Flex, 
    Hide,
    Show,
    Text,
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

const PageAboutHeaders = () => {

    const { t } = useTranslation();
    
    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('headingPage.skipToMainContent')}
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
                        {t('headingPage.title')}
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
                        {t('headingPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('headingPage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('headingPage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>
                    
                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('headingPage.firstSubtitle.firstParagraph')}
                    </Text>
                    
                    <PostComponent article_name={'headers_01'} />

                    <Heading
                        as='h2'
                        marginY='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        {t('headingPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('headingPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('headingPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/section-headings'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('headingPage.secondSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('headingPage.secondSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'headers_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('headingPage.secondSubtitle.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'headers_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutHeaders;