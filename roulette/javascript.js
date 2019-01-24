var quotes = [
    'Spanjool voor 1 minuut',
    'Spanjool voor 1 minuut',
    'Spanjool voor 1 minuut', 
    'Spanjool voor 5 minuten',
    'Spanjool voor 5 minuten',
    'Spanjool voor 30 minuten',
    'Ridder voor 1 minuut',
    'Ridder voor 1 minuut',
    'Ridder voor 5 minuten',
    'Ridder voor 5 minuten',
    'Ridder voor 30 minuten',
    'Autist voor 10 minuten',
    'Autist voor 30 minuten',
    'Als je een stadthouder bent, ben je bij deze afgezet!',
    'Als je lid van de feestcomissie bent, ben je bij deze afgezet!',
    'Je bent aangesteld als stadt!',
    'Paal een angelsakse meem in #lekker_trekken',
    'Paal een angelsakse meem in #lekker_trekken',
    'Paal een angelsakse meem in #lekker_trekken',
    'Paal een angelsakse meem in #lekker_trekken',
    'Paal een stokbroodsakse meem in #lekker_trekken',
    'Paal een stokbroodsakse meem in #lekker_trekken',
    'Paal een Onderverhaal NVVW in het NVVW kanaal.',
    'Paal een MijnBouw NVVW in het NVVW kanaal.',
   'Paal een Avonturen Tijd NVVW in het NVVW kanaal.',
    'PM een willekeurig persoon met een schijtpaal.',
    'PM een willekeurig persoon met een NVVW.',
    'Neem een glas bier.',
    'Neem een glas bier.',
    'Neem een glas water.',
    'Overtreed een willekeurig artikel.',
    'Zing een couplet naar keuze van het volkslied in het stemkanaal.',
    'Schijtpaal in #straffen_en_oorkonden.',
    'Spanjool 1 andere deelnemer naar keuze',
    'Spanjool 1 andere deelnemer naar keuze.',
    
    ];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
