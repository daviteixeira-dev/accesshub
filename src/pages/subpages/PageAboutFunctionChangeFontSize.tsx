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

const PageAboutFunctionChangeFontSize = () => {

    const { t } = useTranslation();
    
    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('changeFontSizePage.skipToMainContent')}
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
                        {t('changeFontSizePage.title')}
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
                        {t('changeFontSizePage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('changeFontSizePage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('changeFontSizePage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'alterarFontes_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.sixthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.seventhParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.eightParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.ninthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.firstSubtitle.tenthParagraph')}
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
                        {t('changeFontSizePage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('changeFontSizePage.secondSubtitle.firstBadge.badgeTextWCAG')}
                            tooltipText={t('changeFontSizePage.secondSubtitle.firstBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('changeFontSizePage.secondSubtitle.secondBadge.badgeTextWCAG')}
                            tooltipText={t('changeFontSizePage.secondSubtitle.secondBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('changeFontSizePage.secondSubtitle.thirdBadge.badgeTextWCAG')}
                            tooltipText={t('changeFontSizePage.secondSubtitle.thirdBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('changeFontSizePage.secondSubtitle.fourthBadge.badgeTextWCAG')}
                            tooltipText={t('changeFontSizePage.secondSubtitle.fourthBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.secondSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.secondSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.secondSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.secondSubtitle.fourthParagraph')}
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
                        {t('changeFontSizePage.thirdSubtitle.title')}
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.thirdSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.thirdSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('changeFontSizePage.thirdSubtitle.thirdParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutFunctionChangeFontSize;