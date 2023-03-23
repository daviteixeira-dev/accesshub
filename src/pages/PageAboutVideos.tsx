import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container,  
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutVideos = () => {
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
                        my='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                    >
                        Vídeos
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        fontSize='1rem'
                        fontWeight='400'
                        fontFamily='Inter'
                    >
                        Ver WCAG 2.0 Critério de Sucesso 1.2.1, 1.2.2, 1.2.3, 1.2.5, 1.2.6, 1.2.7 e 1.2.8.
                    </Heading>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Fornecer alternativa para vídeo (1.2.1, 1.2.2, 1.2.6 e 1.2.8)
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Vídeos disponibilizados no site devem possuir botões de controles, especialmente para 
                        os controles de play, pause e stop. O HTML5 traz uma grande novidade para esta 
                        funcionalidade que é a elemento VIDEO, um padrão para reprodução de vídeo onde 
                        se tornou muito mais fácil controlar as funcionalidades do vídeo:
                    </Text>

                    <PostComponent article_name={'videos_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Deve haver uma alternativa sonora ou textual para vídeos que não incluem faixas 
                        de áudio. Para vídeos que contêm áudio falado e no idioma natural da página, 
                        devem ser fornecidas legendas. Além de essencial para pessoas com deficiência 
                        visual, a alternativa em texto também é importante para usuários que não possuem 
                        equipamento de som, que desejam apenas realizar a leitura do material ou não 
                        dispõem de tempo para ouvir um arquivo multimídia. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo poderia ser, um vídeo mostra como produzir uma tecnologia assistiva de 
                        baixo custo. Não há áudio, mas o vídeo inclui uma série de números para representar 
                        cada etapa do processo. Nesse caso, junto ao vídeo, deve ser disponibilizado um 
                        arquivo com a alternativa de texto que indica o conteúdo do vídeo e a descrição de 
                        cada uma das etapas.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de alternativa em texto e legenda, é desejável que os vídeos com áudio apresentem 
                        alternativa na Língua Brasileira de Sinais (Libras).
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante salientar que o player de vídeo deve ser acessível. Deve ser possível 
                        acessar os controles via teclado e os mesmos devem estar devidamente descritos, 
                        para serem interpretados pelos leitores de tela.
                    </Text>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Oferecer audiodescrição para vídeo pré-gravado (1.2.3, 1.2.5 e 1.2.7)
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Vídeos que transmitem conteúdo visual que não está disponível na faixa de áudio 
                        devem possuir uma audiodescrição.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A audiodescrição consiste na descrição clara e objetiva de todas as informações 
                        apresentadas de forma visual e que não fazem parte dos diálogos. Essas descrições 
                        são apresentadas nos espaços entre os diálogos e nas pausas entre as informações sonoras.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>       
    );
};

export default PageAboutVideos;