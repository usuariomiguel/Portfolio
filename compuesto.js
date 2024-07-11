window.addEventListener('load', function () {


    let input_inicial = document.getElementById("input-inicial");
    let input_period = document.getElementById("input-period");
    let input_interes = document.getElementById("input-interes");
    let input_duracion = document.getElementById("input-duracion");
    let submit_calcular = document.getElementById("submit");

    let resultado_balance = document.getElementById("r-bal");
    let resultado_periodico = document.getElementById("r-pep");
    let resultado_total = document.getElementById("r-tot");

    submit_calcular.addEventListener('click', function () {
        let inicial = parseFloat(input_inicial.value);
        let period = parseFloat(input_period.value);
        let interes = parseFloat(input_interes.value);
        let duracion = parseFloat(input_duracion.value);

        let periodico = period * 12 * duracion;
        let total = inicial + (periodico * interes);

        resultado_balance.innerHTML = inicial + '€';
        resultado_periodico.innerHTML = periodico + '€';
        resultado_total.innerHTML = total + '€';
    })    

})