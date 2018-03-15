export class TestLab {
    constructor(
        public id?: number,
        // Los pasos de los casos de prueba están ejecutados
        public pasosDeCasosPruebaEjecutados?: string,
        // Los casos de prueba tienen estado final
        public casosPruebaTienenEstadoFinal?: string
    ) { }
}
