const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Convertendo altura de centímetros para metros
    const heightM = heightCm / 100;

    const bmi = weight / (heightM * heightM);
    const formattedBMI = bmi.toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Atenção, você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Peso ideal! Parabéns!';
        value.classList.remove('attention');
        value.classList.add('normal')
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado com o sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Obesidade grau I - cuidado!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Obesidade grau II - severa';
    } else {
        description = 'Obesidade grau III - mórbida';
    }

    value.textContent = formattedBMI.replace('.', ',');
    document.getElementById('description').textContent = description;
});
