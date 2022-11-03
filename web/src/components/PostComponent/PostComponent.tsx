import { useEffect, useState } from 'react'

import Markdown from 'markdown-to-jsx'

import { Container } from '@chakra-ui/react'

import Code from '../../components/PostComponent/Code'

interface PostProps {
    article_name: string
}

const PostComponent = (props: PostProps) => {

    const [postContent, setPostContent] = useState('')

    useEffect(() => {
        import(`../../markdown/${props.article_name}.md`)
            .then(resp => {
                fetch(resp.default)
                    .then(resp => resp.text())
                    .then(resp => setPostContent(resp))
            })
            .catch(err => console.log(err))
    });

    return (
        <Container 
            padding={0}
            as='article' 
            maxW='container.xl'
            fontWeight='semibold'
        >
            <Markdown
                options={{
                    overrides: {
                        Code: {
                            component: Code
                        }
                    }
                }}
            >
                {postContent}
            </Markdown>
        </Container>
    )
}

export default PostComponent