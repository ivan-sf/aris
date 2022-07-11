const { exec } = require("child_process");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

command("npm install").then(
  success=>{
    prompt()
  }
);

console.log(`aris: Instalando dependencias...`);

function prompt(){
  inquirer
  .prompt([
    {
      name: "endPoint",
      message: "Ingresa el ENDPOINT de tu aplicacion.",
      default: "http://127.0.0.1:"
    },
    {
      name: "port",
      message: "Por favor ingresa el puerto en el que deseas ejecutar la API.",
      default: "3000"
    },
    {
      name: "hostDB",
      message: "ingresa el Host de tu base de datos.",
      default: "localhost"
    },
    {
      type: "list",
      name: "typeDB",
      message: "Elige el gestor de base de datos que deseas utilizar.",
      choices: ["postgres", "mysql"],
    },
    {
      name: "portDB",
      message: "Ingresa el puerto de tu base de datos.",
      default: "5432",
    },
    {
      name: "database",
      message: "Ingresa el nombre de tu base de datos.",
      default: "aris",
    },
    {
      name: "userDB",
      message: "Ingresa el usuario de tu base de datos.",
      default: "user-db",
    },
    {
      type: "password",
      name: "passwordDB",
      message: "¿Contraseña base de datos?",
      mask: "*",
    },
    {
      name: "nameFile",
      message: "Ingresa el nombre de tu archivo json para generar las entidades y controladores.",
      default: "aris.json",
    },
  ])
  .then((answer) => {
    setEnviroment(answer)
  });
}



async function setEnviroment (response){
  // console.log("response",response);
 outFilePath = path.join(__dirname, `api/environment.dev.ts`);
 outFilePathGlobal = path.join(__dirname, `global.js`);
  const environment = `export class AppSettings {
    public static PORT = ${response.port}
    public static SERVER_ENVIRONMENT = '${response.endPoint}'
    public static API_ENDPOINT= AppSettings.SERVER_ENVIRONMENT+AppSettings.PORT+'/api/'

    public static TYPE = '${response.typeDB}'
    public static HOSTDB = '${response.hostDB}'
    public static PORTDB = '${response.portDB}'
    public static USERDB = '${response.userDB}'
    public static PWDB = '${response.passwordDB}'
    public static DB = '${response.database}'
 }`
 const global = `global.nameFile = "aris.json"; `
 await fs.writeFile(outFilePath, environment);
 await fs.writeFile(outFilePathGlobal, global);
 console.log(`aris: Se ha modificado el environment exitosamente.`);
 console.log(`aris: Se ha creado las variables.`);
 command("npm run g-e");
}

async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function command(command) {
  let { stdout } = await sh(command);
  for (let line of stdout.split("\n")) {
    console.log(`aris: ${line}`);
  }
}