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
