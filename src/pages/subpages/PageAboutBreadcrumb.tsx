import { 
    Flex, 
    Text,
    Hide,
    Show,
    Heading, 
    ListItem,
    Container,
    UnorderedList
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutBreadcrumb = () => {
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
                        Breadcrumbs
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
                        Informando ao usuário sua localização na página de forma acessível

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.4.8'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.8 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/location'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É essencial fornecer um mecanismo que permita ao usuário se orientar dentro de 
                        um conjunto de páginas, informando sua localização atual. Uma abordagem 
                        comumente utilizada é a implementação de "migalhas de pão" (breadcrumbs), que 
                        são links navegáveis dispostos em uma lista hierárquica, permitindo ao usuário 
                        entender o caminho percorrido até a página atual.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Importante ressaltar que todas as páginas do caminho, exceto a página atual, devem 
                        ser implementadas como links e inseridas em uma lista.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de implementação de breadcrumbs em HTML5, juntamente com a estilização em CSS3:
                    </Text>

                    <PostComponent article_name={'breadcrumb_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os breadcrumbs desempenham um papel fundamental na acessibilidade web, proporcionando 
                        uma melhor experiência de navegação para todos os usuários, especialmente para 
                        aqueles que dependem de tecnologias assistivas, como leitores de tela. Abaixo 
                        estão algumas razões pelas quais os breadcrumbs são importantes para a acessibilidade:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Orientação espacial: Os breadcrumbs oferecem uma orientação visual clara sobre 
                            a localização do usuário em um site, o que é particularmente útil para pessoas 
                            com deficiência visual. Isso permite que eles entendam a estrutura do site e 
                            naveguem com mais facilidade.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Contexto e compreensão: Os breadcrumbs mostram a hierarquia do site, permitindo 
                            que os usuários compreendam a relação entre as páginas e o conteúdo. Isso é 
                            especialmente valioso para pessoas com deficiências cognitivas ou que têm 
                            dificuldade em acompanhar a estrutura do site.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Navegação eficiente: Os breadcrumbs oferecem uma forma adicional de navegação, 
                            permitindo que os usuários acessem facilmente níveis superiores do site. Isso 
                            é útil para pessoas que desejam voltar rapidamente a uma seção anterior sem 
                            percorrer toda a estrutura de navegação novamente.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Melhoria na usabilidade: Os breadcrumbs facilitam a localização e a recuperação 
                            de informações, tornando a navegação mais intuitiva e eficiente. Isso beneficia 
                            todos os usuários, independentemente de terem deficiências ou não.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao projetar um site acessível, é recomendado incluir breadcrumbs claros e 
                        consistentes em todas as páginas, seguindo as melhores práticas de 
                        implementação. Certifique-se de que os breadcrumbs sejam identificáveis pelos 
                        leitores de tela e possam ser navegados facilmente pelos usuários. Dessa forma, 
                        você estará aprimorando a acessibilidade e a usabilidade do seu site para todos 
                        os visitantes.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutBreadcrumb;