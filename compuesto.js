window.addEventListener('load', function () {

    let darkl = document.getElementById("dark-light");

    darkl.addEventListener('click', function () {
        console.log("hol")
    })

    let input_inicial = document.getElementById("input-inicial");
    let input_period = document.getElementById("input-period");
    let input_interes = document.getElementById("input-interes");
    let input_duracion = document.getElementById("input-duracion");

    let option_periodico = document.getElementById("periodo");
    let submit_calcular = document.getElementById("submit");

    submit_calcular.addEventListener('click', function () {
        let inicial = parseFloat(input_inicial.value);
        let period = parseFloat(input_period.value);
        let interes = parseFloat(input_interes.value);
        let duracion = parseFloat(input_duracion.value);
        if (isNaN(inicial) || isNaN(period) || isNaN(interes) || isNaN(duracion)) {
            window.alert('rellena todo si quieres continuar')
        } else {
            if (option_periodico.value == "Diario") {
                let periodico = (period * 365) * duracion;
                let interest = (inicial + periodico) * interes / 100;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodico.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = interest.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = total.toFixed(2) + '€';
            } else if (option_periodico.value == "Semestral") {
                let periodico = (period * (4 * 12)) * duracion;
                let interest = (inicial + periodico) * interes / 100;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial + '€';
                document.getElementById("r-per").innerHTML = periodico + '€';
                document.getElementById("r-tot").innerHTML = interest + '€';
                document.getElementById("r-tott").innerHTML = total + '€';
            } else if (option_periodico.value == "Mensual") {
                let periodico = (period * 12) * duracion;
                let interest = (inicial + periodico) * interes / 100;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial + '€';
                document.getElementById("r-per").innerHTML = periodico + '€';
                document.getElementById("r-tot").innerHTML = interest + '€';
                document.getElementById("r-tott").innerHTML = total + '€';
            } else if (option_periodico.value == "Anual") {
                let periodico = period * duracion;
                let interest = (inicial + periodico) * interes / 100;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial + '€';
                document.getElementById("r-per").innerHTML = periodico + '€';
                document.getElementById("r-tot").innerHTML = interest + '€';
                document.getElementById("r-tott").innerHTML = total + '€';
            }
        }

    })
    let cleaner = document.getElementById("cleaner");
    cleaner.addEventListener('click', function() {
        document.getElementById("r-bal").innerHTML = '€';
        document.getElementById("r-per").innerHTML = '€';
        document.getElementById("r-tot").innerHTML = '€';
        document.getElementById("r-tott").innerHTML = '€';
        input_inicial.value = '';
        input_period.value = '';
        input_interes.value = '';
        input_duracion.value = '';
    })

})