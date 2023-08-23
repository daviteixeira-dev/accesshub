import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutListenImageDescription = () => {

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
                        Funcionalidade de descrição de imagem em áudio
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
                        Recursos sensoriais

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.3.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O critério 1.3.3 da WCAG (Diretrizes de Acessibilidade para Conteúdo da Web) é 
                        denominado "Recursos sensoriais" e tem como objetivo garantir que as 
                        informações e interações do site possam ser compreendidas e operadas 
                        por usuários com diferentes necessidades sensoriais, como deficiência 
                        visual, auditiva, motora e cognitiva.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Uma funcionalidade que atende ao critério 1.3.3 - Recursos sensoriais da 
                        WCAG é a inclusão de descrições em áudio para imagens e elementos 
                        gráficos. Por exemplo, podemos utilizar código JavaScript para adicionar 
                        descrições em áudio às imagens, utilizando a tag "alt" e a função "speak()" 
                        do JavaScript. Veja um exemplo abaixo:
                    </Text>

                    <PostComponent article_name={'listen-image-description_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para um melhor controle por parte dos usuários que utilizam o teclado, 
                        podemos adicionar um botão de reprodução em HTML e atribuir um ID para 
                        que ele possa ser selecionado pelo JavaScript. Em seguida, escrevemos uma 
                        função que será executada quando o botão for clicado. Essa função pode 
                        usar a API SpeechSynthesis do JavaScript para ler a descrição da imagem 
                        para o usuário.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao clicar no botão "Reproduzir", a descrição da imagem será lida para o 
                        usuário por meio da síntese de fala. Isso atende ao critério 1.3.3 - Recursos 
                        sensoriais da WCAG, pois fornece uma alternativa em áudio para o 
                        conteúdo da imagem.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    )
}

export default PageAboutListenImageDescription