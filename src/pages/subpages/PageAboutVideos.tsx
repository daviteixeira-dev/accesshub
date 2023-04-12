import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container,  
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutVideos = () => {
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
                        Vídeos
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
                        Fornecer alternativa para vídeo

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.6'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.6 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded'
                        />

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
                        as='h2'
                        mb='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Audiodescrição ou transcrição descritiva em texto

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.5'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.5 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.7'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.7 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.2.8'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.8 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Vídeos pré-gravados que transmitem conteúdo visual que não está disponível na faixa de áudio 
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

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Caso não seja possível ter uma audiodescrição é recomendavel que seja fornecido um arquivo 
                        contendo a descrição em formato de texto para o usúario, como podemos ver no exemplo a seguir:
                    </Text>

                    <PostComponent article_name={'videos_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A transcrição descritiva em texto, ajuda aos usúarios que possam ter problemas de visão, 
                        dificultando assim a leitura das legendas e/ou a audição seja ruim, dificultando assim o 
                        entendimento dos diálogos presentes no vídeo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>       
    );
};

export default PageAboutVideos;