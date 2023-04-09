import { 
    Text, 
    Flex, 
    Show, 
    Hide,
    Heading, 
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

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
                        Fornecer âncoras para ir direto a um bloco de conteúdo

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
                        Devem ser fornecidas âncoras, disponíveis na barra de acessibilidade, que apontem 
                        para links relevantes presentes na mesma página. Assim, é possível ir ao bloco de 
                        conteúdo desejado. Os links devem ser colocados em lugares estratégicos da página, 
                        como no início e fim do conteúdo e início de fim do menu.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante ressaltar que o primeiro link da página deve ser o de ir para o conteúdo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para facilitar a utilização das âncoras, podem ser disponibilizados atalhos por teclado, 
                        utilizando o atributo accesskey nos links relevantes. Não pode haver repetição do mesmo 
                        accesskey em uma página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Devem ser utilizados ambos os atributos name e id para que as âncoras funcionem em 
                        todos os navegadores e tecnologias assistivas, tanto textuais quanto gráficos, 
                        já que há os que suportam ambos os atributos e os que suportam apenas um deles.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A seguir, um exemplo contendo uma barra de navegação para diferentes tipos de conteúdo 
                        em uma página web. 
                    </Text>

                    <PostComponent article_name={'pular-navegacao_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os links indicadores de início e fim de conteúdo e início e fim de menu podem estar 
                        ocultos na página utilizando folhas de estilo. No entanto, é necessário tomar o 
                        cuidado de ocultá-los de forma que eles continuem acessíveis aos leitores de tela. 
                        Os mecanismos para ocultar elementos e seus efeitos na acessibilidade são os seguintes:
                    </Text>
                    
                    <PostComponent article_name={'pular-navegacao_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutSkipNavigation;