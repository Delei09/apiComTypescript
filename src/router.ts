import express, {Request , Response} from 'express'
import atendimentoController from './controller/atendimentoController'

const router = express()

router.get('/atendimentos', (req : Request , resp : Response) => {
    atendimentoController.lista(resp)
})

router.get('/atendimentos/:id', (req : Request , resp : Response) => {
    
    
    atendimentoController.pesquisarId(resp , req.params.id)
})

router.post('/atendimentos', (req : Request , resp : Response) => {
   atendimentoController.adicionar(resp, req.body)
})

router.patch('/atendimentos/:id', (req : Request , resp : Response) => {
    atendimentoController.alterar(resp , req.params.id , req.body)
})

router.delete('/atendimentos/:id', (req : Request , resp : Response) => {
    atendimentoController.deletar(resp , req.params.id)
})

export default router
