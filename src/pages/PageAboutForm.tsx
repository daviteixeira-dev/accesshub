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

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';
import PostComponent from '../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

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
                        Ao serem utilizados botões do tipo imagem (input type=”image”), que servem 
                        para o mesmo propósito do botão do tipo submit, deve ser fornecida uma descrição 
                        textual para o botão através do atributo alt, conforme o exemplo a seguir.
                    </Text>

                    <PostComponent article_name={'form_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Já para outros tipos de botões (reset e button), é preciso substituir o botão pela 
                        imagem que se deseja utilizar através do CSS. Nesse caso, para que o botão seja 
                        acessível, ele deve possuir um value descritivo, conforme o exemplo a seguir.
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
                        Associar etiquetas aos seus campos

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
                        As etiquetas de texto (elemento LABEL) devem estar associadas aos seus campos 
                        (elementos INPUT, SELECT e TEXTAREA, à exceção do elemento BUTTON) correspondentes 
                        no formulário, através dos atributos for do label e id do input, os quais deverão 
                        ter o mesmo valor.
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
                        Identificar o objeto

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.3.6'
                            tooltipText='Ver Critério WCAG de Sucesso 1.3.6 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo de funcionalidade que atende ao critério 1.3.6 da WCAG é o uso de 
                        rótulos claros e descritivos para os campos de formulário em um site.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por exemplo, ao criar um formulário de cadastro em um site, é importante 
                        utilizar rótulos descritivos para cada campo de entrada, para que os usuários 
                        saibam o que é esperado deles e possam preencher o formulário corretamente. Além 
                        disso, é importante que esses rótulos sejam associados aos campos de entrada 
                        por meio do atributo "for" no HTML, ou que sejam inseridos dentro do 
                        elemento "label" para facilitar a navegação e interação dos usuários 
                        com o teclado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Um exemplo de código HTML que utiliza rótulos descritivos para um campo de 
                        formulário seria:
                    </Text>

                    <PostComponent article_name={'form_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Nesse exemplo, o rótulo "Nome" está claramente descrito e associado ao campo 
                        de entrada de texto por meio do atributo "for" no rótulo e do atributo "id" 
                        no campo de entrada. Isso ajuda a identificar claramente o objetivo do campo 
                        para os usuários que navegam por meio de leitores de tela ou que utilizam o 
                        teclado para navegar no site.
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
                        Os elementos do formulário devem ser distribuídos corretamente através do código HTML, 
                        criando, assim, uma sequência lógica de navegação. Assim, os formulários devem primeiro 
                        ser codificados considerando a ordem lógica de navegação para depois serem organizados 
                        visualmente via CSS.
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
                        Quando um elemento de formulário receber o foco, não deve ser iniciada uma mudança 
                        automática na página que confunda ou desoriente o usuário. Assim, as mudanças devem 
                        ocorrer através do acionamento de um botão.
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
                        Para conteúdo que exigir entrada de dados por parte do usuário, devem ser fornecidas 
                        quando necessário, instruções de preenchimento juntamente com as etiquetas 
                        (elemento LABEL). A utilização de caracteres pré-definidos em áreas de entrada de 
                        texto só deve ocorrer se:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            O texto for incluído após a entrada de dados pelo usuário (por exemplo, sugerir um 
                            novo nome de usuário caso o escolhido já exista);
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            A semântica do documento justifique a inclusão de texto pré-definido 
                            (por exemplo, uma loja virtual que só vende para determinado país já vem com o 
                            campo país preenchido);
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Os caracteres tenham sido fornecidos previamente pelo usuário 
                            (por exemplo, refinamento de busca).
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Recomenda-se que a entrada de dados seja facilitada, como a exclusão de caracteres 
                        especiais em campos numéricos (Ex: número de documentos como CPF, datas, moeda), e a 
                        simplificação de campos. 
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Campos de preenchimento obrigatório devem ser claramente indicados. O HTML5 traz um 
                        novo atributo, o required, que especifica que um campo é obrigatório. Essa informação 
                        é lida pelo leitor de tela. Além disso, caso o usuário tente enviar o formulário sem 
                        preencher o campo obrigatório, uma informação do tipo “por favor, preencha esse campo” 
                        aparecerá na tela, além de ser interpretada pelo leitor de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além do atributo required, o HTML5 apresenta, também, o placeholder. Ele é utilizado 
                        com os elementos INPUT e TEXTAREA para definir uma dica de preenchimento do campo. 
                        Quando o campo recebe o foco, a dica desaparece, mas é lida pelo leitor de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Outros atributos do HTML5 bastante importantes para acrescentar informações aos campos 
                        do formulário são:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            autofocus: Utilizado para o foco do teclado ir diretamente ao campo que possua esse 
                            atributo quando a página com o formulário for carregada;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            maxlength: Determina um número máximo de caracteres que o campo pode ter;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            min e max: Determina o valor mínimo e máximo para o campo. Podem ser utilizados 
                            separadamente;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            pattern: Permite que sejam definidas expressões para validação do campo;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            novalidate: Para desativar a validação do formulário (utilizado com o elemento FORM);
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            formnovalidate: Para desativar a validação dos dados de um formulário 
                            (utilizado com os elementos INPUT e BUTTON);
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            draggable: Torna o campo arrastável (Drag and Drop);
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além de melhorar a semântica, os novos atributos e valores do HTML5 tornam o 
                        desenvolvimento mais fácil e o resultado mais acessível.
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
                        Identificar erros de entrada de dados e confirmar o envio 
                        das informações

                        <BadgeWCAGInfoNumber 
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
                        Quando um erro de entrada de dados for automaticamente detectado, o item que apresenta 
                        erro deve ser identificado e descrito ao usuário por texto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O usuário envia o formulário e deixa de preencher campos obrigatórios ou preenche algum 
                        campo de maneira incorreta. O foco retorna ao início do formulário contendo o aviso de 
                        erro e links (âncoras) para os campos do formulário que apresentaram erro.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Após a validação dos dados, antes de enviar o formulário, uma tela de confirmação deverá 
                        aparecer, permitindo que o usuário verifique e, se necessário, edite as informações 
                        antes de enviá-las.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No HTML5 existem novos valores para o atributo type do elemento INPUT e, de acordo com 
                        a definição do input type, a validação do lado do cliente ocorre através do próprio HTML, 
                        já que esses valores basicamente definem o tipo de dado esperado pelo campo. Assim, o 
                        HTML5 acrescentou os seguintes valores para o atributo type:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            email: Indica a entrada de um endereço de e-mail;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            tel: Indica a entrada de um número de telefone;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            search: Indica um controle input do tipo busca;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            url: Indica a entrada de endereço URL;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            datatime: Indica a entrada de data e hora;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            datatime-local: Indica a entrada de data e hora local;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            date: Indica a entrada de apenas uma data;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            month: Indica a entrada de ano e mês apenas;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            week: Indica a entrada de ano e dia da semana;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            time: Indica a entrada de um horário com hora, minuto, segundos e fração de segundos;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            number: Indica uma entrada numérica;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            range: Indica a entrada de um número contido dentro de um intervalo;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            color: Indica a entrada do código de uma cor.
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
                        É recomendado que os campos com informações relacionadas sejam agrupadas utilizando o 
                        elemento FIELDSET, principalmente em formulários longos. O agrupamento deverá ser feito 
                        de maneira lógica, associando o elemento LEGEND explicando claramente o propósito ou 
                        natureza dos agrupamentos.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No caso do elemento SELECT, pode ser utilizado o elemento OPTGROUP para agrupar os itens 
                        da lista de seleção.
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
                        Fornecer estratégias de segurança específicas ao invés de CAPTCHA

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
                        CAPTCHAs são utilizados para impedir que softwares automatizados, conhecidos como bots, 
                        executem ações que degradem a qualidade do serviço de um sistema, provocando danos em 
                        áreas e e-serviços de sítios em um curto espaço de tempo, podendo sobrecarregar 
                        servidores e deixar sítios indisponíveis por um dado período.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Recomenda-se uma combinação de diferentes estratégias para serviços mais seguros e 
                        acessíveis para substituir o uso de CAPTCHA, como por exemplo:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Limites de conexão;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Monitoramento;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Consistência nas políticas de segurança;
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Uso de técnicas de desenvolvimento de serviços e formulários seguros.
                        </ListItem>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Tal recomendação se deve ao fato de que o uso de CAPTCHA pode ocasionar problemas 
                        significativos a sítios e formulários:
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Usabilidade: O ônus de detecção de problemas e invasões é delegado a pessoa, ao 
                            invés do sistema. Como CAPTCHAs são projetados para serem difíceis de ler e entender, 
                            tornam os serviços que os utilizam muito mais difíceis de usar.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Acessibilidade: Os CAPTCHAS são inacessíveis por sua natureza, não são lidos, nem 
                            interpretados por leitores de tela. Isso efetivamente torna o serviço inutilizável 
                            por alguns grupos de pessoas. Mesmo CAPTCHAs que oferecem versões em áudio não 
                            resolvem completamente o problema, pois muitas pessoas podem possuir deficiência 
                            auditiva e visual.
                        </ListItem>
                        <ListItem
                            fontSize='1rem'
                            fontWeight='600'
                            fontFamily='Inter'
                        >
                            Segurança: Desenvolver um CAPTCHA internamente costuma gerar CAPTCHAS inseguros, 
                            com falhas já mapeadas por spammers. No entanto, ao utilizar CAPTCHAS de terceiros 
                            há outros problemas a serem considerados:
                        </ListItem>
                        <OrderedList>
                            <ListItem
                                fontSize='1rem'
                                fontWeight='600'
                                fontFamily='Inter'
                            >
                                Privacidade: O serviço de CAPTCHA pode incluir cookies, coletar estatísticas e 
                                mapear o comportamento de navegação das pessoas que acessam o serviço. Isto 
                                introduz preocupações com a privacidade significativas.
                            </ListItem>
                            <ListItem
                                fontSize='1rem'
                                fontWeight='600'
                                fontFamily='Inter'
                            >
                                Performance: O uso de um serviço CAPTCHA incorre no desempenho do sítio. Se o 
                                serviço ficar indisponível, o mesmo acontece com o acesso ao serviço da página 
                                que utiliza o CAPTCHA.
                            </ListItem>
                        </OrderedList>
                    </UnorderedList>

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Caso o uso de CAPTCHA seja estritamente necessário, o mesmo deverá ser fornecido em 
                        forma de pergunta simples de interpretação (CAPTCHA Humano), e este preferencialmente 
                        só deverá ser apresentado após pelo menos 2 tentativas de envio do formulário, por 
                        exemplo. Tais perguntas poderão ser respondidas apenas por um ser humano. No entanto, 
                        é preciso garantir que a pergunta não seja de difícil resolução, permitindo que a 
                        mesma possa ser respondida por pessoas de variadas culturas e níveis de instrução.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
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