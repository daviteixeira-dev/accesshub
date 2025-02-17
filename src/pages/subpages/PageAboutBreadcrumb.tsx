import { 
    Flex, 
    Text,
    Hide,
    Show,
    Heading, 
    ListItem,
    Container,
    UnorderedList
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutBreadcrumb = () => {

    const { t } = useTranslation();

    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('breadcrumbsPage.skipToMainContent')}
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
                        {t('breadcrumbsPage.title')}
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
                        {t('breadcrumbsPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('breadcrumbsPage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('breadcrumbsPage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/location'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('breadcrumbsPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('breadcrumbsPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('breadcrumbsPage.firstSubtitle.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'breadcrumb_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('breadcrumbsPage.firstSubtitle.fourthParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('breadcrumbsPage.firstSubtitle.firstList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('breadcrumbsPage.firstSubtitle.firstList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('breadcrumbsPage.firstSubtitle.firstList.thirdItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('breadcrumbsPage.firstSubtitle.firstList.fourthItem')}
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('breadcrumbsPage.firstSubtitle.fifthParagraph')}
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutBreadcrumb;