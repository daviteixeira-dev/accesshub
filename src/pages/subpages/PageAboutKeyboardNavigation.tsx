import { 
    Td,
    Tr,
    Th,
    Flex, 
    Text, 
    Hide,
    Show,
    Table,
    Thead,
    Tbody,
    Heading,  
    Container,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutKeyboardNavigation = () => {

    const { t } = useTranslation();
    
    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                {t('keyboardNavigationPage.skipToMainContent')}
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
                        {t('keyboardNavigationPage.title')}
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.thirdParagraph')}
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.fifthParagraph')}
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.sixthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.seventhParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.eighthParagraph')}
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
                        {t('keyboardNavigationPage.firstSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('keyboardNavigationPage.firstSubtitle.firstBadge.badgeTextWCAG')}
                            tooltipText={t('keyboardNavigationPage.firstSubtitle.firstBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('keyboardNavigationPage.firstSubtitle.secondBadge.badgeTextWCAG')}
                            tooltipText={t('keyboardNavigationPage.firstSubtitle.secondBadge.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.secondParagraph')}
                    </Text>

                    <TableContainer>
                        <Table variant='striped' size='sm'>
                            <TableCaption>{t('keyboardNavigationPage.firstSubtitle.table.tableCaption')}</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>{t('keyboardNavigationPage.firstSubtitle.table.keyboardEvent')}</Th>
                                    <Th>{t('keyboardNavigationPage.firstSubtitle.table.correspondingMouseEvent')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>onkeydown</Td>
                                    <Td>onmousedown</Td>
                                </Tr>
                                <Tr>
                                    <Td>onkeyup</Td>
                                    <Td>onmouseup</Td>
                                </Tr>
                                <Tr>
                                    <Td>onkeypress</Td>
                                    <Td>onclick*</Td>
                                </Tr>
                                <Tr>
                                    <Td>onfocus*</Td>
                                    <Td>onmouseover</Td>
                                </Tr>
                                <Tr>
                                    <Td>onblur*</Td>
                                    <Td>onmouseout</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>

                    <Text
                        my='1rem'
                        fontWeight='600'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.fourthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.sixthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.firstSubtitle.seventhParagraph')}
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
                        {t('keyboardNavigationPage.secondSubtitle.title')}

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG={t('keyboardNavigationPage.secondSubtitle.badgeTextWCAG')}
                            tooltipText={t('keyboardNavigationPage.secondSubtitle.badgeTooltipText')}
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.secondParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.thirdParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.fourthParagraph')}
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.fifthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.sixthParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('keyboardNavigationPage.secondSubtitle.seventhParagraph')}
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutKeyboardNavigation;