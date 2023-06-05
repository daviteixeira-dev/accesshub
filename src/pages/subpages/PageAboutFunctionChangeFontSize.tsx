import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutFunctionChangeFontSize = () => {
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
                        Funcionalidade de Ajuste de Tamanho da Fonte
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
                        Possibilitando o redimensionamento sem perda de funcionalidade

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.4.4'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante garantir que a página permaneça legível e funcional mesmo quando 
                        redimensionada em até 200%. Para isso, evite sobreposições de elementos e a 
                        aparição de barras de rolagem horizontais ao redimensionar a página.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de permitir o redimensionamento sem perda de funcionalidade, é essencial 
                        que o layout do site se adapte à resolução de tela do dispositivo utilizado 
                        para acessá-lo. Considerando a diversidade de resoluções presentes em 
                        computadores e dispositivos móveis, é importante garantir uma experiência 
                        consistente.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de código que permite aumentar, diminuir e 
                        redefinir o tamanho da fonte em um site:
                    </Text>

                    <PostComponent article_name={'alterarFontes_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O código abaixo demonstra a adição de três botões, "(A+)", "(A)" e "(A-)", à 
                        página. Ao clicar nesses botões, o código seleciona todos os elementos com a 
                        classe "font-size" (que deve ser adicionada aos elementos que terão seu 
                        tamanho de fonte alterado) e ajusta o tamanho da fonte em 2 pixels.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você pode adicionar limites para o aumento e a diminuição do tamanho da fonte 
                        adicionando condições dentro dos event listeners dos botões. Os limites são 
                        definidos em {"if (fontSize < 30)"} e {"if (fontSize > 12)"}, onde 30px é o 
                        limite máximo para o aumento e 12px é o limite mínimo para a 
                        diminuição. Esses limites podem ser ajustados de acordo com as necessidades 
                        do seu site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É possível armazenar o tamanho atual da fonte de cada elemento individualmente, 
                        em vez de utilizar uma variável global. Dessa forma, cada elemento terá seu 
                        próprio tamanho de fonte e não haverá interferência entre eles.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dentro do loop `for`, utilizamos a 
                        função `getComputedStyle(elements[i]).fontSize` para obter o tamanho atual 
                        da fonte do elemento e armazenamos esse valor na variável `fontSize`. Em 
                        seguida, verificamos se esse tamanho é menor que 30px e, se for, 
                        adicionamos 2 pixels a ele. Dessa forma, cada elemento com a 
                        classe "font-size" terá seu próprio tamanho de fonte e será aumentado ou 
                        diminuído em 2 pixels a cada clique nos botões.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para garantir que os valores originais sejam restaurados corretamente, você 
                        pode armazenar os valores originais da fonte de cada elemento individualmente 
                        quando a página é carregada e, em seguida, utilizá-los para restaurar a 
                        fonte quando a função "resetFont" é chamada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No momento em que a página é carregada, armazenamos os valores originais da 
                        fonte de cada elemento com a classe "font-size" em uma variável 
                        chamada "originalFontSizes". Em seguida, na função "resetFont", percorremos 
                        cada elemento e definimos seu tamanho de fonte como o valor armazenado na 
                        variável "originalFontSizes". Dessa forma, cada elemento terá seu tamanho 
                        de fonte original restaurado, independentemente de ter um tamanho diferente 
                        antes de ser modificado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante testar o site com usuários para verificar se o limite de aumento 
                        e diminuição, além da funcionalidade de redefinir o tamanho da fonte, 
                        atendem às necessidades de todos os usuários.
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
                        Critérios da WCAG que são atendidos

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.4.4'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/resize-text'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 2.4.4'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                        />

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 3.2.4'
                            tooltipText='Ver Critério WCAG de Sucesso 3.2.4 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        1.4.4 Texto redimensionável: O código permite que os usuários aumentem e 
                        diminuam o tamanho da fonte, garantindo que eles possam ajustar a 
                        legibilidade do texto de acordo com suas necessidades.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        2.4.4 Objetivo do Link: Com as funções de aumento e diminuição da fonte, os 
                        usuários compreendem claramente a finalidade dos botões.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        3.2.2 Em Entrada: O código utiliza eventos de clique para aumentar e diminuir a 
                        fonte, permitindo que os usuários realizem essas ações facilmente, sem a 
                        necessidade de utilizar o teclado ou outros dispositivos de entrada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O código utiliza a mesma estrutura de botões para aumentar e diminuir a 
                        fonte, garantindo que os usuários possam encontrar e utilizar essas funções 
                        facilmente.
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
                        Recomendações
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembre-se de que esse código é apenas uma sugestão e pode ser adaptado de 
                        acordo com as necessidades específicas do seu projeto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, é importante realizar testes de usabilidade para verificar se a 
                        restauração do tamanho original da fonte está de acordo com as necessidades 
                        do usuário e se não há problemas de acessibilidade, como fonte muito 
                        pequena, após a redefinição.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Também é uma boa prática manter o controle do tamanho da fonte em toda a 
                        página, ou seja, permitir que o tamanho da fonte do conteúdo seja dinâmico 
                        e não fixo, para atender às necessidades de usuários com diferentes 
                        preferências.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutFunctionChangeFontSize;