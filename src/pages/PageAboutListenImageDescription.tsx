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

const PageAboutListenImageDescription = () => {

    return (
        <Flex>
            <Hide below='md'>
                <MenuSideBar />
            </Hide>

            <Container maxW='container.xl' height='100vh' overflowY='auto' p='0'>

                <Show below='md'>
                    <MenuMobile marginBottom='0'/>
                </Show>

                <Flex flexDirection='column' p='1rem'>

                    <Heading as='h1' my='1rem'>
                        Funcionalidade para ouvir a descrição de uma imagem
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso 1.3.3
                    </Heading>

                    <Text mb='1rem'>
                        O critério 1.3.3 da WCAG (Web Content Accessibility Guidelines) é conhecido 
                        como "Características sensoriais" e tem como objetivo garantir que as 
                        informações e interações do site possam ser compreendidas e operadas 
                        por usuários com necessidades sensoriais diferentes. Isso inclui, por 
                        exemplo, usuários com deficiência visual, auditiva, motora e cognitiva.
                    </Text>

                    <Text mb='1rem'>
                        Uma funcionalidade que obedece o critério 1.3.3 - Características sensoriais 
                        da WCAG é a inclusão de descrições de áudio para imagens e elementos gráficos. 
                        Por exemplo, um código javascript que adiciona descrições de áudio para 
                        imagens utilizando a tag "alt" e a função "speak()" do javascript. Veja ela a seguir:
                    </Text>

                    <PostComponent article_name={'listen-image-description_01'} />

                    <Text my='1rem'>
                        Neste exemplo, depois de colocar uma imagem de sua escolha, quando o cursor do 
                        mouse passa sobre uma imagem, é verificado se a imagem possui uma descrição de 
                        áudio na tag "alt" e, se sim, a função "speak()" é executada para reproduzir 
                        essa descrição. Isso ajuda os usuários com deficiência visual a compreender o 
                        conteúdo das imagens e melhora a acessibilidade do site.
                    </Text>

                    <Text mb='1rem'>
                        Para um melhor controle para usuarios que usam o teclado, podemos adicionar um 
                        botão de reprodução HTML e dar-lhe um ID para que possa selecioná-lo no 
                        JavaScript. Em seguida, escrevemos uma função que execute quando o botão é 
                        clicado. Essa função pode usar a API de SpeechSynthesis do JavaScript para 
                        ler a descrição da imagem para o usuário.
                    </Text>

                    <Text mb='1rem'>
                        Ao clicar no botão "Play", a descrição da imagem será lida para o usuário 
                        através da síntese de fala. Isso atenderia ao critério 1.3.3 - Características 
                        sensoriais da WCAG, pois fornece uma alternativa de áudio para o conteúdo 
                        da imagem.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    )
}

export default PageAboutListenImageDescription