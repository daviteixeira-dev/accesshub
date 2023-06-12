import { 
    Flex, 
    Hide,
    Show,
    Text,
    Heading, 
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutHeaders = () => {
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
                        Cabeçalhos
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
                        Utilizando corretamente os níveis de cabeçalho

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.3.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>
                    
                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os cabeçalhos desempenham um papel fundamental na organização e acessibilidade 
                        do conteúdo de um site. Ao utilizar corretamente os níveis de 
                        cabeçalho (elementos HTML H1 a H6), é possível estabelecer uma hierarquia clara, 
                        facilitando a leitura, compreensão e navegação do usuário. Além disso, os 
                        leitores de tela utilizam essa hierarquia como um meio de navegação eficiente, 
                        permitindo que os usuários pulem entre os cabeçalhos e encontrem as seções de 
                        interesse com facilidade.
                    </Text>
                    
                    <PostComponent article_name={'headers_01'} />

                    <Heading
                        as='h2'
                        marginY='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Criando títulos de seção significativos e bem estruturados

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.4.10'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.10 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/section-headings'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em termos conceituais, existem seis níveis de títulos, com o H1 sendo o mais 
                        importante, representando o conteúdo principal da página. É recomendável que 
                        cada página tenha apenas um H1, que deve corresponder ao título principal do 
                        documento. Já os níveis de H2 a H6 podem ser utilizados várias vezes em uma 
                        página, desde que sigam uma lógica textual coerente e hierarquia adequada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando dividir o conteúdo em seções, é fundamental atribuir títulos claros e bem 
                        definidos a cada seção, garantindo uma hierarquia lógica e consistente. Isso 
                        permite uma identificação fácil das diferentes áreas do conteúdo, como 
                        ilustrado no exemplo a seguir: 
                    </Text>

                    <PostComponent article_name={'headers_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo prático pode ser encontrado em um site de receitas, onde o título do 
                        capítulo seria o H1, os passos seriam identificados como H2 e as descrições dos 
                        passos como H3, e assim por diante.
                    </Text>

                    <PostComponent article_name={'headers_02'} />

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutHeaders;