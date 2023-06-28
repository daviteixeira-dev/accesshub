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
                        Os Padrões Web são recomendações do W3C (World Wide Web Consortium) que 
                        orientam os desenvolvedores sobre o uso de boas práticas para tornar a 
                        web acessível a todos. Ao seguir esses padrões, os desenvolvedores podem 
                        criar experiências ricas, alimentadas por um vasto armazenamento de 
                        dados, que estão disponíveis em todos os dispositivos e compatíveis 
                        com navegadores atuais e futuros. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando se trata de acessibilidade, as principais recomendações são os Padrões 
                        de <Link color='blue.900' href='https://www.w3c.br/Padroes/WebDesignAplicacoes' textDecor='underline' isExternal> Web Design e Aplicações</Link>, que 
                        abrangem o desenvolvimento de páginas da web, incluindo HTML5, CSS, SVG, Ajax e 
                        outras tecnologias para WebApps, bem como o padrão internacional de 
                        acessibilidade WCAG, internacionalização e dispositivos móveis.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Outro aspecto importante ao respeitar os Padrões Web é a separação de 
                        camadas. As camadas lógicas devem ser separadas de acordo com seu 
                        propósito. A camada de conteúdo deve utilizar linguagens de marcação, 
                        como HTML e XHTML. Para a camada de apresentação visual do conteúdo, 
                        utiliza-se CSS em qualquer uma de suas versões. Já para a camada que 
                        modifica o comportamento dos elementos, são utilizadas linguagens 
                        JavaScript e modelos de objeto (DOM).
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
                        Cabeçalhos e rótulos

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.4.6'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.6 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os títulos (h1 até h6) e rótulos (campos de formulários) devem ser claros e 
                        descritivos, auxiliando os usuários a encontrar as informações desejadas 
                        com mais facilidade. Além disso, os controles de entrada de formulário 
                        devem ser rotulados de forma explícita, descrevendo qual entrada é 
                        esperada. Isso ajuda os usuários a entender como preencher o formulário.
                    </Text>

                    <PostComponent article_name={'recommendations_04'} />

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
                        É importante criar o código HTML com uma sequência lógica de leitura para 
                        percorrer links, controles de formulários e objetos. Essa sequência é 
                        determinada pela ordem em que os elementos aparecem no código HTML.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Recomenda-se que o bloco de conteúdo principal da página seja disponibilizado 
                        antes do bloco de menu. Isso facilita o acesso para usuários que navegam 
                        usando o teclado, permitindo um acesso mais rápido sem a necessidade de 
                        percorrer todos os itens do menu antes de chegar ao conteúdo. Embora 
                        atalhos (como links e teclas) ajudem nesse sentido, alguns usuários podem 
                        não estar familiarizados com eles e podem ter dificuldades devido a 
                        deficiências motoras.
                    </Text>

                    <PostComponent article_name={'recommendations_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em alguns casos, pode ser necessário forçar a ordem de navegação usando 
                        o atributo tabindex. No entanto, ao utilizar o tabindex, é importante 
                        garantir que ele seja usado corretamente e verificar manualmente se o 
                        fluxo fornecido é realmente o desejado. O uso incorreto do tabindex 
                        pode resultar em uma ordem e tabulação inconsistentes.
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
                        visual, orientação ou som, não devem ser usadas como o único meio para 
                        transmitir informações, indicar uma ação, solicitar uma resposta do 
                        usuário ou distinguir um elemento visual.
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
                        Por exemplo, a cor não deve ser o único elemento de diferenciação, pois pessoas 
                        com daltonismo podem ter dificuldades em distinguir cores. Na imagem acima, à 
                        esquerda estão os sinais vistos por pessoas com visão normal, à direita estão 
                        os mesmos sinais vistos por pessoas com daltonismo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Podemos usar como exemplo a validação de uma senha em um formulário, em que a 
                        mensagem de erro traz um ícone de alerta e uma mensagem explicando como 
                        corrigir o erro, além da cor que destaca a informação. Veja o código a seguir:
                    </Text>

                    <PostComponent article_name={'recommendations_03'} />

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
                        Não devem ser utilizados efeitos visuais piscantes, intermitentes ou 
                        cintilantes. Esses efeitos podem desencadear ataques epiléticos em pessoas 
                        com epilepsia fotosensitiva. Essa diretriz também se aplica a anúncios 
                        de terceiros inseridos na página.
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
                        Conteúdos como slideshows, rolagens, movimentações em geral ou animações 
                        não devem ser reproduzidos automaticamente sem o controle do usuário, mesmo 
                        em propagandas na página. O usuário deve ter o controle sobre essas 
                        movimentações, seja por meio de preferências de visualização da página 
                        ou de outro método acessível a usuários com deficiência. Além disso, o 
                        usuário deve ser capaz de interromper e reiniciar conteúdos em movimento, 
                        sem exceção. É desejável que o usuário também possa controlar a 
                        velocidade desses conteúdos.
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
                        Os documentos devem ser disponibilizados preferencialmente em HTML. Também é 
                        possível utilizar arquivos para download no formato ODF, desde que sejam 
                        acessíveis. Se um arquivo for disponibilizado em PDF, é necessário fornecer 
                        uma alternativa em HTML ou ODF.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Observação: O ODF (Open Document Format) é um formato aberto de documento 
                        adotado pela e-PING (Arquitetura de Interoperabilidade em Governo Eletrônico), 
                        que pode ser implementado em qualquer sistema. O ODF engloba formatos como 
                        ODT (Open Data Text) para documentos de texto, ODS (Open Data Sheet) para 
                        planilhas eletrônicas, ODP (Open Data Presentation) para apresentações 
                        de slides, entre outros.
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
                        O texto de um site deve ser de fácil leitura e compreensão, não exigindo do 
                        usuário um nível de instrução mais avançado do que o ensino fundamental 
                        completo. Quando o texto exigir uma capacidade de leitura mais avançada, 
                        devem ser fornecidas informações suplementares que expliquem ou ilustrem 
                        o conteúdo principal. Outra alternativa é fornecer uma versão simplificada 
                        do conteúdo em texto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem algumas técnicas que podem ajudar a melhorar a inteligibilidade 
                        dos textos, tais como:
                    </Text>

                    <UnorderedList mb='1rem'>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Desenvolver apenas um tópico por parágrafo.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar sentenças organizadas de forma simplificada para o propósito 
                            do conteúdo, seguindo a estrutura sujeito-verbo-objeto, preferencialmente.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Dividir sentenças longas em sentenças mais curtas.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Evitar o uso de jargão, expressões regionais ou termos especializados 
                            que possam não ser claros para todos.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar palavras comuns em vez de palavras pouco familiares.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Utilizar listas de itens em vez de uma longa série de palavras ou 
                            frases separadas por vírgulas.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Fazer referências claras a pronomes e outras partes do documento.
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
                        Pelo menos na primeira ocorrência de siglas, abreviaturas ou palavras 
                        incomuns (ambíguas, desconhecidas ou utilizadas de forma muito específica), 
                        deve ser fornecida sua explicação ou forma completa. Essa explicação 
                        pode estar presente no próprio texto, em um glossário ou por meio do 
                        uso do elemento {"<abbr></abbr>"}, conforme os exemplos a seguir:
                    </Text>

                    <PostComponent article_name={'recommendations_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um site sobre desenvolvimento web fornece um link no menu para um 
                        Glossário, que contém explicações para termos como HTML, CSS, Tag, 
                        atributo, etc.
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
                        Para qualquer animação que inicie automaticamente na página, devem ser 
                        fornecidos mecanismos para que o usuário possa pausar, parar ou ocultar 
                        a animação.
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
                        Garantir a acessibilidade dos objetos programáveis

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
                        É importante garantir que scripts, conteúdos dinâmicos e outros elementos 
                        programáveis sejam acessíveis e que sua execução seja possível por meio 
                        da navegação. Além disso, estratégias devem ser adotadas para garantir o 
                        acesso a todos os usuários, independentemente do dispositivo utilizado. A 
                        funcionalidade de arrastar e soltar (drag-and-drop) pode ter como 
                        alternativa o uso de atalhos de recortar e colar.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando não for possível tornar um elemento programável diretamente acessível, 
                        é necessário fornecer uma alternativa em HTML para o conteúdo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando um script for utilizado em uma página da web, uma forma de fornecer 
                        uma alternativa é por meio do elemento NOSCRIPT. Esse elemento pode ser 
                        utilizado para exibir conteúdos em navegadores que não suportam scripts 
                        ou nos quais os scripts estão desabilitados. No entanto, se o navegador 
                        tiver suporte a scripts e eles estiverem habilitados, o elemento NOSCRIPT 
                        será ignorado. Portanto, é importante desenvolver o próprio script com 
                        cuidado para garantir a acessibilidade, e o elemento NOSCRIPT deve ser 
                        usado para abranger os casos em que os scripts não são suportados. 
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutRecommendations;