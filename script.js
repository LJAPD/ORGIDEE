const avondRecepten = [
    {
        titel: "Zelfgemaakte Pasta Carbonara",
        instructies: "1. Kook de pasta al dente\n2. Bak pancetta krokant in een pan\n3. Klop 3 eidooiers met geraspte Pecorino en Parmezaan\n4. Meng hete pasta met ei-mengsel en pancetta\n5. Voeg pasta-water toe voor romigheid\n6. Garneer met verse peper en extra kaas",
        ingredienten: [
            "400g spaghetti",
            "200g pancetta of guanciale",
            "3 biologische eidooiers",
            "100g Pecorino Romano",
            "100g Parmezaanse kaas",
            "Versgemalen zwarte peper",
            "Zout"
        ],
        afbeelding: "https://images.unsplash.com/photo-1612874742237-6526221588e3"
    },
    {
        titel: "Thaise Rode Curry met Zeevruchten",
        instructies: "1. Fruit rode curry pasta in kokosolie\n2. Voeg kokosmelk toe en breng aan de kook\n3. Voeg Thaise aubergines en bamboe toe\n4. Kook garnalen en mosselen in de curry\n5. Breng op smaak met vissaus en palmsuiker\n6. Garneer met Thaise basilicum",
        ingredienten: [
            "400g grote garnalen",
            "500g mosselen",
            "2 blikken kokosmelk",
            "3 el rode curry pasta",
            "Thaise aubergines",
            "Bamboe shoots",
            "Vissaus",
            "Palmsuiker",
            "Thaise basilicum"
        ],
        afbeelding: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"
    },
    {
        titel: "Marokkaanse Tajine met Lamsvlees",
        instructies: "1. Marineer lamsvlees met kruiden\n2. Fruit ui en knoflook in tajine\n3. Voeg vlees en groenten toe\n4. Laat 2 uur sudderen op laag vuur\n5. Voeg dadels en amandelen toe\n6. Serveer met couscous",
        ingredienten: [
            "800g lamsvlees in blokjes",
            "2 uien",
            "4 tenen knoflook",
            "2 wortels",
            "2 zoete aardappels",
            "Dadels",
            "Amandelen",
            "Ras el hanout",
            "Kaneel, komijn, gember",
            "Couscous"
        ],
        afbeelding: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
    }
];

const tegeltjesWijsheden = [
    "Wie zijn tentamens niet haalt, heeft meer tijd om te borrelen",
    "Een dag niet gezopen is een dag niet geleefd, een week niet gestudeerd is een vak niet gehaald",
    "Liever een gat in je CV dan een gat in je biercurriculum",
    "Wie voor tienen gaat, mist de beste borrels",
    "Een kater duurt een dag, herinneringen duren eeuwig",
    "Studeren is belangrijker dan studie, bier is belangrijker dan beide",
    "Wie zijn college mist, mist niks. Wie de borrel mist, mist alles",
    "Beter een biertje in de hand dan tien studiepunten op de plank",
    "Een dispuut zonder bier is als een college met verplichte aanwezigheid",
    "Waarom moeilijk doen als samen zuipen ook kan?",
    "Het leven is geen ponykamp, het corps geen studentenvereniging",
    "Wie niet kan delen, kan niet vermenigvuldigen op de sociëteit",
    "Liever een lege portemonnee dan een lege bierton",
    "Een dag zonder hoofdpijn is een dag zonder ambitie",
    "Wie schrijft die blijft, wie zuipt die kruipt",
    "Het verschil tussen een eerstejaars en een ouderejaars? Drie jaar aan katerervaring",
    "Waarom zou je 9 uur slapen als je ook 9 uur kan borrelen?",
    "De beste ideeën ontstaan na middernacht, de slechtste na de derde pitcher",
    "Een mooie scriptie is tijdelijk, een mooi dispuut is voor altijd",
    "Wie nuchter zijn waarheid spreekt, kent zijn classics niet"
];

const rijmtips = [
    "In Bodegraven staat mijn wieg, nu drink ik hier mijn laatste vlieg",
    "Bond is leven, Bond is fijn, laat die bak maar binnen zijn",
    "Van Leiden tot aan Bodegraven, zullen wij dit biertje staven",
    "Proost op Leiden, onze stad, waar ik al zoveel biertjes had",
    "Minerva, Augustinus, wat een strijd, maar deze bak zijn we nu kwijt",
    "De Bond die roept, ik moet er heen, eerst deze pitcher, dan ga ik meteen",
    "Van de Breestraat naar de Bond, zo komt dit biertje in mijn mond",
    "Bodegraven is ver weg, maar deze bak die gaat er lekker in zeg",
    "Oranje boven, Oranje voor, deze pitcher gaat er wel door",
    "Van sociëteit naar sociëteit, deze bak raakt zijn bubbels kwijt",
    "Leiden, stad van sleutels en geluk, deze pitcher gaat in één ruk",
    "Bond vanavond? Eerst maar dit, een biertje voor we gaan is altijd een hit",
    "Van Breestraat naar de Kaiserstraat, kijk hoe snel deze bak nu gaat",
    "Bodegraven in mijn hart, deze bak weg, dat is pas een start",
    "Oranje in mijn bloed zo puur, deze pitcher duurt geen uur",
    "Leiden is mijn thuis geworden, tijd om deze bak te morden",
    "Van dispuut naar Bond vannacht, eerst dit biertje, dat geeft kracht",
    "Bodegraven representeer, deze pitcher is niet meer",
    "Oranje kleurt ons leven mooi, deze bak gaat weg, geen dooi",
    "De sociëteit die roept en lokt, nadat deze bak is opgeslokt",
    "Leiden, stad van bier en meer, deze pitcher komt niet weer",
    "Oranje hart en Oranje ziel, deze bak die gaat subtiel",
    "In Oranje staat ons huis, deze pitcher voelt als thuis",
    "Bond of Oranje, maakt niet uit, deze bak moet er gewoon uit"
];

