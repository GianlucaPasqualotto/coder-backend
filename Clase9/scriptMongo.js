let connection = new Mongo();
let database = connect("localhost:27017/ecommerce");

database.productos.insertMany([
    {name:"Aceite Castrol", stock:10, price:120, url:"https://http2.mlstatic.com/D_NQ_NP_656681-MLA52027265695_102022-O.webp"},
    {name:"Aceite Mobil", stock:10, price:580, url:"https://http2.mlstatic.com/D_NQ_NP_995600-MLA49805367577_042022-O.webp"},
    {name:"Aceite Petronas", stock:10, price:900, url:"https://http2.mlstatic.com/D_NQ_NP_928373-MLA49094459905_022022-O.webp"},
    {name:"Aceite Total", stock:10, price:1280, url:"https://http2.mlstatic.com/D_NQ_NP_818827-MLA51985720412_102022-O.webp"},
    {name:"Luz Cree Led", stock:10, price:1700, url:"https://http2.mlstatic.com/D_NQ_NP_613239-MLA52128269994_102022-O.webp"},
    {name:"Batería Herbo", stock:10, price:2300, url:"https://http2.mlstatic.com/D_NQ_NP_823749-MLA41149073194_032020-O.webp"},
    {name:"Kit Filtros Wega", stock:10, price:2850, url:"https://http2.mlstatic.com/D_NQ_NP_798099-MLA31630149048_072019-O.webp"},
    {name:"Filtro de aceite Wega", stock:10, price:3350, url:"https://http2.mlstatic.com/D_NQ_NP_915444-MLA46125764100_052021-O.webp"},
    {name:"Filtro de combustible Wega", stock:10, price:4320, url:"https://http2.mlstatic.com/D_NQ_NP_986908-MLA45668544010_042021-O.webp"},
    {name:"Filtro de habitáculo Wega", stock:10, price:4990, url:"https://http2.mlstatic.com/D_NQ_NP_785444-MLA32157811901_092019-O.webp"}
])

database.mensajes.insertMany([
    {email:"gian@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"vale@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"maxi@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"pablo@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"santi@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"manuel@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"martin@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"nicolas@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"seba@gmail.com",mensaje:"¡Hola Rapid Lube Service!"},
    {email:"nacho@gmail.com",mensaje:"¡Hola Rapid Lube Service!"}
])