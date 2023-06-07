from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['GET'])
def get_data():
    data = pd.read_csv('marchestp.csv')

    data['Annee_RefT'] = data['Annee_RefT'].astype(int)
    data['CA'] = data['CA'].round().astype(int)
    filtered_data = data.query('Annee_RefT in [2018, 2019, 2020, 2021, 2022]')

    result = filtered_data.to_dict(orient='records')
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
