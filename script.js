const avondRecepten = [
    {
        titel: "Pasta Aglio e Olio",
        instructies: "1. Kook de pasta volgens de verpakking\n2. Fruit knoflook in olijfolie\n3. Meng de pasta met de knoflookolie\n4. Voeg peterselie en peper toe",
        ingredienten: [
            "400g spaghetti",
            "4 tenen knoflook",
            "50ml olijfolie",
            "Verse peterselie",
            "Peper en zout"
        ],
        afbeelding: "https://images.unsplash.com/photo-1573935148108-096cd6c45162"
    },
    {
        titel: "Rijst met Kip Teriyaki",
        instructies: "1. Kook rijst volgens verpakking\n2. Snijd kip in stukjes en bak\n3. Voeg teriyakisaus toe\n4. Serveer met rijst en roerbakgroenten",
        ingredienten: [
            "300g rijst",
            "400g kipfilet",
            "200g roerbakgroenten",
            "Teriyakisaus",
            "Sesamzaadjes (optioneel)"
        ],
        afbeelding: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
        titel: "Mexicaanse Wraps",
        instructies: "1. Bak gehakt met Mexicaanse kruiden\n2. Snijd groenten fijn\n3. Verwarm de wraps\n4. Vul met gehakt, groenten en saus",
        ingredienten: [
            "400g gehakt",
            "8 wraps",
            "1 paprika",
            "1 ui",
            "Geraspte kaas",
            "Crème fraîche",
            "Mexicaanse kruiden"
        ],
        afbeelding: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f"
    },
    {
        titel: "Simpele Curry met Rijst",
        instructies: "1. Kook rijst\n2. Bak kip met currypasta\n3. Voeg kokosmelk en groenten toe\n4. Laat sudderen tot groenten gaar zijn",
        ingredienten: [
            "300g rijst",
            "400g kipfilet",
            "400ml kokosmelk",
            "Currypasta",
            "Diepvriesgroenten",
            "1 ui"
        ],
        afbeelding: "https://images.unsplash.com/photo-1604579835207-bccd5f6c0c4"
    }
];

function updateSineRegnoDay() {
    const startDate = new Date('2024-03-20'); // Pas deze datum aan naar de start van Sine Regno
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('sineRegno').textContent = `Sine Regno dag ${diffDays}`;
}

function getGebruikteRecepten() {
    const gebruikteRecepten = localStorage.getItem('gebruikteRecepten');
    return gebruikteRecepten ? JSON.parse(gebruikteRecepten) : [];
}

function voegReceptToeAanGebruikte(receptIndex) {
    const gebruikteRecepten = getGebruikteRecepten();
    gebruikteRecepten.push(receptIndex);
    localStorage.setItem('gebruikteRecepten', JSON.stringify(gebruikteRecepten));
}

function getDagelijksRecept() {
    const gebruikteRecepten = getGebruikteRecepten();
    
    if (gebruikteRecepten.length >= avondRecepten.length) {
        localStorage.setItem('gebruikteRecepten', '[]');
        return avondRecepten[0];
    }
    
    let beschikbareRecepten = avondRecepten
        .map((recept, index) => ({ recept, index }))
        .filter(({ index }) => !gebruikteRecepten.includes(index));
    
    const gekozenReceptInfo = beschikbareRecepten[Math.floor(Math.random() * beschikbareRecepten.length)];
    
    voegReceptToeAanGebruikte(gekozenReceptInfo.index);
    
    return gekozenReceptInfo.recept;
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
    
    document.getElementById('recipe-title').addEventListener('click', () => {
        document.getElementById('recipe-content').classList.toggle('hidden');
    });
});

setInterval(updateSineRegnoDay, 1000 * 60 * 60 * 24);