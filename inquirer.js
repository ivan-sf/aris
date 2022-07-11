function prompt(){
    inquirer
    .prompt([
      {
        type: "list",
        name: "typeDB",
        message: "Elige el gestor de base de datos que deseas utilizar.",
        choices: ["postgresql", "mysql"],
      },
      {
        type: "rawlist",
        name: "typeDB2",
        message: "Elige la base de datos",
        choices: ["postgresql", "mysql", "mariadb"],
      },
      {
        type: "expand",
        name: "typeDB3",
        message: "Elige la base de datos",
        choices: [
          {
            key: "a",
            value: "postgresql",
          },
          {
            key: "b",
            value: "mysql",
          },
          {
            key: "c",
            value: "mariadb",
          },
        ],
      },
      {
        type: "checkbox",
        name: "typeDB4",
        message: "Elige la base de datos",
        choices: ["postgresql", "mysql", "mariadb"],
      },
      {
        name: "database",
        message: "¿Cual es el nombre de tu base de datos?",
        default: "aris",
      },
      {
        name: "userdb",
        message: "¿Usuario de tu base de datos?",
        default: "postgres",
      },
      {
        type: "password",
        name: "passwordDB",
        message: "¿Contraseña base de datos?",
        mask: "*",
      },
    ])
    .then((answer) => {
      setEnviroment(answer)
    });
  }