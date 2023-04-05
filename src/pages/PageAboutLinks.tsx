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

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutLinks = () => {
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
                        Links
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A tag de eçemento de âncora, {`<a>`} em HTML, com o atributo href cria-se um link entre 
                        páginas web, na mesma página ou em endereços de outras URL. O conteúdo dentro de cada {`<a>`} 
                        deverá indicar o destino do link. Abaixo um exemplo de sua implementação:
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
                        Separar links adjacentes

                        <BadgeWCAGInfoNumber 
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
                        Links adjacentes devem ser separados por mais do que simples espaços, para que não 
                        fiquem confusos, em especial para usuários que utilizam leitor de tela. Para isso, 
                        é recomendado o uso de listas, onde cada elemento dentro da lista é um link. As 
                        listas podem ser estilizadas visualmente com CSS para que os itens sejam mostrados 
                        da maneira desejada, como um ao lado do outro.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Caso os links estejam no meio de um parágrafo de conteúdo texto, pode-se utilizar 
                        vírgulas, parênteses, colchetes, pipe, entre outros, para fazer a separação.
                    </Text>

                    <PostComponent article_name={'links_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem três roles da especificação ARIA que podem ser utilizados para as listas: 
                        o role navigation, que indica o menu principal do site (esse role possui a mesma 
                        função que a elemento NAV do HTML5). O segundo e o terceiro roles são muito semelhantes, 
                        o role menu e o role menubar. Os dois possuem a função de indicar menus que não são o 
                        principal da página. A diferença entre os dois é que o role menu possui um sentindo 
                        mais geral enquanto o menubar é ideal para criações de menu na horizontal. Um exemplo 
                        de uso de menu pode ser a utilização de sub-menus dentro do menu principal. Os roles 
                        menu e menubar podem possuir filhos com role menuitem para indicar que se trata de 
                        um item daquele menu.
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
                        Não abrir novas instâncias sem a solicitação do usuário

                        <BadgeWCAGInfoNumber 
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
                        A decisão de utilizar-se de novas instâncias – por exemplo abas ou janelas - para 
                        acesso a páginas e serviços ou qualquer informação deve ser de escolha do usuário. 
                        Assim, não devem ser utilizados:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Pop-ups;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            A abertura de novas abas ou janelas;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            O uso do atributo target=“_blank”;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Mudanças no controle do foco do teclado;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Entre outros elementos, que não tenham sido solicitadas pelo usuário.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É muito importante que os links abram na guia ou janela atual de navegação, pois os 
                        usuários com deficiência visual podem ter dificuldade em identificar que uma nova 
                        janela foi aberta. Além disso, estando em uma nova janela, não conseguirão retornar 
                        à página anterior utilizando a opção voltar do navegador. Quando for realmente 
                        necessária a abertura de um link em nova janela, é recomendado que tal ação seja 
                        informada ao usuário no próprio texto do link. Isso permite ao usuário decidir 
                        se quer ou não sair da janela ou aba em que se encontra e, caso decida acessar o 
                        link, ele saberá que se trata de uma nova aba ou janela.
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
                        Descrever links clara e sucintamente

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 2.4.4'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                        />

                        <BadgeWCAGInfoNumber
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
                        Deve-se identificar claramente o destino de cada link, informando, inclusive, se o link 
                        remete a outro site. Além disso, é preciso que o texto do link faça sentido mesmo 
                        quando isolado do contexto da página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É preciso tomar cuidado para não utilizar a mesma descrição para dois ou mais links que 
                        apontem para destinos diferentes. Da mesma forma, links que remetem ao mesmo destino 
                        devem ter a mesma descrição.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Não há necessidade de utilizar o atributo title em links, já que esse atributo não é 
                        bem suportado por recursos de tecnologia assistiva, como leitores de tela, não tem 
                        utilidade para quem navega apenas pelo teclado e não tem bom suporte em dispositivos 
                        móveis, como celulares, entre outros problemas. Assim, se você quiser fornecer 
                        informações adicionais para um link, faça-o no próprio texto do link ou no contexto, 
                        e jamais repita o conteúdo do link no atributo title.
                    </Text>

                    <PostComponent article_name={'links_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em links de arquivos para download, é necessário informar a extensão e o tamanho 
                        do arquivo no próprio texto do link, conforme exemplo a seguir.
                    </Text>

                    <PostComponent article_name={'links_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        OBS: Não se deve fazer a utilização de links do tipo “clique aqui”, “leia mais”, “mais”, 
                        “saiba mais”, “veja mais”, “acesse a lista”, pois estas expressões não fazem sentido 
                        fora do contexto. Muitos usuários de leitores de tela navegam por links, tornando 
                        descrições como “Clique aqui”, “Veja mais” insuficientes para o usuário saber o 
                        destino do link, ou localizá-lo na página.
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
                        Possibilitar que o elemento com foco seja visualmente evidente

                        <BadgeWCAGInfoNumber
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
                        A área que recebe o foco pelo teclado deve ser claramente marcada, devendo a área 
                        de seleção ser passível de ser clicada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por padrão, links e elementos de formulário já apresentam a borda destacada ao 
                        receberem o foco do teclado. Essa borda pode ser modificada via CSS para melhorar 
                        o destaque, mas não deverá ser removida. Recomenda-se que a espessura mínima da borda 
                        seja de 2px.
                    </Text>

                    <PostComponent article_name={'links_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A pseudo-classe :focus é utilizada para definir o estilo de qualquer elemento HTML 
                        que receber o foco do teclado, como links e elementos de formulário. A 
                        pseudo-classe :hover é utilizada para definir o estilo de um elemento quando 
                        passa-se o mouse sobre ele.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutLinks;