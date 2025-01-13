window.addEventListener('load', function () {

    let darkl = document.getElementById("dark-light");

    // darkl.addEventListener('click', function () {
    //     console.log("hol")
    // })

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
        let r = interes / 100; // Tasa de interés anual
        let duracion = parseFloat(input_duracion.value);

        if (isNaN(inicial) || isNaN(period) || isNaN(interes) || isNaN(duracion)) {
            window.alert('Rellena todo si quieres continuar');
        } else {
            // Obtener la frecuencia de capitalización
            let frecuencias = {
                "Diario": 365,
                "Semanal": 52,
                "Mensual": 12,
                "Anual": 1
            };

            let frecuencia = frecuencias[option_periodico.value]; // Obtener la frecuencia correspondiente
            if (!frecuencia) {
                window.alert('Por favor selecciona un período válido');
            } else {
                // Total depósitos periódicos
                let periodTotal = period * frecuencia * duracion;

                // Calcular valor futuro (FV)
                let P = inicial * Math.pow(1 + r / frecuencia, duracion * frecuencia); // Valor futuro del depósito inicial
                let PMT = period * ((Math.pow(1 + r / frecuencia, duracion * frecuencia) - 1) / (r / frecuencia)); // Valor futuro de los depósitos periódicos
                let Total = P + PMT; // Suma de ambos componentes

                // Interés total
                let InteresTotal = Total - (inicial + periodTotal);

                // Actualizar valores en el DOM
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodTotal.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = InteresTotal.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = Total.toFixed(2) + '€';
            }

        }


    })
    // let cleaner = document.getElementById("cleaner");
    // cleaner.addEventListener('click', function () {
    //     document.getElementById("r-bal").innerHTML = '€';
    //     document.getElementById("r-per").innerHTML = '€';
    //     document.getElementById("r-tot").innerHTML = '€';
    //     document.getElementById("r-tott").innerHTML = '€';
    //     input_inicial.value = '';
    //     input_period.value = '';
    //     input_interes.value = '';
    //     input_duracion.value = '';
    // })

})