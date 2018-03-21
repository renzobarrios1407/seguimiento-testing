export class AgendaDeAmbiente {
    auditor: any;
    constructor(
        public id?: number,
        // ID Agenda de ambiente
        public iDAgendaDeAmbiente?: number,
        // Última versión formato
        public ultimaVersionFormato?: string,
        // Estandar de nombramiento
        public estandarDeNombramiento?: string,
        // Presenta agendamiento de ambientes y se encuentra en estado 'Aprobado'
        public presntAgendDeAmbntsYSeEncntrEnEstAprob?: string,
        // Diligenciamiento de sharepoint
        public diligenDeSharepoint?: string
    ) { }
}
