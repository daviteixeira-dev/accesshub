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