function testing(first , second) {
    let name = '';
    for(let i = 0; i <arguments.length; i++) {
        const arg = arguments[i];
        name =name + ' ' + arg;
        
    }
    return name;
}

const test = testing('salim', "bin", "islam",'deto');
console.log(test);