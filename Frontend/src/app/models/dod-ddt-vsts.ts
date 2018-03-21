export class DoDDdTVSTS {
    auditor: any;
    constructor(
        public id?: number,
        // DoD
        public doD?: number,
        // Estandar de nombramiento de la carta en el DoD\Ddt
        public estandarDeNombCartDoDDdt?: string,
        // Existe Carta en el DoD
        public existCartDoD?: string,
        // Tipo de carta en el DoD de acuerdo al tipo de certificación
        public tipoCartDoDAcrdTipoDeCert?: string,
        // El DoD tiene la fecha de vencimiento de la carta y coincide con la que está en la carta
        public elDoDTieneFechaDeVencCartaYCoincdConCart?: string,
        // Existe aprobación de usuario en el DoD
        public existeAprobUserEnDoD?: string,
        // Existe aprobación de jefe de Certificación en el DoD
        public existeAprobJefeEnCertDoD?: string,
        // Closed
        public closed?: string
    ) { }
}
