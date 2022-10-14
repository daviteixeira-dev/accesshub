import { Flex } from '@chakra-ui/react'
import MenuSideBar from './components/MenuSideBar/MenuSideBar'

function App() {
  return (
    <Flex flexDirection="column" bg="#fff">
      <Flex>
        <MenuSideBar />
      </Flex>
    </Flex>
  )
}

export default App
