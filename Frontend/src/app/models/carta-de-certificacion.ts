export class CartaDeCertificacion {
    constructor(
        public id?: number,
        // Último formato de carta
        public ultimoFormatoDeCarta?: string,
        // Estándar de nombramiento
        public estandarDeNombramiento?: string,
        // Diligenciamiento completo de campos en la Carta
        public diligenCompletoCamposCarta?: string,
        // Concepto de pruebas Especializadas en la carta
        public concptPruebasEspecialiCarta?: string,
        // Aprobación en carta
        public aprobacionEnCarta?: string,
        // Número(s) de incidente(s) incluído(s) en carta de certificación
        public numsIncidntsIncludsCartCert?: string
    ) { }
}
