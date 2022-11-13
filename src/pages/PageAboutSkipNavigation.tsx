import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import MenuSideBar from '../components/MenuSideBar/MenuSideBar'
import PostComponent from '../components/PostComponent/PostComponent'

const PageAboutSkipNavigation = () => {
  return (
    <Flex>
        <MenuSideBar />
        <Container maxW='container.xl' height='100vh' overflowY='auto'>
            
            <Heading as='h1' my='1rem'>
                Pular navegação
            </Heading>

            <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                Ver WCAG 2.0 Critério de Sucesso 2.4.1
            </Heading>
            
            <Text mb='1rem'>
                Devem ser fornecidas âncoras, disponíveis na barra de acessibilidade, que apontem 
                para links relevantes presentes na mesma página. Assim, é possível ir ao bloco de 
                conteúdo desejado. Os links devem ser colocados em lugares estratégicos da página, 
                como no início e fim do conteúdo e início de fim do menu.
            </Text>

            <Text mb='1rem' fontWeight='semibold'>
                É importante ressaltar que o primeiro link da página deve ser o de ir para o conteúdo.
            </Text>

            <Text mb='1rem'>
                Para facilitar a utilização das âncoras, podem ser disponibilizados atalhos por teclado, 
                utilizando o atributo accesskey nos links relevantes. Não pode haver repetição do mesmo 
                accesskey em uma página.
            </Text>

            <Text mb='1rem'>
                Devem ser utilizados ambos os atributos name e id para que as âncoras funcionem em 
                todos os navegadores e tecnologias assistivas, tanto textuais quanto gráficos, 
                já que há os que suportam ambos os atributos e os que suportam apenas um deles.
            </Text>

            <Text mb='1rem'>
                A seguir, um exemplo contendo uma barra de navegação para diferentes tipos de conteúdo 
                em uma página web. 
            </Text>

            <PostComponent article_name={'pular-navegacao_01'} />

            <Text mb='1rem'>
                Os links indicadores de início e fim de conteúdo e início e fim de menu podem estar 
                ocultos na página utilizando folhas de estilo. No entanto, é necessário tomar o 
                cuidado de ocultá-los de forma que eles continuem acessíveis aos leitores de tela. 
                Os mecanismos para ocultar elementos e seus efeitos na acessibilidade são os seguintes:
            </Text>
            
            <PostComponent article_name={'pular-navegacao_02'} />

        </Container>
    </Flex>
  )
}

export default PageAboutSkipNavigation