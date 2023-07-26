//inicio función Juego 
function inicio() {
    let nombre;
    let salud;
    let energia;
    let edad;
    let comer;

    //datos de la mascota
    nombre = prompt("Ingresá el nombre de tu mascota");
    console.log("¡Bienvenidx! Ahora tenés una mascota que se llama " + nombre + ". Cuidala dándole comida y amor.")
    salud = 100;
    energia = 100;
    edad = 1;
    console.log("Su salud es de: " + salud);
    console.log("Su energía es de: " + energia);
    console.log("Su edad es de: " + edad + " día");

    // Array de comidas
    const comidas = [
        {
            nombre: "zanahoria",
            efecto:
            {
                salud: 10,
                energia: 30
            },
            mensaje: "Le diste zanahoria, ¡buena elección!, la energía aumenta 30 y como la zanahoria es muy sana, su salud aumenta 10." 
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
                salud: -30, 
                energia: 40 
            },
            mensaje: "Le diste helado, ¡qué rico! Pero las mascotas no pueden comer eso, por lo que le da diabetes de mascotas. La energía aumenta 40 pero la salud se reduce 30"  
        }
    ];

    // Array de formas de dar amor
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
//Array de posibilidades para cada día
const deNoche = [
{
    nombre: "sueño",
    mensaje: "Durante la noche " + nombre + "soñó que el perro del vecino le pinchaba su pelota favorita, se puso muy triste y se levantó asustado. Perdió 25 de salud y de energía.",
    efecto: 
    {
     salud: -25,
     energia: -25 

    } 
},
{
    nombre: "techo",
    mensaje: "Durante la noche, mientras " + nombre + " dormía, se inundó el departamento del vecino de arriba y el techo de tu casa se cayó sobre " + nombre + " , que se asusto y se lastimó un poco. Perdió 40 de salud y de energía",
    efecto: 
    {
     salud: -40,
     energia: -40 

    } 
},
{
    nombre: "ovnis",
    mensaje: "Durante la noche vinieron ovinis que abdujieron a " + nombre + ". Le hicieron estudios completos y cuando se puso a morder los botones de la nave, trajeron a " + nombre + " devuelta a casa. Perdió 30 de salud y de energía",
    efecto: 
    {
     salud: -30,
     energia: -30 

    } 
},
{
    nombre: "fiebre",
    mensaje: "Durante la noche a " + nombre + " le subió la fiebre, por suerte ya esta mejor, pero gastó mucha energía y salud. Perdió 50 de salud y de energía",
    efecto: 
    {
     salud: -50,
     energia: -50 

    } 
},
{
    nombre: "insomnio",
    mensaje: "Durante la noche " + nombre + " no pudo dormir por tener insomnio. Su energía disminuyó un 30.",
    efecto: 
    {
     salud: 0,
     energia: -30 

    } 
},
{
    nombre: "bien",
    mensaje: "Durante la noche " + nombre + " durnmió placidamente. Recuperando 40 de salud y de energía.",
    efecto: 
    {
     salud: +40,
     energia: +40 

    } 
},
{
    nombre: "fiesta",
    mensaje: "Durante la noche " + nombre + " no pudo dormir casi nada, porque los vecinos hicieron una fiesta hasta la madrugrada. Perdió 35 de energía.",
    efecto: 
    {
     salud: 0,
     energia: -35 

    } 
},
{
    nombre: "sillón",
    mensaje: "Durante la noche " + nombre + " mordió el sillón y lo rompió, te enojaste y le ordenaste ir a dormir a fuera. " + nombre + " se puso triste. Perdió 30 de salud y de energía",
    efecto: 
    {
     salud: -30,
     energia: -30 

    } 
},
{
    nombre:"sueño lindo",
    mensaje: "Durante la noche " + nombre + " tuvo un hermoso sueño donde comía croquetas. Recuperó 30 de salud y de energía.",
    efecto: 
    {
     salud: +30,
     energia: +30 

    } 
},
{
    nombre:"ratón",
    mensaje: "Durante la noche " + nombre + " comenzó a perseguir un raton, en su desenfreno no vió los muebles y se llevó puesta una silla. Perdió 40 de salud y de energía",
    efecto: 
    {
     salud: -40,
     energia: -40 

    } 
}

]




    const mascotaViva = () => salud > 0 && energia > 0;

    while (mascotaViva()) {
        let accion = prompt("Escribí 'comida' si querés darle energía o 'amor' si querés mejorar su salud (algunas opciones pueden afectar a ambas).").toLowerCase();

        if (accion === "comida") {
            comer = prompt("¿Qué querés darle de comer? Elegí una de las opciones y escribila: zanahoria // hamburguesa // pepino // sandia con vino // helado.").toLowerCase();
            const comidaElegida = comidas.find(darComida => darComida.nombre === comer);

            if (comidaElegida) {
                salud += comidaElegida.efecto.salud;
                energia += comidaElegida.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                salud = Math.max(salud, 0);
                energia = Math.max(energia, 0);
                console.log("--------------------------------------------");
                console.log(comidaElegida.mensaje);
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("y la energía de " + nombre + " es de: " + energia);
                alert ("Es de noche 🌙, hora de dormir... ZzZzZ...");

                if (salud > 0 && energia > 0) {
                    const azar = Math.floor(Math.random() * deNoche.length);
                    salud += deNoche[azar].efecto.salud;
                    energia += deNoche[azar].efecto.energia;
                    salud = Math.min(salud, 100);
                    energia = Math.min(energia, 100);
                    salud = Math.max(salud, 0);
                    energia = Math.max(energia, 0);
                    console.log("---------------------- ☾ ----------------------");
                    console.log(deNoche[azar].mensaje);
                    alert ("Está saliendo el sol 🌞, vamos a despertarnos!");
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
            amor = prompt("¿De qué manera le querés dar amor? Elegí una de las opciones y escribila: abrazo // leerle un cuento // palmada en la espalda // beso // jugar.").toLowerCase();
            const amorElegido = formasDeAmor.find(darAmor => darAmor.nombre === amor);

            if (amorElegido) {
                salud += amorElegido.efecto.salud;
                energia += amorElegido.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                salud = Math.max(salud, 0);
                energia = Math.max(energia, 0);
                console.log("--------------------------------------------");
                console.log(amorElegido.mensaje);
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                alert ("Es de noche 🌙, hora de dormir... ZzZzZ...");

                if (salud > 0 && energia > 0) {
                    const azar = Math.floor(Math.random() * deNoche.length);
                    salud += deNoche[azar].efecto.salud;
                    energia += deNoche[azar].efecto.energia;
                    salud = Math.min(salud, 100);
                    energia = Math.min(energia, 100);
                    salud = Math.max(salud, 0);
                    energia = Math.max(energia, 0);
                    console.log("---------------------- ☾ ----------------------");
                    console.log(deNoche[azar].mensaje);
                    alert ("Está saliendo el sol 🌞, vamos a despertarnos!");
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

    console.log( nombre + " está MUERTA");
    alert("Tu mascota murió ✝");
}