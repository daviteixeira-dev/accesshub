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

const PageAboutChangeWebsiteContrast = () => {
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
                        Funcionalidade para mudar o contraste de um site
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso 1.4.3 e 1.4.6
                    </Heading>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Oferecer contraste mínimo entre plano de fundo e primeiro plano (1.4.3)
                    </Heading>

                    <Text mb='1rem'>
                        As cores do plano de fundo e do primeiro plano deverão ser suficientemente 
                        contrastantes para que possam ser visualizadas, também, por pessoas com baixa 
                        visão, com cromodeficiências ou que utilizam monitores de vídeo monocromático.
                    </Text>

                    <Text mb='1rem'>
                        Não deverão ser utilizadas imagens atrás do texto (background), pois acabam 
                        por dificultar a leitura e desviar a atenção do usuário.
                    </Text>

                    <Text mb='1rem'>
                        A relação de contraste pode ser encontrada dividindo-se o valor da luminosidade 
                        relativa da cor mais clara de um dos planos pelo valor da luminosidade 
                        relativa da cor mais escura do outro plano. A relação de contraste entre 
                        plano de fundo e primeiro plano de 3:1 é o nível mínimo de contraste 
                        recomendado pela ISO-9241-3.
                    </Text>

                    <Text mb='1rem'>
                        No entanto, levando-se em consideração a perda de percepção do contraste 
                        resultante da baixa acuidade visual, cromodeficiência ou perda de 
                        sensibilidade ao contraste devido ao envelhecimento, é recomendada 
                        aqui uma maior relação de contraste, de, no mínimo, 4,5:1.
                    </Text>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Contraste - melhorado (1.4.6)
                    </Heading>

                    <Text mb='1rem'>
                        O critério 1.4.6 da WCAG estabelece que os elementos visuais de uma página 
                        web devem apresentar um contraste adequado para facilitar a leitura e a 
                        compreensão por pessoas com deficiência visual ou dificuldades de leitura.
                    </Text>

                    <Text mb='1rem'>
                        O contraste adequado é definido pela relação entre a luminosidade do texto e 
                        a do fundo em que ele se encontra. Para atender ao critério 1.4.6, o 
                        contraste deve ser suficientemente alto para permitir que o conteúdo seja 
                        visualmente acessível. No entanto, para atender plenamente ao critério 1.4.6, 
                        é importante que o contraste padrão do site já esteja em conformidade com as 
                        normas de acessibilidade.
                    </Text>

                    <Text mb='1rem'>
                        O contraste adequado é medido pelo índice de contraste (IC), que varia de 
                        1:1 (sem contraste) a 21:1 (alto contraste). Para o texto normal, o índice 
                        de contraste mínimo recomendado é de 4,5:1, enquanto que para texto 
                        grande (18 pontos ou mais) e texto em negrito, o índice mínimo recomendado 
                        é de 3:1.
                    </Text>

                    <Text mb='1rem'>
                        Portanto, é importante que os desenvolvedores de sites se atentem para o 
                        contraste adequado dos elementos visuais, de forma a garantir a acessibilidade 
                        para todas as pessoas.
                    </Text>

                    <Text mb='1rem'>
                        Aqui está um exemplo de código javascript que pode ser usado para mudar o 
                        contraste do site a partir do clique em um botão:
                    </Text>

                    <PostComponent article_name={'alterar-contraste_01'} />

                    <Text my='1rem'>
                        Criamos uma função "changeContrast" que é chamada quando o botão é 
                        clicado. Dentro da função, estamos selecionando todos os elementos da página 
                        que contem a classe ".contrast" e verificando se o contraste atual é o 
                        padrão (branco fundo e preto fonte). Se for o padrão, mudamos o contraste 
                        para alto (fundo preto e fonte branca) e, caso contrário, estou mudamos o 
                        contraste para o padrão (fundo branco e fonte preta).
                    </Text>

                    <Text mb='1rem'>
                        A variavel "isDarkMode" é acessada para saber se o site é 
                        modo escuro ou claro. Adicionamos também uma variavel "contrastBtn" para pegar 
                        o botão pelo id, onde adicionamos um innerHTML na função changeContrast() para 
                        mudar o texto do botão.
                    </Text>

                    <Text mb='1rem'>
                        Lembrando que esse código é uma sugestão e pode ser adaptado de acordo 
                        com as necessidades específicas do seu projeto.
                    </Text>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Critérios da WCAG que foram atendidos
                    </Heading>

                    <Text mb='1rem'>
                        A partir do código acima, é possível cumprir o critério 1.4.3 Contraste de 
                        cor elevado, que exige que o contraste entre o texto e o fundo seja pelo 
                        menos 4.5:1 para texto normal e 3:1 para texto grande 
                        (maior ou igual a 18 pontos ou 14 pontos em negrito). Isso é alcançado 
                        através da função changeContrast() que altera as cores de todos os 
                        elementos da página para preto e branco, o que garante um contraste 
                        elevado entre o texto e o fundo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
  )
}

export default PageAboutChangeWebsiteContrast