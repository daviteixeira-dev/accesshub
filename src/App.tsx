import { 
  Route, 
  Routes, 
  BrowserRouter 
} from 'react-router-dom';

import './styles/App.css';

import HomePage from './pages/HomePage';
import Components from './pages/Components';
import Introduction from './pages/Introduction';
import Error404Page from './pages/Error404Page';
import CreditsSection from './pages/CreditsSection';

import PageAboutForm from './pages/subpages/PageAboutForm';
import PageAboutTable from './pages/subpages/PageAboutTable';
import PageAboutLinks from './pages/subpages/PageAboutLinks';
import PageAboutImages from './pages/subpages/PageAboutImages';
import PageAboutVideos from './pages/subpages/PageAboutVideos';
import PageAboutAudios from './pages/subpages/PageAboutAudios';
import PageAboutHeaders from './pages/subpages/PageAboutHeaders';
import PageAboutBreadcrumb from './pages/subpages/PageAboutBreadcrumb';
import PageAboutReadingMask from './pages/subpages/PageAboutReadingMask';
import PageAboutSkipNavigation from './pages/subpages/PageAboutSkipNavigation';
import PageAboutRecommendations from './pages/subpages/PageAboutRecommendations';
import PageAboutKeyboardNavigation from './pages/subpages/PageAboutKeyboardNavigation';
import PageAboutHTMLInitialStructure from './pages/subpages/PageAboutHTMLInitialStructure';
import PageAboutChangeWebsiteContrast from './pages/subpages/PageAboutChangeWebsiteContrast';
import PageAboutFunctionChangeFontSize from './pages/subpages/PageAboutFunctionChangeFontSize';
import PageAboutListenImageDescription from './pages/subpages/PageAboutListenImageDescription';

function App(){
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/componentes' element={<Components />} />
        <Route path='/introducao' element={<Introduction />} />
        <Route path='/credits' element={<CreditsSection />} />
        <Route path='*' element={<Error404Page />} />
        
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
        <Route path='/componentes/tabelas' element={<PageAboutTable />} />
        <Route path='/componentes/audios' element={<PageAboutAudios />} />
        <Route path='/componentes/videos' element={<PageAboutVideos />} />
        <Route path='/componentes/imagens' element={<PageAboutImages />} />
        <Route path='/componentes/formularios' element={<PageAboutForm />} />
        <Route path='/componentes/cabecalhos' element={<PageAboutHeaders />} />
        <Route path='/componentes/breadcrumbs' element={<PageAboutBreadcrumb />} />
        <Route path='/componentes/recomendacoes' element={<PageAboutRecommendations />} />
        <Route path='/componentes/pular-navegacao' element={<PageAboutSkipNavigation />} />
        <Route path='/componentes/mascara-de-leitura' element={<PageAboutReadingMask />} />
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