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

function calcular_calificaciones  (a,b,c){
    document.writeln (a*0.55);
    document.writeln (b*0.30);
    document.writeln (c*0.15);

    console.log (a*0.55),
    console.log (b*0.30);
    console.log (c*0.15);

    console.log (a+b+c)=calificacionfinal;
    return calificacionfinal;
}

function calcular_tiempo(){
    let v1= parseInt(Document.getElementById("x").value);
    let v2= parseInt(Document.getElementById("y").value);
    let d= parseInt(Document.getElementById("z").value);
    let t=d/(v1+v2);
    let tf=t*60;
    let resultado= Document.getElementById=(resultado);
    resultado.value= tf;
    return tf;

}