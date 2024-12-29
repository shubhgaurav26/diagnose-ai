from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": ""}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Ensure it's running on port 5001
