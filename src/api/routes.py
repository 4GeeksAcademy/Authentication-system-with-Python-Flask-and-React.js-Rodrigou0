"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login_user():

    email= request.json.get("email", None)
    password= request.json.get("password", None)

    if email is None:
        response_body = {
        "message": "Missing email"
    }
        return jsonify(response_body), 400
    
    if password is None:
        response_body = {
        "message": "Missing password"
    }
        return jsonify(response_body), 400
    
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    res_user = user.serialize()

    print('Authenticated users data', user)
    return jsonify(res_user), 200

@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    if not data or 'email' not in data or 'password' not in data:
        return jsonify({'error': 'email and password are required'}), 400

    email = data['email']
    password = data['password']

    user=User(email= email, password= password, is_active=True)
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

if __name__ == '__main__':
    api.run(debug=True)