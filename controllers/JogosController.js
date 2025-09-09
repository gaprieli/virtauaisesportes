//importar o Model
import Jogos from '../models/jogo.js'

export default class JogoController{

    constructor(caminhoBase='jogo/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            //cria o jogo
           
            await Jogos.create({
                ano: req.body.ano,
                genero:req.body.genero,
                desenvolvedor:req.body.desenvolvedor,
                classificacao:req.body.classificacao,
                plataforma:req.body.plataforma,
                preco:req.body.preco
            });
            res.redirect('/'+caminhoBase + 'lst');
        }
        this.list = async(req, res)=>{
            const resultado = await Jogos.find({})
            res.render(caminhoBase + 'lst', {Jogos:resultado})
        }

      
               this.openEdt = async(req, res)=>{
                  //passar quem eu quero editar
                  const id = req.params.id
                  console.log(id)
                  const jogo = await Jogos.findById(id)
                  console.log(jogo)
                 res.render(caminhoBase + "edt", 
                {Jogo:jogo})
              }
      
      
              this.edt = async(req, res)=>{
              await Jogos.findByIdAndUpdate(req.params.id, req.body)
              res.redirect('/'+caminhoBase + 'lst');
              
              }
      
               this.del = async(req, res)=>{
              await Jogos.findByIdAndDelete(req.params.id)
              res.redirect('/'+caminhoBase + 'lst');
              
              }
      
          }
      }