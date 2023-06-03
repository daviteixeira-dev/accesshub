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
                        Recursos de Pular Navegação
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
                        Crie âncoras para acesso direto a blocos de conteúdo

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
                        Um recurso de pular navegação é essencial para permitir que usuários 
                        com deficiências ou limitações acessem diretamente o conteúdo principal 
                        de uma página, sem a necessidade de percorrer todos os elementos de 
                        navegação e cabeçalhos.
                    </Text>
                    
                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É recomendado fornecer âncoras, que são links disponíveis na barra de 
                        acessibilidade, para direcionar os usuários aos links relevantes presentes 
                        na mesma página. Dessa forma, eles podem ir diretamente para o bloco de 
                        conteúdo desejado. É importante posicionar esses links estrategicamente 
                        na página, como no início e no final do conteúdo, bem como no início e 
                        no final do menu. O primeiro link da página deve ser sempre o de pular 
                        para o conteúdo principal.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de como implementar um recurso de pular navegação:
                    </Text>

                    <PostComponent article_name={'skip-navigation_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembrando que é importante adaptar esse exemplo às necessidades 
                        específicas do seu site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de melhorar a acessibilidade do seu site, a inclusão de recursos 
                        de pular navegação também pode ter benefícios em termos de SEO, pois 
                        ajuda os mecanismos de pesquisa a entenderem melhor a estrutura e o 
                        conteúdo da sua página.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutSkipNavigation;