import Yargs from "yargs";
const args = Yargs(process.argv.slice(2));

const objArgumentos = args.default({
    p:8080
})
.alias({
    p:"puerto",
    m:"modo"
}).argv;
console.log(objArgumentos)