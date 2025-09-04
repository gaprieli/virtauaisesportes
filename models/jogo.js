import conexao from '../config/conexao.js'

const Jogo = conexao.Schema({
    ano: {type:String, required:true},
    genero:{type:String, required:true},
    desenvolvedor:{type:String, required:true},
    classificacao:{type:String, required:true},
    plataforma:{type:String, required:true},
    preco:{type:String, required:true}
})

export default conexao.model('Jogo',Jogo)