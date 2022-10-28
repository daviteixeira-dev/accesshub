import { 
  Route, 
  Routes, 
  BrowserRouter 
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Components from './pages/Components'
import Introduction from './pages/Introduction'

function App() {
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
      
      </Routes>
    </BrowserRouter>
  )
}

export default App