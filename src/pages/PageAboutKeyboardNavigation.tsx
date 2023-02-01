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

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutKeyboardNavigation = () => {
    return (
        <Flex>
            <Hide below='md'>
                <MenuSideBar />
            </Hide>

            <Container maxW='container.xl' height='100vh' overflowY='auto' p='0'>

                <Show below='md'>
                    <MenuMobile marginBottom='0'/>
                </Show>

                <Flex flexDirection='column' p='1rem'>

                    <Heading as='h1' my='1rem'>
                        Navegação pelo Teclado
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso ???
                    </Heading>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Disponibilizar todas as funções da página via teclado (2.1.1 e 2.1.2)
                    </Heading>

                    <Text mb='1rem'>
                        Todas as funções da página desenvolvidas utilizando-se linguagens de 
                        script (javascript) devem ser programadas, primeiramente, para o uso 
                        com teclado.
                    </Text>

                    <Text mb='1rem'>
                        O foco não deverá estar bloqueado ou fixado em um elemento da página, 
                        para que o usuário possa mover-se pelo teclado por todos os elementos.
                    </Text>

                    <Text mb='1rem'>
                        Algumas funções específicas do mouse possuem uma função lógica correspondente 
                        via teclado, conforme mostrado na tabela a seguir: 
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

                    <Text mb='1rem' fontWeight='bold'>
                        OBS: * Alguns manipuladores de eventos são dispositivos-independentes, ou 
                        seja, se aplicam a qualquer dispositivo (mouse, teclado ou outro), como é 
                        o caso de: onFocus, onBlur, onSelect, onChange, e onClick (quando o 
                        onClick for utilizado em um link ou elemento de formulário).
                    </Text>

                    <Text mb='1rem'>
                        Quando forem utilizados múltiplos manipuladores de eventos para uma ação, de 
                        maneira que ela funcione tanto pelo mouse como pelo teclado, é importante 
                        testar o resultado final em diferentes navegadores e utilizando diferentes 
                        recursos de tecnologia assistiva, para garantir que o evento seja, de fato, 
                        acessível.
                    </Text>

                    <Text mb='1rem'>
                        Dê preferência por utilizar o 
                        <Text as='span' fontWeight='semibold'> onclick/onkeypress</Text> em vez 
                        de <Text as='span' fontWeight='semibold'>onmousedown/onkeydown e onmouseup/onkeyup</Text>, 
                        pois estes últimos fazem com que o evento seja disparado automaticamente através do teclado. Se houver real necessidade de utilização destes eventos, deverá ser feito um controle sobre qual tecla deverá ser acionada para que o evento ocorra
                    </Text>

                    <Text mb='1rem'>
                        Existem funções do mouse que não possuem uma função correspondente via teclado, 
                        como é o caso de duplo clique (dblclick). Nesses casos, é necessário implementar 
                        a função de maneira alternativa, como, por exemplo, incluindo botões que 
                        executem, pelo teclado, a função de forma equivalente.
                    </Text>

                    <Text mb='1rem'>
                        O evento onclick já funciona pelo teclado (tecla ENTER) na maioria dos 
                        navegadores. Os menus do tipo dropdown e outros que contiverem subitens 
                        devem ser acessíveis pelo teclado. 
                    </Text>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Exemplo
                    </Heading>

                    <Text mb='1rem'>
                        Um exemplo de funcionalidade de um site em javascript seria uma página com uma 
                        tabela de dados. A tabela contém cabeçalhos de coluna e linha, e cada célula 
                        contém um valor. A funcionalidade permite que o usuário navegue pela tabela 
                        usando apenas o teclado, sem precisar usar o mouse.
                    </Text>

                    <Text mb='1rem'>
                        A funcionalidade é implementada usando o evento "tabindex" do javascript. Quando 
                        o usuário pressiona a tecla Tab, o foco muda para a próxima célula na 
                        tabela. Quando o usuário pressiona as setas do teclado, o foco muda para a 
                        célula adjacente na direção da seta pressionada. O usuário também pode usar as 
                        teclas Enter ou Space para selecionar uma célula específica.
                    </Text>

                    <Text mb='1rem'>
                        Além disso, a funcionalidade fornece mecanismos de navegação de teclado para 
                        acessar o cabeçalho de coluna e linha corrente, permitindo que o usuário 
                        entenda qual é o contexto dos dados que estão sendo exibidos.
                    </Text>

                    <PostComponent article_name={'keyboard-navigation_01'} />

                    <Text my='1rem'>
                        Essa funcionalidade é importante porque permite que pessoas com dificuldades 
                        de movimento, como pessoas com problemas de mobilidade física, possam acessar 
                        e interagir com o conteúdo da tabela de forma eficiente e independente. Além 
                        disso, ela também beneficia usuários que preferem usar o teclado em vez do 
                        mouse, como pessoas com dificuldades de visão, que podem encontrar dificuldades 
                        para rastrear o cursor do mouse na tela.
                    </Text>

                    <Text mb='1rem'>
                        Mas percebendo que há momentos em que você está construindo algo e único e talvez 
                        não tenha um analógo nativo no navegador. Portanto, você precisa sair da estrada 
                        e criar o seu proprio controle personalizado e talvez adicionar seu próprio suporte 
                        de teclado.
                    </Text>

                    <Text mb='1rem'>
                        Agora, para fazer algo assim, a primeira coisa que você precisa fazer é garantir que 
                        esse elemento seja focalizável. E para fazer isso, vamos usar o atributo tabindex.
                    </Text>

                    <Text mb='1rem'>
                        Para inserir um elemento na ordem de tabulação natural para que o usuário possa acessá-lo 
                        usando as teclas Tab ou Shift + Tab. Para isso, damos o atributo tabindex ao elemento com 
                        o valor igual a zero. Assim, quando o usuario apertar a tecla Tab ele verá que o foco passa 
                        a ir para aquele elemento, e quando ele começar a apertar outros botões no teclado, os eventos 
                        de teclado serão direcionados para esse elemento.
                    </Text>

                    <Text mb='1rem'>
                        Outra coisa para se saber sobre o tabindex zero é que isso significa que o elemento também pode 
                        ser focalizado programaticamente. Então, podemos chamar seu método de foco em JavaScript e 
                        direcionar o foco para ele. Isso é últil se você precisar enviar um usuário para um controle 
                        específico, talvez depois que ele concluir alguma ação ou algum evento que ocorre em sua página.
                    </Text>

                    <Text mb='1rem'>
                        Para que um elemento não esteja na ordem de tabulação mas que ele ainda sejá focalizável adicionamos 
                        o tabindex com o valor de -1 onde não consegumos mais focaliza-lo apertando a tecla Tab. Porém com 
                        um pequeno código javascript podemos selecionar o elemento, como mostrado no exemplo abaixo.
                    </Text>

                    <PostComponent article_name={''} />

                    <Text my='1rem'>
                        Assim, o tabindex -1 pode ser últil para soluções em que talvez voc~e precise gerenciar o foco, 
                        movendo o foco para outro lugar na página para que o suário tenha uma experiência de tabulação mais 
                        fácil e eficiente. Ou você pode usá-lo para desabilitar temporariamente um controle interativo 
                        personalizavel.
                    </Text>

                    <Text mb='1rem'>
                        Para elementos com tabindex maiores que zero, significa que esse elemento será saltado à frente de 
                        todo o resto na ordem de tabulação natural. A maneira como funciona é que começa no valor mais baixo, 
                        maior que zero, e vai subindo. Em geral, não é aconcelhado usar o tabindex com um valor maior que zero, 
                        pois é considerado um antipadrão. E a razão é porque os leitores de tela navegam pela DOM de maneira 
                        linear, desta forma, não se tem garantia que os usuários irão necessariamente acessar os controles 
                        tabindex mais altos antes de qualquer coisa no documento.
                    </Text>

                    <Text mb='1rem'>
                        Portanto, a melhor prática geral, se você deseja que algo seja mais alto na ordem de tabulação, basta 
                        movê-lo anteriormente no DOM.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutKeyboardNavigation;