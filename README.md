# Russian Text Tagger



## Usage example
### Browser
```html
<script src="./az.min.js"></script>
<script src="./RTT/index.js"></script>
<script>
    Az.Morph.init('./dicts', function(){
        console.log('az loaded')
        let rtt = RussianTextTagger({triggers: [], loadedAz: Az});
        let result = rtt("как у тебя дела, друг?");
        console.log('result:', result);
    })
</script>
```

### NodeJS
``` javascript
let triggers = [
    {
        // (привет|хелоу|здарова|хай|прив)
        name: "Приветсвие",
        words: [{text: ["привет", "хелоу", "здарова", "хай", "прив"]}],
        markers: [1],
        check_scope: 'sentences'
    },
    {
        // в (какое|какие) (время|часы) вы (работаете)
        name: "Вопрос о времени работы",
        words: [
            {normalized: ["какой"]},
            {normalized: ["время", "час"]},
            {normalized: ["работать"]},
        ],
        markers: [2],
        check_scope: 'sentences'
    },
];

let Analysis = require("../index")({triggers});

(async ()=>{
    let results = await Analysis("привет. в какое время вы работаете?");
    let message = "";
    for(let m of results.markers){
        if(m==1) message+='Привет!\n'
        if(m==2) message+='Мы работаем 24 на 7.\n'
    }
    console.log(message);
})();

```