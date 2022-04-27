function calculadorabhaskara(a,b,c){

    var delta = Math.pow(b,2) - (4*a*c)
    
    return delta
}

function calcularx(a,b,delta){

    if(delta < 0 ){
        print('Não existe delta negativo')
    }else{
        if(delta > 0){

            var x1 = (-b + Math.sqrt(delta)) / 2*a
            var x2 = (-b - Math.sqrt(delta)) / 2*a
            return x1,x2
        }
    }
}
export {calculadorabhaskara, calcularx}