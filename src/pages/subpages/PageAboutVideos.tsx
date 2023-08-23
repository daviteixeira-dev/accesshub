import { 
    Flex, 
    Text, 
    Hide,
    Show,
    Heading,  
    Container,  
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutVideos = () => {
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
                        Vídeos
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
                        Providenciar Alternativas para Vídeos

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.1'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.1 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.2'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.2 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.6'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.6 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded'
                        />

                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É crucial que os vídeos disponibilizados no seu site possuam controles, 
                        especialmente para reproduzir, pausar e parar. Com o HTML5, você pode 
                        aproveitar o elemento {'<video></video>'}, um padrão para reprodução de 
                        vídeos que facilita o controle das funcionalidades, inclusive com controles 
                        padrão utilizando o atributo 'controls'.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante fornecer uma alternativa sonora ou textual para vídeos que 
                        não possuam áudio. Vídeos que contenham áudio falado no idioma principal 
                        da página devem ser acompanhados por legendas. Essa abordagem não só é 
                        essencial para pessoas com deficiência visual, mas também é útil para 
                        usuários que não têm acesso a áudio, preferem ler o conteúdo ou têm 
                        restrições de tempo para assistir a um vídeo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Por exemplo, se um vídeo demonstra como criar uma tecnologia assistiva 
                        de baixo custo sem áudio, é necessário fornecer um arquivo de texto que 
                        descreva o conteúdo do vídeo e as etapas envolvidas.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Além da alternativa em texto e das legendas, é desejável disponibilizar a 
                        Língua Brasileira de Sinais (Libras) para os vídeos com áudio.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É importante garantir que o player de vídeo seja acessível, permitindo o 
                        acesso aos controles via teclado e fornecendo descrições adequadas para os 
                        leitores de tela.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A seguir, um exemplo de implementação correta de um vídeo em uma página web:
                    </Text>

                    <PostComponent article_name={'videos_09'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Caso você decida desenvolver as funcionalidades por conta própria, a seguir 
                        estão as principais funcionalidades que podem ser implementadas em um player 
                        de vídeo:
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
                        Play/Pause
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você pode usar a API do elemento HTMLMediaElement para controlar manualmente 
                        a reprodução de um vídeo. Abaixo está um exemplo de código JavaScript que 
                        reproduz/pausa um vídeo quando um botão é clicado:
                    </Text>

                    <PostComponent article_name={'videos_01'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No exemplo acima, temos um vídeo com o ID "meuVideo" e um botão com a 
                        classe "pausePlaybtn" que possui o evento onclick definido como "playPause()". A 
                        função playPause() verifica se o vídeo está pausado usando a propriedade 
                        paused do elemento HTMLMediaElement. Se o vídeo estiver pausado, ele é 
                        reproduzido chamando play(), caso contrário, é pausado chamando 
                        pause(). Certifique-se de substituir "path/to/video.mp4" pelo caminho 
                        correto para o seu arquivo de vídeo. 
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
                        Modo de tela cheia
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para adicionar um botão que alterna entre o modo de tela cheia e o modo 
                        normal em um elemento de vídeo, você pode utilizar a API Fullscreen do 
                        JavaScript. A seguir, apresentamos um exemplo de código JavaScript que 
                        permite realizar essa funcionalidade:
                    </Text>

                    <PostComponent article_name={'videos_02'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No exemplo acima, temos um botão chamado "fullscreenButton" que chama a 
                        função toggleFullscreen() quando clicado. A função verifica se o navegador 
                        suporta o modo de tela cheia usando as diferentes APIs disponíveis, como 
                        requestFullscreen, mozRequestFullScreen, webkitRequestFullscreen e 
                        msRequestFullscreen. Ela alterna entre o modo de tela cheia e o modo 
                        normal com base no estado atual do vídeo. Certifique-se de 
                        substituir "path/to/video.mp4" pelo caminho correto para o seu arquivo de vídeo.
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
                        Aumentar, diminuir e mutar o volume
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de função JavaScript que permite aumentar, 
                        diminuir e mutar o volume de um elemento de vídeo usando botões:
                    </Text>

                    <PostComponent article_name={'videos_03'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No exemplo acima, temos três botões: Aumentar Volume, Diminuir Volume e Mutar. Cada 
                        botão chama uma função JavaScript correspondente: aumentarVolume(), diminuirVolume() 
                        e toggleMultar(). A função aumentarVolume() aumenta o volume em 0.1 se o volume 
                        atual for menor que 1.0. A função diminuirVolume() diminui o volume em 0.1 se 
                        o volume atual for maior que 0.0. A função toggleMultar() inverte o estado de 
                        mudo (muted) do vídeo. Certifique-se de substituir "path/to/video.mp4" pelo 
                        caminho correto para o seu arquivo de vídeo.
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
                        Escolher entre diferentes opções de legenda
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para permitir que o usuário escolha entre diferentes opções de legenda, 
                        você pode criar um seletor de legendas (como uma lista suspensa) e 
                        atualizar a faixa de texto do vídeo com base na opção selecionada. A 
                        seguir, apresentamos um exemplo de como você pode implementar isso 
                        usando JavaScript:
                    </Text>

                    <PostComponent article_name={'videos_04'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        No exemplo acima, adicionamos três faixas de texto ao elemento de vídeo, 
                        cada uma com um idioma e rótulo diferentes. Em seguida, criamos um seletor 
                        de legenda {"<select>"} com diferentes opções, incluindo uma opção para 
                        desativar a legenda.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A função changeSubtitle() é chamada sempre que o usuário seleciona uma opção 
                        diferente no seletor de legenda. A função desativa todas as faixas de 
                        texto (track.mode = "disabled") e, em seguida, ativa a faixa de texto 
                        correspondente à opção selecionada (selectedTrack.mode = "showing"). 
                        Certifique-se de substituir os caminhos "path/to/video.mp4", 
                        "path/to/subtitles-pt.vtt", "path/to/subtitles-en.vtt" e 
                        "path/to/subtitles-es.vtt" pelos caminhos corretos para seus 
                        arquivos de vídeo e legendas. Além disso, você pode adicionar ou 
                        remover faixas de texto adicionais conforme necessário, atualizando o 
                        número de opções no seletor de legendas e ajustando os valores value das opções.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você também pode adicionar um evento de escuta para o evento loadeddata em 
                        cada faixa de texto. Dessa forma, você pode garantir que a faixa de texto 
                        esteja totalmente carregada antes de ativá-la. Adicione um ouvinte de 
                        eventos loadeddata para cada faixa de texto na função changeSubtitle(). Quando 
                        o evento loadeddata for acionado para uma faixa de texto, a função 
                        trackLoaded() será chamada. Essa função remove o ouvinte de eventos 
                        loadeddata da faixa de texto e ativa a faixa de texto definindo 
                        track.mode = "showing". Dessa forma, garantimos que as faixas de texto 
                        sejam ativadas apenas quando estiverem completamente carregadas, evitando 
                        problemas de exibição das legendas.
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
                        Download do vídeo
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É possível criar um botão que, ao ser clicado, faça o download do 
                        vídeo. Quando o botão "Baixar vídeo" é clicado, a função downloadVideo() é 
                        acionada. Dentro dessa função, usamos o fetch() para buscar o arquivo de 
                        vídeo como um objeto Blob. Em seguida, criamos um URL para o Blob usando 
                        URL.createObjectURL(blob). Depois, criamos dinamicamente um elemento {"<a>"}, 
                        definimos o atributo href como o URL do vídeo, o atributo download como o nome 
                        do arquivo de download e disparamos o evento de clique usando a.click(). Por 
                        fim, revogamos o URL do objeto usando URL.revokeObjectURL(url). Aqui está 
                        um exemplo de como fazer isso usando JavaScript:
                    </Text>

                    <PostComponent article_name={'videos_05'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Neste exemplo, você precisa substituir "path/to/video.mp4" pelo caminho correto 
                        do seu vídeo e "video.mp4" pelo nome desejado para o arquivo de download.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dessa forma, quando o usuário clicar no botão "Baixar vídeo", o arquivo 
                        de vídeo será baixado diretamente.
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
                        Escolher a velocidade de reprodução do vídeo
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Você pode adicionar um elemento {"<select>"} ao seu HTML para permitir 
                        ao usuário selecionar a velocidade de reprodução do vídeo. Em seguida, 
                        você pode adicionar um evento de alteração ao elemento {"<select>"} e, 
                        dentro do manipulador de evento, ajustar a propriedade playbackRate do 
                        elemento de vídeo de acordo com a opção selecionada. Aqui está um exemplo 
                        de como fazer isso usando JavaScript:
                    </Text>

                    <PostComponent article_name={'videos_06'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Neste exemplo, adicionamos um elemento {"<select>"} com o id "speed" e um 
                        manipulador de evento onchange que chama a função changePlaybackSpeed(). A 
                        função obtém o elemento de vídeo pelo id "meuVideo" e o elemento {"<select>"} 
                        pelo id "speed". Em seguida, obtemos o valor selecionado do 
                        elemento {"<select>"} e convertemos em um número de ponto flutuante usando 
                        parseFloat(). Por fim, atribuímos o valor da velocidade de reprodução ao 
                        playbackRate do elemento de vídeo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dessa forma, o usuário pode selecionar uma velocidade de reprodução 
                        no {"<select>"} e o vídeo será reproduzido na velocidade escolhida. A opção 
                        padrão é "1x".
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
                        Audiodescrição ou transcrição descritiva em texto

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.5'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.5 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.7'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.7 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded'
                        />

                        <BadgeWCAGInfoNumber
                            bgColor='#276749'
                            textWCAG='Critério 1.2.8'
                            tooltipText='Ver Critério WCAG de Sucesso 1.2.8 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Vídeos pré-gravados que transmitem conteúdo visual que não está disponível 
                        na faixa de áudio devem possuir uma audiodescrição.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A audiodescrição consiste na descrição clara e objetiva de todas as 
                        informações apresentadas de forma visual e que não fazem parte dos 
                        diálogos. Essas descrições são apresentadas nos espaços entre os diálogos 
                        e nas pausas entre as informações sonoras.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Para adicionar um botão que acione o download da audiodescrição de um vídeo, 
                        você pode adicionar um botão no seu código HTML para representar o botão 
                        de download da audiodescrição e no JavaScript, você precisa definir a 
                        função que será acionada quando o botão for clicado. Dentro dessa função, 
                        você pode criar e disparar o download da audiodescrição. Aqui está um 
                        exemplo de função para download da audiodescrição:
                    </Text>

                    <PostComponent article_name={'videos_07'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Com essas etapas, quando o usuário clicar no botão "Download da Audiodescrição", 
                        a função downloadAudioDescription será acionada, criando um link temporário que 
                        dispara o download da audiodescrição. Certifique-se de 
                        substituir 'caminho/para/audiodescricao.mp3' pelo caminho correto para o 
                        arquivo de audiodescrição do seu vídeo.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Caso não seja possível ter uma audiodescrição, é recomendável que seja 
                        fornecido um arquivo contendo a descrição em formato de texto para o 
                        usuário. Como podemos ver no exemplo a seguir:
                    </Text>

                    <PostComponent article_name={'videos_08'} />

                    <Text
                        my='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Nesse exemplo, temos um vídeo com o atributo src apontando para o arquivo 
                        de vídeo (video.mp4) e um botão com o atributo onclick chamando a função 
                        downloadTranscription() quando clicado.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Dentro da função downloadTranscription(), fazemos uma requisição HTTP usando 
                        XMLHttpRequest para obter o conteúdo do arquivo de 
                        transcrição (transcription.txt). Quando a resposta é recebida com 
                        sucesso (estado 4 e status 200), o conteúdo da transcrição é extraído da 
                        resposta.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Em seguida, criamos um elemento de link {"<a>"} temporário para simular o 
                        download do arquivo de transcrição. Definimos o URL do link com o conteúdo 
                        da transcrição, especificamos o nome do arquivo de transcrição e simulamos 
                        o clique nesse link usando o método click(). Dessa forma, o usuário poderá 
                        fazer o download da transcrição em formato de texto.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A transcrição descritiva em texto ajuda os usuários que possam ter 
                        problemas de visão ou dificuldades na leitura das legendas ou audição, 
                        facilitando o entendimento dos diálogos presentes no vídeo.
                    </Text>

                </Flex>
                
                <Footer />

            </Container>
        </Flex>       
    );
};

export default PageAboutVideos;