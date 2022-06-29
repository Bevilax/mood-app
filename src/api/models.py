from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class Events(db.Model):
    taxonomy_id = db.Column(db.Integer, primary_key=True)
    zip_code = db.Column(db.Integer, primary_key=False)

    def __repr__(self):
        return '<Events {}>'.format(self.zip_code)

    def serialize(self):
        return {
            "taxonomy_id": self.taxonomy_id,
            "zip_code": self.zip_code
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(120), unique=False, nullable=False)
    zipcode = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User {}>'.format(self.email)
        return '<User {}>'.format(self.zipcode)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "zipcode": self.zipcode
            # do not serialize the password, its a security breach
        }
    
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(password)

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)