import {conexao} from './conexao'

export class Tabela {

    criar(){
        this.tabela()
        this.pet()
    }

    private tabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos ( ID int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, pet varchar(50) ,status varchar(50) ,observacao text ,data date ,dataATual date , PRIMARY KEY(ID))'

        conexao.query(sql, (error , result) => {
            if(error){
                console.log(error)
            }else{
                console.log('Tabela atendimento ok')
            }
        })
    }

    private pet(){
        
        const sql = "CREATE TABLE IF NOT EXISTS pets(ID int NOT NULL AUTO_INCREMENT , nomePet varchar(50) NOT NULL, tipo varchar(50) , imagem varchar(200) , PRIMARY KEY(ID) )"
        conexao.query(sql, (error , result) => {
            if(error){
                console.log(error)
            }else{
                console.log('Tabela pets ok')
            }
        })
    }
}