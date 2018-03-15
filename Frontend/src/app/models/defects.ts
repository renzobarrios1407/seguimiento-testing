export class Defects {
    constructor(
        public id?: number,
        // Defecto detectado asignado al ciclo\sprint
        public defectoDetectAsignAlCicOSpr?: string,
        // Defecto detectado asignado al release
        public defectoDetectAsignAlRel?: string,
        // Los defectos encontrados tienen estado final
        public defctsEncontTienenEstFinal?: string,
        // Defectos asignado a subject
        public defctsAsignASubject?: string,
        // Análisis de riesgo por Bugs en estado "Not Resolved"
        public analisisDeRiesgoxBugsEnEstNotResolved?: string
    ) { }
}
