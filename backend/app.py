


# app.py (Python Flask Backend)
from flask import Flask, request, jsonify
import requests
import json
import os
from dotenv import load_dotenv
from flask_cors import CORS
import re

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.environ.get("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY not found in environment variables or .env file.")
    exit()

model = "gemini-2.0-flash"

def generate_text(prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    headers = {'Content-Type': 'application/json'}
    data = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        if (
            'candidates' in result and result['candidates'] and
            'content' in result['candidates'][0] and
            'parts' in result['candidates'][0]['content'] and
            result['candidates'][0]['content']['parts']
        ):
            return result['candidates'][0]['content']['parts'][0]['text']
        else:
            return None
    except requests.exceptions.RequestException as e:
        return None

@app.route('/generate_recipe', methods=['POST'])
def generate_recipe():
    try:
        data = request.get_json()
        user_query = data['query']

        prompt = f"""Generate a recipe for "{user_query}".

Please format the recipe with the following sections:

*Recipe:* (Provide a clear and concise title for the recipe)

*Ingredients:*
(List all ingredients with quantities, each on a new line preceded by a '*')

*Equipment:*
(List all necessary kitchen equipment, each on a new line preceded by a '*')

*Instructions:*
(Provide clear, numbered, step-by-step instructions. Each step should be on a new line )"""

        gemini_response = generate_text(prompt)

        if gemini_response:
            sections = {}
            current_section = None
            lines = gemini_response.split('\n')

            for line in lines:
                line = line.strip()

                # Recipe name key is "RecipeName"
                if line.startswith('*Recipe-Name:*') or line.startswith('*Recipe:*'):
                    current_section = 'RecipeName'
                    line = line.replace('*Recipe-Name:*', '').replace('*Recipe:*', '')
                    sections['RecipeName'] = line.strip()

                elif line.startswith('*Ingredients:*'):
                    current_section = 'Ingredients'
                    sections[current_section] = []

                elif line.startswith('*Equipment:*'):
                    current_section = 'Equipment'
                    sections[current_section] = []

                elif line.startswith('*Instructions:*'):
                    current_section = 'Instructions'
                    sections[current_section] = []

                elif current_section:
                    if current_section in ['Ingredients', 'Equipment']:
                        if line.startswith('*'):
                            sections[current_section].append(line.replace('*', '').strip())
                    elif current_section == 'Instructions':
                        if re.match(r'^\d+\.', line):
                            sections[current_section].append(line.strip())

            return jsonify(sections)
        else:
            return jsonify({"error": "Failed to generate recipe."}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
