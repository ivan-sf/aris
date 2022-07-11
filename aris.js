const fs = require("fs/promises");
const path = require("path");
const AppSettings = require("./global");


let entities = []

const createEntities = async (fileDir) => {
  pathFile = path.join(__dirname, fileDir);
  json = await fs.readFile(pathFile, "utf8");
  json = JSON.parse(json);

  pathEntities = path.join(__dirname, "./api/entities");
  dirEntities = await fs.readdir(pathEntities);

  for (var i in json) {
    entities.push(i)
    modelJson = i;
    attributes = json[i];
    aux = 0;
    dirEntities.forEach((element) => {
      modelDir = element.replace(/.ts/g, "");
      modelJson == modelDir ? aux++ : null;
    });
    if (aux > 0) {
      aux = 0;
      outFilePath = path.join(pathEntities, `${modelJson}.ts`);
      content = contentEntity(modelJson, attributes);
      await fs.writeFile(outFilePath, content);
      console.log("La entidad", modelJson, "existe, se ha modificado exitosamente.");
    } else {
      outFilePath = path.join(pathEntities, `${modelJson}.ts`);
      content = contentEntity(modelJson, attributes);
      await fs.writeFile(outFilePath, content);
      console.log("La entidad", modelJson, "no existe, se ha creado exitosamente.");
    }
  }
  contentDB(entities)
};

const contentEntity = (model, attributes) => {
  column = "";
  for (let j in attributes) {
    nameColumn = j;
    type = attributes[j];
    column += ` 
    @Column({nullable:true})
    ${nameColumn}:${type}`;
  }
  return (content =
    `import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, Generated } from 'typeorm'

@Entity()

export class ${model} extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    ` +
    column +
    `
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  `);
};

const contentDB = async(entities)=>{
  outFilePath = path.join(__dirname, `api/db.ts`);
  imports = "";
  model = "";
  for(let i in entities){
    imports += `import {${entities[i]}} from './entities/${entities[i]}'
`
    model += `${entities[i]},`
  }
  contentDataBase = `import {DataSource} from 'typeorm'
import {AppSettings} from './environment.dev'
`+
`${imports}
`+
`
const TYPE:any = AppSettings.TYPE
const HOSTDB = AppSettings.HOSTDB
const PORTDB:any = AppSettings.PORTDB 
const USERDB = AppSettings.USERDB
const PWDB = AppSettings.PWDB
const DB = AppSettings.DB


export const AppDataSource = new DataSource({
    type: TYPE,
    host: HOSTDB,
    port: PORTDB,
    username: USERDB,
    password: PWDB,
    database: DB,
    entities: [${model}],
    logging: true,
    synchronize: true,
})`
  await fs.writeFile(outFilePath, contentDataBase);
}

createEntities(nameFile);

// Generar Entities ---->OK
// Generar desde consola CLI -----> OK
// Generar DB ----->OK
// Generar Controllers
// Generar Swagger
// Generar API
// Actualizar rutas api
// Generar CRUD Visual --> Estilo Jhipster