//Llamados de las varibales desde HTML
const divContainerDoctor = document.querySelector('.containerDetallesDoctor');
const divContainerJugador = document.querySelector('.containerDetallesJugadores');

//este metodo verifica que toda la pagina ya haya sido cargada y renderizada
document.addEventListener('DOMContentLoaded', (e) => {

});

//Añadir medico
document.querySelector('#addMedico').addEventListener('click', (e) => {
    divContainerDoctor.insertAdjacentElement('beforeend', crearMdHTML());
});

//Añadir jugador
document.querySelector('#addJugador').addEventListener('click', (e) => {
    divContainerJugador.insertAdjacentElement('beforeend', crearPyHTML());
});

//Boton remover medico
divContainerDoctor.addEventListener("click", (e) =>{
    if (e.target.id == "removerDoctor") {
        eliminarItemLista(e.target.dataset.id);
    }
});

const eliminarItemLista = (Idx => {
    let especialidad = Document.querySelector(`#grupoDoctores${Idx}`);
    especialidad.remove();
});
//------------------------------

// Boton Remover jugador
divContainerJugador.addEventListener("click", (e) =>{
    if (e.target.id == "removerJugador") {
        eliminarJugadorLista(e.target.dataset.id);
    }
});

const eliminarJugadorLista = (Idx => {
    let jugador = Document.querySelector(`#grupoJugadores${Idx}`);
    jugador.remove();
});
//------------------------------


//Creacion de HTML para ingreso de datos de personal medico
const crearMdHTML = () => {
    //la variable id toma la fecha y la hora y lo convierte a string y lo concatena a sistema sexagesimal, para que no sea igual en ninguno
    let id = Date.now().toString(16);
    let skillHTML = /*html*/ `
        <div class="row mt-3" id="grupoDoctores${id}">

            <div class="col-4">
                <input type="text" class="form-control" placeholder="Nombre del personal" aria-label="First name" name="nombreDoctor${id}" id="nombreDoctor${id}">
            </div>

            <div class="col-6">
                <select id="especialidadMedico${id}" name="especialidadMedico${id}"  class="form-select">
                    <option selected>Selecciona especialidad...</option>
                    <option>...</option>
                </select>
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-danger" data-id="${id}"  id="removerDoctor">-</button>
            </div>

        </div>
    `;
        return skillHTML;
}


//Creacion de HTML para ingreso de datos de jugadores
const crearPyHTML = () => {
    //la variable id toma la fecha y la hora y lo convierte a string y lo concatena a sistema sexagesimal, para que no sea igual en ninguno
    let id = Date.now().toString(16);
    let skillHTML = /*html*/ `
        <div class="row mt-3" id="grupoJugadores${id}">

            <div class="col-3">
                <input type="text" class="form-control" placeholder="Nombre " aria-label="First name" name="nombreJugador${id}" id="nombreJugador${id}">
            </div>
            <div class="col-2">
                <input type="text" class="form-control" placeholder="Dorsal " aria-label="First name" name="dorsalJugador${id}" id="dorsalJugador${id}">
            </div>
            <div class="col-2">
                <input type="number" class="form-control" placeholder="Edad " aria-label="First name" name="edadJugador${id}" id="edadJugador${id}">
            </div>

            <div class="col-3">
                <select id="posicionJugador" name="posicionJugador"  class="form-select">
                    <option selected>Selecciona la posición...</option>
                    <option>...</option>
                </select>
            </div>

            <div class="col-2">
                <button type="button" class="btn btn-danger" data-id="${id}"  id="removerJugador">-</button>
            </div>

        </div>
    `;
        return skillHTML;
}

