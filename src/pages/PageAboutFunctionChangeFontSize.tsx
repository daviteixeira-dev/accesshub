import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutFunctionChangeFontSize = () => {
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
                        my='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                    >
                        Funcionalidade para alterar o tamanho da fonte
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        fontSize='1rem'
                        fontWeight='400'
                        fontFamily='Inter'
                    >
                        Ver WCAG 2.0 Critério de Sucesso 1.4.4, 2.4.4, 3.2.2 e 3.2.4
                    </Heading>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Permitir redimensionamento sem perda de funcionalidade (1.4.4)
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A página deve continuar legível e funcional mesmo quando redimensionada para 
                        até 200%. Assim, é preciso garantir que, quando a página for redimensionada, 
                        não ocorram sobreposições nem o aparecimento de uma barra horizontal.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de permitir o redimensionamento sem perda de funcionalidade, o leiaute do sítio 
                        deve adequar-se à resolução de tela do dispositivo pelo qual está sendo acessado, 
                        já que, atualmente, não existe mais um padrão de resolução de tela para os 
                        computadores e há uma crescente utilização de dispositivos móveis.
                    </Text>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de código que pode ser usado para 
                        aumentar, diminuir e resetar o tamanho da fonte em um site:
                    </Heading>

                    <PostComponent article_name={'alterarFontes_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Este código apresenta três botões com os textos "(A+)", "(A)" e "(A-)" 
                        e os adiciona a página. Quando os botões são clicados, o código 
                        seleciona todos os elementos com a classe "font-size" 
                        (que deve ser adicionada aos elementos que deseja alterar o tamanho da fonte) e 
                        altera o tamanho da fonte em 2 pixels.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dentro da tag {'<script></script>'} podemos ver os exemplos de como as 
                        funções de aumentar, diminuir e resetar o tamanho da fonte são feitos e 
                        como eles podem ser acessados a partir do atributo "onclick" de um botão no HTML.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Assim, quando um botão é clicado, a função correspondente é chamada e o 
                        tamanho da fonte é alterado. Isso permite que você adicione os botões 
                        diretamente no HTML, sem precisar criá-los dinamicamente usando JavaScript.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você pode adicionar limites de aumento e diminuição de fonte no código acima 
                        adicionando condições dentro dos event listeners dos botões. Os limites são 
                        definidos nas linhas if {`(fontSize < 30)`} e if {`(fontSize > 12)`}, 
                        onde 30px é o limite máximo para o aumento e 12px é o limite mínimo para a 
                        diminuição. Esses limites podem ser ajustados de acordo com as necessidades 
                        do seu site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você pode armazenar o tamanho atual da fonte de cada elemento individualmente, 
                        em vez de usar uma variável global. Dessa forma, cada elemento terá seu próprio 
                        tamanho de fonte e não haverá interferência entre os elementos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dentro do for loop, usamos a função 
                        getComputedStyle(elements[i]).fontSize para recuperar o tamanho atual da fonte do 
                        elemento, e armazenando esse valor na variável fontSize. Depois, verificamos se esse 
                        tamanho é menor que 30px e, se for, adicionando 2 pixels a ele. Dessa forma, cada 
                        elemento com a classe "font-size" terá seu próprio tamanho de fonte e será 
                        aumentado ou diminuido em 2 pixels a cada clique nos botões.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para garantir que os valores originais sejam restaurados corretamente, você pode 
                        armazenar os valores originais da fonte de cada elemento individualmente no 
                        momento em que a página é carregada e, em seguida, usar esses valores para 
                        restaurar a fonte quando a função "resetFont" é chamada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No momento em que a página é carregada, armazenamos os valores originais da fonte 
                        de cada elemento com a classe "font-size" em uma variável 
                        chamada "originalFontSizes". Depois, na função "resetFont", estamos percorrendo 
                        cada elemento e definindo seu tamanho de fonte como o valor armazenado na 
                        variável "originalFontSizes". Dessa forma, cada elemento terá seu tamanho de 
                        fonte original restaurado, independentemente de ter um tamanho diferente 
                        antes de ser modificado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembrando que é importante testar o site com usuários e verificar se o 
                        limite de aumento e diminuição, além da funcionalidade de resetar o 
                        tamanho da fonte, atende a necessidade de todos os usuários.
                    </Text>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Critérios da WCAG que foram atendidos
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        1.4.4 Resizable Text (Texto redimensionável): O código permite que os usuários 
                        aumentem e diminuam o tamanho da fonte, garantindo que eles possam 
                        ajustar a legibilidade do texto de acordo com suas necessidades.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        2.4.4 Link Purpose (Objetivo do Link): Com as funções de aumentar e 
                        diminuir fonte, os usuários sabem claramente qual é a finalidade do botão.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        3.2.2 On Input (Em Entrada): O código utiliza eventos de click para 
                        aumentar e diminuir a fonte, permitindo que os usuários realizem 
                        essas ações facilmente sem precisar de teclado ou outros dispositivos de entrada.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        3.2.4 Consistent Navigation (Navegação Consistente): O código utiliza a 
                        mesma estrutura de botões para aumentar e diminuir a fonte, garantindo 
                        que os usuários possam facilmente encontrar e usar essas funções.
                    </Text>

                    <Heading
                        as='h3'
                        mb='1rem'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                    >
                        Recomendações
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante lembrar que este código apresentado é apenas uma 
                        sugestão e pode ser adaptado de acordo com as necessidades específicas do 
                        seu projeto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, é importante também que seja feito testes de usabilidade para verificar se 
                        a fonte voltando ao tamanho original está de acordo com as necessidades 
                        do usuário, além de verificar se não há problemas de acessibilidade, 
                        como fonte muito pequena, após o reset.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Também é uma boa prática manter o controle do tamanho da fonte em toda 
                        a página, isto é, deixar o tamanho da fonte do conteúdo dinâmico, e não 
                        fixo, para atender a necessidade de usuários com diferentes necessidades.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutFunctionChangeFontSize;