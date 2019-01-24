var quotes = [
    'Heb jij je belastingen al gedaan? Ik ben namelijk ook aftrekbaar.',
    'Is je vader DJ? Want jij bent echt een plaatje!',
    'Ben jij een hond? Want ik zou je urenlang anaal nemen.',
    'Doet je vader aan incest? Want als ik je vader was zou ik aan incest doen!',
    'Ik heb een goed-betaalde baan, hallo.',
    'Wil je me alsjeblieft even aaien?',
    'Een goedendag wonderschone dame, wellicht zint het u om met mij hulpmotoren te gaan bewonderen? *tipt agrarisch hoofddeksel',
    'Hee! Ehm... ja dus uhhh... haha mooi weer hè? Kut... hee houdoei... ik bedoel d... laat maar.',
    'Als jij een kraakpand was, had ik je helemaal uitgewoond.',
    'Kom je uit Tsjernobyl, want je ziet er stralend uit.',
    'Hoe zwaar is een ijsbeer? Zwaargenoeg om het ijs te breken.',
    'Stel je voor, er zijn 3 boten in nood op zee. 1 boot zit vol met hoogzwangere paarden. <br>2e boot zit vol met acrobatische panda\'s. En de laatste zit vol met eenhoorns. <br>Stel je voor, jij was een reddingshelikopter. Wat zou jouw reddingstelefoonnummer dan zijn?',
    'UwU *haalt  vlees scepter uit broek*',
    'Zal ik je even beffen om het ijs te breken?',
    'Vind jij deze lap ook zo naar chloroform ruiken?',
    'Hoi, ik heet Bert. Hoe heet ben jij? (Exclusief voor mensen die Bert heten)',
    'Hoi, ik hoop stiekem dat jouw eisen lager zijn dan de mijne...',
    'Is het de of het magazijn? [antwoord] Nee, jij mag er zijn!',
   'Als jij een frikandel was, was jij een frikandel speciaal.',
    'Ben jij een vogel? Nee? Waarom zit je dan vanavond op een harde stok met zaad in je bek.',
    'Is jouw vader toevallig timmerman? Nee? Waarom heb je dan zo\'n prachtige voorgevel?',
    'Is jouw vader houthakker? Want je hebt een enorme bos hout voor de deur.',
    'Ik hoop dat je een aluminium afgietsel hebt gemaakt van je baarmoeder want ik <br> kom zo hard dat ik door je ruggegraat schiet. Ik bedoel, hoi, ik heet Bert',
    'Je hoeft geen Twents te kunnen, als je maar plat kan.'
    
    ];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
