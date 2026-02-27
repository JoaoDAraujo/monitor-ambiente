# Monitor de Ambiente

Projeto desenvolvido para a disciplina de IoT do curso de Engenharia de Software da Universidade de Mogi das Cruzes.

O sistema simula um dispositivo IoT com sensor DHT11, onde o usuário controla temperatura e umidade via sliders em uma página web. A aplicação responde como se fosse um ESP32 — acendendo LEDs de diferentes cores e ligando um ventilador conforme as leituras.

---

## Como funciona

O usuário arrasta as barras de temperatura e umidade e clica em **Enviar**. O sistema então:

- Acende um LED azul se a temperatura estiver abaixo de 20°C
- Acende um LED verde se estiver entre 20°C e 29°C
- Acende um LED vermelho e **liga o ventilador** se estiver igual ou acima de 30°C

---

## Tecnologias usadas

- **Python** com **Flask** no backend
- **HTML + Bootstrap 5** no frontend
- **JavaScript** puro para comunicação com a API

---

## Estrutura do projeto

```
IOT/
├── app.py
├── templates/
│   └── index.html
└── static/
    └── script.js
```

---

## Como rodar localmente

**1. Clone o repositório:**

```bash
git clone https://github.com/SEU_USUARIO/monitor-ambiente.git
cd monitor-ambiente
```

**2. Instale o Flask:**

```bash
pip install flask
```

**3. Rode o servidor:**

```bash
python app.py
```

**4. Acesse no navegador:**

```
http://localhost:5000
```

---

## Colaboradores

- Bianca Duarte Bernado
- Ellen Alves Inacio
- Guilherme Marins Rodrigues
- João Vitor Fernandes D` Araujo




## Referências

- IOTSTARTERS. Raspberry Pi Flask Web Server with DHT11. Disponível em: https://iotstarters.com/raspberry-pi-flask-web-server-with-dht11/. Acesso em: fev. 2026.
