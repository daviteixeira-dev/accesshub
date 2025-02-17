import { 
    Flex, 
    Text, 
    Hide,
    Show,
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

const PageAboutAudios = () => {

    const { t } = useTranslation();

    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('audiosPage.skipToMainContent')}
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
                        {t('audiosPage.title')}
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
                        {t('audiosPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('audiosPage.firstSubtitle.firstBadge.badgeTextWCAG')}
                            tooltipText={t('audiosPage.firstSubtitle.firstBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('audiosPage.firstSubtitle.secondBadge.badgeTextWCAG')}
                            tooltipText={t('audiosPage.firstSubtitle.secondBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('audiosPage.firstSubtitle.thirdBadge.badgeTextWCAG')}
                            tooltipText={t('audiosPage.firstSubtitle.thirdBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('audiosPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <PostComponent article_name={'audios_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('audiosPage.firstSubtitle.secondParagraph')}
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
                        {t('audiosPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('audiosPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('audiosPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-control'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('audiosPage.secondSubtitle.firstParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutAudios;