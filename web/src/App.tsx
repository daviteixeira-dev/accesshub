import { Flex } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuSideBar from './components/MenuSideBar/MenuSideBar'
import Components from './pages/Components'
import HomePage from './pages/HomePage'
import Introduction from './pages/Introduction'

function App() {
  return (
    <BrowserRouter>
      <MenuSideBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/components" element={<Components />} />
      </Routes>
      </MenuSideBar>
    </BrowserRouter>
  )
}

export default App