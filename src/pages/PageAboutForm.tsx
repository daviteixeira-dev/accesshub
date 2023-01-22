import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading, 
    ListItem, 
    Container, 
    OrderedList, 
    UnorderedList 
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';

const PageAboutForm = () => {
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
                        Formulário
                    </Heading>

                    <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                        Ver WCAG 2.0 Critério de Sucesso 1.1.1, 1.3.1, 2.4.3, 3.2.2, 3.3.1 e 3.3.2
                    </Heading>

                    <Heading as='h3' mb='1rem' fontSize='1rem'>
                        Fornecer alternativa em texto para os botões de imagem de formulários
                    </Heading>

                    <Text mb='1rem'>
                        Ao serem utilizados botões do tipo imagem (input type=”image”), que servem 
                        para o mesmo propósito do botão do tipo submit, deve ser fornecida uma descrição 
                        textual para o botão através do atributo alt, conforme o exemplo a seguir.
                    </Text>

                    <PostComponent article_name={'form_01'} />

                    <Text mb='1rem'>
                        Já para outros tipos de botões (reset e button), é preciso substituir o botão pela 
                        imagem que se deseja utilizar através do CSS. Nesse caso, para que o botão seja 
                        acessível, ele deve possuir um value descritivo, conforme o exemplo a seguir.
                    </Text>

                    <PostComponent article_name={'form_02'} />

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Fornecer alternativa em texto para os botões de imagem de formulários
                    </Heading>

                    <Text mb='1rem'>
                        As etiquetas de texto (elemento LABEL) devem estar associadas aos seus campos 
                        (elementos INPUT, SELECT e TEXTAREA, à exceção do elemento BUTTON) correspondentes 
                        no formulário, através dos atributos for do label e id do input, os quais deverão 
                        ter o mesmo valor.
                    </Text>

                    <PostComponent article_name={'form_03'} />

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Estabelecer uma ordem lógica de navegação
                    </Heading>

                    <Text mb='1rem'>
                        Os elementos do formulário devem ser distribuídos corretamente através do código HTML, 
                        criando, assim, uma sequência lógica de navegação. Assim, os formulários devem primeiro 
                        ser codificados considerando a ordem lógica de navegação para depois serem organizados 
                        visualmente via CSS.
                    </Text>

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Não provocar automaticamente alteração no contexto
                    </Heading>

                    <Text mb='1rem'>
                        Quando um elemento de formulário receber o foco, não deve ser iniciada uma mudança 
                        automática na página que confunda ou desoriente o usuário. Assim, as mudanças devem 
                        ocorrer através do acionamento de um botão.
                    </Text>

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Fornecer instruções para entrada de dados
                    </Heading>

                    <Text mb='1rem'>
                        Para conteúdo que exigir entrada de dados por parte do usuário, devem ser fornecidas 
                        quando necessário, instruções de preenchimento juntamente com as etiquetas 
                        (elemento LABEL). A utilização de caracteres pré-definidos em áreas de entrada de 
                        texto só deve ocorrer se:
                    </Text>

                    <UnorderedList>
                        <ListItem>
                            O texto for incluído após a entrada de dados pelo usuário (por exemplo, sugerir um 
                            novo nome de usuário caso o escolhido já exista);
                        </ListItem>
                        <ListItem>
                            A semântica do documento justifique a inclusão de texto pré-definido 
                            (por exemplo, uma loja virtual que só vende para determinado país já vem com o 
                            campo país preenchido);
                        </ListItem>
                        <ListItem>
                            Os caracteres tenham sido fornecidos previamente pelo usuário 
                            (por exemplo, refinamento de busca).
                        </ListItem>
                    </UnorderedList>

                    <Text my='1rem'>
                        Recomenda-se que a entrada de dados seja facilitada, como a exclusão de caracteres 
                        especiais em campos numéricos (Ex: número de documentos como CPF, datas, moeda), e a 
                        simplificação de campos. 
                    </Text>

                    <Text mb='1rem'>
                        Campos de preenchimento obrigatório devem ser claramente indicados. O HTML5 traz um 
                        novo atributo, o required, que especifica que um campo é obrigatório. Essa informação 
                        é lida pelo leitor de tela. Além disso, caso o usuário tente enviar o formulário sem 
                        preencher o campo obrigatório, uma informação do tipo “por favor, preencha esse campo” 
                        aparecerá na tela, além de ser interpretada pelo leitor de tela.
                    </Text>

                    <Text>
                        Além do atributo required, o HTML5 apresenta, também, o placeholder. Ele é utilizado 
                        com os elementos INPUT e TEXTAREA para definir uma dica de preenchimento do campo. 
                        Quando o campo recebe o foco, a dica desaparece, mas é lida pelo leitor de tela.
                    </Text>

                    <Text mb='1rem'>
                        Outros atributos do HTML5 bastante importantes para acrescentar informações aos campos 
                        do formulário são:
                    </Text>

                    <UnorderedList>
                        <ListItem>
                            autofocus: Utilizado para o foco do teclado ir diretamente ao campo que possua esse 
                            atributo quando a página com o formulário for carregada;
                        </ListItem>
                        <ListItem>
                            maxlength: Determina um número máximo de caracteres que o campo pode ter;
                        </ListItem>
                        <ListItem>
                            min e max: Determina o valor mínimo e máximo para o campo. Podem ser utilizados 
                            separadamente;
                        </ListItem>
                        <ListItem>
                            pattern: Permite que sejam definidas expressões para validação do campo;
                        </ListItem>
                        <ListItem>
                            novalidate: Para desativar a validação do formulário (utilizado com o elemento FORM);
                        </ListItem>
                        <ListItem>
                            formnovalidate: Para desativar a validação dos dados de um formulário 
                            (utilizado com os elementos INPUT e BUTTON);
                        </ListItem>
                        <ListItem>
                            draggable: Torna o campo arrastável (Drag and Drop);
                        </ListItem>
                    </UnorderedList>

                    <Text my='1rem'>
                        Além de melhorar a semântica, os novos atributos e valores do HTML5 tornam o 
                        desenvolvimento mais fácil e o resultado mais acessível.
                    </Text>

                    <PostComponent article_name={'form_04'} />

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Identificar e descrever erros de entrada de dados e confirmar o envio das informações
                    </Heading>

                    <Text mb='1rem'>
                        Quando um erro de entrada de dados for automaticamente detectado, o item que apresenta 
                        erro deve ser identificado e descrito ao usuário por texto.
                    </Text>

                    <Text mb='1rem'>
                        O usuário envia o formulário e deixa de preencher campos obrigatórios ou preenche algum 
                        campo de maneira incorreta. O foco retorna ao início do formulário contendo o aviso de 
                        erro e links (âncoras) para os campos do formulário que apresentaram erro.
                    </Text>

                    <Text mb='1rem'>
                        Após a validação dos dados, antes de enviar o formulário, uma tela de confirmação deverá 
                        aparecer, permitindo que o usuário verifique e, se necessário, edite as informações 
                        antes de enviá-las.
                    </Text>

                    <Text mb='1rem'>
                        No HTML5 existem novos valores para o atributo type do elemento INPUT e, de acordo com 
                        a definição do input type, a validação do lado do cliente ocorre através do próprio HTML, 
                        já que esses valores basicamente definem o tipo de dado esperado pelo campo. Assim, o 
                        HTML5 acrescentou os seguintes valores para o atributo type:
                    </Text>

                    <UnorderedList>
                        <ListItem>email: Indica a entrada de um endereço de e-mail;</ListItem>
                        <ListItem>tel: Indica a entrada de um número de telefone;</ListItem>
                        <ListItem>search: Indica um controle input do tipo busca;</ListItem>
                        <ListItem>url: Indica a entrada de endereço URL;</ListItem>
                        <ListItem>datatime: Indica a entrada de data e hora;</ListItem>
                        <ListItem>datatime-local: Indica a entrada de data e hora local;</ListItem>
                        <ListItem>date: Indica a entrada de apenas uma data;</ListItem>
                        <ListItem>month: Indica a entrada de ano e mês apenas;</ListItem>
                        <ListItem>week: Indica a entrada de ano e dia da semana;</ListItem>
                        <ListItem>time: Indica a entrada de um horário com hora, minuto, segundos e fração de segundos;</ListItem>
                        <ListItem>number: Indica uma entrada numérica;</ListItem>
                        <ListItem>range: Indica a entrada de um número contido dentro de um intervalo;</ListItem>
                        <ListItem>color: Indica a entrada do código de uma cor.</ListItem>
                    </UnorderedList>

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Agrupar campos de formulário
                    </Heading>

                    <Text mb='1rem'>
                        É recomendado que os campos com informações relacionadas sejam agrupadas utilizando o 
                        elemento FIELDSET, principalmente em formulários longos. O agrupamento deverá ser feito 
                        de maneira lógica, associando o elemento LEGEND explicando claramente o propósito ou 
                        natureza dos agrupamentos.
                    </Text>

                    <Text mb='1rem'>
                        No caso do elemento SELECT, pode ser utilizado o elemento OPTGROUP para agrupar os itens 
                        da lista de seleção.
                    </Text>

                    <PostComponent article_name={'form_05'} />

                    <Heading as='h3' my='1rem' fontSize='1rem'>
                        Fornecer estratégias de segurança específicas ao invés de CAPTCHA
                    </Heading>

                    <Text mb='1rem'>
                        CAPTCHAs são utilizados para impedir que softwares automatizados, conhecidos como bots, 
                        executem ações que degradem a qualidade do serviço de um sistema, provocando danos em 
                        áreas e e-serviços de sítios em um curto espaço de tempo, podendo sobrecarregar 
                        servidores e deixar sítios indisponíveis por um dado período.
                    </Text>

                    <Text mb='1rem'>
                        Recomenda-se uma combinação de diferentes estratégias para serviços mais seguros e 
                        acessíveis para substituir o uso de CAPTCHA, como por exemplo:
                    </Text>

                    <UnorderedList>
                        <ListItem>
                            Limites de conexão;
                        </ListItem>
                        <ListItem>
                            Monitoramento;
                        </ListItem>
                        <ListItem>
                            Consistência nas políticas de segurança;
                        </ListItem>
                        <ListItem>
                            Uso de técnicas de desenvolvimento de serviços e formulários seguros.
                        </ListItem>
                    </UnorderedList>

                    <Text my='1rem'>
                        Tal recomendação se deve ao fato de que o uso de CAPTCHA pode ocasionar problemas 
                        significativos a sítios e formulários:
                    </Text>

                    <UnorderedList>
                        <ListItem>
                            Usabilidade: O ônus de detecção de problemas e invasões é delegado a pessoa, ao 
                            invés do sistema. Como CAPTCHAs são projetados para serem difíceis de ler e entender, 
                            tornam os serviços que os utilizam muito mais difíceis de usar.
                        </ListItem>
                        <ListItem>
                            Acessibilidade: Os CAPTCHAS são inacessíveis por sua natureza, não são lidos, nem 
                            interpretados por leitores de tela. Isso efetivamente torna o serviço inutilizável 
                            por alguns grupos de pessoas. Mesmo CAPTCHAs que oferecem versões em áudio não 
                            resolvem completamente o problema, pois muitas pessoas podem possuir deficiência 
                            auditiva e visual.
                        </ListItem>
                        <ListItem>
                            Segurança: Desenvolver um CAPTCHA internamente costuma gerar CAPTCHAS inseguros, 
                            com falhas já mapeadas por spammers. No entanto, ao utilizar CAPTCHAS de terceiros 
                            há outros problemas a serem considerados:
                        </ListItem>
                        <OrderedList>
                            <ListItem>
                                Privacidade: O serviço de CAPTCHA pode incluir cookies, coletar estatísticas e 
                                mapear o comportamento de navegação das pessoas que acessam o serviço. Isto 
                                introduz preocupações com a privacidade significativas.
                            </ListItem>
                            <ListItem>
                                Performance: O uso de um serviço CAPTCHA incorre no desempenho do sítio. Se o 
                                serviço ficar indisponível, o mesmo acontece com o acesso ao serviço da página 
                                que utiliza o CAPTCHA.
                            </ListItem>
                        </OrderedList>
                    </UnorderedList>

                    <Text my='1rem'>
                        Caso o uso de CAPTCHA seja estritamente necessário, o mesmo deverá ser fornecido em 
                        forma de pergunta simples de interpretação (CAPTCHA Humano), e este preferencialmente 
                        só deverá ser apresentado após pelo menos 2 tentativas de envio do formulário, por 
                        exemplo. Tais perguntas poderão ser respondidas apenas por um ser humano. No entanto, 
                        é preciso garantir que a pergunta não seja de difícil resolução, permitindo que a 
                        mesma possa ser respondida por pessoas de variadas culturas e níveis de instrução.
                    </Text>

                    <Text mb='1rem'>
                        Para tal, podem ser utilizadas perguntas de senso comum, como por exemplo, 
                        “qual é a cor do céu?” ou “o fogo é quente ou frio?”. Também podem ser utilizados 
                        testes matemáticos. No entanto, é preciso tomar cuidado para que esses testes não 
                        sejam facilmente “quebrados” por determinados programas. Uma alternativa é solicitar 
                        que o usuário escreva o resultado do teste matemático por extenso, como 
                        “escreva por extenso quanto é 2 + 3”, ou ainda “responda por extenso quanto é dois 
                        mais três”.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>
    );
};

export default PageAboutForm;