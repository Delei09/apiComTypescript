import moment from 'moment'
import { AtendimentoRepositorio } from '../repositories/atendimentoRepositories' 

const atendimentoRepostirorio = new AtendimentoRepositorio()

export type atendimento = {
    nome : string,
    pet: string ,
    data : string,
    observacao : string ,
    dataAtual? : string,
    status : string
}

class   Atendimento {

    public adicionar(atendimento : atendimento) : Promise<atendimento>   {


        return atendimentoRepostirorio.adicionarTabela(atendimento)
            .then(resultado => {
                return resultado
            })
    }

     public  async lista() : Promise<atendimento[]>{
        return await atendimentoRepostirorio.lista()
    }

    public async id(id : number){
        
        return await atendimentoRepostirorio.pesquisaId(id)
    }

    public async excluir(id : number){
        
        return await atendimentoRepostirorio.deletar(id)
    }

    public async alterar(id : number , item : atendimento ) : Promise<atendimento> {
        
        return await atendimentoRepostirorio.alterar(id , item) 
    }




}

export default new Atendimento()