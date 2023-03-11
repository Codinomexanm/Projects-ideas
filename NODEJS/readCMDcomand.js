const readline = require('readline');


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('qual o seu nome',function(name){
    console.log('o nome do usario é : '+name);
    rl.question('qual é a sua idade',function(idade){
    console.log(`a idade do ${name} é ${idade}`);
})
})

rl.on('close',()=>{
    console.log('adeus');
    process.exit(0)
})
