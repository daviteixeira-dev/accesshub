import {
    Flex,
    Text,
    Hide,
    Show,
    Heading,
    Container,
    useColorModeValue
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';

const PageTemplate = () => {

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
                        Aqui, um template padão de página do AccessHub
                    </Heading>

                    <Text 
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Use esse template para agilizar o processo de desenvolvimento de páginas descktop e mobile.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageTemplate;