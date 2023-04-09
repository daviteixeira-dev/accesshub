import { 
    Flex,
    Hide,
    Show,
    Text,
    Heading,
    Container,
    UnorderedList
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import CreditList from '../components/CreditList/CreditList';

const linkItems = [
    {
        ListText: 'Skip icons created by vectaicon - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/skip',
        ListTitle: 'skip icons'
    },
    {
        ListText: 'Header icons created by Freepik - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/header',
        ListTitle: 'header icons'
    },
    {
        ListText: 'Back arrow icons created by Freepik - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/back-arrow',
        ListTitle: 'back arrow icons'
    },
    {
        ListText: 'Spreadsheet icons created by Creatype - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/spreadsheet',
        ListTitle: 'spreadsheet icons'
    },
    {
        ListText: 'Survey icons created by Arkinasi - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/survey',
        ListTitle: 'survey icons'
    },
    {
        ListText: 'Html icons created by Smartline - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/html',
        ListTitle: 'html icons'
    },
    {
        ListText: 'External link icons created by Bharat Icons - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/external-link',
        ListTitle: 'external link icons'
    },
    {
        ListText: 'Picture icons created by Pixel perfect - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/picture',
        ListTitle: 'picture icons'
    },
    {
        ListText: 'Video icons created by Freepik - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/video',
        ListTitle: 'video icons'
    },
    {
        ListText: 'Speaker icons created by Pixel perfect - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/speaker',
        ListTitle: 'speaker icons'
    },
    {
        ListText: 'Recommended icons created by Creatype - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/recommended',
        ListTitle: 'recommended icons'
    },
    {
        ListText: 'Font size icons created by Bharat Icons - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/font-size',
        ListTitle: 'font size icons'
    },
    {
        ListText: 'Contrast icons created by Smartline - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/contrast',
        ListTitle: 'contrast icons'
    },
    {
        ListText: 'Metadata icons created by orvipixel - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/metadata',
        ListTitle: 'metadata icons'
    },
    {
        ListText: 'Keyboard icons created by Good Ware - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/keyboard',
        ListTitle: 'keyboard icons'
    },
    {
        ListText: 'Contribute icons created by Vector Stall - Flaticon',
        ListLink: 'https://www.flaticon.com/free-icons/contribute',
        ListTitle: 'contribute icons'
    }
]

const CreditsSection = () => {
    return (
        <Flex>

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
                    <Heading
                        as='h1'
                        mb='1.5rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                        mt={['6rem', '6rem', '1.5rem', '1.5rem']}
                    >
                        Créditos
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Abaixo os devidos créditos das imagens utilizadas no projeto.
                    </Text>

                    <Flex
                        alignItems='center'
                        justifyContent='start'
                    >
                        <UnorderedList>
                            {
                                linkItems.map((item, index) => (
                                    <CreditList
                                        key={index}
                                        text={item.ListText}
                                        link={item.ListLink}
                                        title={item.ListTitle}
                                    />
                                ))
                            }
                        </UnorderedList>
                    </Flex>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default CreditsSection;