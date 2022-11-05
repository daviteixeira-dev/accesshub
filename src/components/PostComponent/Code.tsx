import { useEffect, useState } from 'react';
import { FaCopy, FaPaste } from 'react-icons/fa'
import { Button, Flex, Text } from '@chakra-ui/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ children, language }: any) => {

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <Flex flexDirection='column'>

      <Flex 
        alignItems='center'
        bg='rgb(47, 47, 47)' 
        marginBottom='-.5rem' 
        justifyContent='flex-end'
      >
        <Text 
          width='100%' 
          marginTop='.5rem' 
          marginLeft='1rem' 
          textAlign='center' 
          color='whiteAlpha.900'
        >
          Exemplo de código
        </Text>

        <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
          <Button 
            bg='none'
            fontSize='1rem' 
            color='blue.400' 
            marginTop='.5rem' 
            marginRight='1rem'
            _hover={{ bg: 'blackAlpha.900'}}
          >
            {copied ? <FaCopy /> : <FaPaste />}
          </Button>
        </CopyToClipboard>
      </Flex>

      <SyntaxHighlighter
        style={materialDark}
        language={language}
      >
        {children}
      </SyntaxHighlighter>

    </Flex>
  )
}

export default Code