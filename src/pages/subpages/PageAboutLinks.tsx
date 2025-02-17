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

const PageAboutLinks = () => {

    const { t } = useTranslation();

    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('linksPage.skipToMainContent')}
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
                        {t('linksPage.title')}
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.firstParagraph')}
                    </Text>

                    <PostComponent article_name={'links_01'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        {t('linksPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('linksPage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('linksPage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'links_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.firstSubtitle.thirdParagraph')}
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
                        {t('linksPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('linksPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('linksPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/change-on-request'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.secondSubtitle.firstParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('linksPage.secondSubtitle.firstList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('linksPage.secondSubtitle.firstList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('linksPage.secondSubtitle.firstList.thirdItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('linksPage.secondSubtitle.firstList.fourthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('linksPage.secondSubtitle.firstList.fifthItem')}
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.secondSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'links_03'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        {t('linksPage.thirdSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('linksPage.thirdSubtitle.firstBadge.badgeTextWCAG')}
                            tooltipText={t('linksPage.thirdSubtitle.firstBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('linksPage.thirdSubtitle.secondBadge.badgeTextWCAG')}
                            tooltipText={t('linksPage.thirdSubtitle.secondBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.thirdSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.thirdSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.thirdSubtitle.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'links_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.thirdSubtitle.fourthParagraph')}
                    </Text>

                    <PostComponent article_name={'links_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.thirdSubtitle.fifthParagraph')}
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
                        {t('linksPage.fourthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('linksPage.fourthSubtitle.badgeTextWCAG')}
                            tooltipText={t('linksPage.fourthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-visible'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.fourthSubtitle.firstParagraph')}
                    </Text>

                    <PostComponent article_name={'links_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('linksPage.fourthSubtitle.secondParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutLinks;