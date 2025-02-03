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
                labels: ['Primer Depósito', 'Depósitos Periódicos', 'Interés Total'],
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

    function actualizarGraficoBarras(inicial, period, interes, duracion, frecuencia) {
        const ctx = document.getElementById('barChart').getContext('2d');
    
        if (window.barChart && typeof window.barChart.destroy === 'function') {
            window.barChart.destroy();
        }
    
        let saldoAnual = [];
        let labels = [];
    
        let saldo = inicial;
    
        for (let i = 1; i <= duracion; i++) {
            saldo = saldo * Math.pow(1 + interes / 100 / frecuencia, frecuencia) + period * frecuencia;
            saldoAnual.push(saldo.toFixed(2));
            labels.push(`Año ${i}`);
        }
    
        window.barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Balance Inicial',
                        data: Array(duracion).fill(inicial),
                        backgroundColor: '#40a6b6'
                    },
                    {
                        label: 'Depósitos Periódicos',
                        data: Array(duracion).fill(period * frecuencia * duracion),
                        backgroundColor: '#6d40b6'
                    },
                    {
                        label: 'Interés',
                        data: saldoAnual.map((s, i) => s - inicial - (period * frecuencia * (i + 1))),
                        backgroundColor: '#40B66B'
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

    function actualizarContenedor(inicial, period, interes, duracion, frecuencia) {
        const contenedorAnios = document.getElementById('contenedorAnios');
    
        let saldoAnual = inicial;
        let depositoAcumulado = period;
    
        // Limpiar el contenedor antes de agregar nuevos divs
        contenedorAnios.innerHTML = '';
    
        for (let i = 1; i <= duracion; i++) {
            // Calcular el saldo final para el año con interés simple
            saldoAnual = saldoAnual * Math.pow(1 + interes / 100 / frecuencia, frecuencia) + depositoAcumulado * frecuencia;
    
            // Crear un contenedor para este año
            let contenedorAno = document.createElement('div');
            contenedorAno.classList.add('anio');
    
            // Crear y agregar los párrafos con los datos de cada año
            let pAno = document.createElement('p');
            pAno.textContent = `${i}`;
            contenedorAno.appendChild(pAno);
    
            let pDepositos = document.createElement('p');
            pDepositos.textContent = `${formatearNumero(depositoAcumulado * frecuencia)} €`;
            contenedorAno.appendChild(pDepositos);
    
            let pInteres = document.createElement('p');
            pInteres.textContent = `${formatearNumero(saldoAnual - (inicial + depositoAcumulado * frecuencia * i))} €`;
            contenedorAno.appendChild(pInteres);
    
            let pBalanceFinal = document.createElement('p');
            pBalanceFinal.textContent = `${formatearNumero(saldoAnual)} €`;
            contenedorAno.appendChild(pBalanceFinal);
    
            // Agregar el contenedor del año al contenedor principal
            contenedorAnios.appendChild(contenedorAno);
        }
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
