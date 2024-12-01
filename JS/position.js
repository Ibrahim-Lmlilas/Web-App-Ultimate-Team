const formationPositions = {
    '4-3-3': {
        attackers: [
            {x: 660, y: 80},   // Attaquant droit
            {x: 380, y: 5},    // Attaquant centre
            {x: 95, y: 80}     // Attaquant gauche
        ],
        midfielders: [
            {x: 540, y: 180},  // Milieu droit
            {x: 380, y: 200},  // Milieu centre
            {x: 220, y: 180}   // Milieu gauche
        ],
        defenders: [
            {x: 680, y: 300},  // Défenseur droit
            {x: 480, y: 330},  // Défenseur centre-droit
            {x: 280, y: 330},  // Défenseur centre-gauche
            {x: 60, y: 300}    // Défenseur gauche
        ],
        goalkeeper: {x: 380, y: 480}
    },
    '4-4-2': {
        attackers: [
            {x: 480, y: 20},   // Attaquant droit
            {x: 280, y: 20}    // Attaquant gauche
        ],
        midfielders: [
            {x: 660, y: 140},  // Milieu droit
            {x: 480, y: 180},  // Milieu centre-droit
            {x: 280, y: 180},  // Milieu centre-gauche
            {x: 95, y: 140}    // Milieu gauche
        ],
        defenders: [
            {x: 680, y: 300},  // Défenseur droit
            {x: 480, y: 345},  // Défenseur centre-droit
            {x: 280, y: 345},  // Défenseur centre-gauche
            {x: 60, y: 300}    // Défenseur gauche
        ],
        goalkeeper: {x: 380, y: 480}
    },
    '3-5-2': {
        attackers: [
            {x: 480, y: 20},   // Attaquant droit
            {x: 280, y: 20}    // Attaquant gauche
        ],
        midfielders: [
            {x: 660, y: 140},  // Milieu droit
            {x: 520, y: 180},  // Milieu centre-droit
            {x: 380, y: 160},  // Milieu centre
            {x: 240, y: 180},  // Milieu centre-gauche
            {x: 95, y: 140}    // Milieu gauche
        ],
        defenders: [
            {x: 580, y: 330},  // Défenseur droit
            {x: 380, y: 320},  // Défenseur centre
            {x: 180, y: 330}   // Défenseur gauche
        ],
        goalkeeper: {x: 380, y: 480}
    }
};

