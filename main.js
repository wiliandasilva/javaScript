const Año = 2021;

let entrada = prompt('Ingrese su Nombre');

while ( entrada != "Esc" ) {
            
        let apellido = prompt('Ingrese su Apellido');
    
        if (apellido == ""  || apellido =='ESC'){
            
            console.error ('Error!, Datos no Ingresados');

            alert ('Ingrese datos valdiso');
            
        } else {

            let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));

            let edad = Año - fechaNacimiento;

                if ( fechaNacimiento == "" || edad < 18 ){
                    
                    alert("No puede Ingresar!");

                    let fechaNacimiento = parseInt ( prompt("Ingrese su fecha de Nacimiento"))

                } else {

                    document.write("<div class=box2>" + "<h2>" + "Bienvenido a JavaScript" + "</h2>" + "</div>");

                    console.log(entrada);
                    console.log(apellido);
                    console.log(edad);
                }

               
        }

    entrada = prompt ('Ingrese su Nombre');
}
