import { 
    Flex, 
    Text, 
    Heading, 
    Container 
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'
import PostComponent from '../components/PostComponent/PostComponent'

const PageAboutTable = () => {
  return (
    <Flex>
        <MenuSideBar />
        <Container maxW='container.xl' height='100vh' overflowY='auto'>
            
            <Heading as='h1' my='1rem'>
                Tabela
            </Heading>

            <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                Ver WCAG 2.0 Critério de Sucesso 1.3.1 (Técnicas H43 e H63)
            </Heading>

            <Text mb='1rem'>
                Em tabelas de dados simples, o uso apropriado do elemento TH para os cabeçalhos e do 
                elemento TD para as células de dados é essencial para torná-las acessíveis. Para 
                incrementar a acessibilidade, deve-se utilizar os elementos THEAD, TBODY e TFOOT, 
                para agrupar as linhas de cabeçalho, do corpo da tabela e do final, respectivamente, 
                com exceção de quando a tabela possuir apenas o corpo, sem ter seções de cabeçalho e rodapé.
            </Text>

            <Text mb='1rem'>
                O W3C sugere utilizar o TFOOT antes do TBODY dentro da definição TABLE para que o agente 
                de usuário possa renderizar o rodapé antes de receber todas (potencialmente numerosas) 
                linha de dados. 
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Em tabelas, utilizar títulos e resumos de forma apropriada
            </Heading>

            <Text mb='1rem'>
                O título da tabela deve ser definido pelo elemento CAPTION e deve ser o primeiro 
                elemento utilizado após a declaração do elemento TABLE. Em casos de tabelas extensas, 
                deve ser fornecido um resumo de seus dados através do atributo summary que deve ser 
                declarado no elemento TABLE.
            </Text>

            <Text mb='1rem'>
                Abaixo, um exemplo da implementação de uma Tabela em HTML5 e em seguida sua estlização 
                em CSS3, sendo esta usada em todos os exemplos de tabela:
            </Text>

            <PostComponent article_name={'table_01'} />

            <PostComponent article_name={'table_02'} />

            <Text mb='1rem'>
                Para tabelas mais complexas, é necessário utilizar marcações para associar as células de 
                dados com as células de cabeçalho. A maneira mais adequada de realizar esse procedimento 
                é utilizar os atributos id/headers ou scope/col.
            </Text>

            <Text mb='1rem'>
                No primeiro, pode-se associar qualquer célula de conteúdo a qualquer célula de cabeçalho, 
                utilizando o mesmo valor para o atributo id e para o header. Veja o exemplo abaixo: 
            </Text>

            <PostComponent article_name={'table_03'} />

            <Text mb='1rem'>
                No segundo caso, a associação é automática, sendo mais utilizado em tabelas de associação 
                direta, nas quais é dado o valor col para o atributo scope nos cabeçalhos. Veja o exemplo abaixo: 
            </Text>

            <PostComponent article_name={'table_04'} />

            <Text mb='1rem'>
                Por fim, um exemplo de tabela com o uso do atributo axis:
            </Text>

            <PostComponent article_name={'table_05'} />

            <Text mb='1rem'>
                Por fim, as tabelas devem ser utilizadas apenas para dados tabulares e não para 
                efeitos de disposição dos elementos na página. Para este fim, utilize as folhas 
                de estilo.
            </Text>

        </Container>
    </Flex>
  )
}

export default PageAboutTable