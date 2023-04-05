import { 
    Flex, 
    Text,
    Hide,
    Show,
    Heading, 
    Container
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutBreadcrumb = () => {
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
                        mb='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                        mt={['5rem', '5rem', '1rem', '1rem']}
                    >
                        Breadcrumb
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
                        Informar o usuário sobre sua localização na página

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.4.8'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.8 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/location'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Deverá ser fornecido um mecanismo que permita ao usuário orientar-se dentro de um 
                        conjunto de páginas, permitindo que ele saiba onde está no momento. Assim, poderá 
                        ser utilizado o recurso de “migalha de pão” (breadcrumbs), que são links navegáveis 
                        em forma de lista hierárquica os quais permitem que o usuário saiba qual o caminho 
                        percorrido até chegar à página em que se encontra no momento.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        OBS: Na migalha de pão, todas as páginas do caminho, com exceção da qual está o usuário 
                        (posição atual), deverão estar implementadas como links e contidas dentro de uma lista. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Abaixo, um exemplo de implementação de um Breadcrumb em HTML5 e em seguida sua estlização em CSS3:
                    </Text>

                    <PostComponent article_name={'breadcrumb_01'} />

                    <PostComponent article_name={'breadcrumb_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutBreadcrumb;