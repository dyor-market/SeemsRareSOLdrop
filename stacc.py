import json
import requests

with open('staccsnap.json', 'r') as f:
    staccs = json.loads(f.read())
for stacc in staccs:
    try:
        arweave = requests.get(staccs[stacc].uri).json()
        for att in arweave['attributes']:
            if att['trait_type'] == 'Rarity':
                rarity = float(att['value'])
                print(rarity)
    except:
        abc=123