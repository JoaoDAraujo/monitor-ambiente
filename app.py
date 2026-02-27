from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

limite = 25

def checar(temp, umid):
    vent = temp >= limite

    if temp < 20:
        cor = "azul"
    elif temp < 30:
        cor = "verde"
    else:
        cor = "vermelho"

    return {"temperatura": temp, "umidade": umid, "ventilador": vent, "led": cor}

@app.route("/")
def pagina():
    return render_template("index.html")

@app.route("/leitura-manual", methods=["POST"])
def manual():
    dados = request.get_json()
    temp = float(dados["temperatura"])
    umid = float(dados["umidade"])
    return jsonify(checar(temp, umid))

if __name__ == "__main__":
    app.run(debug=True)