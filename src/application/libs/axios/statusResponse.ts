export enum StatusResponse {
  /**
   * Solicitud exitosa.
   */
  OK = 200,
  /**
   * Errores en la solicitud.
   */
  BAD_REQUEST = 400,
  /**
   * La solicitud no se pudo procesar debido a la falta de autenticación válida.
   */
  UNAUTHORIZED = 401,
  /**
   * Resursos no encontrados.
   */
  NOT_FOUND = 404,
  /**
   * Error interno que impide el proceso de la solicitud, puede deberse a problemas
   * de la lógica de la aplicación o en la base de datos.
   */
  INTERNAL_SERVER_ERROR = 500,
}
