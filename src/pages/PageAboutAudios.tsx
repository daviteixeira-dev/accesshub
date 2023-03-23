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
                        my='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                    >
                        Áudios
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        fontSize='1rem'
                        fontWeight='400'
                        fontFamily='Inter'
                    >
                        Ver WCAG 2.0 Critério de Sucesso 1.2.1, 1.2.2, 1.2.6 e 1.4.2.
                    </Heading>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Fornecer alternativa para áudio (1.2.1, 1.2.2 e 1.2.6)
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
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Fornecer controle de áudio para som (1.4.2)
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