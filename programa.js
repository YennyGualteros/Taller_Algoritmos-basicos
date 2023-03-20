let nombre;
    nombre= prompt()
    //documento.write(nombre)
    console.log ("hola " +nombre)


function calcular (base, altura){
    let  area;
    let perimetro;
    area=base*altura;
    perimetro=2*(base+altura);
    return [area,perimetro]
}

function calcular_hipotenusa (a,b){
    const hipotenusa= Math.sqrt (a**2+b**2);
    return hipotenusa; 
}

function calculadora (a,b){
    document.writeln (a+b)
    document.writeln (a-b)
    document.writeln (a*b)
    document.writeln (a/b)

    console.log(a+b)
    console.warn(a-b)
    console.error(a*b)
    console.info(a/b)
}

function media (){
    let campo_x = document.getElementById('x'); 
    let campo_y = document.getElementById('y'); 
    let campo_z = document.getElementById('z'); 

    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

        let promedio= (x+y+z)/3;
        console.log (promedio);
        return promedio;
}

