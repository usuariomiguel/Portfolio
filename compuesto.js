window.addEventListener('load', function () {


    let input_inicial = document.getElementById("input-inicial");
    let input_period = document.getElementById("input-period");
    let input_interes = document.getElementById("input-interes");
    let input_duracion = document.getElementById("input-duracion");
    let option_periodico = document.getElementById("periodo");
    let dia = document.getElementById("dia");
    let semana = document.getElementById("semana");
    let mes = document.getElementById("mes");
    let año = document.getElementById("año");
    let submit_calcular = document.getElementById("submit");


    let resultado_balance = document.getElementById("r-bal");
    let resultado_periodico = document.getElementById("r-per");
    let resultado_total = document.getElementById("r-tot");
    let resultado_totalt = document.getElementById("r-tott");

    submit_calcular.addEventListener('click', function () {
        let inicial = parseFloat(input_inicial.value);
        let period = parseFloat(input_period.value);
        let interes = parseFloat(input_interes.value);
        let duracion = parseFloat(input_duracion.value);

        if (dia.value == "Diario") {
            let periodico = (period * 365) * duracion;
            let interest = (inicial + periodico) * interes / 100;
            let total = interest + inicial + periodico
            resultado_balance.innerHTML = inicial + '€';
            resultado_periodico.innerHTML = periodico + '€';
            resultado_total.innerHTML = interest + '€';
            resultado_totalt.innerHTML = total + '€';
        } else if (semana.value == "Semanal") {
            let periodico = (period * (4 * 12)) * duracion;
            let interest = (inicial + periodico) * interes / 100;
            let total = interest + inicial + periodico
            resultado_balance.innerHTML = inicial + '€';
            resultado_periodico.innerHTML = periodico + '€';
            resultado_total.innerHTML = interest + '€';
            resultado_totalt.innerHTML = total + '€';
        } else if (mes.value == "Mensual") {
            let periodico = (period * 12) * duracion;
            let interest = (inicial + periodico) * interes / 100;
            let total = interest + inicial + periodico
            resultado_balance.innerHTML = inicial + '€';
            resultado_periodico.innerHTML = periodico + '€';
            resultado_total.innerHTML = interest + '€';
            resultado_totalt.innerHTML = total + '€';
        } else if (año.value == "Anual") {
            let periodico = period * duracion;
            let interest = (inicial + periodico) * interes / 100;
            let total = interest + inicial + periodico
            resultado_balance.innerHTML = inicial + '€';
            resultado_periodico.innerHTML = periodico + '€';
            resultado_total.innerHTML = interest + '€';
            resultado_totalt.innerHTML = total + '€';
        }

    })    

})