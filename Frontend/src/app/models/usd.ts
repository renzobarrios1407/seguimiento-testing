export class Usd {
    auditor: any;
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
