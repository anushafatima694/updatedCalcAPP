function getValue(num){
    var operator =["+","-","*","/"]
    var inp = document.getElementById('input')
    var oldValue = inp.value.slice(inp.value.length -1)
    if(operator.indexOf(oldValue) !== -1  && operator.indexOf(num) !== -1){
        var newValue=inp.value.slice(0,inp.value.length -1)
         inp.value = newValue+num
         console.log(newValue)

        console.log("yes")
    }else{
        console.log("no")
        inp.value += num
    }
    
}



function  calculateValue(){
    var  inp  = document.getElementById('input')
    var get = inp.value
    var calc = eval(get)
    inp.value = calc
}



function clearValue(){
    var  inp  = document.getElementById('input')
    inp.value = ''
}


























