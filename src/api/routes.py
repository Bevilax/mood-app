"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import os
import requests

api = Blueprint('api', __name__)



@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# @api.route("/updatezip/<int:id>", methods=["GET", "POST"])
# def updateZip(id):
#     zip_to_update = User.query.get_or_404(id)
#     if request.method == "POST":
#         zip_to_update.zipcode = 
#     zipcode = request.json.get("zipcode", None)
#     user = User.query.filter_by(email=email).one_or_none()
#     if user is not None:
#         zipcode = User(zipcode=zipcode)
#         db.session.add(zipcode)
#         db.session.commit()

@api.route("/deletezip", methods=["DELETE"])
def deleteZip():
    zipcode = request.json.get("zipcode", None)
    user = User(zipcode)
    db.session.delete(user)
    db.session.commit()
    


   

@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()
    if user is not None:
        if user.check_password_hash(password):
            access_token = create_access_token(identity=email)
            payload = {"token": access_token,
                        "user": user.serialize()}
            return jsonify(payload)
    return jsonify({"msg": "Invalid cedentials."}), 401

@api.route("/register", methods=["POST"])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    zipcode = request.json.get("zipcode", None)
    user = User.query.filter_by(email=email).one_or_none()
    print(email)
    print(user)
    if user is None:
        user = User(email=email, password=password,zipcode=zipcode, is_active=True)
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "You created your account"}), 201
    else:
        return jsonify({"msg": "Your account already exists, please sign in"}), 406
    
@api.route("/event/<int:zipcode>")
def getEventByZip(zipcode):
    url = "https://api.seatgeek.com/2/events?postal_code={zipcode}&sort=score.desc&client_id=Mjc0NDkwMDl8MTY1NTI1MDI4Ny4yNTc1MjM4"
    resp = requests.get(url.format(zipcode=zipcode))
    return resp.json()

@api.route("/event/<int:zipcode>/<int:taxonomy>")
def getEventByZipAndTaxonomy(zipcode, taxonomy):
    url = "https://api.seatgeek.com/2/events?postal_code={zipcode}&taxonomies.id={taxonomy}&sort=score.desc&client_id=Mjc0NDkwMDl8MTY1NTI1MDI4Ny4yNTc1MjM4"
    resp = requests.get(url.format(zipcode=zipcode))
    return resp.json()

# @api.route("/event/eventlog")
# def getEvents():
#     payload = request.get_json()

#     event = Events(taxonomy_id=taxonomy_id, zip_code=zip_code)
#     db.session.add(event)
#     db.session.commit()
#     if event is None:
#         return jsonify({"msg": "Event created"})
#     else:
#         return jsonify({"msg": "Error"})
        
