//Funciones comúnes y útiles que puedo necesitar en toda la web


export const getValoresFiltros = (totalDatos, nombreCampo) => {
    let valores = totalDatos.map((item) => item[nombreCampo])
    //Lo del flat es porque hay campos que pueden tener varios valores
    //Esos campos por ahora, son colores y categoria
    if (nombreCampo === 'colores' || nombreCampo === 'categoria') valores = valores.flat()
 
    return ['todos', ...new Set(valores)]
}