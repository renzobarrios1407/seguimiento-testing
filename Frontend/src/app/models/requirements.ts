export class Requirements {
    auditor: any;
    constructor(
        public id?: number,
        // Tiene Alcance/Estrategia acorde al Sprint/Release finalizado
        public tieneAlcOEstratAcrdAlSprORelFin?: string,
        // Tiene riesgos de producto por Sprint\Release
        public tieneRiesgosDeProdPorSprORel?: string,
        // Tiene un analisis de riesgos acorde al alcance probado
        public tieneAnalisisRiesgosAcrdAlcProb?: string,
        // Estado del Riesgo = Cerrado
        public estadoRiesgoEqCerrado?: string,
        // pase los documentos de la carpeta "en proceso" a "terminados"
        public requerimientosDeProcesosATerminados?: string
        
    ) { }
}
