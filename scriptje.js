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

function updateFustietaken() {
    const lijst = document.querySelector('.fustietaken-lijst');
    lijst.innerHTML = '';

    kookbeurten.forEach(persoon => {
        persoon.datums.forEach(datum => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `fustietaak-${datum}`;
            
            const isChecked = localStorage.getItem(`fustietaak-${datum}`) === 'true';
            checkbox.checked = isChecked;
            
            checkbox.addEventListener('change', (e) => {
                localStorage.setItem(`fustietaak-${datum}`, e.target.checked);
            });

            const label = document.createElement('label');
            const datumObj = new Date(datum);
            const datumTekst = datumObj.toLocaleDateString('nl-NL', { 
                day: 'numeric', 
                month: 'numeric' 
            });
            
            label.textContent = `${persoon.naam} - ${datumTekst}`;
            
            li.appendChild(checkbox);
            li.appendChild(label);
            lijst.appendChild(li);
        });
    });
}

function updateSineRegnoDay() {
    const startDate = new Date('2024-03-20');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('sineRegno').textContent = `Sine Regno dag ${diffDays}`;
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
    
    document.getElementById('recipe-title').addEventListener('click', () => {
        document.getElementById('recipe-content').classList.toggle('hidden');
    });
});

setInterval(updateSineRegnoDay, 1000 * 60 * 60 * 24);