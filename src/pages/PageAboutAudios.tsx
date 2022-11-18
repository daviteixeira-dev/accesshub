import { 
    Flex, 
    Text, 
    Heading,  
    Container  
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'
import PostComponent from '../components/PostComponent/PostComponent'

const PageAboutAudios = () => {
  return (
    <Flex>
        <MenuSideBar />
        <Container maxW='container.xl' height='100vh' overflowY='auto'>
            
            <Heading as='h1' my='1rem'>
                Áudios
            </Heading>

            <Heading as='h2' mb='1rem' fontSize='1.1rem'>
                Ver WCAG 2.0 Critério de Sucesso 1.2.1, 1.2.2, 1.2.6 e 1.4.2.
            </Heading>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Fornecer alternativa para áudio
            </Heading>

            <Text mb='1rem'>
                Áudio gravado deve possuir uma transcrição descritiva. Além de essencial para 
                pessoas com deficiência auditiva, a alternativa em texto também é importante 
                para usuários que não possuem equipamento de som, que desejam apenas realizar a 
                leitura do material ou não dispõem de tempo para ouvir um arquivo multimídia. Neste 
                caso, também é desejável a alternativa em Libras.
            </Text>

            <PostComponent article_name={'audios_01'} />

            <Text my='1rem'>
                Uma apresentação prévia do conteúdo dos dois tipos de arquivo e de sua duração 
                também é desejável.
            </Text>

            <Heading as='h3' mb='1rem' fontSize='1rem'>
                Fornecer controle de áudio para som
            </Heading>

            <Text mb='1rem'>
                Deve ser fornecido um mecanismo para parar, pausar, silenciar ou ajustar o volume 
                de qualquer som que se reproduza na página.
            </Text>

        </Container>
    </Flex>
  )
}

export default PageAboutAudios