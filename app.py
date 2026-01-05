from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User, Product
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# update credentials
USERNAME = "root"
PASSWORD = "Tamil%409514"   # actual password; in URI escape @ -> %40 if needed
DB_NAME = "ecommerce"
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{USERNAME}:{PASSWORD}@localhost/{DB_NAME}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/ping')
def ping():
    return jsonify({"message":"pong"})

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data: return jsonify({"message":"Bad request"}), 400
    username = data.get('username'); password = data.get('password')
    if not username or not password: return jsonify({"message":"Missing fields"}),400
    if User.query.filter_by(username=username).first():
        return jsonify({"message":"User already exists"}),409
    hashed = generate_password_hash(password)
    user = User(username=username, password=hashed)
    db.session.add(user); db.session.commit()
    return jsonify({"message":"Signup successful"}),201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username'); password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        # For simplicity return success. In prod return JWT token.
        return jsonify({"message":"Login successful"}),200
    return jsonify({"message":"Invalid credentials"}),401

@app.route('/add_product', methods=['POST'])
def add_product():
    data = request.get_json()
    p = Product(
        name=data['name'],
        category=data.get('category','mobiles'),
        price=data['price'],
        rating=data.get('rating',0),
        image_url=data.get('image_url',''),
        description=data.get('description','')
    )
    db.session.add(p); db.session.commit()
    return jsonify({"message":"Product added"}),201

@app.route('/products', methods=['GET'])
def get_products():
    category = request.args.get('category')  # optional filter
    q = Product.query
    if category:
        q = q.filter_by(category=category)
    items = q.all()
    result = []
    for p in items:
        result.append({
            "id": p.id, "name": p.name, "category": p.category,
            "price": p.price, "rating": p.rating, "image_url": p.image_url,
            "description": p.description
        })
    return jsonify(result),200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
