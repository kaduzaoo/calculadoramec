let total = 0;

function addValue(value) {
    total += value;
    document.getElementById("total").innerText = formatCurrency(total);
}

function subtractValue(value) {
    total -= value;
    document.getElementById("total").innerText = formatCurrency(total);
}

function toggleCheckbox(id, value) {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
        addValue(value);
    } else {
        subtractValue(value);
    }
}

function clearAll() {
    total = 0;
    document.getElementById("total").innerText = formatCurrency(total);
}

function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat('pt-BR');
    return `R$ ${formatter.format(amount)}`;
}

function changeBackgroundColor() {
    let r, g, b;
    do {
        // Gere valores de cor RGB aleatórios, apenas cores escuras
        r = Math.floor(Math.random() * 156); // Limitando o vermelho até 155 (de 0 a 155 resulta em tons escuros)
        g = Math.floor(Math.random() * 156); // Limitando o verde até 155 (de 0 a 155 resulta em tons escuros)
        b = Math.floor(Math.random() * 156); // Limitando o azul até 155 (de 0 a 155 resulta em tons escuros)
    } while (r > 100 || g > 100 || b > 100); // Repita até que a cor seja escura o suficiente
    // Aplique a cor de fundo ao body
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Atualize a cor de fundo a cada 1 segundos (1000 milissegundos)
setInterval(changeBackgroundColor, 100);
