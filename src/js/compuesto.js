window.addEventListener('load', function () {
    const darkModeToggle = document.getElementById("dark-light");
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", function () {
            let value = this.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
            if (value === "") return;

            let cursorPos = this.selectionStart;
            let oldLength = this.value.length;

            this.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            let newLength = this.value.length;
            cursorPos += newLength - oldLength;
            this.setSelectionRange(cursorPos, cursorPos);
        });

        input.addEventListener("keypress", function (e) {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
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
                labels: ['Inicial', 'Depósitos', 'Interés'],
                datasets: [{
                    data: [balanceInicial, depositosPeriodicos, interesTotal],
                    backgroundColor: ['#40a6b6', '#6d40b6', '#40B66B'],
                    borderColor: ['#2B2B2B'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });
    }
    function calcularInteresCompuestoAnual(inicial, depositoPeriodico, tasaInteres, frecuencia, duracion) {
        let interesAnual = [];
        let saldo = inicial;

        for (let año = 1; año <= duracion; año++) {
            const valorFuturoInicial = saldo * Math.pow(1 + tasaInteres / frecuencia, año * frecuencia);
            const valorFuturoDepositos = depositoPeriodico * ((Math.pow(1 + tasaInteres / frecuencia, año * frecuencia) - 1) / (tasaInteres / frecuencia));
            const totalFuturo = valorFuturoInicial + valorFuturoDepositos;
            const totalDepositosPeriodicos = depositoPeriodico * frecuencia * año;
            const interesAnualCalculado = totalFuturo - (inicial + totalDepositosPeriodicos);

            interesAnual.push(interesAnualCalculado);
        }

        return interesAnual;
    }

    function actualizarGraficoBarras(inicial, depositoPeriodico, interes, duracion, frecuencia) {
        const ctx = document.getElementById('barChart').getContext('2d');

        if (window.barChart && typeof window.barChart.destroy === 'function') {
            window.barChart.destroy();
        }

        const tasaInteres = interes / 100;
        const interesesPorAnio = calcularInteresCompuestoAnual(inicial, depositoPeriodico, tasaInteres, frecuencia, duracion);

        let depositosPorAnio = [];
        let depositoInicial = [];
        let labels = [];

        for (let i = 1; i <= duracion; i++) {
            depositosPorAnio.push(depositoPeriodico * frecuencia * i);
            depositoInicial.push(inicial);
            labels.push(`Año ${i}`);
        }

        window.barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Inicial',
                        data: depositoInicial,
                        backgroundColor: '#40a6b6',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Depósitos',
                        data: depositosPorAnio,
                        backgroundColor: '#6d40b6',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Interés',
                        data: interesesPorAnio,
                        backgroundColor: '#40B66B',
                        stack: 'Stack 0'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }



    const inputInicial = document.getElementById("input-inicial");
    const inputPeriodico = document.getElementById("input-period");
    const inputInteres = document.getElementById("input-interes");
    const inputDuracion = document.getElementById("input-duracion");

    const optionPeriodico = document.getElementById("periodo");
    const submitCalcular = document.getElementById("submit");

    function formatearNumero(numero) {
        return numero.toLocaleString("es-ES", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true
        });
    }

    submitCalcular.addEventListener('click', function () {
        document.getElementById("resultados").style.display = "block";
        setTimeout(() => {
            document.getElementById("resultados").scrollIntoView({ behavior: "smooth" });
        }, 300);

        const inicial = parseFloat(inputInicial.value.replace(/\./g, "")) || 0;
        const depositoPeriodico = parseFloat(inputPeriodico.value.replace(/\./g, "")) || 0;
        const interes = parseFloat(inputInteres.value.replace(/\./g, "")) || 0;
        const duracion = parseFloat(inputDuracion.value.replace(/\./g, "")) || 0;
        const tasaInteres = interes / 100;

        if (isNaN(inicial) || isNaN(depositoPeriodico) || isNaN(interes) || isNaN(duracion)) {
            window.alert('Rellena todo si quieres continuar');
        } else {
            const frecuencias = {
                "Diario": 365,
                "Semanal": 52,
                "Mensual": 12,
                "Anual": 1
            };

            function actualizarContenedor(inicial, depositoPeriodico, interes, duracion, frecuencia) {
                const contenedorAnios = document.getElementById('contenedorAnios');
                contenedorAnios.innerHTML = '';

                const tasaInteres = interes / 100;
                const interesesPorAnio = calcularInteresCompuestoAnual(inicial, depositoPeriodico, tasaInteres, frecuencia, duracion);

                for (let i = 1; i <= duracion; i++) {
                    let depositosAcumulados = depositoPeriodico * frecuencia * i;
                    let interesAcumulado = interesesPorAnio[i - 1];
                    let saldo = inicial + depositosAcumulados + interesAcumulado;

                    let contenedorAno = document.createElement('div');
                    contenedorAno.classList.add('anio');

                    contenedorAno.innerHTML = `
                        <div class="anio-item"><p>${i}</p></div>
                        <div class="anio-item"><p>${depositosAcumulados.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })
                        } €</p></div>
                        <div class="anio-item anio-item-interes"><p>${interesAcumulado.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })
                        } €</p></div>
                        <div class="anio-item"><p><strong>${saldo.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })
                        } €</strong></p></div>
                    `;

                    contenedorAnios.appendChild(contenedorAno);
                }
            }

            const frecuencia = frecuencias[optionPeriodico.value];

            if (!frecuencia) {
                window.alert('Por favor selecciona un período válido');
            } else {
                const totalDepositosPeriodicos = depositoPeriodico * frecuencia * duracion;
                const valorFuturoInicial = inicial * Math.pow(1 + tasaInteres / frecuencia, duracion * frecuencia);
                const valorFuturoDepositos = depositoPeriodico * ((Math.pow(1 + tasaInteres / frecuencia, duracion * frecuencia) - 1) / (tasaInteres / frecuencia));
                const totalFuturo = valorFuturoInicial + valorFuturoDepositos;
                const interesTotalCalculado = totalFuturo - (inicial + totalDepositosPeriodicos);

                document.getElementById("r-bal").innerHTML = formatearNumero(inicial) + ' €';
                document.getElementById("r-per").innerHTML = formatearNumero(totalDepositosPeriodicos) + ' €';
                document.getElementById("r-tot").innerHTML = formatearNumero(interesTotalCalculado) + ' €';
                document.getElementById("r-tott").innerHTML = formatearNumero(totalFuturo) + ' €';

                actualizarGrafico(inicial, totalDepositosPeriodicos, interesTotalCalculado);
                actualizarGraficoBarras(inicial, depositoPeriodico, interes, duracion, frecuencia);
                actualizarContenedor(inicial, depositoPeriodico, interes, duracion, frecuencia);
            }
        }
    });
});