// Assurez-vous que ces données sont disponibles
const playersData = {
    
        "players": [
          {
            "name": "Lionel Messi",
            "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
            "position": "RW",
            "nationality": "Argentina",
            "flag": "https://cdn.sofifa.net/flags/ar.png",
            "club": "Inter Miami",
            "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
            "rating": 93,
            "pace": 85,
            "shooting": 92,
            "passing": 91,
            "dribbling": 95,
            "defending": 35,
            "physical": 65
          },
          {
            "name": "Cristiano Ronaldo",
            "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
            "position": "ST",
            "nationality": "Portugal",
            "flag": "https://cdn.sofifa.net/flags/pt.png",
            "club": "Al Nassr",
            "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
            "rating": 91,
            "pace": 84,
            "shooting": 94,
            "passing": 82,
            "dribbling": 87,
            "defending": 34,
            "physical": 77
          },
          {
            "name": "Kevin De Bruyne",
            "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
            "position": "CM",
            "nationality": "Belgium",
            "flag": "https://cdn.sofifa.net/flags/be.png",
            "club": "Manchester City",
            "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
            "rating": 91,
            "pace": 74,
            "shooting": 86,
            "passing": 93,
            "dribbling": 88,
            "defending": 64,
            "physical": 78
          },
          {
            "name": "Kylian Mbappé",
            "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
            "position": "ST",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 92,
            "pace": 97,
            "shooting": 89,
            "passing": 80,
            "dribbling": 92,
            "defending": 39,
            "physical": 77
          },
          {
            "name": "Virgil van Dijk",
            "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
            "position": "CB",
            "nationality": "Netherlands",
            "flag": "https://cdn.sofifa.net/flags/nl.png",
            "club": "Liverpool",
            "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
            "rating": 90,
            "pace": 75,
            "shooting": 60,
            "passing": 70,
            "dribbling": 72,
            "defending": 92,
            "physical": 86
          },
          {
            "name": "Antonio Rudiger",
            "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
            "position": "CB",
            "nationality": "Germany",
            "flag": "https://cdn.sofifa.net/flags/de.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 88,
            "pace": 82,
            "shooting": 55,
            "passing": 73,
            "dribbling": 70,
            "defending": 86,
            "physical": 86
          },
          {
            "name": "Neymar Jr",
            "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
            "position": "LW",
            "nationality": "Brazil",
            "flag": "https://cdn.sofifa.net/flags/br.png",
            "club": "Al-Hilal",
            "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
            "rating": 90,
            "pace": 91,
            "shooting": 83,
            "passing": 86,
            "dribbling": 94,
            "defending": 37,
            "physical": 61
          },
          {
            "name": "Mohamed Salah",
            "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
            "position": "RW",
            "nationality": "Egypt",
            "flag": "https://cdn.sofifa.net/flags/eg.png",
            "club": "Liverpool",
            "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
            "rating": 89,
            "pace": 93,
            "shooting": 87,
            "passing": 81,
            "dribbling": 90,
            "defending": 45,
            "physical": 75
          },
          {
            "name": "Joshua Kimmich",
            "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
            "position": "CM",
            "nationality": "Germany",
            "flag": "https://cdn.sofifa.net/flags/de.png",
            "club": "Bayern Munich",
            "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
            "rating": 89,
            "pace": 70,
            "shooting": 75,
            "passing": 88,
            "dribbling": 84,
            "defending": 84,
            "physical": 81
          },
          {
            "name": "Jan Oblak",
            "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
            "position": "GK",
            "nationality": "Slovenia",
            "flag": "https://cdn.sofifa.net/flags/si.png",
            "club": "Atletico Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
            "rating": 91,
            "diving": 89,
            "handling": 90,
            "kicking": 78,
            "reflexes": 92,
            "speed": 50,
            "positioning": 88
          },
          {
            "name": "Luka Modrić",
            "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
            "position": "CM",
            "nationality": "Croatia",
            "flag": "https://cdn.sofifa.net/flags/hr.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 88,
            "pace": 74,
            "shooting": 78,
            "passing": 89,
            "dribbling": 90,
            "defending": 72,
            "physical": 65
          },
          {
            "name": "Vinicius Junior",
            "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
            "position": "LW",
            "nationality": "Brazil",
            "flag": "https://cdn.sofifa.net/flags/br.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 89,
            "pace": 91,
            "shooting": 88,
            "passing": 85,
            "dribbling": 94,
            "defending": 39,
            "physical": 61
          },
          {
            "name": "Brahim Diáz",
            "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
            "position": "LW",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 82,
            "pace": 85,
            "shooting": 74,
            "passing": 78,
            "dribbling": 85,
            "defending": 31,
            "physical": 56
          },
          {
            "name": "Karim Benzema",
            "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
            "position": "ST",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Al-Ittihad",
            "logo" :"https://cdn.sofifa.net/meta/team/476/120.png",
            "rating": 90,
            "pace": 77,
            "shooting": 90,
            "passing": 83,
            "dribbling": 88,
            "defending": 40,
            "physical": 78
          },
          {
            "name": "Erling Haaland",
            "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
            "position": "ST",
            "nationality": "Norway",
            "flag": "https://cdn.sofifa.net/flags/no.png",
            "club": "Manchester City",
            "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
            "rating": 91,
            "pace": 89,
            "shooting": 94,
            "passing": 65,
            "dribbling": 80,
            "defending": 45,
            "physical": 88
          },
          {
            "name": "N'Golo Kanté",
            "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
            "position": "CDM",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Al-Ittihad",
            "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
            "rating": 87,
            "pace": 77,
            "shooting": 66,
            "passing": 75,
            "dribbling": 82,
            "defending": 88,
            "physical": 82
          },
          {
            "name": "Alphonso Davies",
            "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
            "position": "LB",
            "nationality": "Canada",
            "flag": "https://cdn.sofifa.net/flags/ca.png",
            "club": "Bayern Munich",
            "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
            "rating": 84,
            "pace": 96,
            "shooting": 68,
            "passing": 77,
            "dribbling": 82,
            "defending": 76,
            "physical": 77
          },
          {
            "name": "Yassine Bounou",
            "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
            "position": "GK",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Al-Hilal",
            "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
            "rating": 84,
            "diving": 81,
            "handling": 82,
            "kicking": 77,
            "reflexes": 86,
            "speed": 38,
            "positioning": 83
          },
          {
            "name": "Bruno Fernandes",
            "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
            "position": "CM",
            "nationality": "Portugal",
            "flag": "https://cdn.sofifa.net/flags/pt.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 88,
            "pace": 75,
            "shooting": 85,
            "passing": 89,
            "dribbling": 84,
            "defending": 69,
            "physical": 77
          },
          {
            "name": "Jadon Sancho",
            "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
            "position": "LW",
            "nationality": "England",
            "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 84,
            "pace": 85,
            "shooting": 74,
            "passing": 78,
            "dribbling": 88,
            "defending": 34,
            "physical": 63
          },
          {
            "name": "Trent Alexander-Arnold",
            "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
            "position": "RB",
            "nationality": "England",
            "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
            "club": "Liverpool",
            "rating": 87,
            "pace": 76,
            "shooting": 66,
            "passing": 89,
            "dribbling": 80,
            "defending": 79,
            "physical": 71
          },
          {
            "name": "Achraf Hakimi",
            "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
            "position": "RB",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Paris Saint-Germain",
            "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
            "rating": 84,
            "pace": 91,
            "shooting": 76,
            "passing": 80,
            "dribbling": 80,
            "defending": 75,
            "physical": 78
          },
          {
            "name": "Youssef En-Nesyri",
            "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
            "position": "ST",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Fenerbahçe",
            "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
            "rating": 83,
            "pace": 82,
            "shooting": 82,
            "passing": 63,
            "dribbling": 77,
            "defending": 36,
            "physical": 80
          },
          {
            "name": "Noussair Mazraoui",
            "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
            "position": "LB",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 81,
            "pace": 78,
            "shooting": 66,
            "passing": 77,
            "dribbling": 83,
            "defending": 77,
            "physical": 71
          },
          {
            "name": "Ismael Saibari",
            "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
            "position": "CM",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "PSV",
            "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
            "rating": 83,
            "pace": 89,
            "shooting": 78,
            "passing": 80,
            "dribbling": 86,
            "defending": 55,
            "physical": 84
          },
          {
            "name": "Gianluigi Donnarumma",
            "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
            "position": "GK",
            "nationality": "Italy",
            "flag": "https://cdn.sofifa.net/flags/it.png",
            "club": "Paris Saint-Germain",
            "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
            "rating": 89,
            "diving": 88,
            "handling": 84,
            "kicking": 75,
            "reflexes": 90,
            "speed": 50,
            "positioning": 85
          }
        ]
      }
      
