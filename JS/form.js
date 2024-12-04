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

// Kan zido had l-function li ghadi tcrééyi w taffichi modal:
function showPlayerAddedModal(newPlayer) {
    const modal = document.createElement('div');
    modal.className = 'players-modal';
    
    // Kan7dedo stats li ghadi nwriw 7sab position
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

    // Kanbniw HTML dial modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="players-grid">
                <div class="player-card">
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
                    <div class="statt"><p>PAC SHO PAS DRI DEF PHY</p></div>
                    <div class="stats">
                        ${statsHTML}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Kanzido modal l page
    document.body.appendChild(modal);

    // Kan handliw click 3la button X
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
}

// Kan modifiw l-event listener dial form submit:
document.querySelector('.player-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validation smiya (code li kan)
    const playerName = document.getElementById('playerName').value;
    const nameRegex = /^[a-zA-Z\s]{2,25}$/;
    
    if (!nameRegex.test(playerName)) {
        alert("L'smiya khasha tkon:\n- Ghir 7rof (bla ar9am wla caractères spéciaux)\n- Bin 2 w 25 caractères\n- Maximum espace wa7d bin lkalimat");
        return;
    }


    // Kan checkyiw bch maykunch ktar mn espace wa7d
    if (playerName.includes('  ')) {
        alert("L'smiya maymknch tkon fiha ktar mn espace wa7d bin lkalimat");
        return;
    }

    // Validation stats dial goalkeeper
    if (document.getElementById('position').value === 'GK') {
        const gkStats = ['diving', 'handling', 'kicking', 'reflexes', 'speed', 'positioning'];
        
        for (const stat of gkStats) {
            const value = parseInt(document.getElementById(stat).value);
            if (isNaN(value) || value < 1 || value > 99) {
                alert(`Stats dial goalkeeper khasshom ykono bin 1 w 99.\nL'stat '${stat}' machi valid.`);
                return;
            }
        }
    }

    // Kan kmlo b code l9dim
    const newPlayer = {
        name: playerName,
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

    // Kan resetiw form (kan7iydo values li kteb user)
    this.reset();
});

