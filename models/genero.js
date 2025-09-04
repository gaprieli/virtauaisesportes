import conexao from '../config/conexao.js'

const Genero = conexao.Schema({
    tipo: {type:String, required:true}
})

export default conexao.model('Genero',Genero)