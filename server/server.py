
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/shop", methods=['GET'])

def return_home():
    return jsonify([{
        'id': '1',
        'message': 'Hello Worlds'
    }])

if __name__ == "__main__":
    app.run(debug=True, port=8080)