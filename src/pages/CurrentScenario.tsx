import {
    Flex,
    Text,
    Hide,
    Show,
    Heading,
    Container,
    useColorModeValue,
    Link
} from '@chakra-ui/react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const CurrentScenario = () => {

    const backgroundTable = useColorModeValue('gray.100', 'gray.900')
    const bodyColor = useColorModeValue('blackAlpha.50', 'gray.800');
    const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

    return (
        <Flex bg={bodyColor}>

            <SkipNavLink zIndex={2}>
                Ir para o conteúdo
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
                        Cenário atual do projeto
                    </Heading>

                    <Text 
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Nesta página, podemos observar a partir das tabelas abaixo como está o 
                        cenário atual das explicações e implementações de codígo-fonte open-source 
                        disponíveis no AccessHub:
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O projeto atualmente encontra-se na <Link color='blue.900' href='https://www.w3.org/WAI/WCAG21/Understanding/' textDecor='underline' isExternal> versão 2.1 do WCAG </Link>.
                    </Text>

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
                                Críterios da WCAG
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>Percepitível</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.1.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.1.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[1.2.4]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.5'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.5 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.6'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.6 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.7'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.7 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.2.8'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.2.8 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[1.2.9]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.3.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.3.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.3.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.3.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.3.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.3.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[1.3.4]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.3.5'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.3.5 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[1.3.6]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.4.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.4.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/use-of-color'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 1.4.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.4.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-control'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.4.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.4.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.4.4'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.4.4 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[1.4.5]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 1.4.6'
                                            tooltipText='Ver Critério WCAG de Sucesso 1.4.6 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[1.4.7]</Td>
                                    <Td textAlign='center' width='25%'>[1.4.8]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[1.4.9]</Td>
                                    <Td textAlign='center' width='25%'>[1.4.10]</Td>
                                    <Td textAlign='center' width='25%'>[1.4.11]</Td>
                                    <Td textAlign='center' width='25%'>[1.4.12]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[1.4.13]</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Última atualização 23/08/2023</Th>
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
                                Críterios da WCAG
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>Operável</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.1.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.1.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.1.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.1.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.1.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.1.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[2.1.4]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.2.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.2.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.2.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.2.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[2.2.3]</Td>
                                    <Td textAlign='center' width='25%'>[2.2.4]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[2.2.5]</Td>
                                    <Td textAlign='center' width='25%'>[2.2.6]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.3.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.3.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[2.3.2]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[2.3.3]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.4.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.4.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/page-titled'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.4.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.4.4'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.4 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[2.4.5]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.4.6'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.6 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.4.7'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.7 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-visible'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.4.8'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.8 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/location'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 2.4.9'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.9 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 2.4.10'
                                            tooltipText='Ver Critério WCAG de Sucesso 2.4.10 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/section-headings'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[2.4.11]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[2.4.12]</Td>
                                    <Td textAlign='center' width='25%'>[2.4.13]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.1]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.2]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[2.5.3]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.4]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.5]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.6]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[2.5.7]</Td>
                                    <Td textAlign='center' width='25%'>[2.5.8]</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Última atualização 23/08/2023</Th>
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
                                Críterios da WCAG
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>Compreensível</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.1.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.1.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-page'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.1.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.1.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 3.1.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.1.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/unusual-words'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 3.1.4'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.1.4 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/abbreviations'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 3.1.5'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.1.5 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/reading-level'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[3.1.6]</Td>
                                    <Td textAlign='center' width='25%'>[3.2.1]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.2.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.2.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                                        />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.2.3'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.2.3 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 3.2.4'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.2.4 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.2.5'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.2.5 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/change-on-request'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[3.2.6]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[3.3.1]</Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber
                                            textWCAG='Critério 3.3.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 3.3.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[3.3.3]</Td>
                                    <Td textAlign='center' width='25%'>[3.3.4]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[3.3.5]</Td>
                                    <Td textAlign='center' width='25%'>[3.3.6]</Td>
                                    <Td textAlign='center' width='25%'>[3.3.7]</Td>
                                    <Td textAlign='center' width='25%'>[3.3.8]</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign='center' width='25%'>[3.3.9]</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Última atualização 23/08/2023</Th>
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
                                Críterios da WCAG
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontSize='1rem'>Robusto</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 4.1.1'
                                            tooltipText='Ver Critério WCAG de Sucesso 4.1.1 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/parsing'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>
                                        <BadgeWCAGInfoNumber 
                                            textWCAG='Critério 4.1.2'
                                            tooltipText='Ver Critério WCAG de Sucesso 4.1.2 (inglês)'
                                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/name-role-value'
                                        />
                                    </Td>
                                    <Td textAlign='center' width='25%'>[4.1.3]</Td>
                                    <Td textAlign='center' width='25%'>-</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Última atualização 23/08/2023</Th>
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