export class TestLab {
    auditor: any;
    constructor(
        public id?: number,
        // Los pasos de los casos de prueba están ejecutados
        public pasosDeCasosPruebaEjecutados?: string,
        // Los casos de prueba tienen estado final
        public casosPruebaTienenEstadoFinal?: string,
        // pase de la carpeta "en proceso" a "terminados"
        public labDeProcesosATerminados?: string
    ) { }
}
