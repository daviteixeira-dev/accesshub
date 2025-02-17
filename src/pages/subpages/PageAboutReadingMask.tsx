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

const PageAboutReadingMask = () => {

    const { t } = useTranslation();
    
    return (
        <Flex>
            <SkipNavLink zIndex={2}>
                {t('readingMaskPage.skipToMainContent')}
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
                        {t('readingMaskPage.title')}
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
                        {t('readingMaskPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('readingMaskPage.firstSubtitle.firstBadge.badgeTextWCAG')}
                            tooltipText={t('readingMaskPage.firstSubtitle.firstBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('readingMaskPage.firstSubtitle.secondBadge.badgeTextWCAG')}
                            tooltipText={t('readingMaskPage.firstSubtitle.secondBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('readingMaskPage.firstSubtitle.thirdBadge.badgeTextWCAG')}
                            tooltipText={t('readingMaskPage.firstSubtitle.thirdBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('readingMaskPage.firstSubtitle.fourBadge.badgeTextWCAG')}
                            tooltipText={t('readingMaskPage.firstSubtitle.fourBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/name-role-value'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'readingMask_01'} />

                    <Text
                        mb='1rem'
                        ml='1rem'
                        fontWeight='400'
                        fontSize='.9rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.codeLegend')}
                    </Text>


                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('readingMaskPage.firstSubtitle.sixthParagraph')}
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutReadingMask;