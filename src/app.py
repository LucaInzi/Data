from flask import Flask, jsonify
import pandas as pd
from google.cloud import bigquery

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    # Créer un client BigQuery
    client = bigquery.Client()

    # Définir une requête
    query = """
    SELECT *
    FROM `b2u-wsf-data-project.loxam.détails_matériel`
    LIMIT 1000
    """

    # Exécuter la requête et charger les résultats dans un DataFrame
    df = client.query(query).to_dataframe()

    # Convertir le DataFrame en un dictionnaire et le renvoyer comme une réponse JSON
    return jsonify(df.to_dict())

if __name__ == '__main__':
    app.run(port=5000)
