window.addEventListener('load', function () {

    let darkl = document.getElementById("dark-light");

    // darkl.addEventListener('click', function () {
    //     console.log("hol")
    // })

    function actualizarGrafico(balanceInicial, depositosPeriodicos, interesTotal) {
        // Obtener el canvas donde se renderizará el gráfico
        const ctx = document.getElementById('resultChart').getContext('2d');
    
        // Verificar si el gráfico ya existe y destruirlo antes de crear uno nuevo
        if (window.resultChart && typeof window.resultChart.destroy === 'function') {
            window.resultChart.destroy();
        }
    
        // Crear un nuevo gráfico de pastel (queso)
        window.resultChart = new Chart(ctx, {
            type: 'pie', // Cambiar a 'bar' para gráfico de barras
            data: {
                labels: ['Balance Inicial', 'Depósitos Periódicos', 'Interés Total'], // Etiquetas
                datasets: [{
                    label: 'Resultados',
                    data: [balanceInicial, depositosPeriodicos, interesTotal], // Datos
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)', // Color para el balance inicial
                        'rgba(54, 162, 235, 0.5)', // Color para los depósitos
                        'rgba(255, 206, 86, 0.5)'  // Color para el interés
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top', // Posición de la leyenda
                    }
                }
            }
        });
    }
    

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

                // Llamar a la función para actualizar el gráfico
                actualizarGrafico(inicial, periodTotal, InteresTotal, Total);
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