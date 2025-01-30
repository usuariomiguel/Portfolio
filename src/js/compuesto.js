window.addEventListener('load', function () {
    let darkl = document.getElementById("dark-light");

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", function () {
            let value = this.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos

            if (value === "") return; // Evitar que se borre completamente

            // Mantener el cursor en la posición correcta al escribir
            let cursorPos = this.selectionStart;
            let oldLength = this.value.length;

            // Formatear número con puntos de miles
            this.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            // Ajustar la posición del cursor después de formatear
            let newLength = this.value.length;
            cursorPos += newLength - oldLength;
            this.setSelectionRange(cursorPos, cursorPos);
        });

        // Evitar que el usuario escriba letras o símbolos
        input.addEventListener("keypress", function (e) {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault(); // Bloquear la tecla si no es un número
            }
        });
    });

    function actualizarGrafico(balanceInicial, depositosPeriodicos, interesTotal) {
        const ctx = document.getElementById('resultChart').getContext('2d');

        if (window.resultChart && typeof window.resultChart.destroy === 'function') {
            window.resultChart.destroy();
        }

        window.resultChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Primer Depósito', 'Depósitos Periódicos', 'Interés Total'],
                datasets: [{
                    label: 'Resultados',
                    data: [balanceInicial, depositosPeriodicos, interesTotal],
                    backgroundColor: ['#40a6b6', '#b6ad40', '#40B66B'],
                    borderColor: ['#2B2B2B', '#2B2B2B', '#2B2B2B'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    let inputInicial = document.getElementById("input-inicial");
    let inputPeriodico = document.getElementById("input-period");
    let inputInteres = document.getElementById("input-interes");
    let inputDuracion = document.getElementById("input-duracion");

    let optionPeriodico = document.getElementById("periodo");
    let submitCalcular = document.getElementById("submit");

    function formatearNumero(numero) {
        return numero.toLocaleString("es-ES", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true // Asegura la separación de miles con punto siempre
        });
    }

    submitCalcular.addEventListener('click', function () {
        let inicial = parseFloat(inputInicial.value.replace(/\./g, "")) || 0;
        let depositoPeriodico = parseFloat(inputPeriodico.value.replace(/\./g, "")) || 0;
        let interes = parseFloat(inputInteres.value.replace(/\./g, "")) || 0;
        let duracion = parseFloat(inputDuracion.value.replace(/\./g, "")) || 0;
        let tasaInteres = interes / 100; // Convertir a decimal

        document.getElementById("resultados").style.display = "block";

        if (isNaN(inicial) || isNaN(depositoPeriodico) || isNaN(interes) || isNaN(duracion)) {
            window.alert('Rellena todo si quieres continuar');
        } else {
            let frecuencias = {
                "Diario": 365,
                "Semanal": 52,
                "Mensual": 12,
                "Anual": 1
            };

            let frecuencia = frecuencias[optionPeriodico.value];

            if (!frecuencia) {
                window.alert('Por favor selecciona un período válido');
            } else {
                let totalDepositosPeriodicos = depositoPeriodico * frecuencia * duracion;
                let valorFuturoInicial = inicial * Math.pow(1 + tasaInteres / frecuencia, duracion * frecuencia);
                let valorFuturoDepositos = depositoPeriodico * ((Math.pow(1 + tasaInteres / frecuencia, duracion * frecuencia) - 1) / (tasaInteres / frecuencia));
                let totalFuturo = valorFuturoInicial + valorFuturoDepositos;

                let interesTotalCalculado = totalFuturo - (inicial + totalDepositosPeriodicos);

                // Actualizar valores en el DOM usando la función formatearNumero()
                document.getElementById("r-bal").innerHTML = formatearNumero(inicial) + '€';
                document.getElementById("r-per").innerHTML = formatearNumero(totalDepositosPeriodicos) + '€';
                document.getElementById("r-tot").innerHTML = formatearNumero(interesTotalCalculado) + '€';
                document.getElementById("r-tott").innerHTML = formatearNumero(totalFuturo) + '€';

                actualizarGrafico(inicial, totalDepositosPeriodicos, interesTotalCalculado);
            }
        }
    });

    // let cleaner = document.getElementById("cleaner");
    // cleaner.addEventListener('click', function () {
    //     document.getElementById("r-bal").innerHTML = '€';
    //     document.getElementById("r-per").innerHTML = '€';
    //     document.getElementById("r-tot").innerHTML = '€';
    //     document.getElementById("r-tott").innerHTML = '€';
    //     inputInicial.value = '';
    //     inputPeriodico.value = '';
    //     inputInteres.value = '';
    //     inputDuracion.value = '';
    // });

});
