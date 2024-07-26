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
        let interesmensual = (interes / 100 / 12);
        console.log(interesmensual);
        let duracion = parseFloat(input_duracion.value);
        if (isNaN(inicial) || isNaN(period) || isNaN(interes) || isNaN(duracion)) {
            window.alert('rellena todo si quieres continuar')
        } else {
            if (option_periodico.value == "Diario") {
                let periodico = (period * 365) * duracion;
                let total = inicial * Math.pow((1 + interesmensual),(duracion * 12));
                let interest = total + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodico.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = interest.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = total.toFixed(2) + '€';
            } else if (option_periodico.value == "Semestral") {
                let periodico = (period * (4 * 12)) * duracion;
                let i1 = (inicial + periodico) * (interes / 100) / 12;
                let i2 = (inicial + periodico + i1) * (interes / 100) / 12;
                let i3 = (inicial + periodico + i1 + i2) * (interes / 100) / 12;
                let i4 = (inicial + periodico + i1 + i2 + i3) * (interes / 100) / 12;
                let i5 = (inicial + periodico + i1 + i2 + i3+ i4) * (interes / 100) / 12;
                let i6 = (inicial + periodico + i1 + i2 + i3+ i4 + i5) * (interes / 100) / 12;
                let i7 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6) * (interes / 100) / 12;
                let i8 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7) * (interes / 100) / 12;
                let i9 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8) * (interes / 100) / 12;
                let i10 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8 + i9) * (interes / 100) / 12;
                let i11 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8 + i9 + i10) * (interes / 100) / 12;
                let i12 = (inicial + periodico + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11) * (interes / 100) / 12;    
                let interest = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodico.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = interest.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = total.toFixed(2) + '€';
            } else if (option_periodico.value == "Mensual") {
                let periodico = (period * 12) * duracion;
                let interest = inicial * Math.pow((1 + interesmensual), duracion * 12);
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodico.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = interest.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = total.toFixed(2) + '€';
            } else if (option_periodico.value == "Anual") {
                let periodico = period * duracion;
                let i1 = (inicial + periodico) * (interes / 100) / 12;
                let i2 = (inicial + periodico + i1) * (interes / 100) / 12;
                let i3 = (inicial + periodico + i1 + i2) * (interes / 100) / 12;
                let i4 = (inicial + periodico + i1 + i2 + i3) * (interes / 100) / 12;
                let i5 = (inicial + periodico + i1 + i2 + i3+ i4) * (interes / 100) / 12;
                let i6 = (inicial + periodico + i1 + i2 + i3+ i4 + i5) * (interes / 100) / 12;
                let i7 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6) * (interes / 100) / 12;
                let i8 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7) * (interes / 100) / 12;
                let i9 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8) * (interes / 100) / 12;
                let i10 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8 + i9) * (interes / 100) / 12;
                let i11 = (inicial + periodico + i1 + i2 + i3+ i4 + i5 + i6 + i7 + i8 + i9 + i10) * (interes / 100) / 12;
                let i12 = (inicial + periodico + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11) * (interes / 100) / 12;    
                let interest = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12;
                let total = interest + inicial + periodico;
                document.getElementById("r-bal").innerHTML = inicial.toFixed(2) + '€';
                document.getElementById("r-per").innerHTML = periodico.toFixed(2) + '€';
                document.getElementById("r-tot").innerHTML = interest.toFixed(2) + '€';
                document.getElementById("r-tott").innerHTML = total.toFixed(2) + '€';
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