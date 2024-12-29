from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app=app)
 
base_url = 'http://localhost:5152/api/'

@app.route('/api/Advertisements/getAll', methods=['GET'])
def get_all_advertisements():
    
    response = requests.get(base_url + 'Advertisements/getAll')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Advertisements/getById', methods=['GET'])
def get_by_id_advertisement():

    id = request.args.get('id')
    response = requests.get(base_url + f'Advertisements/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Categories/getAll', methods=['GET'])
def get_all_categories():

    response = requests.get(base_url + 'Categories/getAll')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code


@app.route('/api/CategoriesContents/getAll', methods=['GET'])
def get_all_categories_content():

    response = requests.get(base_url + 'CategoriesContents/getAll')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code


@app.route('/api/CategoriesContents/getById', methods=['GET'])
def get_categories_content_get_by_id():

    id = request.args.get('id')
    response = requests.get(base_url + f'CategoriesContents/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/CategoriesContents/getAllByCategoryId', methods=['GET'])
def get_categories_contents_by_categoryId():

    category_id = request.args.get('categoryId')
    response = requests.get(base_url + f'CategoriesContents/getAllByCategoryId?categoryId={category_id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Grants/getAll', methods=['GET'])
def get_all_grants():

    response = requests.get(base_url + 'Grants/getAll')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code


@app.route('/api/Grants/getById', methods=['GET'])
def get_by_id():

    id = request.args.get('id')
    response = requests.get(base_url + f'Grants/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/JobInternship/getAll', methods = ['GET'])
def get_all_job_internship():

    id = request.args.get('id')
    response = requests.get(base_url + f'JobInternship/getAll?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/JobInternship/getById', methods=['GET'])
def get_by_id_jobAndInternship():

    id = request.args.get('id')

    response = requests.get(base_url + f'JobInternship/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Users/getAllByRoleId', methods=['GET'])
def get_all_users_by_role_id():

    roleid = request.args.get('roleId')
    response = requests.get(base_url + f'Users/getAllByRoleId?roleId={roleid}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code


@app.route('/api/Users/getById', methods=['GET'])
def get_by_id_user():

    id = request.args.get('id')
    response = requests.get(base_url + f'Users/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Volunteering/getAll', methods=['GET'])
def get_all_volunteering():

    id = request.args.get('id')
    response = requests.get(base_url + f'Volunteering/getAll?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/api/Volunteering/getById', methods=['GET'])
def get_by_id_volunteering():

    id = request.args.get('id')
    response = requests.get(base_url + f'Volunteering/getById?id={id}')

    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
