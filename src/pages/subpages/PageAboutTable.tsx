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

const PageAboutTable = () => {
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
                        Tabelas
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando se trata de acessibilidade, é crucial utilizar corretamente os elementos 
                        HTML para tornar as tabelas de dados simples acessíveis. Para isso, é importante 
                        utilizar o elemento {"<th></th>"} para os cabeçalhos e o elemento {"<td></td>"} para 
                        as células de dados. Além disso, recomenda-se agrupar as linhas de cabeçalho, 
                        corpo e rodapé utilizando os elementos {"<thead></thead>"}, {"<tbody></tbody>"} e {"<tfoot></tfoot>"}, a 
                        menos que a tabela possua apenas o corpo sem seções de cabeçalho e rodapé.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        De acordo com as diretrizes do W3C, é sugerido colocar o 
                        elemento {"<tfoot></tfoot>"} antes do {"<tbody></tbody>"} na definição da 
                        tabela. Dessa forma, o agente de usuário pode renderizar o rodapé antes de 
                        processar todas as linhas de dados (que podem ser numerosas).
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
                        Utilizando títulos e resumos adequados nas tabelas

                        <BadgeWCAGInfoNumber 
                            textWCAG='Critério 1.3.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O título da tabela deve ser definido pelo elemento {"<caption></caption>"} e deve 
                        ser o primeiro elemento logo após a declaração do 
                        elemento {"<table></table>"}. Em caso de tabelas extensas, é importante fornecer 
                        um resumo dos dados da tabela utilizando o atributo `summary`, que deve ser 
                        declarado no elemento {"<table></table"}.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de implementação de uma tabela em HTML5, seguido pela sua 
                        estilização em CSS3, que pode ser aplicada a todos os exemplos de tabelas:
                    </Text>

                    <PostComponent article_name={'table_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para tabelas mais complexas, é necessário associar as células de dados às células 
                        de cabeçalho utilizando marcações apropriadas. A maneira mais adequada de fazer 
                        isso é utilizando os atributos `id`/`headers` ou `scope`/`col`.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No primeiro caso, você pode associar qualquer célula de conteúdo a qualquer célula 
                        de cabeçalho, utilizando o mesmo valor para o atributo `id` e `headers`. Veja o 
                        exemplo abaixo:
                    </Text>

                    <PostComponent article_name={'table_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No segundo caso, a associação é feita automaticamente e é mais comumente usada 
                        em tabelas de associação direta, onde é atribuído o valor `col` ao 
                        atributo `scope` nos cabeçalhos. Veja o exemplo abaixo: 
                    </Text>

                    <PostComponent article_name={'table_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por fim, segue um exemplo de tabela utilizando o atributo `axis`:
                    </Text>

                    <PostComponent article_name={'table_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante lembrar que as tabelas devem ser usadas somente para apresentar 
                        dados tabulares e não para o layout dos elementos na página. Para isso, 
                        utilize folhas de estilo CSS.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutTable;