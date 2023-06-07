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

const PageAboutHTMLInitialStructure = () => {
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
                        Estrutura Inicial HTML
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A estrutura inicial HTML5 é a base para o desenvolvimento de sites 
                        acessíveis. Veja abaixo um exemplo dessa estrutura:
                    </Text>

                    <PostComponent article_name={'html_01'} />

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
                        Organize o código HTML de forma lógica e semântica

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
                        É crucial que o código HTML seja organizado de maneira lógica e semântica, ou 
                        seja, apresentando os elementos em uma ordem compreensível e correspondendo 
                        ao conteúdo desejado. Cada elemento HTML deve ser utilizado de acordo com 
                        sua finalidade específica.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Utilize marcações semânticas adequadas para indicar cabeçalhos (h1, h2, h3), 
                        listas (ul, ol, dl), texto enfatizado (strong), código (code), 
                        abreviaturas (abbr), citações longas (blockquote) e outros 
                        elementos. Dessa forma, as páginas poderão ser apresentadas e compreendidas 
                        mesmo sem estilos adicionais, como folhas de estilo. É importante ressaltar 
                        que o código semanticamente correto desempenha um papel fundamental na 
                        acessibilidade de usuários com deficiência visual, já que os leitores 
                        de tela descrevem o tipo de elemento antes de ler seu conteúdo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo prático de como utilizar corretamente a semântica 
                        HTML5 em conjunto com ARIA (Accessible Rich Internet Applications):
                    </Text>

                    <PostComponent article_name={'html_02'} />

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
                        Identifique o idioma principal da página

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 3.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-page'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É necessário identificar o idioma principal utilizado nos documentos 
                        HTML. Isso pode ser feito por meio do atributo "lang" para HTML 
                        e "xml:lang" para documentos XHTML. Certifique-se de declarar o idioma 
                        principal em todas as páginas, pois isso não apenas auxilia na 
                        acessibilidade do conteúdo, mas também melhora a indexação pelos motores 
                        de busca.
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
                        Informe mudanças de idioma no conteúdo

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 3.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Se algum elemento de uma página possuir conteúdo em um idioma diferente do 
                        idioma principal, é importante identificá-lo utilizando o atributo "lang". No 
                        entanto, essa recomendação não se aplica a nomes próprios ou termos 
                        técnicos que sejam compreendidos no contexto.
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
                        Ofereça um título descritivo e informativo para a página

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 2.4.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/page-titled'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O título da página desempenha um papel essencial na acessibilidade. Ele deve 
                        ser descritivo e informativo, representando o conteúdo principal da 
                        página, pois será a primeira informação lida pelo leitor de tela quando o 
                        usuário acessar a página. Utilize o elemento "title" para definir o 
                        título e, de preferência, siga a estrutura recomendada pelo 
                        ePWG (E-Ping Web), como [assunto principal da página] – [nome do site ou sistema], evitando 
                        palavras extras ou recursos estilísticos desnecessários.
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
                        Dividir as áreas de informação

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 3.2.3'
                            tooltipText='Ver Critério WCAG de Sucesso 3.2.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Uma prática fundamental para garantir a acessibilidade web é dividir as 
                        áreas de informação em grupos facilmente gerenciáveis. As divisões mais 
                        comuns são "topo", "conteúdo", "menu" e "rodapé". Nas páginas internas 
                        do site, é importante manter a mesma estrutura de divisão para que os 
                        usuários possam se familiarizar rapidamente com a organização. Vale 
                        ressaltar que a página inicial pode ter uma divisão diferente das 
                        páginas internas, devido à presença de mais elementos. Veja o exemplo 
                        a seguir que mostra a divisão da página inicial contendo os 
                        blocos "topo", "menu", "conteúdo" e "rodapé", além da barra de 
                        acessibilidade com atalhos.
                    </Text>

                    <PostComponent article_name={'html_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A divisão em blocos de conteúdo é essencial para permitir o uso de atalhos, 
                        oferecendo aos usuários acesso rápido às áreas desejadas. É importante 
                        manter um estilo de apresentação coerente e sistemático em todas as páginas 
                        do site, seguindo um padrão de estrutura. Os elementos de navegação 
                        principais devem ser mantidos na mesma posição em todas as páginas, 
                        exceto na página inicial, que pode apresentar uma estrutura diferenciada.
                    </Text>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Utilizando HTML5 e ARIA
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os elementos estruturais do HTML, como HEADER, NAV, SECTION, ARTICLE, ASIDE e 
                        FOOTER, já são interpretados pela maioria dos leitores de tela. No entanto, 
                        é importante utilizar os papéis (roles) de landmarks do ARIA associados 
                        a esses elementos, para garantir que todas as tecnologias assistivas 
                        possam interpretar corretamente as informações. Embora a informação 
                        fique duplicada, os leitores de tela que reconhecem o HTML5 darão prioridade 
                        ao HTML e não lerão a mesma informação duas vezes.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui estão alguns exemplos de elementos estruturais no HTML5:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<header>`} - Contém informações introdutórias para uma página ou seção.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<nav>`} - Utilizado para seções da página que contêm links para outras 
                            páginas ou seções, como o menu principal.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<section>`} - Representa uma seção genérica ou uma seção que contém um 
                            aplicativo, semelhante ao elemento {"<div>"}, separando seções do documento. 
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<article>`} - Representa uma seção independente da página, como uma 
                            postagem em um blog ou um comentário em um fórum. 
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<aside>`} - Contém conteúdo relacionado à área principal do documento.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            {`<footer>`} - Utilizado para demarcar o rodapé da página ou de uma seção do conteúdo.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        E aqui estão alguns exemplos de landmarks no ARIA:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Banner - Contém informações voltadas para o site como um todo, 
                            representando as informações normalmente presentes no topo das 
                            páginas, como o título, o logotipo do site e a barra de acessibilidade.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Complementary - Conteúdo adicional ou complementar ao conteúdo principal.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Contentinfo - Contém informações gerais do site como um todo, que 
                            normalmente aparecem no rodapé, como direitos autorais e informações 
                            de contato.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Main - Contém o conteúdo principal da página.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Navigation - Contém os links para navegar pelas partes do 
                            site ou da página, como o menu.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Search - Esta seção contém o formulário de busca do site.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O elemento HEADER pode ser utilizado várias vezes em uma mesma página sem 
                        problemas de semântica, pois ele possui duas funções diferentes. A primeira 
                        função é conter as informações do topo da página, nesse caso, deve-se 
                        utilizar o role banner. A segunda função é indicar um cabeçalho de 
                        seção e pode ser usado várias vezes no documento. Nesse caso, deve-se 
                        utilizar o role heading e, preferencialmente, incluir um nível de título.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O conteúdo principal do site não possui um elemento específico no HTML5 
                        como os demais, então sua identificação é feita com o valor main no role.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O elemento FOOTER, assim como o HEADER, pode ser utilizado mais de uma vez na 
                        mesma página, pois pode ser usado para dois propósitos diferentes. O primeiro 
                        é para o rodapé geral da página, que deve receber o valor contentinfo 
                        para o role. O segundo é para indicar um rodapé em seções e, nesse caso, 
                        deve-se utilizar o role complementary.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O elemento SECTION do HTML5 é indicado para separar seções dentro do 
                        documento e pode ser utilizado quantas vezes forem necessárias na mesma 
                        página. O ARIA role que tem o mesmo propósito do elemento é o valor section.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de estrutura de página utilizando os elementos estruturais 
                        do HTML5 e os roles do ARIA. Além dos landmarks, também foram utilizados 
                        outros roles, como o heading (utilizado para identificar títulos) e o 
                        article (identifica conteúdo que faz sentido isolado, como uma postagem 
                        em um blog). 
                    </Text>

                    <PostComponent article_name={'html_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Como podemos ver, o HTML5 ampliou consideravelmente a quantidade de elementos 
                        que, em conjunto com os roles do ARIA, facilitam a aplicação de semântica em 
                        áreas estruturais. No entanto, mesmo com a aplicação dessas novas 
                        ferramentas, ainda é necessário fornecer âncoras para as áreas relevantes 
                        da página, pois a marcação semântica por si só não é suficiente para garantir 
                        que os leitores de tela ou outros agentes de usuário que possuem 
                        funcionalidades específicas para navegação por teclado possam listar esses 
                        novos elementos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Toda divisão de conteúdo que tenha um significado importante deve ser feita 
                        utilizando o elemento SECTION em vez do elemento DIV, já que o DIV no HTML5 
                        tem apenas a função de agrupar elementos, sem fornecer uma separação 
                        semântica dos demais elementos. 
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
                        Evite criar páginas com atualizações automáticas periódicas

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
                        A atualização automática periódica - comumente usada por canais de notícias - é 
                        frequentemente realizada usando o atributo http-equiv com conteúdo "refresh" do 
                        elemento meta no cabeçalho do documento (por exemplo: {`<'meta http-equiv="refresh" content="30" /'>`}, 
                        onde a página seria atualizada a cada 30 segundos). O problema dessa atualização é que ela 
                        retira do usuário a autonomia de escolha (semelhante à abertura de novas instâncias nos navegadores) 
                        e pode confundir e desorientar os usuários, especialmente aqueles que usam leitores de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Como exemplo de uma boa prática, em uma interface web de e-mail (webmail), um 
                        desenvolvedor pode fornecer um botão ou link para buscar novos e-mails 
                        recebidos em vez de atualizar automaticamente. Em páginas onde o limite de 
                        tempo é absolutamente necessário, o usuário deve ser informado de que a 
                        página está sendo atualizada automaticamente.
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
                        Evite utilizar redirecionamento automático de páginas

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
                        Não devem ser utilizadas marcações para redirecionar para uma nova página, 
                        como o uso do atributo http-equiv com conteúdo "refresh" do elemento meta. Em 
                        vez disso, o servidor deve ser configurado para que o redirecionamento seja 
                        transparente para o usuário.
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
                        Fornecer alternativa para modificar o limite de tempo

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 2.2.1'
                            tooltipText='Ver Critério WCAG de Sucesso 2.2.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em uma página onde há um limite de tempo para realizar uma tarefa, deve haver 
                        a opção de desligar, ajustar ou prolongar esse limite. Essa recomendação não 
                        se aplica a eventos em que o limite de tempo é absolutamente necessário. É 
                        importante lembrar que, em ambos os casos, o limite de tempo deve ser 
                        informado ao usuário.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao tratar da acessibilidade da web, essas práticas ajudam a garantir que os 
                        usuários tenham controle e possam navegar pelo conteúdo sem encontrar 
                        alterações ou interrupções inesperadas. Ao evitar atualizações automáticas, 
                        fornecer redirecionamento transparente e permitir que os usuários 
                        modifiquem os limites de tempo, os desenvolvedores podem criar uma 
                        experiência web mais inclusiva para todos os usuários, incluindo aqueles 
                        com deficiências.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de como essas práticas podem ser implementadas:
                    </Text>

                    <PostComponent article_name={'html_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Neste exemplo, temos uma página que demonstra uma abordagem alternativa à 
                        atualização automática. Em vez de atualizar a página automaticamente, é 
                        fornecido um botão "Buscar novos e-mails" para que o usuário possa 
                        decidir quando deseja buscar por novas mensagens. Dessa forma, o usuário 
                        tem controle sobre a ação e não é interrompido de maneira inesperada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembrando que este é apenas um exemplo simplificado para ilustração. Você pode 
                        adaptar e personalizar o código de acordo com as necessidades específicas 
                        do seu projeto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao seguir essas diretrizes, os desenvolvedores podem melhorar a acessibilidade 
                        de seus sites, aprimorar a experiência do usuário e estar em conformidade 
                        com os padrões de acessibilidade da web. Além disso, fornecer instruções 
                        claras e alternativas para limites de tempo capacita os usuários a navegar 
                        na web de maneira mais eficaz e eficiente.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutHTMLInitialStructure;