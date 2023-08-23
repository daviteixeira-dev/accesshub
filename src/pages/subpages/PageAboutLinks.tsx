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

const PageAboutLinks = () => {
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
                        Links
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A tag de âncora em HTML, {"<a></a>"}, com o atributo href, é usada para criar links 
                        entre páginas da web, seja na mesma página ou em endereços de outras URLs. O 
                        conteúdo dentro da tag {"<a></a>"} indica o destino do link. Veja abaixo um exemplo 
                        de implementação:
                    </Text>

                    <PostComponent article_name={'links_01'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Separação de links adjacentes

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.3.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para evitar confusão, especialmente para usuários de leitores de tela, é 
                        recomendado separar links adjacentes com mais do que espaços simples. Uma 
                        maneira de fazer isso é usando listas, onde cada item da lista é um link. As 
                        listas podem ser estilizadas com CSS para exibir os itens lado a lado da 
                        maneira desejada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Se os links estiverem dentro de um parágrafo de texto, também é possível usar 
                        vírgulas, parênteses, colchetes, pipes e outros caracteres para separá-los.
                    </Text>

                    <PostComponent article_name={'links_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem três roles da especificação ARIA que podem ser usados em listas: navigation, 
                        que indica o menu principal do site (equivalente ao elemento NAV do HTML5), menu 
                        e menubar. O role menu e o role menubar são semelhantes e indicam menus que não 
                        são o menu principal da página. A diferença é que o role menu é mais geral, 
                        enquanto o menubar é ideal para criar menus horizontais. Um exemplo de uso de 
                        menu é ter submenus dentro do menu principal. Os roles menu e menubar podem ter 
                        filhos com o role menuitem para indicar que são itens de menu.
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
                        Abrir novas instâncias apenas com solicitação do usuário

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 3.2.5'
                            tooltipText='Ver Critério WCAG de Sucesso 3.2.5 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/change-on-request'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A decisão de abrir novas abas, janelas ou realizar qualquer mudança no controle 
                        de foco do teclado deve ser deixada para o usuário. Portanto, evite usar:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Pop-ups.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Abrir novas abas ou janelas.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            O atributo target="_blank".
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Mudanças no controle do foco do teclado.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Outros elementos que não tenham sido solicitados pelo usuário.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante que os links abram na guia ou janela de navegação atual, pois 
                        usuários com deficiência visual podem ter dificuldade em identificar que 
                        uma nova janela foi aberta. Além disso, se estiverem em uma nova janela, eles 
                        podem ter dificuldade em voltar para a página anterior usando o botão "voltar" 
                        do navegador. Se for realmente necessário abrir um link em uma nova janela, é 
                        recomendado informar isso ao usuário no próprio texto do link. Isso permite 
                        que o usuário decida se deseja ou não sair da guia ou janela atual, e ele 
                        estará ciente de que é uma nova janela ou aba.
                    </Text>

                    <PostComponent article_name={'links_03'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Descrição clara e sucinta dos links

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.4.4'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.4.9'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.9 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Cada link deve ter uma descrição clara do destino, inclusive se o link leva a outro 
                        site. Além disso, o texto do link deve fazer sentido mesmo fora do contexto da página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Tome cuidado para não usar a mesma descrição para dois ou mais links que apontem 
                        para destinos diferentes. Da mesma forma, links que levam ao mesmo destino devem 
                        ter a mesma descrição.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Não é necessário usar o atributo title em links, pois ele não é bem suportado por 
                        tecnologias assistivas, como leitores de tela, e não é útil para pessoas que 
                        navegam apenas pelo teclado. Além disso, o atributo title não tem bom suporte 
                        em dispositivos móveis, como celulares. Portanto, se você quiser fornecer 
                        informações adicionais para um link, inclua-as no próprio texto do link ou no 
                        contexto da página, mas evite repetir o conteúdo do link no atributo title.
                    </Text>

                    <PostComponent article_name={'links_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao criar links para downloads de arquivos, é importante informar a extensão e o 
                        tamanho do arquivo no próprio texto do link. Veja o exemplo a seguir:
                    </Text>

                    <PostComponent article_name={'links_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Observação: Evite usar links com textos como "clique aqui", "leia mais", 
                        "mais informações", "saiba mais", "veja mais", "acesse a lista", pois essas 
                        expressões não fazem sentido fora do contexto. Muitos usuários de leitores de 
                        tela navegam pelos links, e descrições como "clique aqui" ou "veja mais" não 
                        são suficientes para que eles entendam o destino do link ou o localizem na página.
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
                        Evidenciar visualmente o elemento em foco

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.4.7'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.7 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-visible'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A área que recebe o foco do teclado deve ser claramente destacada, e essa área deve 
                        ser clicável. Por padrão, os links e elementos de formulário já apresentam uma borda 
                        destacada quando recebem o foco do teclado. Essa borda pode ser estilizada com 
                        CSS para melhorar sua aparência, mas não deve ser removida. Recomenda-se uma 
                        espessura mínima de borda de 2px.
                    </Text>

                    <PostComponent article_name={'links_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A pseudo-classe :focus é usada para definir o estilo de um elemento HTML quando 
                        recebe o foco do teclado, como links e elementos de formulário. A 
                        pseudo-classe :hover é usada para definir o estilo de um elemento quando o mouse 
                        passa sobre ele.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutLinks;