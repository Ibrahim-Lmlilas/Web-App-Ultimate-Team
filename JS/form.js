// Had function katdir:la khtar player GK (goalkeeper): kaybano stats dial goalkeeper (DIV, HAN, KIC, etc.)
// Ila khtar chi position khra: kaybano stats normal dial player (PAC, SHO, PAS, etc.

document.getElementById('position').addEventListener('change', function() {
    const playerStats = document.querySelector('.player-stats');
    const goalkeeperStats = document.querySelector('.goalkeeper-stats');
    
    if (this.value === 'GK') {
        playerStats.style.display = 'none';
        goalkeeperStats.style.display = 'block';
    } else if (this.value !== '') {
        playerStats.style.display = 'block';
        goalkeeperStats.style.display = 'none';
    } else {
        playerStats.style.display = 'none';
        goalkeeperStats.style.display = 'none';
    }
});

//------------------------------------------------------------------------------------------    

// Kat executa mli kanbedlo type dial upload (ya file wla URL)"
// Télécharger une image": kayban input dial file upload
// Ila khtar "Entrer une URL": kayban input dial URL
document.addEventListener('DOMContentLoaded', function() {
    const imageInputType = document.getElementById('imageInputType');
    const fileContainer = document.getElementById('fileInputContainer');
    const urlContainer = document.getElementById('urlInputContainer');

    imageInputType.addEventListener('change', function() {
        if (this.value === 'file') {
            fileContainer.style.display = 'block';
            urlContainer.style.display = 'none';
        } else {
            fileContainer.style.display = 'none';
            urlContainer.style.display = 'block';
        }
    });
});

//------------------------------------------------------------------------------------------    

 // Kan handliw submit dyal form:
 document.querySelector('.player-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Créer un nouvel objet joueur avec les données du formulaire
    const newPlayer = {
        name: document.getElementById('playerName').value,
        position: document.getElementById('position').value,
        nationality: document.getElementById('nationality').value,
        flag: `https://cdn.sofifa.net/flags/${document.getElementById('nationality').value.toLowerCase()}.png`,
        club: document.getElementById('club').value,
        logo: `https://cdn.sofifa.com/teams/${document.getElementById('club').value.toLowerCase()}.png`,
        rating: document.getElementById('rating').value,
    };

    // Kan zido stats 7sab position:
    if (newPlayer.position === 'GK') {
        newPlayer.diving = document.getElementById('diving').value;
        newPlayer.handling = document.getElementById('handling').value;
        newPlayer.kicking = document.getElementById('kicking').value;
        newPlayer.reflexes = document.getElementById('reflexes').value;
        newPlayer.speed = document.getElementById('speed').value;
        newPlayer.positioning = document.getElementById('positioning').value;
    } else {
        newPlayer.pace = document.getElementById('pace').value;
        newPlayer.shooting = document.getElementById('shooting').value;
        newPlayer.passing = document.getElementById('passing').value;
        newPlayer.dribbling = document.getElementById('dribbling').value;
        newPlayer.defending = document.getElementById('defending').value;
        newPlayer.physical = document.getElementById('physical').value;
    }

    // Kan handliw photo dyal player:
    if (document.getElementById('imageInputType').value === 'file') {
        const file = document.getElementById('playerImage').files[0];
        newPlayer.photo = URL.createObjectURL(file);
    } else {
        newPlayer.photo = document.getElementById('playerImageUrl').value;
    }

    // Kan7afdo player f data:
    playersData.players.push(newPlayer);

    // Sauvegarder dans localStorage
    localStorage.setItem('players', JSON.stringify(playersData.players));

    // Kan créeyiw card dyal player:
    const card = document.createElement('div');
    card.className = 'card';
    
    let statsHTML = '';
    if (newPlayer.position === 'GK') {
        statsHTML = `
            <div class="stat"><span>${newPlayer.diving}</span></div>
            <div class="stat"><span>${newPlayer.handling}</span></div>
            <div class="stat"><span>${newPlayer.kicking}</span></div>
            <div class="stat"><span>${newPlayer.reflexes}</span></div>
            <div class="stat"><span>${newPlayer.speed}</span></div>
            <div class="stat"><span>${newPlayer.positioning}</span></div>
        `;
    } else {
        statsHTML = `
            <div class="stat"><span>${newPlayer.pace}</span></div>
            <div class="stat"><span>${newPlayer.shooting}</span></div>
            <div class="stat"><span>${newPlayer.passing}</span></div>
            <div class="stat"><span>${newPlayer.dribbling}</span></div>
            <div class="stat"><span>${newPlayer.defending}</span></div>
            <div class="stat"><span>${newPlayer.physical}</span></div>
        `;
    }

    card.innerHTML = `
        <div class="top-section">
            <div class="rating-position">
                <div class="rating">${newPlayer.rating}</div>
                <div class="position">${newPlayer.position}</div>
            </div>
            <div class="nationality">
                <img src="${newPlayer.flag}" class="flag" alt="Flag">
                <img src="${newPlayer.logo}" class="club-logo" alt="Club">
            </div>
        </div>
        <img src="${newPlayer.photo}" class="player-img" alt="${newPlayer.name}">
        <div class="player-name">${newPlayer.name}</div>
        <div class="statt"><p>PAC  SHO PAS DRI DEF PHY</p></div>
        <div class="stats">
            ${statsHTML}
        </div>
    `;

    // Kanzido card l page
    document.body.appendChild(card);

    // Kan resetiw form (kan7iydo values li kteb user)
    this.reset();
});
