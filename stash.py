import json
import requests

with open('stashsnap.json', 'r') as f:
    staccs = json.loads(f.read())
names = {}
mints = {}
for stacc in staccs:
 #   print(stacc)
    try:
        arweave = requests.get(stacc['info']['data']['uri']).json()
          
        if stacc['info']['mint'] not in mints:
            mints[stacc['info']['mint']] = arweave['attributes']
            print(len(mints))
    except Exception as e:
        print(e)
   # sleep(1)
with open('mintsstash.json', 'w') as f:
    f.write(json.dumps(mints))