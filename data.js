//Esperar que el documento este cargado
document.addEventListener("DOMContentLoaded", function(event){
    //Mostar solo el contenido del HTML
        //console.log(document.getElementById("text-input").textContent);
    //Mostrar el contenido del HTML pero modificado segun la funcion "cleanText"
        //console.log(cleanText(document.getElementById("text-input").textContent));
    //Mostrar el contenido del HTML pero modificado segun la funcion "addTextToArray"
        //console.log(addTextToArray(cleanText(document.getElementById("text-input").textContent)))
    //Mostrar el resultado final Palabras
        console.log(wordDuplicates(cleanText(fetchText())));
    //Mostrar el resultado final Letras
        console.log(letterDuplicates(cleanText(fetchText())));
});
//Funcion para importar el contenido del HTML
function fetchText(text) {
    return document.getElementById("texto-entrada").textContent;
}
//Funcion para eliminar caracteres y al final llamar
function cleanText(text){
    text = text.replaceAll(',', '');
    text = text.replaceAll('.', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll('\t', '');
    text = text.replaceAll('\n', '');
    //Primer espacio en blanco
    text = text.replaceAll('/^ /', '');
    //Ultimo espacio en blanco
    text = text.replaceAll('/ $/', '');
    //Todos los espacios en blanco 
    text = text.replaceAll('/[ ]+/g', '');
    //text = text.replaceAll('         ', '')
    //text = text.replaceAll('       ', '')
    return text
}
//Funcion para crear el array segun el texto recibido y a la vez formatearla
function addTextToArray(text){
    return text = text.split(' ')
}
//Funcion para encontrar palabras duplicadas
function wordDuplicates(text){
    let matchedElements = [];
    let duplicatedWords = [];
    let data = addTextToArray(text);
    //recorra array y nos entregue algo como expectedResults
    for (let i = 0; i < data.length; i++){
        let num = data[i]
        let duplicates = 0;
        for (let z = 0; z < data.length; z++){
            if (num === data[z] && !matchedElements.includes(num)){
                duplicates++;
            }
        }
        matchedElements.push(num);
        if (duplicates > 1){
            duplicatedWords.push(`${num} ${duplicates}`) // "#{num} #{duplicates}"
        }
    }
    return duplicatedWords;
    document.getElementById('resultado').innerHTML= duplicatedWords;
};

//Funcion para encontrar letras duplicadas
//Opcion1
function letterDuplicates(text) {
    // Capturas el valor del input, lo limpas de espacios al inicio y al final y luego haces un arreglo
    let data = addTextToArray(text);
    // Creamos un objeto que será el que almacene las repeticiones
    const repeticiones = {};
    // Ciclamos el texto del input y verificamos si existe y sumamos 1, de no existir siempre valdrá 1
    data.forEach( ( letra ) => {
      repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
    });
    // Ahora ciclamos el objeto y lo agregamos al resultado
    for( let letra in repeticiones ) {
      const text = `${ letra } = ${ repeticiones[ letra ] }<br>`;
      document.getElementById('resultado').innerHTML += text;
    }
};
//Opcion2
//function letterDuplicates(text){
//    
//   let indice = [];
//    for(var i = 0; i < data.length; i++) {
//       if (cadena[i].toLowerCase() === "a") indice.push(i);
//    }
//    
//    document.getElementById("resultado").innerHTML = indice.length;
//};