const kookbeurten = [
    { naam: "Tygo", datums: ["2024-02-27", "2024-02-28", "2024-04-14", "2024-04-15", "2024-05-29", "2024-05-30"] },
    { naam: "Kali", datums: ["2024-03-03", "2024-03-04", "2024-04-17", "2024-04-18", "2024-06-02", "2024-06-03"] },
    { naam: "Daan", datums: ["2024-03-06", "2024-03-07", "2024-04-21", "2024-04-22", "2024-06-05", "2024-06-06"] },
    { naam: "Bert", datums: ["2024-03-10", "2024-03-11", "2024-04-24", "2024-04-25", "2024-06-09", "2024-06-10"] },
    { naam: "Jules", datums: ["2024-03-13", "2024-03-14", "2024-04-28", "2024-04-29", "2024-06-12", "2024-06-13"] },
    { naam: "Eline", datums: ["2024-03-17", "2024-03-18", "2024-05-01", "2024-05-02", "2024-06-16", "2024-06-17"] },
    { naam: "Tinny", datums: ["2024-03-20", "2024-03-21", "2024-05-05", "2024-05-06", "2024-06-19", "2024-06-20"] },
    { naam: "Suze", datums: ["2024-03-24", "2024-03-25", "2024-05-08", "2024-05-09", "2024-06-23", "2024-06-24"] },
    { naam: "Kuub", datums: ["2024-03-27", "2024-03-28", "2024-05-12", "2024-05-13"] },
    { naam: "Maud", datums: ["2024-03-31", "2024-04-01", "2024-05-15", "2024-05-16"] },
    { naam: "Gappie", datums: ["2024-04-07", "2024-04-08", "2024-05-22", "2024-05-23"] },
    { naam: "Freek", datums: ["2024-04-10", "2024-04-11", "2024-05-26", "2024-05-27"] },
    { naam: "Harst", datums: ["2024-05-19", "2024-05-20"] }
];

function updateSineRegnoDay() {
    const startDate = new Date('2024-03-07'); // Start vanaf 7 maart 2024
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const sineRegnoText = `Sine Regno dag ${diffDays}`;
    document.getElementById('sineRegno').textContent = `${sineRegnoText} • `.repeat(10);
}

function randomOrchidRedirect() {
    const urls = [
        'https://youtu.be/dQw4w9WgXcQ',
        'https://plantvoorplant.nl/doneer/',
        'https://studentenwoordenboek.nl',
        'https://leidenprive.nl/privehuis-in-leiden/',
        'https://www.lsvminerva.nl',
        'https://www.lvvsaugustinus.nl',
        'https://en.wikipedia.org/wiki/Orchid'
    ];
    
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
}

function updateFustietaken() {
    const lijst = document.querySelector('.fustietaken-lijst');
    lijst.innerHTML = '';

    let alleTaken = [];
    kookbeurten.forEach(persoon => {
        persoon.datums.forEach(datum => {
            alleTaken.push({
                naam: persoon.naam,
                datum: datum
            });
        });
    });

    alleTaken.sort((a, b) => new Date(a.datum) - new Date(b.datum));

    alleTaken.forEach(taak => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `fustietaak-${taak.datum}`;
        
        const isChecked = localStorage.getItem(`fustietaak-${taak.datum}`) === 'true';
        checkbox.checked = isChecked;
        
        const label = document.createElement('label');
        const datumObj = new Date(taak.datum);
        const datumTekst = datumObj.toLocaleDateString('nl-NL', { 
            day: 'numeric', 
            month: 'numeric' 
        });
        
        const tekstSpan = document.createElement('span');
        tekstSpan.textContent = `${taak.naam} - ${datumTekst}`;
        
        const bloemSpan = document.createElement('span');
        bloemSpan.textContent = '🌺';
        bloemSpan.style.display = isChecked ? 'inline' : 'none';
        
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(`fustietaak-${taak.datum}`, e.target.checked);
            tekstSpan.style.textDecoration = e.target.checked ? 'line-through' : 'none';
            bloemSpan.style.display = e.target.checked ? 'inline' : 'none';
        });
        
        tekstSpan.style.textDecoration = isChecked ? 'line-through' : 'none';
        
        label.appendChild(checkbox);
        label.appendChild(tekstSpan);
        label.appendChild(bloemSpan);
        li.appendChild(label);
        lijst.appendChild(li);
    });
}

