var quotes = [
    'Heb jij je belastingen al gedaan?

Ik ben namelijk ook aftrekbaar.',
    'Is je vader DJ? Want jij bent echt een plaatje!',
    'Ben jij een hond? Want ik zou je urenlang anaal nemen.',
    'Doet je vader aan incest? Want als ik je vader was zou ik aan incest doen!',
    'Ik heb een goed-betaalde baan, hallo.',
    'Wil je me alsjeblieft even aaien?',
    'Een goedendag wonderschone dame, wellicht zint het u om met mij hulpmotoren te gaan bewonderen ?
*tipt agrarisch hoofddeksel',
    'Paal Onderverhaal NVVW in een kanaal naar keuze.',
    'Paal een huilende kan in een kanaal naar keuze.',
    'Maak een ASMR opname.',
    'Forceer een dode meem.',
    'Forceer een dode meem.',
    'Forceer een dode meem.',
    'Schijtpaal in #echte_praat.',
    'Je bent aangesteld als stadt!',
    'Paal een angelsakse meem in #lekker_trekken',
    'Paal een stokbroodsakse meem in #lekker_trekken',
    'Paal een MijnBouw NVVW in het NVVW kanaal.',
   'Paal een Avonturen Tijd NVVW in het NVVW kanaal.',
    'PM een willekeurig persoon met een schijtpaal.',
    'PM een willekeurig persoon met een NVVW.',
    'PM een willekeurig stadt met een liefdesverklaring.',
    'Reageer :gelezen: onder het laatst gestuurde bericht in #lekker_trekken.',
    'Begin een verhaal in #echte_praat, met als onderwerp dat je hond homo zou zijn.'
    
    ];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
