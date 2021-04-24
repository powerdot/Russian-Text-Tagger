# Russian Text Tagger



## Usage example
```
<script src="./az.min.js"></script>
<script src="./RTT/index.js"></script>
<script>
    Az.Morph.init('./dicts', function(){
        console.log('az loaded')
        let ta = RussianTextTagger({triggers: [], loadedAz: Az});
        let result = ta("как у тебя дела, друг?");
        console.log('ta', result);
    })
</script>
```