;

// Au début du fichier, récupérer les joueurs du localStorage
const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const formationSelect = document.getElementById('formation');
    const svg = document.querySelector('svg');
    
    function updateFormation(formation) {
        const positions = formationPositions[formation];
        if (!positions) return;

        let existingCards = svg.querySelectorAll('image');
        
        // Si c'est la première fois, créer les cartes
        if (existingCards.length === 0) {
            // Créer toutes les cartes nécessaires
            function createCard(x, y) {
                const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
                image.setAttribute('href', 'img/');
                image.setAttribute('x', x);
                image.setAttribute('y', y);
                image.setAttribute('width', '150');
                image.setAttribute('height', '175');
                // Ajouter une classe pour l'animation
                image.style.opacity = '0';
                return image;
            }

            // Gardien
            svg.appendChild(createCard(positions.goalkeeper.x, positions.goalkeeper.y));

            // Défenseurs
            positions.defenders.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            });

            // Milieux
            positions.midfielders.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            });

            // Attaquants
            positions.attackers.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            });

            // Récupérer toutes les cartes créées
            existingCards = svg.querySelectorAll('image');
            
            // Animation d'apparition
            setTimeout(() => {
                existingCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transition = 'opacity 0.5s ease-in-out';
                });
            }, 100);
        }

        // Convertir les positions en tableau pour faciliter l'animation
        const allPositions = [
            positions.goalkeeper,
            ...positions.defenders,
            ...positions.midfielders,
            ...positions.attackers
        ];

        // Animer chaque carte vers sa nouvelle position
        existingCards.forEach((card, index) => {
            if (allPositions[index]) {
                // Ajouter une animation aléatoire légèrement différente pour chaque carte
                const delay = Math.random() * 0.2;
                card.style.transition = `all 0.5s ease-in-out ${delay}s`;
                
                // Animer vers la nouvelle position
                card.setAttribute('x', allPositions[index].x);
                card.setAttribute('y', allPositions[index].y);
            }
        });
    }

    // Écouter les changements de formation
    formationSelect.addEventListener('change', function() {
        // Ajouter une classe pour désactiver temporairement le hover pendant l'animation
        svg.classList.add('transitioning');
        
        updateFormation(this.value);
        
        // Réactiver le hover après l'animation
        setTimeout(() => {
            svg.classList.remove('transitioning');
        }, 800);
    });

    // Initialiser avec la formation par défaut
    updateFormation(formationSelect.value);

    // Code existant pour charger les cartes dans .subs-row
    
    // Sélectionner toutes les images dans le SVG
    const positionImages = document.querySelectorAll('svg image');
    
    // Déboguer pour vérifier si les images sont trouvées
    console.log('Positions trouvées:', positionImages.length);

    positionImages.forEach(position => {
        position.addEventListener('click', function() {
            const playersList = document.createElement('div');
            playersList.className = 'players-modal';
            
            // Déterminer la position actuelle basée sur l'emplacement de l'image dans le SVG
            let currentPosition;
            const y = parseInt(this.getAttribute('y'));
            if (y >= 480) {
                currentPosition = 'GK';
            } else if (y >= 300) {
                currentPosition = ['CB', 'LB', 'RB'];
            } else if (y >= 140) {
                currentPosition = ['CM', 'CDM'];
            } else {
                currentPosition = ['ST', 'LW', 'RW','ATT'];
            }

            // Filtrer les joueurs par position
            const filteredPlayers = savedPlayers.filter(player => {
                if (Array.isArray(currentPosition)) {
                    return currentPosition.includes(player.position);
                }
                return player.position === currentPosition;
            });

            // Filtrer les joueurs qui ne sont pas déjà sur le terrain
            const usedPlayers = Array.from(positionImages)
                .map(img => img.getAttribute('data-player-name'))
                .filter(name => name);
                
            const availablePlayers = filteredPlayers.filter(player => 
                !usedPlayers.includes(player.name)
            );

            let playersHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="players-grid">
            `;
            
            // Utiliser availablePlayers au lieu de savedPlayers
            availablePlayers.forEach(player => {
                // Définir les stats en fonction de la position
                let statsHTML = '';
                if (player.position === 'GK') {
                    statsHTML = `
                        <div class="stat">
                            <span>${player.diving}</span>
                        </div>
                        <div class="stat">
                            <span>${player.handling}</span>
                        </div>
                        <div class="stat">
                            <span>${player.kicking}</span>
                        </div>
                        <div class="stat">
                            <span>${player.reflexes}</span>
                        </div>
                        <div class="stat">
                            <span>${player.speed}</span>
                        </div>
                        <div class="stat">
                            <span>${player.positioning}</span>
                        </div>
                    `;
                } else {
                    statsHTML = `
                        <div class="stat">
                            <span>${player.pace}</span>
                        </div>
                        <div class="stat">
                            <span>${player.dribbling}</span>
                        </div>
                        <div class="stat">
                            <span>${player.shooting}</span>
                        </div>
                        <div class="stat">
                            <span>${player.defending}</span>
                        </div>
                        <div class="stat">
                            <span>${player.passing}</span>
                        </div>
                        <div class="stat">
                            <span>${player.physical}</span>
                        </div>
                    `;
                }

                playersHTML += `
                    <div class="player-card" data-player-id="${player.name}">
                        <div class="top-section">
                            <div class="rating-position">
                                <div class="rating">${player.rating}</div>
                                <div class="position">${player.position}</div>
                            </div>
                            <div class="nationality">
                                <img src="${player.flag}" class="flag" alt="Flag">
                                <img src="${player.logo}" class="club-logo" alt="Club">
                            </div>
                        </div>
                        <img src="${player.photo}" class="player-img" alt="${player.name}">
                        <div class="player-name">${player.name}</div>
                        <div class="statt"><p>PAC SHO PAS DRI DEF PHY</p></div>
                        <div class="stats">
                            ${statsHTML}
                        </div>
                    </div>
                `;
            });
            
            playersHTML += `
                    </div>
                </div>
            `;
            
            playersList.innerHTML = playersHTML;
            document.body.appendChild(playersList);
            
            // Gérer la fermeture de la modal
            const closeBtn = playersList.querySelector('.close-modal');
            closeBtn.onclick = function() {
                playersList.remove();
            };
            
            // Mise à jour de la gestion du clic sur une carte
            playersList.querySelectorAll('.player-card').forEach(card => {
                card.onclick = function() {
                    const selectedPlayer = savedPlayers.find(p => p.name === card.dataset.playerId);
                    position.setAttribute('href', selectedPlayer.photo);
                    // Stocker le nom du joueur sélectionné sur l'élément
                    position.setAttribute('data-player-name', selectedPlayer.name);
                    playersList.remove();
                };
            });
        });
        
        // Ajouter les événements hover
        position.addEventListener('mouseenter', function(e) {
            if (this.infoCard) return;

            const playerName = this.getAttribute('data-player-name');
            if (!playerName) return;

            // Trouver le joueur dans les données
            const player = playersData.players.find(p => p.name === playerName);
            if (!player) return;

            const infoCard = document.createElement('div');
            infoCard.className = 'player-hover-info';
            
            // Créer le contenu de l'info-bulle
            let statsHTML = '';
            if (player.position === 'GK') {
                statsHTML = `
                    <div>DIV: ${player.diving}</div>
                    <div>HAN: ${player.handling}</div>
                    <div>KIC: ${player.kicking}</div>
                    <div>REF: ${player.reflexes}</div>
                    <div>SPE: ${player.speed}</div>
                    <div>POS: ${player.positioning}</div>
                `;
            } else {
                statsHTML = `
                    <div>PAC: ${player.pace}</div>
                    <div>SHO: ${player.shooting}</div>
                    <div>PAS: ${player.passing}</div>
                    <div>DRI: ${player.dribbling}</div>
                    <div>DEF: ${player.defending}</div>
                    <div>PHY: ${player.physical}</div>
                `;
            }

            infoCard.innerHTML = `
                <div class="hover-header">
                    <span class="hover-rating">${player.rating}</span>
                    <span class="hover-position">${player.position}</span>
                    <span class="hover-name">${player.name}</span>
                </div>
                <div class="hover-flags">
                    <img src="${player.flag}" alt="Flag">
                    <img src="${player.logo}" alt="Club">
                </div>
                <div class="hover-stats">
                    ${statsHTML}
                </div>
                <div class="hover-actions">
                    <button class="edit-btn">Éditer</button>
                    <button class="delete-btn">Supprimer</button>
                </div>
            `;

            // Positionner l'info-bulle
            const rect = this.getBoundingClientRect();
            infoCard.style.left = `${rect.right + 10}px`;
            infoCard.style.top = `${rect.top}px`;

            document.body.appendChild(infoCard);
            this.infoCard = infoCard;

            // Ajouter le gestionnaire d'événements pour le bouton d'édition
            const editBtn = infoCard.querySelector('.edit-btn');
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditForm(player);
                infoCard.remove();
            });

            // Ajouter le gestionnaire d'événements pour le bouton de suppression
            const deleteBtn = infoCard.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Réinitialiser l'image à la carte vide directement
                position.setAttribute('href', 'img/badge_gold.webp');
                // Supprimer la référence au joueur
                position.removeAttribute('data-player-name');

                // Afficher un message de succès
                const toast = document.createElement('div');
                toast.className = 'toast-notification';
                toast.textContent = 'Joueur supprimé avec succès';
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 2000);

                // Fermer l'info-bulle
                infoCard.remove();
            });

            // Ajouter mouseenter sur l'info-bulle pour la garder visible
            infoCard.addEventListener('mouseenter', () => {
                clearTimeout(this.leaveTimeout);
            });

            // Ajouter mouseleave sur l'info-bulle
            infoCard.addEventListener('mouseleave', (e) => {
                if (!this.contains(e.relatedTarget)) {
                    this.leaveTimeout = setTimeout(() => {
                        infoCard.remove();
                        this.infoCard = null;
                    }, 100);
                }
            });
        });
        
        position.addEventListener('mouseleave', function(e) {
            if (this.infoCard && !e.relatedTarget?.closest('.player-hover-info')) {
                this.leaveTimeout = setTimeout(() => {
                    if (this.infoCard) {
                        this.infoCard.remove();
                        this.infoCard = null;
                    }
                }, 100);
            }
        });
    });

    const imageInputType = document.getElementById('imageInputType');
    const fileInputContainer = document.getElementById('fileInputContainer');
    const urlInputContainer = document.getElementById('urlInputContainer');

    imageInputType.addEventListener('change', function() {
        if (this.value === 'file') {
            fileInputContainer.style.display = 'block';
            urlInputContainer.style.display = 'none';
        } else {
            fileInputContainer.style.display = 'none';
            urlInputContainer.style.display = 'block';
        }
    });

    // Modifier la partie du code qui gère la soumission du formulaire
    document.querySelector('.player-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Créer un nouvel objet joueur avec les données du formulaire
        const newPlayer = {
            name: document.getElementById('playerName').value,
            position: document.getElementById('position').value,
            nationality: document.getElementById('nationality').value,
            flag: `https://cdn.sofifa.net/flags/${document.getElementById('nationality').value.toLowerCase()}.png`,
            club: document.getElementById('club').value,
            logo: `clubs/${document.getElementById('club').value}.png`,
            rating: document.getElementById('rating').value,
        };

        // Ajouter les stats en fonction de la position
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

        // Gérer l'image du joueur
        if (document.getElementById('imageInputType').value === 'file') {
            const file = document.getElementById('playerImage').files[0];
            newPlayer.photo = URL.createObjectURL(file);
        } else {
            newPlayer.photo = document.getElementById('playerImageUrl').value;
        }

        // Ajouter le nouveau joueur au tableau existant
        playersData.players.push(newPlayer);

        // Sauvegarder dans localStorage
        localStorage.setItem('players', JSON.stringify(playersData.players));

        // Créer et ajouter la nouvelle carte
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

        // Ajouter la carte à la page PLyres.html
        document.body.appendChild(card);

        // Réinitialiser le formulaire
        this.reset();
    });

    // Ajouter un bouton de réinitialisation sur chaque position
    positionImages.forEach(position => {
        position.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // Empêcher le menu contextuel par défaut
            
            // Réinitialiser l'image à la carte vide
            position.setAttribute('href', 'img/CARTAXXX-removebg-preview.png');
            // Supprimer la référence au joueur
            position.removeAttribute('data-player-name');
        });
    });

    // Ajouter un gestionnaire d'événements global pour s'assurer que les info-bulles sont supprimées
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.player-hover-info') && !e.target.closest('svg image')) {
            const infoCards = document.querySelectorAll('.player-hover-info');
            infoCards.forEach(card => card.remove());
        }
    });
});

