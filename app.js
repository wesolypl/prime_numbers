const getNumber = () => {
    const n = prompt("Podaj liczbę naturalną (0-10000)");
    return validNumber(n)
}

const validNumber = (number) => {
    if (number <= 0 || number > 10000 || isNaN(number)) {
        alert('Nieprawidłowa wartość');
        return getNumber();
    }
    else {
        return findPrimeNumbers(number)
    }
}

const findPrimeNumbers = (n) => {
    let number = n;
    let prime = [];
    const isPrime = (number) => {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < number; i++) {

        if (isPrime(i)) {
            prime.push(i);
        }
    }
    viewPrimeNumbers(prime, number)
}

const viewPrimeNumbers = (primeNumbers, number) => {
    const output = document.createElement('p');
    if (number <= 2) {
        output.textContent = `${number} - brak odpowiedzi`;
        document.querySelector('body').appendChild(output);
    }
    else {
        output.textContent = `${number} - ${primeNumbers}`;
        document.querySelector('body').appendChild(output);
    }
}
getNumber();