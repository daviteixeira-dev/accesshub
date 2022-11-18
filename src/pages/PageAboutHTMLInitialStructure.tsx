import { 
    Flex, 
    Text, 
    Heading, 
    ListItem, 
    Container, 
    UnorderedList 
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'
import PostComponent from '../components/PostComponent/PostComponent'

const PageAboutHTMLInitialStructure = () => {
  return (
    <Flex>
        <MenuSideBar />
        <Container maxW='container.xl' height='100vh' overflowY='auto'>
            
            <Heading as='h1' my='1rem'>
                Estrutura Inicial HTML
            </Heading>

            <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                Ver WCAG 2.0 Critério de Sucesso 1.3.1, 2.2.1, 2.4.2, 3.1.1, 3.1.2, 3.2.3 e 3.2.5.
            </Heading>

            <Text mb='1rem'>
                O código HTML deve ser organizado de forma lógica e semântica, ou seja, apresentando 
                os elementos em uma ordem compreensível e correspondendo ao conteúdo desejado. Cada 
                elemento HTML deve ser utilizado para o fim que ele foi criado.
            </Text>

            <Text mb='1rem'>
                Deve-se identificar o principal idioma utilizado nos documentos. A identificação é 
                feita por meio do atributo lang do HTML e, para documentos XHTML, é utilizado o 
                xml:lang. Ele deve ser declarado em todas as páginas, pois além de auxiliar na 
                acessibilidade do conteúdo, também permite melhor indexação pelos motores de busca.
            </Text>

            <Text mb='1rem'>
                Abaixo um exemplo de estrutura inicial HTML5:
            </Text>

            <PostComponent article_name={'html_01'} />

            <Text mb='1rem'>
                Assim, marcação semântica adequada deve ser utilizada para designar os cabeçalhos 
                (h1, h2, h3), as listas (ul, ol, dl), texto enfatizado (strong), marcação de código 
                (code), marcação de abreviaturas (abbr), marcação de citações longas (blockquote), etc. 
                Dessa forma, as páginas poderão ser apresentadas e compreendidas sem recursos de 
                estilização, tal como as folhas de estilo. Além disso, o código semanticamente 
                correto é muito importante para usuários com deficiência visual, pois os leitores 
                de tela descrevem primeiro o tipo de elemento e depois realizam a leitura do conteúdo 
                que está dentro desse elemento.
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Informar mudança de idioma no conteúdo
            </Heading>

            <Text mb='1rem'>
                Se algum elemento de uma página possuir conteúdo em um idioma diferente do principal, 
                este deverá estar identificado pelo atributo lang. Essa recomendação não se aplica 
                para nomes próprios ou termos técnicos que sejam compreendidos no contexto.
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Oferecer um título descritivo e informativo à página
            </Heading>

            <Text mb='1rem'>
                O título da página deve ser descritivo e informativo, devendo representar o conteúdo 
                principal da página, já que essa informação será a primeira lida pelo leitor de tela, 
                quando o usuário acessar a página. O título é informado pelo elemento TITLE e deve 
                preferencialmente seguir a estrutura recomendada pelo ePWG, que é [assunto principal 
                da página] – [nome do sítio ou sistema] sem palavras extras, ou recursos estilísticos.
            </Text>

            <Text mb='1rem'>
                Abaixo um exemplo correto de como utilizar corretamente a semântica HTML5 e utilizando 
                ARIA:
            </Text>

            <PostComponent article_name={'html_02'} />

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Dividir as áreas de informação
            </Heading>

            <Text mb='1rem'>
                Áreas de informação devem ser divididas em grupos fáceis de gerenciar. As divisões mais 
                comuns são “topo”, “conteúdo”, “menu” e “rodapé”. Nas páginas internas deve-se manter 
                uma mesma divisão para que o usuário se familiarize mais rapidamente com a estrutura 
                do site. É importante destacar, entretanto, que a página inicial pode ter uma divisão 
                diferente das páginas internas, pois normalmente ela contém mais elementos. O exemplo 
                a seguir mostra a divisão da página inicial de um site contendo os blocos 
                “topo”, “menu”, “conteúdo” e “rodapé”, além da barra de acessibilidade contendo os 
                atalhos.
            </Text>

            <PostComponent article_name={'html_03'} />

            <Text my='1rem'>
                A divisão em blocos de conteúdo representa a base para a utilização dos atalhos, 
                permitindo que o usuário tenha rápido acesso à área desejada. É importante que 
                as diversas páginas de um site possuam um estilo de apresentação coerente e 
                sistemático, mantendo-se um padrão de estrutura. Assim, elementos principais 
                de navegação deverão ser mantidos na mesma posição em todas as páginas, com 
                exceção da página inicial que, muitas vezes, apresenta uma estrutura diferenciada.
            </Text>

            <Heading as='h4' mb='1rem' fontSize='1rem'>
                Em HTML5 e ARIA
            </Heading>

            <Text mb='1rem'>
                As elementos estruturais do HTML HEADER, NAV, SECTION, ARTICLE, ASIDE e FOOTER já são 
                interpretadas pela maioria dos leitores de tela. No entanto, é importante utilizar os 
                landmarks roles de ARIA associados a elas, para garantir que todos os recursos de 
                tecnologia assistiva realizem a interpretação da informação. Apesar de a informação 
                ficar duplicada, os leitores de tela que reconhecem o HTML5 darão preferência ao HTML 
                e, dessa forma, não irão ler duas vezes a mesma informação.
            </Text>

            <Text mb='1rem'>
                Exemplos de elementos estruturais no HTML5:
            </Text>

            <UnorderedList>
                <ListItem>
                    {`<header>`} - Contém informações introdutórias para uma página ou para uma seção 
                    dela.
                </ListItem>
                <ListItem>
                    {`<nav>`} - É utilizada para seções da página que contenham links para outras 
                    páginas ou seções, como o menu principal, por exemplo. 
                </ListItem>
                <ListItem>
                    {`<section>`} - Representa uma seção genérica ou uma seção que contém uma aplicação. 
                    Funciona de maneira parecida com a elemento {`<div>`}, separando seções do documento. 
                </ListItem>
                <ListItem>
                    {`<article>`} - Representa uma seção da página independente, como uma postagem em 
                    um blog, um comentário em um fórum, entre outros. 
                </ListItem>
                <ListItem>
                    {`<aside>`} - Contém conteúdo relacionado à área principal do documento. 
                </ListItem>
                <ListItem>
                    {`<footer>`} - É utilizada para demarcar o rodapé da página ou de uma seção do 
                    conteúdo. 
                </ListItem>
            </UnorderedList>

            <Text my='1rem'>
                Exemplos de landmark roles em ARIA:
            </Text>

            <UnorderedList>
                <ListItem>
                    Banner - Contém informações voltadas ao site como um todo e não somente à página. 
                    Representa as informações normalmente contidas no topo das páginas, como o 
                    título e o logo do site e a barra de acessibilidade.
                </ListItem>
                <ListItem>
                    Complementary - Conteúdo adicional ou complementar ao conteúdo principal.
                </ListItem>
                <ListItem>
                    Contentinfo - Contém informações gerais do site como um todo, que normalmente 
                    aparecem no rodapé, como copyright, contato, etc.
                </ListItem>
                <ListItem>
                    Main - Contém o conteúdo principal da página.
                </ListItem>
                <ListItem>
                    Navigation - Contém os links para navegar pelas partes do site ou da página, como 
                    é o caso do menu.
                </ListItem>
                <ListItem>
                    Search - Esta seção contém o formulário de busca do site.
                </ListItem>
            </UnorderedList>

            <Text my='1rem'>
                O elemento HEADER pode ser utilizado várias vezes em uma mesma página sem problemas de 
                semântica, pois ele possui duas funções diferentes. A primeira é a de conter as 
                informações do topo da página e, para isso, deverá ser utilizado o role banner. A 
                segunda função é para indicar um cabeçalho de seção e pode ser utilizada várias vezes 
                no documento. Neste caso, deve ser utilizado o role heading e, preferencialmente, 
                deverá conter algum nível de título.
            </Text>

            <Text mb='1rem'>
                O conteúdo principal do site não possui um elemento específico no HTML5 como os 
                demais, então a sua identificação é feita com o valor main no role.
            </Text>

            <Text mb='1rem'>
                O elemento FOOTER, assim como o HEADER, pode ser utilizado mais que uma vez na mesma 
                página, pois ele pode ser utilizado para dois objetivos. O primeiro é para o rodapé 
                geral da página que deve receber o valor contentinfo para o role. O segundo é para 
                indicar rodapé em seções e, nesse caso, deve ser utilizado o role complementary.
            </Text>

            <Text mb='1rem'>
                O elemento SECTION do HTML5 é indicado para separar seções dentro do documento, podendo 
                ser utilizado quantas vezes forem necessárias na mesma página. O ARIA role que contém o 
                mesmo papel do elemento possui o valor section.
            </Text>

            <Text mb='1rem'>
                Abaixo, temos um exemplo de estrutura de uma página utilizando as elementos estruturais 
                do HTML5 e ARIA roles. Além dos landmarks, também foram utilizados outros roles, como é 
                o caso do heading (utilizado para identificar títulos) e do article (identifica conteúdo 
                que faz sentido isolado, que é independente, como uma postagem em um blog). 
            </Text>

            <PostComponent article_name={'html_04'} />

            <Text my='1rem'>
                Como podemos ver, o HTML5 ampliou consideravelmente a quantidade de elementos, os quais, 
                aliados aos roles do WAI ARIA, vêm facilitar a aplicação de semântica em áreas 
                estruturais. Porém, mesmo com a aplicação dessas novas ferramentas ainda devem ser 
                fornecidas âncoras para as áreas relevantes da página, pois a marcação semântica 
                ainda não é suficiente para garantir que os leitores de tela ou outros agentes de 
                usuário que possuem funcionalidades específicas para navegação pelo teclado, consigam 
                listar esses novos elementos.        
            </Text>

            <Text mb='1rem'>
                Toda divisão de conteúdo que possua um significado importante deve ser feita utilizando 
                o elemento SECTION no lugar do elemento DIV, pois o DIV no HTML5 possui a função de 
                apenas agrupar elementos que precisam ser agrupados, mas não possuem uma separação 
                semântica dos demais elementos. 
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Não criar páginas com atualização automática periódica
            </Heading>

            <Text mb='1rem'>
                A atualização automática periódica – muito utilizada por canais de notícias - é comumente 
                realizada através do uso do o atributo http-equiv com conteúdo “refresh” da elemento meta 
                no HEAD do documento (ex: {`<'meta http-equiv="refresh" content="30" /'>`}, onde a página 
                seria recarregada a cada 30 segundos). O problema dessa atualização é que ela tira do 
                usuário sua autonomia em relação à escolha (semelhante a abertura de novas instâncias em 
                navegadores) e podem confundir e desorientar os usuários, especialmente usuários que 
                utilizam leitores de tela.
            </Text>

            <Text mb='1rem'>
                Como exemplo de uma boa prática, em uma interface Web para e-mail (Webmail), um 
                desenvolvedor pode fornecer um botão ou link para buscar novos e-mails recebidos 
                em vez de atualizar automaticamente. Em páginas onde o limite de tempo é absolutamente 
                necessário, o usuário deverá ser informado que a página é atualizada automaticamente.
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Não utilizar redirecionamento automático de páginas
            </Heading>

            <Text mb='1rem'>
                Não devem ser utilizadas marcações para redirecionar a uma nova página, como o uso do 
                atributo http-equiv com conteúdo “refresh” do elemento META. Ao invés disso, deve-se 
                configurar o servidor para que o redirecionamento seja transparente para o usuário.
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Fornecer alternativa para modificar limite de tempo
            </Heading>

            <Text mb='1rem'>
                Em uma página onde há limite de tempo para realizar uma tarefa deve haver a opção de 
                desligar, ajustar ou prolongar esse limite. Essa recomendação não se aplica a eventos 
                em que o limite de tempo é absolutamente necessário. Deve-se lembrar que, em ambos os 
                casos, o limite de tempo deve ser informado.
            </Text>

        </Container>
    </Flex>
  )
}

export default PageAboutHTMLInitialStructure