// Fonction pour créer la modal de sélection de joueur
function createPlayerSelectionModal() {
    const modal = document.createElement('div');
    modal.className = 'player-selection-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Sélectionner un joueur</h2>
            <div class="players-grid"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Fonction pour créer une carte de joueur
function createPlayerCard(player) {
    // ... code existant ...
}

// Ajouter cette fonction pour gérer l'édition
function openEditForm(player) {
    const editModal = document.createElement('div');
    editModal.className = 'edit-modal';
    
    let statsHTML = '';
    if (player.position === 'GK') {
        statsHTML = `
            <div class="stats-section">
                <h3>Statistiques du Gardien</h3>
                <div class="stats-grid">
                    <div class="input-group">
                        <label for="editDiving">DIV (Plongeon)</label>
                        <input type="number" id="editDiving" value="${player.diving}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editHandling">HAN (Prise de balle)</label>
                        <input type="number" id="editHandling" value="${player.handling}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editKicking">KIC (Dégagement)</label>
                        <input type="number" id="editKicking" value="${player.kicking}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editReflexes">REF (Réflexes)</label>
                        <input type="number" id="editReflexes" value="${player.reflexes}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editSpeed">SPE (Vitesse)</label>
                        <input type="number" id="editSpeed" value="${player.speed}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editPositioning">POS (Placement)</label>
                        <input type="number" id="editPositioning" value="${player.positioning}" min="1" max="99">
                    </div>
                </div>
            </div>
        `;
    } else {
        statsHTML = `
            <div class="stats-section">
                <h3>Statistiques du Joueur</h3>
                <div class="stats-grid">
                    <div class="input-group">
                        <label for="editPace">PAC (Vitesse)</label>
                        <input type="number" id="editPace" value="${player.pace}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editShooting">SHO (Tir)</label>
                        <input type="number" id="editShooting" value="${player.shooting}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editPassing">PAS (Passe)</label>
                        <input type="number" id="editPassing" value="${player.passing}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editDribbling">DRI (Dribble)</label>
                        <input type="number" id="editDribbling" value="${player.dribbling}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editDefending">DEF (Défense)</label>
                        <input type="number" id="editDefending" value="${player.defending}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <label for="editPhysical">PHY (Physique)</label>
                        <input type="number" id="editPhysical" value="${player.physical}" min="1" max="99">
                    </div>
                </div>
            </div>
        `;
    }

    editModal.innerHTML = `
        <div class="modal-content">
            <h2>Modifier les statistiques de ${player.name}</h2>
            <form class="edit-form">
                ${statsHTML}
                <div class="button-group">
                    <button type="submit" class="submit-btn">Sauvegarder</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(editModal);

    // Gérer la soumission
    const form = editModal.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        
        // Mettre à jour les stats
        if (player.position === 'GK') {
            player.diving = parseInt(document.getElementById('editDiving').value);
            player.handling = parseInt(document.getElementById('editHandling').value);
            player.kicking = parseInt(document.getElementById('editKicking').value);
            player.reflexes = parseInt(document.getElementById('editReflexes').value);
            player.speed = parseInt(document.getElementById('editSpeed').value);
            player.positioning = parseInt(document.getElementById('editPositioning').value);
        } else {
            player.pace = parseInt(document.getElementById('editPace').value);
            player.shooting = parseInt(document.getElementById('editShooting').value);
            player.passing = parseInt(document.getElementById('editPassing').value);
            player.dribbling = parseInt(document.getElementById('editDribbling').value);
            player.defending = parseInt(document.getElementById('editDefending').value);
            player.physical = parseInt(document.getElementById('editPhysical').value);
        }

        // Mettre à jour le localStorage
        localStorage.setItem('players', JSON.stringify(playersData.players));

        // Afficher un message de succès
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = 'Statistiques mises à jour avec succès';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);

        // Fermer la modal
        editModal.remove();
    };
}