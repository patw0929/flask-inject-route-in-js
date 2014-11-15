# -*- coding: utf-8 -*-
from flask import Flask, redirect, render_template, url_for, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/test', methods=['POST'])
def test():
    return jsonify({"result": "it works!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=int(9527))

