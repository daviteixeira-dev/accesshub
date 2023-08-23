import { 
    Box,
    Flex, 
    Text, 
    Link,
    Hide,
    Show,
    Image,
    Heading,  
    Container  
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';

import figura01 from '../../assets/figura-01.jpg';
import figura02 from '../../assets/figura-02.jpg';
import figura03 from '../../assets/figura-03.jpg';
import figura04 from '../../assets/figura-04.png';
import figura05 from '../../assets/figura-05.jpg';
import figura06 from '../../assets/figura-06.png';
import figura07 from '../../assets/figura-07.png';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutImages = () => {
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
                        Imagens
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
                        Fornecer alternativa em texto para as imagens de um site

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante fornecer uma descrição para as imagens da página usando o atributo 
                        alt. Essa descrição deve transmitir o significado e o propósito da imagem para os 
                        usuários que não conseguem visualizá-la.
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image 
                            src={figura01} 
                            alt='Foto de uma bicicleta de carga verde com caixas laranjas encostada numa parede.' 
                        />
                    </Flex>

                    <PostComponent article_name={'images_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando se trata de banners e outras imagens que reproduzem textos, é recomendado que 
                        o texto seja reproduzido na descrição alternativa. Isso garante que os usuários com 
                        deficiência visual tenham acesso às informações contidas na imagem.
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura02}
                            alt='Guia de Serviços – Consulte serviços públicos de forma fácil'
                        />
                    </Flex>

                    <PostComponent article_name={'images_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A descrição de uma imagem é subjetiva e deve ser adaptada ao contexto em que a 
                        imagem está inserida. Pense no objetivo da imagem e como ela contribui para o 
                        conteúdo da página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para imagens mais complexas, como infográficos, é possível fornecer uma descrição 
                        mais detalhada no próprio contexto ou por meio de um link para uma página com a 
                        descrição completa. Certifique-se de que o usuário entenda que o link leva a uma 
                        descrição mais detalhada, como no exemplo a seguir:
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura03}
                            alt='Infográfico sobre selos e certificações conscientes'
                        />
                    </Flex>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de descrição de infográfico. A descrição completa está 
                        disponível em outra página. Veja o exemplo de implementação: 
                    </Text>

                    <PostComponent article_name={'images_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante lembrar que, em gráficos simples, as informações podem estar contidas 
                        na própria página, o que facilita o entendimento para usuários com dificuldades 
                        de visualização ou que desejam utilizar as informações de outras maneiras, como 
                        para pesquisas.
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura04}
                            alt='Grafico de respostas por regiões do país.'
                        />
                    </Flex>

                    <PostComponent article_name={'images_04'} />

                    <Heading
                        as='h3'
                        my='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Em HTML5
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No HTML5, foram introduzidos os elementos FIGURE e FIGCAPTION, que permitem 
                        agrupar uma imagem IMG com sua legenda correspondente. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O elemento FIGURE não é usado apenas para imagens, mas também para agrupar 
                        conteúdos independentes, como trechos de código, gráficos, diagramas e vídeos 
                        relacionados ao conteúdo principal do documento. O elemento FIGCAPTION é 
                        opcional e exibe uma legenda para a figura. Ele complementa o atributo alt 
                        e fornece uma descrição visualmente visível para a imagem.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É possível ter várias imagens, vídeos e gráficos dentro de um único elemento 
                        FIGURE. Caso haja um elemento FIGCAPTION, ele deve ser o primeiro ou o último 
                        filho do elemento FIGURE, e apenas um FIGCAPTION será utilizado como legenda. 
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura05}
                            alt='Foto de uma árvore pau-brasil'
                        />
                    </Flex>

                    <PostComponent article_name={'images_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Observação: Imagens decorativas, que não transmitem conteúdo, podem ser 
                        inseridas por meio de CSS. Por exemplo, um separador pontilhado abaixo 
                        de um título pode ser implementado como uma imagem decorativa inserida 
                        por meio de folhas de estilo. Em alguns casos, a imagem pode ser substituída 
                        por código CSS. 
                    </Text>

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
                        Utilizar mapas de imagem de forma acessível

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Mapas de imagem são imagens divididas em áreas selecionáveis definidas por elementos 
                        AREA. Cada área funciona como um link para outra página ou seção da página 
                        atual. Embora este recurso esteja em desuso, ele pode ser útil para tornar 
                        infográficos acessíveis, por exemplo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os mapas de imagem do lado do cliente requerem descrições fornecidas pelo atributo 
                        alt para cada uma das áreas ativas, ou seja, para cada link que recebe foco.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de mapa de imagem do lado do cliente:
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image
                            src={figura06}
                            alt='Imagem com alternativas [A] e [B]'
                            useMap="#Map"
                        />
                        <Box
                            as='map'
                            name='Map'
                            id='Map'
                        >  
                            <Box
                                as='area'
                                shape='rect'
                                coords='8,10,63,59'
                                href='#'
                                alt='Link para a seção [A]'
                            />
                            <Box
                                as='area'
                                shape='rect'
                                coords='77,9,126,61'
                                href='#'
                                alt='Link para a seção [B]'
                            />
                        </Box>
                    </Flex>

                    <PostComponent article_name={'images_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além dos mapas de imagem do lado do cliente, existem também os mapas de 
                        imagem do lado do servidor.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de mapa de imagem do lado do servidor:
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Box 
                            display='flex' 
                            textAlign='center' 
                            backgroundSize='cover' 
                            flexDirection='column'
                            backgroundRepeat='no-repeat' 
                        >
                            <Image
                                src={figura07}
                                alt='Bandeira do Brasil (Links a seguir)'
                            />
                            <Text mt='1rem'>
                                <Link href='areaVerde.html'>Área Verde</Link> - 
                                <Link href='areaAmarela.html'> Área Amarela</Link> - 
                                <Link href='areaAzul.html'> Área Azul</Link>
                            </Text>
                        </Box>
                    </Flex>

                    <PostComponent article_name={'images_07'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Entretanto, é recomendado o uso de mapas de imagem do lado do cliente, pois 
                        os mapas de imagem do lado do servidor não permitem fornecer um texto alternativo 
                        para cada área ativa individualmente. Apenas um texto alternativo para todo o 
                        mapa pode ser fornecido, o que dificulta a acessibilidade. Caso seja necessário 
                        utilizar mapas de imagem do lado do servidor, é recomendado fornecer links 
                        redundantes para cada região ativa do mapa, permitindo que usuários de leitores 
                        de tela tenham acesso ao conteúdo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutImages;