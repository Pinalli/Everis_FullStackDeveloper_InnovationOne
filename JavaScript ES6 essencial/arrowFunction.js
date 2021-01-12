function fn(){
    return'Code here';
    
}

//sem condições na função
const arrowFn = () =>' Code here';

const arrowFn2 = () => {
    //quando tem condiçoes
    return 'Code herre';
}
//Funcçoes tambme sao objetos
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop);

//receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFnExec => fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const  handleFnExecution = controlFnExcel(fn);

handleFnExecution(true); //exec a function fn
handleFnExecution();  //não exec a function fn

// controlFnExcel com função
function controlFnExcel(fnParam){
    return function(allowed){
        if(allowed) {
            fnParam();
        }
    }
}

