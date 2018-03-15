export class Seguimiento {
    constructor(
        public id?: number,
        // PMO Incidente Caso Problema Soporte Estructural Versionamiento Vulnerabilidad
        public pmo?: string,
        // Sprint\Release
        public sprORel?: number | string,
        // Saved
        public saved?: string
    ) { }

}
