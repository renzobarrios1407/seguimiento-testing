export class DoDDdTVSTS {
    auditor: any;
    constructor(
        public id?: number,
        // DoD
        public doD?: number,
        // registro de actividades de certificacion
        public registroDeActividadesDeCertificacion?: string,
        // Estandar de nombramiento de la carta en el DoD\Ddt
        public estandarDeNombCartDoDDdt?: string,
        // Existe Carta en el DoD - adjuntada la carta de certificacion en el DoD
        public existCartDoD?: string,
        // Tipo de carta en el DoD de acuerdo al tipo de certificación
        public tipoCartDoDAcrdTipoDeCert?: string,
        // El DoD tiene la fecha de vencimiento de la carta y coincide con la que está en la carta
        public elDoDTieneFechaDeVencCartaYCoincdConCart?: string,
        // Existe aprobación de usuario en el DoD
        public existeAprobUserEnDoD?: string,
        // adjunte la lista de chequeo de pruebas especializadas
        public listaChequeoPruebasEspecializadas?: string,
        // Matriz de riesgo (carta de certificacion con riesgos o o sin pruebas)
        public matrizDeRiesgo?: string,
        // Existe aprobación de jefe de Certificación en el DoD
        public existeAprobJefeEnCertDoD?: string,
        // adjunte correo y observacion de la aprobacion del P.O
        public correoYAprobacionDelPo?: string,
        // anexe concepto de pruebas especializadas 
        public conceptoPruebasEspecializadas?: string,
        // anexe concepto de seguridad corporativa
        public ConceptoSeguridadCorporativa?: string,
        // Closed
        public closed?: string
    ) { }
}
