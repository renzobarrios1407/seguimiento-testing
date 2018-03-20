export class Releases {
  auditor: any;
    constructor(
        public id?: number,
        // Estandar de nombramiento de Release
        public estandarNomDeRelease?: string,
        // ID Release en QC
        public idReleaseQC?: number,
        // Release ID = Agenda de ambiente
        public releaseIdEqAgendaAmbiente?: string,
        // Tiene Fecha Real Cierre
        public tieneFechaRealCierre?: string,
        // Tiene Definición de terminado en Sprint\Release
        public tieneDefDeTermiEnSprORel?: string,
        // Estado de Sprint
        public estadoDeSprint?: string,
        // Requerimientos asignados al ciclo
        public reqsAsignsAlCiclo?: string,
        // Carpetas de set de pruebas asignadas al ciclo
        public carptsSetPruebasAsignsAlCiclo?: string
    ) { }
}
