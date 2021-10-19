import atendimentoModel , {atendimento} from "../models/atendimentoModels";
import {Response} from 'express'
import moment from "moment";


class atendimentoController {
    adicionar(res : Response , atendimento : atendimento) :void {

        const dataAtual = moment().format('YYYY-MM-DD')
        const data = moment(atendimento.data , 'DD/MM/YYYY').format('YYYY-MM-DD')
        const atendimentoATualizado = {...atendimento , dataAtual, data}
         atendimentoModel.adicionar(atendimentoATualizado).then(resultado => {
            res.status(201).json(resultado)

         }).catch(err => {
             res.status(400).json('Erro cabuloso')
         })
    }

    public lista(res : Response){
        atendimentoModel.lista()
            .then( resultado => {
                res.status(200).json(resultado)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    public pesquisarId(res : Response, idS : string){
        const id = parseInt( idS)
        atendimentoModel.id(id)
            .then(resultado => {
                res.status(200).json(resultado)
            })
            .catch(erro => {
                res.status(400).json(erro)
            })
    }

    public  deletar(res : Response , idS : string){
        
        const id = parseInt(idS)
        atendimentoModel.excluir(id)
            .then(resultado => {
                res.status(200).json(resultado)
            }) 
            .catch(erro => {
                res.status(400).json(erro)
            })
    }

    public alterar(res : Response , ids : string , item : atendimento){

        const id = parseInt(ids)
        const dataAtual = moment().format('YYYY-MM-DD')
        const data = moment(item.data , 'DD/MM/YYYY').format('YYYY-MM-DD')
        const itemATualizado = {...item , dataAtual, data}

        atendimentoModel.alterar(id , itemATualizado)
            .then(resultado => {
                res.status(200).json(resultado)
            })
            .catch(erro => {
                res.status(400).json(erro)
            })
    }


  

}

export default new atendimentoController()