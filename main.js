const Año = 2021;

let nombre = prompt ("Ingrese su Nombre");
 
let apellido = prompt("Ingrese su Apellido");

while ( nombre !="ESC"  && apellido !="ESC"){
   
    if (nombre == "" || apellido == ""){

        console.error( "Error! Datos no ingresados");

        alert("Ingresar Datos Validos");
    
    } else {

        let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));

        let edad = Año - fechaNacimiento ;

        while( fechaNacimiento !="ESC"){        

            if (fechaNacimiento =="" || edad < 18){
                
                alert("No puede Ingresar!");

            } else {

                document.write("<div class=box2>" + "<h2>" + "Bienvenido a JavaScript" + " " + nombre + " " + apellido + "</h2>" + "</div>");

                console.log(nombre);
                console.log(apellido);
                console.log(edad);
            }

            fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));

            edad = Año - fechaNacimiento ;
    
            }
    
    }

    nombre = prompt ("Ingrese su Nombre");

    apellido = prompt ("Ingrese su Apellido");

}
