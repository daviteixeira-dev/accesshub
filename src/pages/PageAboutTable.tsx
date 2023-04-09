import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading, 
    Container 
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

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
                        Tabela
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em tabelas de dados simples, o uso apropriado do elemento TH para os cabeçalhos e do 
                        elemento TD para as células de dados é essencial para torná-las acessíveis. Para 
                        incrementar a acessibilidade, deve-se utilizar os elementos THEAD, TBODY e TFOOT, 
                        para agrupar as linhas de cabeçalho, do corpo da tabela e do final, respectivamente, 
                        com exceção de quando a tabela possuir apenas o corpo, sem ter seções de cabeçalho e rodapé.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O W3C sugere utilizar o TFOOT antes do TBODY dentro da definição TABLE para que o agente 
                        de usuário possa renderizar o rodapé antes de receber todas (potencialmente numerosas) 
                        linha de dados. 
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
                        Em tabelas, utilizar títulos e resumos de forma apropriada

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
                        O título da tabela deve ser definido pelo elemento CAPTION e deve ser o primeiro 
                        elemento utilizado após a declaração do elemento TABLE. Em casos de tabelas extensas, 
                        deve ser fornecido um resumo de seus dados através do atributo summary que deve ser 
                        declarado no elemento TABLE.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Abaixo, um exemplo da implementação de uma Tabela em HTML5 e em seguida sua estlização 
                        em CSS3, sendo esta usada em todos os exemplos de tabela:
                    </Text>

                    <PostComponent article_name={'table_01'} />

                    <PostComponent article_name={'table_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para tabelas mais complexas, é necessário utilizar marcações para associar as células de 
                        dados com as células de cabeçalho. A maneira mais adequada de realizar esse procedimento 
                        é utilizar os atributos id/headers ou scope/col.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No primeiro, pode-se associar qualquer célula de conteúdo a qualquer célula de cabeçalho, 
                        utilizando o mesmo valor para o atributo id e para o header. Veja o exemplo abaixo: 
                    </Text>

                    <PostComponent article_name={'table_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No segundo caso, a associação é automática, sendo mais utilizado em tabelas de associação 
                        direta, nas quais é dado o valor col para o atributo scope nos cabeçalhos. Veja o exemplo abaixo: 
                    </Text>

                    <PostComponent article_name={'table_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por fim, um exemplo de tabela com o uso do atributo axis:
                    </Text>

                    <PostComponent article_name={'table_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por fim, as tabelas devem ser utilizadas apenas para dados tabulares e não para 
                        efeitos de disposição dos elementos na página. Para este fim, utilize as folhas 
                        de estilo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutTable;