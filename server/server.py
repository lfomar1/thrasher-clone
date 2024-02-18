
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/shop", methods=['GET'])

def return_home():
    return jsonify({
        'collection': [{
        'id': '1',
        'name': 'Mark Gonzales',
        'img_src': 'https://shop.thrashermagazine.com/cdn/shop/files/GONZ-BLOCK-1670_X_500-DT_7a7889de-49dc-4d1a-b0a9-434c02d5cbb7.jpg'
        }, {
        'id': '2',
        'name': 'Neckface',
        'img_src': 'https://shop.thrashermagazine.com/cdn/shop/files/NECKFACE-PLP-HEADER-1670_X_500-DT_695c8130-4e89-4a94-a693-71cf2da65c93.jpg'
        },
         {
        'id': '3',
        'name': 'Classics',
        'img_src': 'https://shop.thrashermagazine.com/cdn/shop/files/CLASSICS-BLOCK-1670_X_500-DT.jpg'
        }]
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)