//inicio función Juego 
function inicio() {
    let nombre;
    let salud;
    let energia;
    let edad;
    let comer;

    //datos de la mascota
    nombre = prompt("Ingresá el nombre de tu mascota");
    console.log("¡Bienvenidx! Ahora tenés una mascota que se llama " + nombre + ". Cuidala dándole comida y amor, elegí bien ya que " + nombre + ", al final de cada día, pierde 20 puntos de salud y 20 puntos de energía.")
    salud = 90;
    energia = 90;
    edad = 1;
    console.log("Su salud es de: " + salud);
    console.log("Su energía es de: " + energia);
    console.log("Su edad es de: " + edad + " día");
    // Array de objetos para las comidas
    const comidas = [
        {
            nombre: "zanahoria",
            efecto:
            {
                salud: 0,
                energia: 30
            },
            mensaje: "Le diste zanahoria, ¡buena elección!, la energía aumenta 30" 
        },
        {
            nombre: "hamburguesa",
            efecto: 
            { 
                salud: -30,
                energia: 80
            },
            mensaje: "Le diste una hamburguesa, eso da mucha energía pero no es muy sano... le sube el colesterol a " + nombre + ". La energía aumenta 80 pero la salud baja 30."
        },
        { 
            nombre: "sandia con vino", 
            efecto: 
            { 
                salud: -100, 
                energia: -100 
            },
            mensaje: "Le diste sandía con vino, ¡¿¿¿qué estás mal de la cabeza???! ¡SOS UN ASESINO! ¡ESTOY LLAMANDO A LA POLICÍA!"  
        },
        { 
            nombre: "pepino", 
            efecto: 
            { 
                salud: 0, 
                energia: 20 
            },
            mensaje: "Le diste pepino, buena elección, es una comida muy sana pero no llena mucho. La energía aumenta 20"  
        },
        { 
            nombre: "helado",
            efecto: 
            { 
                salud: -10, 
                energia: 40 
            },
            mensaje: "Le diste helado, ¡qué rico! Pero las mascotas no pueden comer eso, por lo que le da diabetes de mascotas. La energía aumenta 40 pero la salud se reduce 10"  
        }
    ];

    // Array de objetos para las formas de dar amor
    const formasDeAmor = [
        { 
            nombre: "abrazo", 
            efecto: 
            { 
                salud: 20, 
                energia: 5 
            },
            mensaje: "Le diste un abrazo a tu mascota, " + nombre + " es muy feliz y no solo aumenta su Salud 20, sino que también su Energía 5" 
        },
        { 
            nombre: "leerle un cuento", 
            efecto: 
            { 
                salud: -20, 
                energia: -10 
            },
            mensaje: "Le leíste un cuento a tu mascota, tu mascota no te escuchó y " + nombre + " se puso a jugar, se golpeó la cabeza corriendo. Baja su salud 20 y su energía 10."  
        },
        { 
            nombre: "palmada en la espalda", 
            efecto: 
            { 
                salud: -20, 
                energia: -5 
            },
            mensaje:"Le diste una palmada en la espalda a tu mascota, esa frialdad le destruye el corazón a " + nombre + ". Baja su salud 20 y su energía 5."  
        },
        { 
            nombre: "beso", 
            efecto: 
            { 
                salud: 40, 
                energia: 0 
            },
            mensaje:"Le diste un beso a tu mascota, " + nombre + " es muy feliz. Su salud aumenta 40"  
        },
        { 
            nombre: "jugar", 
            efecto: 
            { 
                salud: 80, 
                energia: -20 
            },
            mensaje:"Jugaste con tu mascota, " + nombre + " es muy feliz pero gastó mucha energía. Su salud aumenta 80 y su enegía baja 20"  
        }
    ];

    const mascotaViva = () => salud > 0 && energia > 0;

    // Resto del código sin cambios...

    while (mascotaViva()) {
        let accion = prompt("Escribí 'comida' si querés darle energía o 'amor' si querés mejorar su salud.").toLowerCase();

        if (accion === "comida") {
            comer = prompt("¿Qué querés darle de comer? Elegí una de las opciones que están en la pantalla y escribila.").toLowerCase();
            const comidaElegida = comidas.find(darComida => darComida.nombre === comer);

            if (comidaElegida) {
                salud += comidaElegida.efecto.salud;
                energia += comidaElegida.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                console.log("--------------------------------------------");
                console.log(comidaElegida.mensaje);
                console.log("Y la salud de " + nombre + " es de: " + salud);
                console.log("Ahora la energía de " + nombre + " es de: " + energia);

                if (salud > 0 && energia > 0) {
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia -= 20;
                    salud -= 20;
                    console.log("---------------------- ☼ ----------------------");
                    console.log("¡Hoy comienza un nuevo día!");
                    console.log("Hoy la salud de " + nombre + " es de " + salud);
                    console.log("Y su energía es de " + energia);
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                }
            } else {
                alert("La comida ingresada es inválida.");
            }
        } else if (accion === "amor") {
            amor = prompt("¿De qué manera le querés dar amor? Elegí una de las opciones de la pantalla y escribila acá").toLowerCase();
            const amorElegido = formasDeAmor.find(darAmor => darAmor.nombre === amor);

            if (amorElegido) {
                salud += amorElegido.efecto.salud;
                energia += amorElegido.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                console.log("--------------------------------------------");
                console.log(amorElegido.mensaje);
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);

                if (salud > 0 && energia > 0) {
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                    console.log("Ya es de noche. " + nombre + " está durmiendo... ZzZzZz...");
                    console.log("Perdiendo salud... Perdiendo energía...");
                    energia -= 20;
                    salud -= 20;
                    console.log("---------------------- ☼ ----------------------");
                    console.log("¡Hoy comienza un nuevo día!");
                    console.log("Hoy la salud de " + nombre + " es de " + salud);
                    console.log("Y su energía es de " + energia);
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                }
            } else {
                alert("La forma de amor ingresada es inválida.");
            }
        } else {
            alert("La acción ingresada es inválida.");
        }
    
    }

    console.log("Tu mascota está MUERTA");
    alert("Tu mascota murió ✝");
}