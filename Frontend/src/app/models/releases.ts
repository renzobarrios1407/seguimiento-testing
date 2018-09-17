export class Releases {
  auditor: any;
    constructor(
        public id?: number,

        public rutaQC?: string,
        // Estandar de nombramiento de Release
        public estandarNomDeRelease?: string,
        // ID Release en QC
        public idReleaseQC?: number,
        // Release ID = Agenda de ambiente
        public releaseIdEqAgendaAmbiente?: string,
        // Fecha de inicio y cierre
        public fechaInicioYCierre?: string,
        // Tiene Fecha Real Cierre
        public tieneFechaRealCierre?: string,
        // al release le tengo el numero del DoD en el sprint
        public tieneElNumeroDelDodEnElSprint?: string,
        // Estado de Sprint finalizado con carta
        public estadoDeSprint?: string,
        // Requerimientos asignados al ciclo
        public reqsAsignsAlCiclo?: string,
        // Carpetas de set de pruebas asignadas al ciclo
        public carptsSetPruebasAsignsAlCiclo?: string,
        // paso de la carpeta "en proceso" a "terminados"
        public carpetaDeProcesoATerminados?: string
    ) { }
}
