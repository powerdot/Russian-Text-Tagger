#### Generate docs
```bash
parcel build ./browser/index.js --dist-dir ./browser/build/ ; cp -rf ./browser/build/ ./docs/RTT/ ; cp ./node_modules/az/dist/az.min.js ./docs/az.min.js ; cp -rf ./node_modules/az/dicts ./docs/dicts
```