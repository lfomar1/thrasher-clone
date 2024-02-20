
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
        'img_url': 'https://shop.thrashermagazine.com/cdn/shop/files/GONZ-BLOCK-1670_X_500-DT_7a7889de-49dc-4d1a-b0a9-434c02d5cbb7.jpg'
        }, {
        'id': '2',
        'name': 'Neckface',
        'img_url': 'https://shop.thrashermagazine.com/cdn/shop/files/NECKFACE-PLP-HEADER-1670_X_500-DT_695c8130-4e89-4a94-a693-71cf2da65c93.jpg'
        },
         {
        'id': '3',
        'name': 'Classics',
        'img_url': 'https://shop.thrashermagazine.com/cdn/shop/files/CLASSICS-BLOCK-1670_X_500-DT.jpg'
        }],
        'apparel': [{
            'id': '1',
            'name': 'Flame',
            'type': 'Crewneck',
            'price': '46$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/FLAME-BLACK-CREWNECK-1.jpg',
        },{
            'id': '2',
            'name': 'Skate Mag',
            'type': 'Crewneck',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/SKATEMAG-MILITARYGREEN-HOODIE-1.jpg',
        },{
            'id': '3',
            'name': 'Skate Mag',
            'type': 'Crewneck',
            'price': '46$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/SKATEMAG-ROYALBLUE-CREWNECK-1.jpg',
        },{
            'id': '4',
            'name': 'Flame',
            'type': 'Hoodie',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/FLAME-DARKHEATHER-HOODIE-1.jpg',
        },{
            'id': '5',
            'name': 'Little Diamond',
            'type': 'T-Shirt',
            'price': '29.76$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/LITTLEDIAMOND-BLACK-SHIRT-1.jpg',
        },{
            'id': '6',
            'name': 'Coffin',
            'type': 'Hoodie',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/COFFIN-LIGHTSTEEL-HOODIE-1.jpg',
        },
        {
            'id': '7',
            'name': 'Coffin',
            'type': 'T-Shirt',
            'price': '29.76$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/COFFIN-WHITE-T-SHIRT-1.jpg',
        },
        {
            'id': '8',
            'name': 'Cap Car',
            'type': 'Hoodie',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/COPCARMAROON-HOODIE-1.jpg',
        }
        ],
        'accesories': [{
            'id': '1',
            'name': 'Thrasher X Herschel',
            'type': 'Backpack',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/THRASHERXHERSCHEL-BACKPACK-BLACK-1.jpg',
        },
        {
            'id': '2',
            'name': 'Skategoat',
            'type': 'Blanket',
            'price': '82$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/SKATEGOAT-BLANKET-BLACK-2.jpg',
        },
        {
           'id': '3',
            'name': 'Still Watchin',
            'type': 'Lapel Pin',
            'price': '10$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/STILLWATCHIN-LAPELPIN-BLACK-1.jpg'
        },
        {
           'id': '4',
            'name': 'Thrasher',
            'type': 'Dog Bowl',
            'price': '14$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/DOGBOWL-BLACK-1.jpg'
        },
         {
           'id': '5',
            'name': 'Flame',
            'type': 'Web Belt',
            'price': '17$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/FLAME-WEBBELT-BLACK-1copy.jpg'
        },{
           'id': '6',
            'name': 'Skategoat',
            'type': 'Lapel Pin',
            'price': '10$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/SKATEGOAT-LAPELPIN-2.jpg'
        },
        {
           'id': '7',
            'name': 'Gonz Thumbs Up',
            'type': 'Tote Bag',
            'price': '14$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/GONZTHUMBSUP-TOTEBAG-BLACK-1.jpg'
        },
        {
           'id': '8',
            'name': 'Thrasher',
            'type': 'Duffel',
            'price': '71.87$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/THRASHER-SKATEDUFFELBAG-BLACK-1.jpg'
        },],
        'magazines': [{
            'id': '1',
            'name': 'April 2024',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2024-4-APRIL.jpg'
        },
        {
            'id': '2',
            'name': 'March 2024',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/TH0324-Cover_cp14-1200.jpg'
        },
        {
            'id': '3',
            'name': 'February 2024',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2024-2-FEBRUARY.jpg'
        },
        {
            'id': '4',
            'name': 'January 2024',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/January_2024_Cover_900.jpg'
        },
        {
            'id': '5',
            'name': 'December 2023',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2023-December-Cover-900.jpg'
        }, 
        {
            'id': '6',
            'name': 'November 2023',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2023-November-Cover-900.jpg'
        },
         {
            'id': '7',
            'name': 'October 2023',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2023-October-Cover-900.jpg'
        },
         {
            'id': '8',
            'name': 'September 2023',
            'type': 'Thrasher Magazine',
            'price': '6$',
            'img_url' : 'https://shop.thrashermagazine.com/cdn/shop/files/2023-September-Cover-900.jpg'
        },
        ]
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)