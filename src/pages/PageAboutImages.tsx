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

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

import figura01 from '../assets/figura-01.jpg';
import figura02 from '../assets/figura-02.jpg';
import figura03 from '../assets/figura-03.jpg';
import figura04 from '../assets/figura-04.png';
import figura05 from '../assets/figura-05.jpg';
import figura06 from '../assets/figura-06.png';
import figura07 from '../assets/figura-07.png';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutImages = () => {
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
                        Deve ser fornecida uma descrição para as imagens da página, utilizando-se, 
                        para tanto o atributo alt. 
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
                        No caso de banners e outras imagens que reproduzam textos, o ideal é reproduzir o texto 
                        escrito.
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
                        Descrever qualquer imagem, em geral, é algo bastante subjetivo e a descrição deve ser 
                        adaptada ao contexto em que a imagem se encontra.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Apesar de não haver um limite de caracteres para o atributo alt, ele é utilizado para 
                        descrições sintéticas, em poucas palavras ou em uma frase curta. Para imagens mais 
                        complexas que exigem uma descrição mais detalhada, como infográficos, por exemplo, 
                        deve-se fornecer, além do alt, a descrição no próprio contexto ou um link para a 
                        descrição longa logo após a imagem. Deve ficar claro para o usuário que esse link 
                        remete para a descrição longa da imagem, conforme o exemplo a seguir.
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
                        Este é um exemplo de descrição de infográfico, desta forma a sua descrição textual 
                        está disponível em outra página. A seguir um exemplo de implementação: 
                    </Text>

                    <PostComponent article_name={'images_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembrando que em gráficos simples, as informações podem estar contidas na própria página 
                        ajudando o entendimento, inclusive, de pessoas que tem dificuldade com visualizações 
                        de gráficos ou queiram utilizar as informações para outros fins, como pesquisas.
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
                        Foram incorporados ao HTML5 os elementos FIGURE e FIGCAPTION, que são utilizados em 
                        conjunto com o objetivo de agrupar uma imagem IMG com a sua legenda, a qual 
                        aparecerá visualmente. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O elemento FIGURE não é usado apenas para marcação de imagens, ele define um bloco de 
                        conteúdo independente que normalmente contém linhas de códigos, imagens, gráficos, 
                        diagramas e vídeos que fazem referência ao conteúdo principal do documento. 
                        O elemento FIGCAPTION é opcional e exibe uma legenda para o elemento FIGURE. 
                        Esse novo elemento age como subtítulo opcional ou legenda para qualquer 
                        conteúdo contido dentro do elemento FIGURE e não substitui o atributo alt nas 
                        descrições das imagens.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Pode-se ter várias imagens, vídeos, gráficos, dentro de um único elemento FIGURE. Caso 
                        haja um elemento FIGCAPTION este deve ser o primeiro ou o último filho do elemento 
                        FIGURE e só um FIGCAPTION irá representar a legenda. 
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
                        OBS: Imagens que não transmitem conteúdo, ou seja, imagens decorativas, devem ser 
                        inseridas por CSS. Um exemplo seria o separador pontilhado logo abaixo do título 
                        de nível 3 “Acessibilidade web” em uma página, neste caso, isso seria uma imagem 
                        decorativa cuja função foi inserida através das folhas de estilo. Note que em alguns 
                        casos a imagem pode ser substituída por um código CSS. 
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
                        Um mapa de imagens é uma imagem dividida em áreas selecionáveis definidas por elemento 
                        AREA . Cada área é um link para outra página Web ou outra seção da página atual. 
                        É um recurso em desuso, mas pode ser útil na acessibilidade de infográficos, por exemplo.  
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Esse recurso não deve ser utilizado para menus ou seleção de regiões para serviços.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem dois tipos de mapas de imagem: mapas do lado do cliente.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para mapas de imagem do lado do cliente, devem ser fornecidas descrições através do 
                        atributo alt para cada uma das zonas ativas, ou seja, para cada um dos links que 
                        receberá o foco.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Abaixo, um exemplo (mapa de imagem do lado do cliente):
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
                        Além dos mapas de imagem do lado do cliente, existem os do lado do servidor.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Abaixo, um exemplo (mapa de imagem do lado do servidor):
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
                        No entanto, é recomendada a utilização de mapas de imagem do lado do cliente, já que 
                        para mapas de imagem do lado do servidor não é possível fornecer um alt para cada uma 
                        das zonas ativas, somente para o mapa como um todo, não sendo possível, portanto, 
                        torná-lo acessível. No entanto, se for realmente necessária sua utilização, devem 
                        ser fornecidos links redundantes relativos a cada região ativa do mapa de imagem, 
                        conforme o exemplo a seguir, para que, desta forma, usuários com leitores de tela 
                        possam ter acesso ao seu conteúdo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutImages;