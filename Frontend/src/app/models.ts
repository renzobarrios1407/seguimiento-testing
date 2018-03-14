export class Usuario {
    constructor(
        public cedula: string,
        public nombre: string,
        public primerApellido: string,
        public segundoApellido: string,
        public lugarTrabajo: string,
        public usuario: string,
        public password: string,
        public rolId: number,
        public id?: number
    ) { }
}

export class Rol {
    constructor(
        public id: number,
        public nombre: string
    ) {}
}

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
export class Releases {
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

export class Requirements {
    constructor(
        public id?: number,
        // Tiene Alcance/Estrategia acorde al Sprint/Release finalizado
        public tieneAlcOEstratAcrdAlSprORelFin?: string,
        // Tiene riesgos de producto por Sprint\Release
        public tieneRiesgosDeProdPorSprORel?: string,
        // Tiene un analisis de riesgos acorde al alcance probado
        public tieneAnalisisRiesgosAcrdAlcProb?: string,
        // Estado del Riesgo = Cerrado
        public estadoRiesgoEqCerrado?: string
    ) { }
}

export class TestLab {
    constructor(
        public id?: number,
        // Los pasos de los casos de prueba están ejecutados
        public pasosDeCasosPruebaEjecutados?: string,
        // Los casos de prueba tienen estado final
        public casosPruebaTienenEstadoFinal?: string
    ) { }
}

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
export class AgendaDeAmbiente {
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
export class Repositorio {
    constructor(
        public id?: number,
        // Ruta del repositorio
        public rutaRepositorio?: string,
        // Estándar de nombramiento
        public estandarDeNombramiento?: string,
        // Carpeta y estructura de carpetas en repositorio
        public carptYEstrucCarptsRepo?: string,
        // Última versión formato Lista de Chequeo P.E.
        public ultVerFormatListCheckPE?: string,
        // Existe Lista de Chequeo P.E en la carpeta funcional (Sprint/Release)
        public existeListCheckPEcarptFuncSprORel?: string,
        // Aprobación de usuario en repositorio por Bugs en estado "Not Resolved"
        public aprobUserRepoPorBugsEstNotResolved?: string,
        // Última versión formato Matriz de riesgo para certificación sin pruebas
        public ultVerFormatMatrizRiesgoCertSinPruebas?: string,
        // Adjuntó Matriz de riesgo para certificación sin pruebas
        public AdjuntMatrizRiesgoCertSinPruebas?: string
    ) { }
}
export class DoDDdTVSTS {
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
export class Usd {
    constructor(
        public id?: number,
        // # de Orden de Cambio
        public numOrdenCambio?: number,
        // Campo Código Definición de Terminado
        public campoCodDefTermi?: string,
        // Incidentes por Bugs en estado "Not Resolved"
        public incdntsPorBugsEstNotResolved?: string
    ) { }
}
