var quotes = [
    'Spanjool jezelf.',
    'Spanjool jezelf.',
    'Spanjool jezelf.',
    'Tek een stadt zonder reden.',
    'Overtreed een willekeurig artikel.',
    'Tek een willekeurig lid zonder reden.',
    'Neem de identiteit (profielfoto en naam) van iemand over.',
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
