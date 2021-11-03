import PetRepositorio from '../repositories/petRepositorio'

const petRepositorio = new PetRepositorio()
type petType = {
    nomePet : string ,
    tipo : string ,
    imagem : string
}

class pet {

    public async adicionar(pet : petType) : Promise<petType>   {

        return await petRepositorio.adicionarTabela(pet)
    }

     public  async lista() : Promise<petType[]>{
        return await petRepositorio.lista()
    }

    public async id(id : number){
        
        return await petRepositorio.pesquisaId(id)
    }

    public async excluir(id : number){
        
        return await petRepositorio.deletar(id)
    }

    public async alterar(id : number , item : petType ) : Promise<petType> {
        
        return await petRepositorio.alterar(id , item) 
    }




}

export default new pet()