function mexeuBarra(barra, texto) {
    document.getElementById(texto).textContent = document.getElementById(barra).value;
}

function mostrarResultado(dados) {
    document.getElementById("mostraTemp").textContent = dados.temperatura;
    document.getElementById("mostraUmid").textContent = dados.umidade;

    const bolinha = document.getElementById("bolinha");
    bolinha.className = "rounded-circle mb-3";
    bolinha.style.width = "36px";
    bolinha.style.height = "36px";

    const cores = { azul: "bg-primary", verde: "bg-success", vermelho: "bg-danger" };
    bolinha.classList.add(cores[dados.led]);

    document.getElementById("mostraVent").textContent = dados.ventilador ? "Ligado" : "Desligado";
}

function enviar() {
    const temp = document.getElementById("barraTemp").value;
    const umid = document.getElementById("barraUmid").value;

    fetch("/leitura-manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ temperatura: temp, umidade: umid })
    })
    .then(r => r.json())
    .then(mostrarResultado);
}
