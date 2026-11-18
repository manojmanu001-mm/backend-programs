from flask import Flask, request, jsonify
import re

app = Flask(__name__)


def is_valid_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email) is not None


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data or 'name' not in data or 'email' not in data:
        return jsonify({
            "status": "error",
            "message": "name and email are required"
        }), 400

    name = data['name']
    email = data['email']

    if not is_valid_email(email):
        return jsonify({
            "status": "error",
            "message": "invalid email format"
        }), 400

    return jsonify({
        "status": "success",
        "message": "student registered successfully",
        "student": {
            "name": name,
            "email": email
        }
    }), 201


if __name__ == '__main__':
    app.run(debug=True)