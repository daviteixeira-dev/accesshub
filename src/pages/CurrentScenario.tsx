import {
    Flex,
    Text,
    Hide,
    Show,
    Link,
    Heading,
    Container,
    useColorModeValue,
} from '@chakra-ui/react';

import {
    Tr,
    Th,
    Td,
    Table,
    Thead,
    Tbody,
    Tfoot,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';
import ComponentStatusPanel from '../components/ComponentStatusPanel/ComponentStatusPanel';

const CurrentScenario = () => {

    const { t } = useTranslation();

    const backgroundTable = useColorModeValue('gray.100', 'gray.900')
    const bodyColor = useColorModeValue('blackAlpha.50', 'gray.800');
    const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

    return (
        <Flex bg={bodyColor}>

            <SkipNavLink zIndex={2}>
                {t('currentScenarioPage.skipToMainContent')}
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
                        color={headingsColor}
                        mt={['6rem', '6rem', '1.5rem', '1.5rem']}
                    >
                        {t('currentScenarioPage.title')}
                    </Heading>

                    <Text 
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('currentScenarioPage.firstParagraph')}
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('currentScenarioPage.secondParagraph')} <Link color='blue.900' href='https://www.w3.org/WAI/WCAG21/Understanding/' textDecor='underline' isExternal>{t('currentScenarioPage.secondParagraphTextLink')}</Link>
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        {t('currentScenarioPage.thirdParagraphPartOne')} <Link color='blue.900' href='https://www.w3.org/WAI/standards-guidelines/aria/' textDecor='underline' isExternal>{t('currentScenarioPage.thirdParagraphTextLink')}</Link>{t('currentScenarioPage.thirdParagraphPartTwo')}
                    </Text>

                    <Flex>
                        <ComponentStatusPanel />
                    </Flex>

                    <TableContainer
                        padding='.5rem'
                        borderRadius='1rem'
                    >
                        <Table
                            size='sm'
                            variant='striped'
                            colorScheme='red'
                            borderRadius='1rem'
                            background={backgroundTable}
                        >
                            <TableCaption placement='top' fontSize='1rem'>
                                {t('currentScenarioPage.wcagCriteria')}
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>{t('currentScenarioPage.perceptible')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_1_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_1_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-live'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_7.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_7.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_8.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_8.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_2_9.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_2_9.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/orientation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_3_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_3_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/use-of-color'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-control'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/images-of-text'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_7.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_7.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_8.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_8.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_9.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_9.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_10.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_10.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/reflow'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_11.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_11.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_12.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_12.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/text-spacing'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.1_4_13.text')}
                                            tooltipText={t('currentScenarioPage.criteria.1_4_13.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>{t('currentScenarioPage.lastUpdated')}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>

                    <TableContainer
                        padding='.5rem'
                        borderRadius='1rem'
                    >
                        <Table
                            size='sm'
                            variant='striped'
                            colorScheme='blue'
                            borderRadius='1rem'
                            background={backgroundTable}
                        >
                            <TableCaption placement='top' fontSize='1rem'>
                                {t('currentScenarioPage.wcagCriteria')}
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>{t('currentScenarioPage.operable')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_1_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_1_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_1_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_1_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_1_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_1_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_1_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_1_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/no-timing'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/interruptions'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_2_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_2_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/timeouts'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_3_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_3_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_3_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_3_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/three-flashes'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_3_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_3_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/page-titled'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_7.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_7.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-visible'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_8.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_8.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/location'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_9.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_9.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.2_4_10.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_4_10.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/section-headings'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/label-in-name'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/target-size'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.2_5_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.2_5_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>{t('currentScenarioPage.lastUpdated')}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>

                    <TableContainer
                        padding='.5rem'
                        borderRadius='1rem'
                    >
                        <Table
                            size='sm'
                            variant='striped'
                            colorScheme='yellow'
                            borderRadius='1rem'
                            background={backgroundTable}
                        >
                            <TableCaption placement='top' fontSize='1rem'>
                                {t('currentScenarioPage.wcagCriteria')}
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>{t('currentScenarioPage.understandable')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-page'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/unusual-words'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/abbreviations'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/reading-level'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_1_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_1_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pronunciation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_2_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_2_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-focus'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_2_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_2_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_2_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_2_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_2_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_2_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_2_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_2_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/change-on-request'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/error-identification'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_4.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_4.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_5.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_5.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/help'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.3_3_6.text')}
                                            tooltipText={t('currentScenarioPage.criteria.3_3_6.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>{t('currentScenarioPage.lastUpdated')}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>

                    <TableContainer
                        padding='.5rem'
                        borderRadius='1rem'
                    >
                        <Table
                            size='sm'
                            variant='striped'
                            colorScheme='green'
                            borderRadius='1rem'
                            background={backgroundTable}
                        >
                            <TableCaption placement='top' fontSize='1rem'>
                                {t('currentScenarioPage.wcagCriteria')}
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>{t('currentScenarioPage.robust')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.4_1_1.text')}
                                            tooltipText={t('currentScenarioPage.criteria.4_1_1.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/parsing'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#276749'
                                            textWCAG={t('currentScenarioPage.criteria.4_1_2.text')}
                                            tooltipText={t('currentScenarioPage.criteria.4_1_2.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/name-role-value'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            bgColor='#C53030'
                                            textWCAG={t('currentScenarioPage.criteria.4_1_3.text')}
                                            tooltipText={t('currentScenarioPage.criteria.4_1_3.tooltipText')}
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/status-messages'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>{t('currentScenarioPage.lastUpdated')}</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default CurrentScenario;