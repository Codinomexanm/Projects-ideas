const { create } = require('domain');
const fs = require('fs');
const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;


const qual = "um texto qualquer sobre qualquer coisa";


//função cria uma arquivo .extesão desejada 
fs.writeFile('danki.pdf','teste alexandre',(err)=>{
    if(err) throw err;
    console.log('deu certo');
})
fs.appendFile('danki.pdf',qual,(err)=>{
    if(err) throw err;
    console.log('deu certo');
})


//função starta um servidor conforme necessidade
const serve = http.createServer((req,res)=>{
 fs.readFile('index.html',(err,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
 })
})

serve.listen(port,hostname,()=>{
    console.log("servidor rodando");
})
