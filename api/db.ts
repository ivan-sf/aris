import {DataSource} from 'typeorm'
import {AppSettings} from './environment.dev'
import {Company} from './entities/Company'
import {User} from './entities/User'
import {Audit} from './entities/Audit'
import {Locations} from './entities/Locations'

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
    entities: [Company,User,Audit,Locations,],
    logging: true,
    synchronize: true,
})