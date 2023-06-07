import { 
    Td,
    Tr,
    Th,
    Flex, 
    Text, 
    Hide,
    Show,
    Table,
    Thead,
    Tbody,
    Heading,  
    Container,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutKeyboardNavigation = () => {
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
                        Navegação por Teclado
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem situações em que você está desenvolvendo algo único e talvez não 
                        tenha um equivalente nativo no navegador. Portanto, é necessário criar um 
                        controle personalizado e adicionar suporte ao teclado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para tornar um elemento focalizável, é necessário garantir que ele seja 
                        incluído na ordem natural de tabulação. Isso pode ser feito utilizando 
                        o atributo tabindex.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para inserir um elemento na ordem de tabulação, permitindo que o usuário 
                        acesse-o utilizando as teclas Tab ou Shift + Tab, atribuímos o valor zero 
                        ao atributo tabindex do elemento. Dessa forma, quando o usuário 
                        pressionar a tecla Tab, o foco será direcionado para aquele elemento, e 
                        quando ele pressionar outras teclas no teclado, os eventos de teclado 
                        serão enviados para esse elemento. Veja o exemplo a seguir:
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, o tabindex zero permite que o elemento seja focalizado 
                        programaticamente. Portanto, podemos chamar o método de foco desse 
                        elemento em JavaScript e direcionar o foco para ele. Isso pode ser 
                        útil se precisarmos redirecionar o usuário para um controle específico, 
                        talvez após a conclusão de uma ação ou evento em nossa página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para tornar um elemento não incluído na ordem de tabulação, mas ainda 
                        focalizável, podemos adicionar o atributo tabindex com o valor -1. Dessa 
                        forma, não será possível focar no elemento ao pressionar a tecla 
                        Tab. No entanto, podemos selecionar o elemento usando um pequeno código 
                        JavaScript, como mostrado no exemplo abaixo:
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O tabindex -1 pode ser útil em soluções onde precisamos gerenciar o foco, 
                        movendo-o para outro lugar na página para proporcionar uma experiência 
                        de tabulação mais fácil e eficiente. Também pode ser usado para desabilitar 
                        temporariamente um controle interativo personalizado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quanto a elementos com tabindex maior que zero, eles serão pulados à 
                        frente de todos os outros na ordem de tabulação natural. No entanto, 
                        é geralmente desaconselhado usar tabindex com um valor maior que zero, 
                        pois isso é considerado um antipadrão. A razão é que os leitores de 
                        tela navegam pela DOM de maneira linear, o que significa que não há 
                        garantia de que os usuários irão acessar os controles com tabindex 
                        mais alto antes de qualquer outro elemento no documento.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Portanto, a melhor prática geral é reorganizar o elemento anteriormente 
                        no DOM se desejar que ele tenha uma posição mais alta na ordem de tabulação.
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
                        Disponibilização de todas as Funções da Página via Teclado

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
                        Todas as funções da página desenvolvidas em linguagens de script, como 
                        JavaScript, devem ser programadas considerando o uso do teclado. O 
                        foco não deve estar bloqueado ou fixado em um elemento específico, 
                        permitindo que o usuário navegue por todos os elementos utilizando o teclado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Algumas funcionalidades específicas do mouse possuem uma correspondência 
                        lógica via teclado, conforme apresentado na tabela a seguir: 
                    </Text>

                    <TableContainer>
                        <Table variant='striped' size='sm'>
                            <TableCaption>Eventos de teclado e seus correspondentes aos de mouse</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Evento do teclado</Th>
                                    <Th>Evento correspondente do mouse</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>onkeydown</Td>
                                    <Td>onmousedown</Td>
                                </Tr>
                                <Tr>
                                    <Td>onkeyup</Td>
                                    <Td>onmouseup</Td>
                                </Tr>
                                <Tr>
                                    <Td>onkeypress</Td>
                                    <Td>onclick*</Td>
                                </Tr>
                                <Tr>
                                    <Td>onfocus*</Td>
                                    <Td>onmouseover</Td>
                                </Tr>
                                <Tr>
                                    <Td>onblur*</Td>
                                    <Td>onmouseout</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>

                    <Text
                        my='1rem'
                        fontWeight='600'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Observação: * Alguns manipuladores de eventos são independentes de 
                        dispositivos, ou seja, aplicam-se a qualquer 
                        dispositivo (mouse, teclado ou outros), como é o caso 
                        de: onFocus, onBlur, onSelect, onChange e 
                        onClick (quando utilizado em um link ou elemento de formulário).
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando múltiplos manipuladores de eventos são utilizados para uma mesma 
                        ação, de forma a permitir seu funcionamento tanto pelo mouse quanto 
                        pelo teclado, é importante testar o resultado final em diferentes 
                        navegadores e com diferentes recursos de tecnologia assistiva para 
                        garantir que o evento seja acessível de fato.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dê preferência por utilizar o 
                        <Text as='span' fontWeight='semibold'> onclick/onkeypress</Text> em vez 
                        de <Text as='span' fontWeight='semibold'>onmousedown/onkeydown e onmouseup/onkeyup</Text>, 
                        pois estes últimos disparam automaticamente o evento via teclado. Caso haja 
                        necessidade real de utilização desses eventos, é importante controlar 
                        qual tecla deve ser acionada para que o evento ocorra.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Existem funcionalidades do mouse que não possuem uma correspondência direta 
                        via teclado, como é o caso do duplo clique (dblclick). Nestes casos, é 
                        necessário implementar uma função alternativa, por exemplo, incluindo 
                        botões que executem a mesma função através do teclado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O evento onclick já funciona via teclado (tecla ENTER) na maioria dos 
                        navegadores. Os menus do tipo dropdown e outros que contiverem 
                        subitens devem ser acessíveis pelo teclado.
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
                        Teclado - Sem Exceção

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.1.3'
                            tooltipText='Ver Critério WCAG de Sucesso 2.1.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo de funcionalidade em JavaScript para um site seria uma página com 
                        uma tabela de dados. A tabela possui cabeçalhos de coluna e linha, e cada 
                        célula contém um valor. A funcionalidade permite que o usuário navegue 
                        pela tabela utilizando apenas o teclado, sem a necessidade de usar o mouse.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A funcionalidade é implementada utilizando o evento "tabindex" do 
                        JavaScript. Quando o usuário pressiona a tecla Tab, o foco muda para 
                        a próxima célula na tabela. Ao pressionar as setas do teclado, o 
                        foco se desloca para a célula adjacente na direção da seta 
                        pressionada. O usuário também pode utilizar as teclas Enter ou Space 
                        para selecionar uma célula específica.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, a funcionalidade fornece mecanismos de navegação pelo teclado 
                        para acessar o cabeçalho da coluna e linha atual, permitindo que o 
                        usuário entenda o contexto dos dados exibidos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A seguir, apresentamos como essa funcionalidade pode ser implementada no 
                        exemplo de tabela mencionado anteriormente, adicionando o código JavaScript 
                        relevante: 
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É possível adicionar o atributo tabindex aos elementos que deseja permitir 
                        a navegação pelo teclado e utilizar JavaScript para detectar a 
                        pressionar das setas e mover o foco para o elemento tabindex anterior 
                        ou posterior.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Esse código utiliza o método addEventListener para detectar o evento keydown, 
                        ou seja, quando uma tecla é pressionada. Em seguida, ele cria um array com 
                        os elementos que possuem o atributo tabindex e utiliza o método indexOf 
                        para descobrir qual elemento possui o foco atual (document.activeElement). Por 
                        fim, um switch é utilizado para detectar as setas de navegação e mover o 
                        foco para o elemento tabindex anterior ou posterior.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Essa funcionalidade é importante, pois permite que pessoas com dificuldades 
                        de movimento, como aquelas com problemas de mobilidade física, acessem e 
                        interajam com o conteúdo da tabela de forma eficiente e independente. Além 
                        disso, ela também beneficia usuários que preferem utilizar o teclado em 
                        vez do mouse, como pessoas com dificuldades de visão, que podem encontrar 
                        dificuldades em rastrear o cursor do mouse na tela.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutKeyboardNavigation;