
///CREATE AUDIT
/**
 * @openapi
 * /api/audit/create:
 *    post:
 *      tags:
 *        - Regitros
 *      summary: "Crear un registro de petición"
 *      description: Crea un registro de peticion en PG
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/audit"
 *      responses:
 *        '200':
 *          description: Registro creado exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */
///VIEW AUDITS
/**
 * @openapi
 * /api/audit:
 *    get:
 *      tags:
 *        - Regitros
 *      summary: "Listar registro de peticiones"
 *      description: Lista del registro historico de peticiones
 *      responses:
 *        '200':
 *          description: Operación exitosa
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */



///GET AUDIT

/**
 * @openapi
 * /api/audit/{id}:
 *    get:
 *      tags:
 *        - Regitros
 *      summary: "Consultar registro por id"
 *      description: Consulta los registros por id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: integer
 *      responses:
 *        '204':
 *          description: Operacion exitosa
 *        '500':
 *          description: Error al realizar la consultax
 *      security:
 *       - bearerAuth: []
 */


///UPDATE AUDITS
/**
 * @openapi
 * /api/audit/{id}:
 *    put:
 *      tags:
 *        - Regitros
 *      summary: "Editar registro de petición por id"
 *      description: Edita los registros de peticiónes a la api externa
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/audit"
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: integer
 *      responses:
 *        '204':
 *          description: Se ha editado exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Error al realizar la consulta
 *      security:
 *       - bearerAuth: []
 */


///DELETE AUDITS
/**
 * @openapi
 * /api/audit/{id}:
 *    delete:
 *      tags:
 *        - Regitros
 *      summary: "Eliminar registro de petición por id"
 *      description: Elimina los registros de peticiónes a la api externa
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: integer
 *      responses:
 *        '204':
 *          description: Se ha eliminado el registro exitosamente
 *        '500':
 *          description: Error al realizar la consulta
 *        '404':
 *          description: Se ha eliminado el registro exitosamente
 *      security:
 *       - bearerAuth: []
 */
