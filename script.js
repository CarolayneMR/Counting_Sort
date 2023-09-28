// Função para realizar o Counting Sort
function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const countingArray = new Array(max - min + 1).fill(0);
    const sortedArray = [];

    for (let i = 0; i < arr.length; i++) {
        countingArray[arr[i] - min]++;
    }

    for (let i = 0; i < countingArray.length; i++) {
        while (countingArray[i] > 0) {
            sortedArray.push(i + min);
            countingArray[i]--;
        }
    }

    return sortedArray;
}

// Função para exibir o resultado na página HTML
function displayResult(originalArray, sortedArray) {
    const originalArrayElement = document.querySelector("#originalArray");
    const sortedArrayElement = document.querySelector("#sortedArray");

    originalArrayElement.textContent = `Array Original: [${originalArray.join(", ")}]`;
    sortedArrayElement.textContent = `Array Ordenado: [${sortedArray.join(", ")}]`;
}

document.addEventListener("DOMContentLoaded", () => {
    const sortButton = document.querySelector("#sortButton");

    sortButton.addEventListener("click", () => {
        const inputArrayElement = document.querySelector("#inputArray");
        const inputArrayValue = inputArrayElement.value;

        // Converte a entrada do usuário em um array de números
        const originalArray = inputArrayValue.split(",").map(item => parseInt(item.trim(), 10));

        if (originalArray.some(isNaN)) {
            alert("Por favor, insira números válidos separados por vírgula.");
            return;
        }

        const sortedArray = countingSort(originalArray.slice()); // Realiza a ordenação

        displayResult(originalArray, sortedArray);
    });
}); 