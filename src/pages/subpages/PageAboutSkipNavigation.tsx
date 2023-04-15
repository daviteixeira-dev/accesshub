import { 
    Text, 
    Flex, 
    Show, 
    Hide,
    Heading, 
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutSkipNavigation = () => {
    return (
        <Flex>

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
                        mt={['5rem', '5rem', '1rem', '1rem']}
                    >
                        Pular navegação
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
                        Fornecer âncora para ir direto a um bloco de conteúdo

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 2.4.1'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um link de pular navegação é uma funcionalidade importante para permitir que 
                        usuários com deficiências ou limitações possam acessar diretamente o conteúdo 
                        principal de uma página sem precisar passar por todos os elementos de 
                        navegação e cabeçalhos.
                    </Text>
                    
                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Devem ser fornecidas âncoras, disponíveis na barra de acessibilidade, que apontem 
                        para links relevantes presentes na mesma página. Assim, é possível ir ao bloco de 
                        conteúdo desejado. Os links devem ser colocados em lugares estratégicos da página, 
                        como no início e fim do conteúdo e início de fim do menu. É importante ressaltar que 
                        o primeiro link da página deve ser o de ir para o conteúdo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A seguir, um exemplo de como deve ser desenvolvido um link de pular navegação:
                    </Text>

                    <PostComponent article_name={'skip-navigation_01'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutSkipNavigation;