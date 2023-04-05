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

const PageAboutAudios = () => {
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
                        Áudios
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
                        Fornecer alternativa para áudio

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
                        Áudio gravado deve possuir uma transcrição descritiva. Além de essencial para 
                        pessoas com deficiência auditiva, a alternativa em texto também é importante 
                        para usuários que não possuem equipamento de som, que desejam apenas realizar a 
                        leitura do material ou não dispõem de tempo para ouvir um arquivo multimídia. Neste 
                        caso, também é desejável a alternativa em Libras.
                    </Text>

                    <PostComponent article_name={'audios_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Uma apresentação prévia do conteúdo dos dois tipos de arquivo e de sua duração 
                        também é desejável.
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
                        Fornecer controle de áudio para som

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.4.2'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-control'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Deve ser fornecido um mecanismo para parar, pausar, silenciar ou ajustar o volume 
                        de qualquer som que se reproduza na página.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutAudios;