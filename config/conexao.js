import mongoose from "mongoose";
const url = "mongodb+srv://alunalinda:aluno@cluster0.3lole.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const conexao = await mongoose.connect(url)

export default conexao