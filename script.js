
async function displayArray(arr) {
    const container = document.getElementById("visualizationContainer");
    container.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        div.classList.add("bar");
        div.style.height = `${arr[i] * 10}px`;
        div.textContent = arr[i];
        container.appendChild(div);
        await sleep(100);
    }

    const sortButton = document.getElementById("sortButton");
    sortButton.style.display = "block";
}

async function animateCountingSort(arr) {
    const max = Math.max(...arr);
    const countingArray = new Array(max + 1).fill(0);

    const container = document.getElementById("visualizationContainer");
    const bars = container.getElementsByClassName("bar");

    for (let i = 0; i < arr.length; i++) {
        countingArray[arr[i]]++;
    }

    let index = 0;
    for (let i = 0; i < countingArray.length; i++) {
        for (let j = 0; j < countingArray[i]; j++) {
            await highlightBar(bars[index]);
            bars[index].style.height = `${i * 10}px`;
            bars[index].textContent = i;
            await sleep(100);
            index++;
        }
    }

    // Irá fazer o resete highlighting
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove("highlighted");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function highlightBar(bar) {
    return new Promise(resolve => {
        bar.classList.add("highlighted");
        setTimeout(() => {
            bar.classList.remove("highlighted");
            resolve();
        }, 100);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const showArrayButton = document.querySelector("#showArrayButton");
    const sortButton = document.querySelector("#sortButton");

    showArrayButton.addEventListener("click", async () => {
        const inputArrayElement = document.querySelector("#inputArray");
        const inputArrayValue = inputArrayElement.value;

        const originalArray = inputArrayValue.split(",").map(item => parseInt(item.trim(), 10));

        if (originalArray.some(isNaN)) {
            alert("Por favor, insira números válidos separados por vírgula.");
            return;
        }

        await displayArray(originalArray.slice());
    });

    sortButton.addEventListener("click", async () => {
        const inputArrayElement = document.querySelector("#inputArray");
        const inputArrayValue = inputArrayElement.value;

        const originalArray = inputArrayValue.split(",").map(item => parseInt(item.trim(), 10));

        if (originalArray.some(isNaN)) {
            alert("Por favor, insira números válidos separados por vírgula.");
            return;
        }

        await animateCountingSort(originalArray.slice());
    });
});