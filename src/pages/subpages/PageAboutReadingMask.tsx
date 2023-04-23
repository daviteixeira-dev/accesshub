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
                        Máscara de Leitura
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
                        Alternativa para foco na leitura do texto

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.4.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum'
                        />
                        
                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap'
                        />
                        
                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts'
                        />
                        
                        <BadgeWCAGInfoNumber 
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
                        Uma funcionalidade interessante de acessibilidade que pode ajudar a melhorar 
                        a experiência de leitura de pessoas com dificuldades visuais é uma máscara 
                        de leitura para sites. Essa funcionalidade pode ser implementada com 
                        JavaScript e CSS e funciona como um destaque móvel que segue o cursor do 
                        mouse e ajuda a manter o foco na leitura de um texto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para implementar essa funcionalidade, você pode criar um elemento de div 
                        com CSS e definir sua posição como absoluta, de modo que possa seguir o 
                        cursor do mouse. Em seguida, você pode adicionar um evento de mousemove 
                        no documento e atualizar a posição do div de acordo com as coordenadas do 
                        cursor.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por exemplo, o código abaixo cria uma máscara de leitura com um fundo 
                        translúcido que segue o cursor do mouse:
                    </Text>

                    <PostComponent article_name={'readingMask_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Podemos implementar uma tag button que ative e desative a máscara de leitura, 
                        podemos adicionar o elemento button no corpo da página e adicionar um 
                        ouvinte de eventos de clique para o botão. Dentro do ouvinte de eventos, 
                        podemos verificar se a classe .mascara está presente no elemento da 
                        máscara. Se estiver presente, removemos a classe. Se não estiver presente, 
                        adicionamos a classe.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um botão com id "toggle-mascara" e criamos uma referência para ele. Em 
                        seguida, adicionamos um ouvinte de eventos de clique para o botão que 
                        verifica se a classe .mascara está presente no elemento da máscara. Se 
                        estiver presente, removemos a classe. Se não estiver presente, adicionamos 
                        a classe.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dentro do ouvinte de eventos do mousemove, verificamos se a classe .mascara 
                        está presente no elemento da máscara. Se estiver presente, atualizamos a 
                        posição da máscara. Se não estiver presente, nada acontece.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por fim, o evento de mousemove foi adicionado para atualizar a posição da 
                        div de acordo com o movimento do mouse apenas na vertical.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Com essa funcionalidade, as pessoas com dificuldades visuais podem usar 
                        a máscara de leitura para acompanhar a leitura do texto e manter o foco 
                        na linha que está sendo lida.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutReadingMask;