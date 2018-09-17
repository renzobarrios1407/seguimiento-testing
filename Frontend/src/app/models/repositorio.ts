export class Repositorio {
    auditor: any;
    constructor(
        public id?: number,
        // Ruta del repositorio
        public rutaRepositorio?: string,
        // Estándar de nombramiento
        public estandarDeNombramiento?: string,
        // Carpeta y estructura de carpetas en repositorio
        public carptYEstrucCarptsRepo?: string,
        // Adjunte los documentos de evidencias de los casos de prueba fallidos
        public documentosEvidenciaCasosPruebaFallidos?: string,
        // Última versión formato Lista de Chequeo P.E.
        public ultVerFormatListCheckPE?: string,
        // Existe Lista de Chequeo P.E en la carpeta funcional (Sprint/Release)
        public existeListCheckPEcarptFuncSprORel?: string,
        // Aprobación de usuario en repositorio por Bugs en estado "Not Resolved"
        public aprobUserRepoPorBugsEstNotResolved?: string,
        // Última versión formato Matriz de riesgo para certificación sin pruebas
        public ultVerFormatMatrizRiesgoCertSinPruebas?: string,
        // Adjuntó Matriz de riesgo para certificación sin pruebas
        public AdjuntMatrizRiesgoCertSinPruebas?: string,
        // pase los documentos de la carpeta "en proceso" a "terminados"
        public deProcesosATerminados?: string

    ) { }
}
