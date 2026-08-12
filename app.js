const fechaFinal = new Date("2026-07-19T14:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaFinal - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

  document.getElementById("contador").innerHTML = `
    <div class="tiempo">
        <span>${dias}</span>
        <small>DÍAS</small>
    </div>

    <div class="tiempo">
        <span>${String(horas).padStart(2, "0")}</span>
        <small>HORAS</small>
    </div>

    <div class="tiempo">
        <span>${String(minutos).padStart(2, "0")}</span>
        <small>MINUTOS</small>
    </div>

    <div class="tiempo">
        <span>${String(segundos).padStart(2, "0")}</span>
        <small>SEGUNDOS</small>
    </div>
`;
}

actualizarContador();

setInterval(actualizarContador, 1000);
