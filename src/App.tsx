import { 
  Route, 
  Routes, 
  BrowserRouter 
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Components from './pages/Components';
import Introduction from './pages/Introduction';

import PageAboutForm from './pages/PageAboutForm';
import PageAboutTable from './pages/PageAboutTable';
import PageAboutLinks from './pages/PageAboutLinks';
import PageAboutImages from './pages/PageAboutImages';
import PageAboutVideos from './pages/PageAboutVideos';
import PageAboutAudios from './pages/PageAboutAudios';
import PageAboutHeaders from './pages/PageAboutHeaders';
import PageAboutBreadcrumb from './pages/PageAboutBreadcrumb';
import PageAboutSkipNavigation from './pages/PageAboutSkipNavigation';
import PageAboutRecommendations from './pages/PageAboutRecommendations';
import PageAboutKeyboardNavigation from './pages/PageAboutKeyboardNavigation';
import PageAboutHTMLInitialStructure from './pages/PageAboutHTMLInitialStructure';
import PageAboutChangeWebsiteContrast from './pages/PageAboutChangeWebsiteContrast';
import PageAboutFunctionChangeFontSize from './pages/PageAboutFunctionChangeFontSize';
import PageAboutListenImageDescription from './pages/PageAboutListenImageDescription';

function App(){
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/componentes' element={<Components />} />
        <Route path='/introducao' element={<Introduction />} />
        
        <Route path='/robusto' element={<Components />} />
        <Route path='/operavel' element={<Components />} />
        <Route path='/perceptivel' element={<Components />} />
        <Route path='/compressivel' element={<Components />} />
        
        <Route path='/marcacao' element={<Components />} />
        <Route path='/multimidia' element={<Components />} />
        <Route path='/formulario' element={<Components />} />
        <Route path='/comportamento' element={<Components />} />
        <Route path='/conteudo-Informacao' element={<Components />} />
        <Route path='/apresentacao-design' element={<Components />} />

        <Route path='/componentes/links' element={<PageAboutLinks />} />
        <Route path='/componentes/tabela' element={<PageAboutTable />} />
        <Route path='/componentes/audios' element={<PageAboutAudios />} />
        <Route path='/componentes/videos' element={<PageAboutVideos />} />
        <Route path='/componentes/imagens' element={<PageAboutImages />} />
        <Route path='/componentes/formulario' element={<PageAboutForm />} />
        <Route path='/componentes/cabecalhos' element={<PageAboutHeaders />} />
        <Route path='/componentes/breadcrumb' element={<PageAboutBreadcrumb />} />
        <Route path='/componentes/recomendacoes' element={<PageAboutRecommendations />} />
        <Route path='/componentes/pular-navegacao' element={<PageAboutSkipNavigation />} />
        <Route path='/componentes/navegacao-pelo-teclado' element={<PageAboutKeyboardNavigation />} />
        <Route path='/componentes/html-estrutura-inicial' element={<PageAboutHTMLInitialStructure />} />
        <Route path='/componentes/alterar-tamanho-da-fonte' element={<PageAboutFunctionChangeFontSize />} />
        <Route path='/componentes/alterar-contraste-do-site' element={<PageAboutChangeWebsiteContrast />} />
        <Route path='/componentes/ouvir-descricao-da-imagem' element={<PageAboutListenImageDescription />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;