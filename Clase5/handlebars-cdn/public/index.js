// crear plantilla de handlebars
const template = Handlebars.compile(`
<h1>Datos Personales</h1>
<ul>
    <li>{{nombre}}</li>
    <li>{{apellido}}</li>
    <li>{{edad}}</li>
    <li>{{email}}</li>
    <li>{{telefono}}</li>
</ul>
`)

// genera el codigo html, unificando el template y los datos en forma de objetos
const html = template({
    nombre:"Gianluca",
    apellido:"Pasqualotto",
    edad:"26",
    email:"pasqualottogianluca@gmail.com",
    telefono:"2616751923",
})

// resultado
{/* <h1>Datos Personales</h1>
<ul>
    <li>Gianluca</li>
    <li>Pasqualotto</li>
    <li>26</li>
    <li>pasqualottogianluca@gmail.com</li>
    <li>2616751923</li>
</ul> */}

document.getElementById("contenedor").innerHTML = html;