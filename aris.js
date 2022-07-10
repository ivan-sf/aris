const fs = require("fs/promises");
const path = require("path");

const createEntities = async (fileDir) => {
  pathFile = path.join(__dirname, fileDir);
  json = await fs.readFile(pathFile, "utf8");
  json = JSON.parse(json);

  pathEntities = path.join(__dirname, "./src/entities");
  dirEntities = await fs.readdir(pathEntities);

  for (var i in json) {
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
      console.log("La entidad", modelJson, "existe, se ha modificado.");
    } else {
      outFilePath = path.join(pathEntities, `${modelJson}.ts`);
      content = contentEntity(modelJson, attributes);
      await fs.writeFile(outFilePath, content);
      console.log("La entidad", modelJson, "no existe, se ha creado.");
    }
  }
};

const contentEntity = (model, attributes) => {
  column = "";
  for (let j in attributes) {
    nameColumn = j;
    type = attributes[j];
    column += ` 
    @Column()
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

createEntities("./aris.json");


// Generar Entities ---->OK
// Generar Controllers
// Generar Swagger
// Generar API
// Actualizar rutas api
// Generar CRUD Visual --> Estilo Jhipster