const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

let tarefas = []

app.get('/api/tarefas', (req, res) => {
    const titulo = String(req.body?.titulo ?? '').trim()
})

app.get('/api/tarefas', (req, res) => {
    const titulo = String(req.body?.titulo ?? '').trim()
if (!titulo) {
    return res.status(400).json({erro: 'O titulo é obrigatorio.'})
 }
 const nova = {id: Date.now(), titulo, concluida:
    false}
    tarefas.push(nova)
    res.status(201).json(nova)
})

app.patch('api/tarefas/:id', (req, res) => {
    tarefas = tarefas.filter(t => t.id !== Number(req.params.id))
    if (!tarefas) return res.status(404).json({erro:
        'Tarefa não encontrada'
    })
    tarefas.concluida = !tarefas.concluída
res.json(tarefas)
})

app.delete('api/tarefas/:id', (req, res) => {
    tarefas = tarefas.filter(t => t.id !== Number(req.params.id))
    res.status(204).end()
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})