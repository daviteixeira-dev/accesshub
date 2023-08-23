import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading, 
    ListItem, 
    Container,
    UnorderedList 
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutForm = () => {
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
                        Formulários
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
                        Fornecer alternativa em texto para os botões de imagem de formulários

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao utilizar botões de imagem (input type="image") em formulários, é importante 
                        fornecer uma descrição textual para esses botões usando o atributo alt. Isso 
                        permite que os usuários que não conseguem visualizar as imagens compreendam a 
                        finalidade do botão. Veja o exemplo abaixo:
                    </Text>

                    <PostComponent article_name={'form_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para outros tipos de botões, como reset e button, é necessário substituir o botão 
                        pela imagem desejada por meio do CSS. Nesse caso, é importante que o botão possua 
                        um valor descritivo usando o atributo value, conforme o exemplo a seguir:
                    </Text>

                    <PostComponent article_name={'form_02'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Associar etiquetas aos campos

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
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
                        As etiquetas de texto (elemento LABEL) devem estar associadas aos seus campos 
                        correspondentes (elementos INPUT, SELECT e TEXTAREA, exceto BUTTON) nos 
                        formulários. Isso pode ser feito utilizando os atributos for no label e id 
                        no input, com valores iguais.
                    </Text>

                    <PostComponent article_name={'form_03'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Identificar o objeto de entrada

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.3.5'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.5 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo de funcionalidade que atende ao critério 1.3.5 da WCAG é o uso de 
                        rótulos claros e descritivos para os campos de formulário em um site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao criar um formulário de cadastro em um site, é importante utilizar rótulos 
                        descritivos para cada campo de entrada. Isso ajuda os usuários a entenderem o 
                        propósito de cada campo e preencherem o formulário corretamente. Certifique-se 
                        de associar esses rótulos aos campos de entrada usando o atributo "for" no HTML 
                        ou inserindo-os dentro do elemento "label" para melhorar a navegação e interação 
                        dos usuários pelo teclado. Veja o exemplo de código HTML abaixo:
                    </Text>

                    <PostComponent article_name={'form_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No exemplo acima, o rótulo "Nome" está claramente descrito e associado ao 
                        campo de entrada de texto usando o atributo "for" no rótulo e o atributo "id" 
                        no campo de entrada. Isso ajuda a identificar claramente a finalidade do campo 
                        para os usuários que utilizam leitores de tela ou navegam pelo site usando o teclado.
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
                        Estabelecer uma ordem lógica de navegação

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 2.4.3'
                            tooltipText='Ver Critério WCAG de Sucesso 2.4.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Os elementos do formulário devem ser organizados de forma lógica no código HTML, 
                        criando uma sequência de navegação coerente. Posteriormente, é possível organizar 
                        visualmente os elementos usando CSS.
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
                        Não provocar automaticamente alteração no contexto

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 3.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-input'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Evite iniciar automaticamente mudanças no contexto da página quando um elemento 
                        do formulário recebe foco, pois isso pode confundir ou desorientar os usuários. Em 
                        vez disso, as mudanças devem ser acionadas por meio de um botão.
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
                        Fornecer instruções para entrada de dados

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 3.3.2'
                            tooltipText='Ver Critério WCAG de Sucesso 3.3.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Quando houver a necessidade de entrada de dados por parte do usuário, forneça 
                        instruções de preenchimento junto com as etiquetas (elemento LABEL). A utilização 
                        de caracteres pré-definidos em campos de entrada de texto só deve ocorrer se:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            O texto for incluído após a entrada de dados pelo usuário (por exemplo, sugerir 
                            um novo nome de usuário caso o escolhido já exista).
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            A semântica do documento justificar a inclusão de texto pré-definido (por 
                            exemplo, uma loja virtual que só vende para determinado país já vem com o 
                            campo país preenchido).
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Os caracteres tiverem sido fornecidos previamente pelo usuário (por exemplo, 
                            refinamento de busca).
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Recomenda-se facilitar a entrada de dados, removendo caracteres especiais em 
                        campos numéricos (ex: número de documentos como CPF, datas, moeda) e simplificando 
                        os campos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Campos de preenchimento obrigatório devem ser claramente indicados. No HTML5, 
                        você pode utilizar o atributo "required" para especificar que um campo é 
                        obrigatório. Essa informação é lida pelo leitor de tela. Além disso, caso o 
                        usuário tente enviar o formulário sem preencher o campo obrigatório, uma 
                        mensagem do tipo "Por favor, preencha esse campo" será exibida na tela e também 
                        será interpretada pelo leitor de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Outro atributo útil do HTML5 é o placeholder, que pode ser usado com os 
                        elementos INPUT e TEXTAREA para fornecer uma dica de preenchimento para o 
                        campo. Quando o campo recebe foco, a dica desaparece, mas ainda é lida pelo 
                        leitor de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, existem outros atributos do HTML5 que podem ser importantes para 
                        fornecer informações adicionais aos campos do formulário, tais como:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            autofocus: define o campo que receberá o foco do teclado quando a página com o formulário for carregada.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            maxlength: determina o número máximo de caracteres permitidos em um campo.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            min e max: define o valor mínimo e máximo permitido para um campo (podem ser 
                            utilizados separadamente)
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            pattern: permite definir uma expressão regular para validar o campo.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            novalidate: desativa a validação do formulário (usado com o elemento FORM).
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            formnovalidate: desativa a validação dos dados de um formulário (usado com 
                            os elementos INPUT e BUTTON).
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            draggable: torna o campo arrastável (arrastar e soltar).
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de melhorar a semântica do código, esses novos atributos e valores do HTML5 
                        facilitam o desenvolvimento e tornam o resultado final mais acessível.
                    </Text>

                    <PostComponent article_name={'form_04'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Identificar erros de entrada de dados e confirmar o envio das informações

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 3.1.1'
                            tooltipText='Ver Critério WCAG de Sucesso 3.1.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/on-focus'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Ao detectar automaticamente erros de entrada de dados em um formulário, é importante 
                        identificar e descrever ao usuário o item que apresenta o erro por meio de texto. Quando 
                        o usuário envia o formulário sem preencher campos obrigatórios ou preenche algum 
                        campo de maneira incorreta, o foco deve retornar ao início do formulário, exibindo 
                        um aviso de erro e links para os campos problemáticos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Após a validação dos dados, antes de enviar o formulário, é recomendado exibir uma tela 
                        de confirmação. Isso permite que o usuário verifique as informações fornecidas e, se 
                        necessário, faça edições antes de enviar os dados.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No HTML5, existem novos valores para o atributo "type" do elemento "input". Esses valores 
                        são úteis para a validação do lado do cliente, pois definem o tipo de dado esperado pelo 
                        campo. Alguns desses valores incluem::
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            email: Indica a entrada de um endereço de e-mail.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            tel: Indica a entrada de um número de telefone.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            search: Indica um campo de busca.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            url: Indica a entrada de endereço URL.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            datatime: Indica a entrada de data e hora.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            datatime-local: Indica a entrada de data e hora local.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            date: Indica a entrada de uma data.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            month: Indica a entrada de um mês e ano.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            week: Indica a entrada de uma semana e ano.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            time: Indica a entrada de um horário.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            number: Indica uma entrada numérica.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            range: Indica a entrada de um número dentro de um intervalo.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            color: Indica a entrada de um código de cor.
                        </ListItem>
                    </UnorderedList>

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Agrupar campos de formulário

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
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
                        Recomenda-se agrupar campos com informações relacionadas usando o elemento "fieldset", 
                        especialmente em formulários longos. É importante associar o elemento "legend" a cada 
                        grupo para explicar claramente o propósito ou a natureza do agrupamento.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No caso de elementos "select", você pode utilizar o elemento "optgroup" para agrupar os 
                        itens da lista de seleção.
                    </Text>

                    <PostComponent article_name={'form_05'} />

                    <Heading
                        as='h2'
                        my='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Fornecer estratégias de segurança específicas em vez de CAPTCHA

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
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
                        O uso de CAPTCHA para evitar ações automatizadas de softwares pode apresentar 
                        problemas significativos em termos de usabilidade, acessibilidade e segurança. Em vez 
                        de depender exclusivamente de CAPTCHA, é recomendado combinar diferentes estratégias 
                        para criar serviços seguros e acessíveis. Algumas dessas estratégias incluem:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Limites de conexão.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Monitoramento.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Consistência nas políticas de segurança.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Implementação de técnicas de desenvolvimento de serviços e formulários seguros.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O uso de CAPTCHA pode afetar negativamente a usabilidade de um serviço, pois a tarefa de 
                        detectar problemas e invasões é transferida para o usuário. Além disso, CAPTCHAs são 
                        frequentemente difíceis de ler e entender, o que torna o serviço mais difícil de ser 
                        utilizado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Outra questão importante é a acessibilidade. CAPTCHAs não são acessíveis por natureza e 
                        não podem ser lidos ou interpretados por leitores de tela, tornando o serviço 
                        inutilizável para algumas pessoas. Mesmo que versões em áudio sejam oferecidas, elas 
                        não resolvem completamente o problema, pois muitas pessoas podem ter deficiências 
                        visuais e auditivas.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além disso, a implementação de CAPTCHAs internos pode resultar em falhas de segurança, 
                        enquanto o uso de CAPTCHAs de terceiros pode levantar preocupações com privacidade e 
                        afetar o desempenho do site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Se for absolutamente necessário utilizar CAPTCHA, é recomendado fornecer uma pergunta 
                        simples que possa ser respondida apenas por seres humanos (CAPTCHA humano). Essa pergunta 
                        deve ser apresentada apenas após pelo menos duas tentativas de envio do formulário. É 
                        importante garantir que a pergunta não seja difícil demais, permitindo que pessoas de 
                        diferentes culturas e níveis de instrução possam respondê-la.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Algumas opções de perguntas incluem questões de senso comum, como "Qual é a cor do céu?" 
                        ou "O fogo é quente ou frio?". Testes matemáticos também podem ser utilizados, desde que 
                        não sejam facilmente contornados por programas automatizados. Uma alternativa é 
                        solicitar que o usuário escreva o resultado do teste matemático por extenso, 
                        como "Escreva por extenso quanto é 2 + 3" ou "Responda por extenso quanto é dois mais três".
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutForm;