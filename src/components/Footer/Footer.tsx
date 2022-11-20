import { 
    Flex, 
    Heading, 
    Link, 
    Text 
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex 
        h='auto' 
        w='100%' 
        as='footer' 
        bg='blue.600'
        padding='1rem' 
        flexDirection='column'
        justifyContent='space-between'
    >

        <Flex 
            mb='2rem'
            justifyContent='space-between'
            flexDirection={['column', 'column', 'row', 'row']}
        >
            
            <Flex 
                w='39%'
                padding='1rem'
                alignItems='start' 
                flexDirection='column'
                justifyContent='space-evenly' 
            >
                <Heading 
                    as='h2' 
                    fontSize='1.5rem' 
                    color='whiteAlpha.900'
                >
                    AccessHub
                </Heading>
            </Flex>

            <Flex 
                w='59%'
                alignItems='center'
                flexDirection={['column', 'column', 'row', 'row']}
            >

                <Flex 
                    as='nav'
                    w='100%'
                    textAlign='start'
                    flexDirection='column'
                >
                    <Text 
                        fontWeight='bold' 
                        fontSize='1.1rem'
                        color='whiteAlpha.900' 
                    >
                        Documentação
                    </Text>
                    <Flex 
                        as='ul' 
                        flexDirection='column'
                    >
                        <Flex as='li'>
                            <Link 
                                href='/componentes' 
                                color='whiteAlpha.900'
                            >
                                Componentes
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex 
                    as='nav'
                    w='100%'
                    textAlign='start'
                    flexDirection='column'
                >
                    <Text 
                        fontWeight='bold' 
                        fontSize='1.1rem'
                        color='whiteAlpha.900' 
                    >
                        Comunidade
                    </Text>
                    <Flex 
                        as='ul' 
                        flexDirection='column'
                    >
                        <Flex as='li'>
                            <Link 
                                color='whiteAlpha.900' 
                                href='https://github.com/daviteixeira-btm/acesshub'
                            >
                                GitHub
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
        
        <Flex
            justifyContent='space-between'
            flexDirection={['column', 'column', 'row', 'row']}
        >
            
            <Flex 
                alignItems='start'
                flexDirection='column'
                mb={['1rem', '1rem', 0, 0]}
                justifyContent='space-evenly'
                w={['100%', '100%', '39%', '39%']}
                padding={['0','0','1rem', '1rem']}
            >
                <Link 
                    href='https://vercel.com/'
                    bg='blackAlpha.900' 
                    padding='.3rem 1rem' 
                    borderRadius='.5rem'
                    color='whiteAlpha.900'
                    _hover={{ textDecoration: 'none' }}
                >
                    Deployed by ▲ Vercel 
                </Link>
            </Flex>

            <Flex
                alignItems='center'
                w={['100%','100%','59%','59%']}
                flexDirection={['column', 'column', 'row', 'row']}
            >
                <Text 
                    color='whiteAlpha.900' 
                    textAlign={['start', 'start', 'start', 'start']}
                >
                    © 2022-2023 Davi Teixeira. This site, library and examples 
                    are licensed under <Link 
                        fontWeight='bold' 
                        href='https://choosealicense.com/licenses/mit/'
                    >MIT
                    </Link>.
                </Text>
            </Flex>

        </Flex>

    </Flex>
  )
}

export default Footer