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

const PageAboutReadingMask = () => {
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
                        Máscara de Leitura para Acessibilidade na Web
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
                        Solução para aprimorar a experiência de leitura

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.4.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 3.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts'
                        />
                        
                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 4.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 4.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/name-role-value'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Uma funcionalidade de acessibilidade muito útil para melhorar a experiência 
                        de leitura de usuários com dificuldades visuais é a máscara de leitura em 
                        sites. Essa solução, implementada com JavaScript e CSS, consiste em um 
                        destaque móvel que acompanha o cursor do mouse, auxiliando na 
                        focalização do texto durante a leitura.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para implementar essa funcionalidade em seu site, você pode criar um 
                        elemento {"<div>"} com estilos CSS e definir sua posição como absoluta, 
                        permitindo que ele siga o cursor do mouse. Em seguida, adicione um 
                        evento de mousemove ao documento para atualizar a posição do 
                        elemento {"<div>"} de acordo com as coordenadas do cursor.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por exemplo, o código abaixo cria uma máscara de leitura com um 
                        fundo translúcido que acompanha o cursor do mouse:
                    </Text>

                    <PostComponent article_name={'readingMask_01'} />

                    <Text
                        mb='1rem'
                        ml='1rem'
                        fontWeight='400'
                        fontSize='.9rem'
                        fontFamily='Inter'
                    >
                        Trocar os "" por crases `` na linha 57. Codígo: ... mascara.style.top = `$` ...
                    </Text>


                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, é possível adicionar um botão que habilite ou desabilite a 
                        máscara de leitura. Para isso, crie um elemento {"<button>"} em seu 
                        código HTML e adicione um ouvinte de eventos de clique a esse 
                        botão. No manipulador de eventos, você pode verificar se a 
                        classe "mascara" está presente no elemento da máscara. Se estiver 
                        presente, remova a classe; caso contrário, adicione-a.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No evento de mousemove, verifique se a classe "mascara" está presente 
                        no elemento da máscara. Se estiver presente, atualize a posição da 
                        máscara com base no movimento do mouse. Caso contrário, a máscara 
                        permanecerá inalterada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Com essa funcionalidade, pessoas com dificuldades visuais podem usar 
                        a máscara de leitura para acompanhar a linha que está sendo lida, 
                        mantendo o foco e facilitando a compreensão do conteúdo textual em seu site.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutReadingMask;