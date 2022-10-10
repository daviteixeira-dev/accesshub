import express from "express"

const app = express()

app.get('/docs', (request, response) => {
    return response.json([
        { id: 1, name: 'Doc 1' },
        { id: 2, name: 'Doc 2' },
        { id: 3, name: 'Doc 3' },
        { id: 4, name: 'Doc 4' },
        { id: 5, name: 'Doc 5' },
    ])
})

app.listen(3333)