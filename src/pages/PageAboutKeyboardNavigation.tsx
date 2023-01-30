import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
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

                    <PostComponent article_name={''} />

                    <Text my='1rem'>
                        Essa funcionalidade é importante porque permite que pessoas com dificuldades 
                        de movimento, como pessoas com problemas de mobilidade física, possam acessar 
                        e interagir com o conteúdo da tabela de forma eficiente e independente. Além 
                        disso, ela também beneficia usuários que preferem usar o teclado em vez do 
                        mouse, como pessoas com dificuldades de visão, que podem encontrar dificuldades 
                        para rastrear o cursor do mouse na tela.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutKeyboardNavigation;