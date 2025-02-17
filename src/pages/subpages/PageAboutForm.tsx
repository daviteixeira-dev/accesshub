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

const PageAboutForm = () => {

    const { t } = useTranslation();

    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('formsPage.skipToMainContent')}
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
                        {t('formsPage.title')}
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
                        {t('formsPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.firstSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.firstSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <PostComponent article_name={'form_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'form_02'} />

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
                        {t('formsPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.secondSubtitle.firstParagraph')}
                    </Text>

                    <PostComponent article_name={'form_03'} />

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
                        {t('formsPage.thirdSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.thirdSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.thirdSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.thirdSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.thirdSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'form_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.thirdSubtitle.thirdParagraph')}
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
                        {t('formsPage.fourthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.fourthSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.fourthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.fourthSubtitle.firstParagraph')}
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
                        {t('formsPage.fifthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.fifthSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.fifthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.fifthSubtitle.firstParagraph')}
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
                        {t('formsPage.sixthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.sixthSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.sixthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.firstParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.firstList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.firstList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.firstList.thirdItem')}
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.fifthParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.thirdItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.fourthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.fifthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.sixthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.sixthSubtitle.secondList.seventhItem')}
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.sixthSubtitle.sixthParagraph')}
                    </Text>

                    <PostComponent article_name={'form_04'} />

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
                        {t('formsPage.seventhSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.seventhSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.seventhSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-focus'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.seventhSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.seventhSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.seventhSubtitle.thirdParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.thirdItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.fourthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.fifthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.sixthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.seventhItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.eighthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.ninthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.tenthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.eleventhItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.twelfthItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.seventhSubtitle.firstList.thirteenthItem')}
                        </ListItem>
                    </UnorderedList>

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
                        {t('formsPage.eighthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.eighthSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.eighthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.eighthSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.eighthSubtitle.secondParagraph')}
                    </Text>

                    <PostComponent article_name={'form_05'} />

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
                        {t('formsPage.ninthSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('formsPage.ninthSubtitle.badgeTextWCAG')}
                            tooltipText={t('formsPage.ninthSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.firstParagraph')}
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.ninthSubtitle.firstList.firstItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.ninthSubtitle.firstList.secondItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.ninthSubtitle.firstList.thirdItem')}
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {t('formsPage.ninthSubtitle.firstList.fourthItem')}
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('formsPage.ninthSubtitle.sixthParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutForm;