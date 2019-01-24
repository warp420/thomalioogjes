var quotes = [
    'At een glas bier.',
    'At een glas bier.',
    'At een flesje bier.',
    'Neem een shotje van een sterke drank naar keuze.',
    'Spuit wat deo in je mond.',
    'Gooi een toaster in je badkuip.',
    'Schreeuw tyfushard "kokosnoten kanker".',
    'Stuur een piemfoto naar het meest recente contact op je telefoon.',
    'Verlaat de ober.',
    'At een liter fles water.',
    'Schenk een shotje sterke drank in, steek dit aan met een lucifer en drink het.',
    'Doe 10 opdrukken.',
    'Doe 20 opdrukken.',
    'Zet een gore video op (maximaal geluid).',
    'Vraag de eerste persoon die je in je huis tegenkomt of zei toevallig óók een SOA heeft.',
    'Neem 100 van de eerste pillen die je vind.',
    'Stop je piem in de magnetron.',
    'Eet een steen. Letterlijk.',
    'Eet zand.',
    'Drink een kopje kokend heet water.',
    'Zet je haar in de neukende fik.'
    
    ];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
