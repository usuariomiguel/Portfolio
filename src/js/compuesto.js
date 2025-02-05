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
    
        let saldo = inicial;
        let depositosAcumulados = 0;
        let interesesAcumulados = 0;
        let depositosPorAnio = [];
        let interesesPorAnio = [];
        let depositoInicial = [];
        let labels = [];
    
        for (let i = 1; i <= duracion; i++) {
            let depositoAnual = period * frecuencia;
            depositosAcumulados += depositoAnual;
    
            // **Corrección en el cálculo del interés compuesto**
            let interesGanado = saldo * (Math.pow(1 + interes / 100 / frecuencia, frecuencia) - 1);
            interesesAcumulados += interesGanado;
    
            saldo += depositoAnual + interesGanado;
    
            depositosPorAnio.push(depositosAcumulados);
            interesesPorAnio.push(interesesAcumulados);
            depositoInicial.push(inicial); // Siempre el mismo valor cada año
            labels.push(`Año ${i}`);
        }
    
        window.barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito Inicial',
                        data: depositoInicial,
                        backgroundColor: '#40a6b6', // Rojo
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Depósitos Acumulados',
                        data: depositosPorAnio,
                        backgroundColor: '#6d40b6', // Morado
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Interés Acumulado',
                        data: interesesPorAnio,
                        backgroundColor: '#40B66B', // Verde
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

            function actualizarContenedor(inicial, period, interes, duracion, frecuencia) {
                const contenedorAnios = document.getElementById('contenedorAnios');
                contenedorAnios.innerHTML = '';
                
                let saldo = inicial;
                let depositosAcumulados = 0;
                let interesesAcumulados = 0;
                
                for (let i = 1; i <= duracion; i++) {
                    let depositoAnual = depositoPeriodico * frecuencia;
                    depositosAcumulados += depositoAnual;
                
                    // **Cálculo del interés compuesto corregido**
                    let saldoConDepositos = inicial + depositosAcumulados;
                    let interesGanado = saldoConDepositos * (Math.pow(1 + tasaInteres / frecuencia, i * frecuencia) - 1);
                    interesesAcumulados = interesGanado; // Se actualiza con el cálculo correcto
                
                    saldo = saldoConDepositos + interesesAcumulados;
                
                    let contenedorAno = document.createElement('div');
                    contenedorAno.classList.add('anio');
                
                    contenedorAno.innerHTML = `
                        <p>${i}</p>
                        <p>${formatearNumero(depositosAcumulados)} €</p>
                        <p>${formatearNumero(interesesAcumulados)} €</p>
                        <p><strong>${formatearNumero(saldo)} €</strong></p>
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
