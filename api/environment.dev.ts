export class AppSettings {
    public static PORT = 3000
    public static SERVER_ENVIRONMENT = 'http://127.0.0.1:'
    public static API_ENDPOINT= AppSettings.SERVER_ENVIRONMENT+AppSettings.PORT+'/api/'

    public static TYPE = 'postgres'
    public static HOSTDB = 'localhost'
    public static PORTDB = '5432'
    public static USERDB = 'postgres'
    public static PWDB = 'admin'
    public static DB = 'deliv'
 }