function updateTegeltjeswijsheid() {
    const vandaag = new Date();
    const dagenSinds1Jan2024 = Math.floor((vandaag - new Date(2024, 0, 1)) / (1000 * 60 * 60 * 24));
    const wijsheidIndex = dagenSinds1Jan2024 % tegeltjesWijsheden.length;
    
    document.getElementById('tegeltjeswijsheid').textContent = tegeltjesWijsheden[wijsheidIndex];
}

function updateRijmtip() {
    const vandaag = new Date();
    const dagenSinds1Jan2024 = Math.floor((vandaag - new Date(2024, 0, 1)) / (1000 * 60 * 60 * 24));
    const rijmtipIndex = dagenSinds1Jan2024 % rijmtips.length;
    
    document.getElementById('rijmtip').textContent = rijmtips[rijmtipIndex];
}

function getLotingNamen() {
    const namen = kookbeurten.map(persoon => persoon.naam);
    return [...namen, 'Freek', 'Freek'];
}

function startLoting() {
    const bloem = document.getElementById('lotingBloem');
    const resultaat = document.getElementById('lotingResultaat');
    const namen = getLotingNamen();
    
    bloem.classList.add('bloem-spin');
    resultaat.classList.remove('show');
    
    setTimeout(() => {
        bloem.classList.remove('bloem-spin');
        const randomIndex = Math.floor(Math.random() * namen.length);
        const geloteNaam = namen[randomIndex];
        resultaat.textContent = `Ha ${geloteNaam}, je moet een bak trekken neutfeus!!`;
        resultaat.classList.add('show');
    }, 2000);
}

function initializeHuisgenoten() {
    const huisgenoten = document.querySelectorAll('.huisgenoot');
    const popup = document.getElementById('huisgenoot-info');
    let timeoutId;

    huisgenoten.forEach(huisgenoot => {
        huisgenoot.addEventListener('click', () => {
            const info = huisgenoot.dataset.info;
            const [beschrijving, corps] = info.split(' • ');
            
            popup.innerHTML = `
                <div class="popup-title">Over deze huisgenoot:</div>
                <div class="corps">• ${corps}</div>
                <div class="info">• ${beschrijving}</div>
            `;
            
            popup.classList.add('show');
            
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                popup.classList.remove('show');
            }, 20000);
        });
    });
}

function initializeGeschiedenis() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/fail-trombone-01.mp3');
    const geschiedenisTab = document.querySelector('[data-page="geschiedenis"]');
    
    geschiedenisTab.addEventListener('click', () => {
        audio.play();
    });
}

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const pages = document.querySelectorAll('.page');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            button.classList.add('active');
            const pageId = button.dataset.page;
            document.getElementById(pageId).classList.add('active');
        });
    });
}

function getDagelijksRecept() {
    const vandaag = new Date();
    const dagenSinds1Jan2024 = Math.floor((vandaag - new Date(2024, 0, 1)) / (1000 * 60 * 60 * 24));
    const receptIndex = dagenSinds1Jan2024 % avondRecepten.length;
    return avondRecepten[receptIndex];
}

function toonRecept() {
    const recept = getDagelijksRecept();
    
    document.getElementById('recipe-title').textContent = recept.titel;
    document.getElementById('recipe-instructions').textContent = recept.instructies;
    
    const bestaandeAfbeelding = document.querySelector('.recipe-image');
    if (bestaandeAfbeelding) {
        bestaandeAfbeelding.remove();
    }
    
    const afbeelding = document.createElement('img');
    afbeelding.src = recept.afbeelding;
    afbeelding.alt = recept.titel;
    afbeelding.className = 'recipe-image';
    
    const recipeContent = document.getElementById('recipe-content');
    recipeContent.insertBefore(afbeelding, recipeContent.firstChild);
    
    const ingredientenLijst = document.getElementById('ingredients-list');
    ingredientenLijst.innerHTML = '';
    
    recept.ingredienten.forEach(ingredient => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(ingredient));
        ingredientenLijst.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateSineRegnoDay();
    toonRecept();
    updateFustietaken();
    updateTegeltjeswijsheid();
    updateRijmtip();
    initializeTabs();
    initializeHuisgenoten();
    initializeGeschiedenis();
    
    document.getElementById('recipe-title').addEventListener('click', () => {
        document.getElementById('recipe-content').classList.toggle('hidden');
    });
    
    const lotingBloem = document.getElementById('lotingBloem');
    if (lotingBloem) {
        lotingBloem.addEventListener('click', startLoting);
    }
    
    const orchideeText = document.querySelector('h1');
    if (orchideeText) {
        orchideeText.addEventListener('click', randomOrchidRedirect);
    }
});

setInterval(updateSineRegnoDay, 1000 * 60 * 60 * 24);