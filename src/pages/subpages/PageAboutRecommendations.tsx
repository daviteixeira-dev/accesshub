import { 
    Flex, 
    Text, 
    Link,
    Hide,
    Show,
    Image,
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

import figura08 from '../../assets/figura-08.png';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutRecommendations = () => {
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
                        Recomendações
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
                        Respeitar os Padrões Web

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 4.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 4.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/parsing'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 4.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 4.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/name-role-value'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os Padrões Web são recomendações do W3C (World Wide Web Consortium), as quais são 
                        destinadas a orientar os desenvolvedores para o uso de boas práticas que tornam a 
                        web acessível para todos, permitindo assim que os desenvolvedores criem experiências 
                        ricas, alimentadas por um vasto armazenamento de dados, os quais estão disponíveis 
                        para qualquer dispositivo e compatíveis com atuais e futuros agentes de usuário 
                        (ex: navegadores). 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando tratamos de acessibilidade as principais recomendações são as de 
                        <Link href='https://www.w3c.br/Padroes/WebDesignAplicacoes'> Web Design e Aplicações</Link>, 
                        que referem-se aos padrões para o desenvolvimento de páginas Web, incluindo HTML5 CSS, 
                        SVG, Ajax, e outras tecnologias para Aplicações Web (WebApps), assim como o padrão 
                        internacional de acessibilidade WCAG, internacionalização e dispositivos móveis.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Outro ponto importante no respeito aos Padrões Web é a separação de camadas. As camadas 
                        lógicas deverão ser separadas, de acordo com o objetivo para o qual elas foram 
                        desenvolvidas. Assim, para a camada de conteúdo devem ser utilizadas as linguagens 
                        de marcação, como HTML e xHTML. Para a camada de apresentação visual do conteúdo, 
                        utilizam-se as folhas de estilo css em qualquer uma de suas versões. Já para a camada 
                        que modifica o comportamento dos elementos, são utilizadas linguagens javascript e 
                        modelos de objeto (dom).
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
                        Ordenar de forma lógica e intuitiva a leitura e tabulação

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.3.2'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.4.3'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Deve-se criar o código HTML com uma sequência lógica de leitura para percorrer links, 
                        controles de formulários e objetos. Essa sequência é determinada pela ordem que se 
                        encontra no código HTML.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É recomendável disponibilizar o bloco do conteúdo principal da página antes do bloco 
                        de menu. Isso facilita o acesso por quem navega via teclado, permitindo um acesso mais 
                        ágil, sem a necessidade de navegar por todos os itens de menu antes de chegar ao 
                        conteúdo. Apesar de atalhos (como links e teclas) auxiliarem nesse sentido, alguns 
                        usuários não sabem e podem ser de difícil utilização para pessoas com deficiência motora.
                    </Text>

                    <PostComponent article_name={'recommendations_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em alguns casos, pode-se forçar a navegação via atributo tabindex. No entanto, se 
                        houver a necessidade de utilizar o tabindex, o mesmo deverá ser utilizado com a 
                        semântica correta e ser verificado manualmente se o fluxo fornecido é realmente o 
                        desejado. O uso do tabindex pode resultar em uma ordem e tabulação inconsistente. 
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
                        Não utilizar apenas a cor para diferenciar elementos

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.3.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.4.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/use-of-color'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A cor ou outras características sensoriais, como forma, tamanho, localização 
                        visual, orientação ou som não devem ser utilizadas como o único meio para 
                        transmitir informações, indicar uma ação, pedir uma resposta ao usuário ou 
                        distinguir um elemento visual.
                    </Text>

                    <Flex
                        my='1rem'
                        justifyContent='center'
                    >
                        <Image 
                            src={figura08} 
                            alt='A esquerda sinais com a visão normal, à direita os mesmo sinais vistos por quem tem daltonismo.' 
                        />
                    </Flex>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Assim, a cor não deve ser o unico elemento de diferenciação. A esquerda sinais 
                        com a visão normal, à direita os mesmo sinais vistos por quem tem daltonismo. 
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
                        Não incluir situações com intermitência de tela

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.3.1'
                            tooltipText='Ver Critério WCAG de Sucesso 2.3.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Não devem ser utilizados efeitos visuais piscantes, intermitentes ou cintilantes. Em 
                        pessoas com epilepsia fotosensitiva, o cintilar ou piscar pode desencadear um ataque 
                        epilético. A exigência dessa diretriz aplica-se também para propaganda de terceiros 
                        inserida na página.
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
                        Assegurar o controle do usuário sobre as alterações temporais do conteúdo

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Conteúdos como slideshows, que “se movem”, rolagens, movimentações em geral ou animações 
                        não devem ser disparadas automaticamente sem o controle do usuário, mesmo em propagandas 
                        na página. Ao usuário deve ser repassado o controle sobre essas movimentações 
                        (quer seja por escolha de preferência de visualização da página, quer por outro método 
                        qualquer acessível a usuário com deficiência). Além disso, o usuário deve ser capaz de 
                        parar e reiniciar conteúdos que se movem, sem exceção. É desejável que o usuário tenha 
                        também o controle da velocidade desses conteúdos.
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
                        Disponibilizar documentos em formatos acessíveis

                        <BadgeWCAGInfoNumber 
                            textWCAG='Sem Critério'
                            tooltipText='É uma recomendação do eMAG'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os documentos devem ser disponibilizados preferencialmente em HTML. Também podem ser 
                        utilizados arquivos para download no formato ODF, tomando-se os cuidados para que 
                        sejam acessíveis. Se um arquivo for disponibilizado em PDF, deverá ser fornecida 
                        uma alternativa em HTML ou ODF.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        OBS: O ODF (Open Document Format) é um formato aberto de documento adotado pela 
                        e-PING (Arquitetura de Interoperabilidade em Governo Eletrônico) que pode ser 
                        implementado em qualquer sistema. O ODF engloba formatos como: ODT (Open Data Text) 
                        para documentos de texto, ODS (Open Data Sheet) para planilhas eletrônicas, 
                        ODP (Open Data Presentation) para apresentações de slides, entre outros.
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
                        Garantir a leitura e compreensão das informações

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.1.5'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.5 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/reading-level'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O texto de um site deve ser de fácil leitura e compreensão, não exigindo do usuário 
                        um nível de instrução mais avançado do que o ensino fundamental completo. Quando o 
                        texto exigir uma capacidade de leitura mais avançada, deve ser disponibilizado 
                        informações suplementares que expliquem ou ilustrem conteúdo principal. Outra 
                        alternativa é versão simplificada do conteúdo em texto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem algumas técnicas que auxiliam na melhora da inteligibilidade de textos, 
                        como, por exemplo:
                    </Text>

                    <UnorderedList mb='1rem'>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Desenvolver apenas um tópico por parágrafo;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar sentenças organizadas de modo simplificado para o propósito 
                            do conteúdo (sujeito, verbo e objeto, preferencialmente);
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Dividir sentenças longas em sentenças mais curtas;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Evitar o uso de jargão, expressões regionais ou termos especializados que 
                            possam não ser claros para todos;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar palavras comuns no lugar de outras pouco familiares;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar listas de itens ao invés de uma longa série de palavras ou 
                            frases separadas por vírgulas;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Fazer referências claras a pronomes e outras partes do documento;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar, preferencialmente, a voz ativa.
                        </ListItem>
                    </UnorderedList>

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
                        Exibir uma explicação para siglas, abreviaturas e palavras incomuns

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.1.3'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/unusual-words'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.1.4'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/abbreviations'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao menos na primeira ocorrência de siglas, abreviaturas ou palavras incomuns 
                        (ambíguas, desconhecidas ou utilizadas de forma muito específica), deve ser 
                        disponibilizada sua explicação ou forma completa. Essa explicação pode estar 
                        expressa no próprio texto, pode estar presente em um glossário ou, então, através 
                        da utilização do elemento abbr, conforme exemplos a seguir.
                    </Text>

                    <PostComponent article_name={'recommendations_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um site sobre desenvolvimento Web fornece um link de menu para o Glossário, que 
                        contém explicações para termos como HTML, CSS, Tag, atributo, etc.
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
                        Fornecer controle de animação

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para qualquer animação que inicie automaticamente na página devem ser fornecidos 
                        mecanismos para que o usuário possa pausar, parar ou ocultar tal animação.
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
                        Garantir que os objetos programáveis sejam acessíveis

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 2.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.1.2'
                            tooltipText='Ver Critério WCAG de Sucesso 2.1.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Deve-se garantir que scripts e conteúdos dinâmicos e outros elementos programáveis 
                        sejam acessíveis e que seja possível sua execução via navegação. Além de proporcionar 
                        o uso por teclado, estratégias devem ser adotadas para proporcionar o acesso a todos 
                        independente de seu dispositivo. A funcionalidade drag-an-drop pode ter como 
                        alternativa o uso dos atalhos de recortar e colar.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando não for possível que o elemento programável seja diretamente acessível, deve 
                        ser fornecida uma alternativa em HTML para o conteúdo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando o script for utilizado em uma página da Web, uma forma de fornecer uma alternativa 
                        para ele é através do elemento NOSCRIPT. Este elemento pode ser utilizado para mostrar 
                        conteúdos em navegadores que não suportam scripts ou que tenham o script desabilitado. 
                        No entanto, se o navegador tiver suporte a scripts e estes estiverem habilitados, o 
                        elemento NOSCRIPT será ignorado. Dessa forma, a utilização do elemento NOSCRIPT para 
                        um script inacessível não garante que o objeto seja acessível. Assim, a recomendação 
                        é que o próprio script seja desenvolvido tomando-se o cuidado para que ele seja 
                        acessível, e o elemento NOSCRIPT deve ser utilizado para abranger os casos em que 
                        scripts não são suportados.  
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutRecommendations;