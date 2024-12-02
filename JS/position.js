const formationPositions = {  
//hiya object li kay7tafed b les positions dyal kol formation f terrain. Kayn 3 formations: 
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

//savedPlayers: kayjbed les joueurs li t7afdo f localStorage 
const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];

// DOMContentLoaded: event listener li kaytsena 7ta yt7mel HTML kamlo. Mnin kayloadi
document.addEventListener('DOMContentLoaded', function() {

    // formationSelect: kayjbed l-element select li fih formations (4-3-3, 4-4-2, etc)
    const formationSelect = document.getElementById('formation');
    // svg: kayjbed l-terrain li ghadi nrsmo fih players
    const svg = document.querySelector('svg');
  //---------------------------------------------------------------------------------------  


    function updateFormation(formation) {
        // Khed l-formation li khtar l-user (4-3-3, 4-4-2, etc)
        const positions = formationPositions[formation];
        // Tjbed positions dyal had formation mn formationPositions li kyna f star 1
        if (!positions) return;
        // Tplacer players f positions s7i7a f terrain
        let existingCards = svg.querySelectorAll('image');     
//---------------------------------------------------   ----------------------------------------


        // Kan checkyiw wach l-terrain khawi (makaynch fih 7ta player)
        if (existingCards.length === 0) {
            function createCard(x, y) {
                // Hna kancrééiw element image jdid f SVG (terrain)
                const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
                
                // Hna kan configiriw l'image:
                image.setAttribute('href', 'img/'); // Hna fin kayn l'image li ghadi tban mli mazal makhtarnach player
                image.setAttribute('x', x);// Hna fin ghadi tkon l'image mn jiht limin/lisr
                image.setAttribute('y', y);// Hna fin ghadi tkon l'image mn jiht lfo9/lt7t
                image.setAttribute('width', '150');     
                image.setAttribute('height', '175');                    
                // Kan returniw had l'image bach nsta3mloha f updateFormation
                return image;
            }

            // Ila khawi:
            // Tzid gardien f position dyalo
            svg.appendChild(createCard(positions.goalkeeper.x, positions.goalkeeper.y));

            // Tzid defenders f positions dyalhom
            positions.defenders.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            });

            // Tzid milieux f positions dyalhom
            positions.midfielders.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            });

            // Tzid attaquants f positions dyalhom
            positions.attackers.forEach(pos => {
                svg.appendChild(createCard(pos.x, pos.y));
            }); 
          
        }
//------------------------------------------------------------------------------------------

        /// Kanjm3o ga3 positions (difa3 + milieu + lhjoum) f array wa7ed
        const allPositions = [  
            ...positions.defenders,
            ...positions.midfielders,
            ...positions.attackers
        ];

        // Kan7erko kol card l position jdida dyalha f terrain
        existingCards.forEach((card, index) => {
            if (allPositions[index]) {
                const delay = Math.random() * 0;
                card.style.transition = "0.35s";      
                // Kan7to l-card f position jdida (x,y)
                card.setAttribute('x', allPositions[index].x);
                card.setAttribute('y', allPositions[index].y);
            }
        });
    }
    //----------------------------------------------------------------------------------

   // Kantsanaw l-user ibedel formation f select box
    formationSelect.addEventListener('change', function() {
         // Kan7iydou hover effect mo2aqatan (bach maybanch hover mli players kay t7erko)
        svg.classList.add('transitioning');
            // Kanbedlo l-formation 7sab dakchi li khtar l-user
        updateFormation(this.value);
        
        // Mn be3d (0.8 seconde)
        // Kan3awdo nredou hover effect
        setTimeout(() => {
            svg.classList.remove('transitioning');
        }, 400);
    });

        // Kan initialisew b formation li kayna par défaut f select
        updateFormation(formationSelect.value);
//------------------------------------------------------------------------------------------

        // Kan selectiw ga3 images (players) li kaynin f terrain
        const positionImages = document.querySelectorAll('svg image');

        // Kan affichichiw f console 3adad dyal positions li l9ina
        console.log('Positions trouvées:', positionImages.length);

        // Kandiro event listener l kol position (image) f terrain
        positionImages.forEach(position => {
            
            // Mli user kiclick 3la chi position:
            position.addEventListener('click', function() {
                // Kan créeyiw div jdid bach ndiro fih modal
                const playersList = document.createElement('div');
                playersList.className = 'players-modal';


     //------------------------------------------------------------------------------------------
            
            // Kan7dedo position dyal player 7sab blasto f terrain
            let currentPosition;
            const y = parseInt(this.getAttribute('y'));

            // Kan7dedo type dyal player 7sab blasto f terrain (y coordinate)
            if (y >= 480) {
                currentPosition = 'GK';  // Gardien
            } else if (y >= 300) {
                currentPosition = ['CB', 'LB', 'RB'];  // Difa3
            } else if (y >= 140) {
                currentPosition = ['CM', 'CDM'];  // Milieu
            } else {
                currentPosition = ['ST', 'LW', 'RW','ATT'];  // Lhjoum
            }

            // Kan filtriw players 7sab position dyalhom
            const filteredPlayers = savedPlayers.filter(player => {
                if (Array.isArray(currentPosition)) {
                    return currentPosition.includes(player.position);
                }
                return player.position === currentPosition;
            });

            //---------------------------------------------------------------------------------------------

                // Kanjbdo players li déjà kaynin f terrain
                const usedPlayers = Array.from(positionImages)
                    .map(img => img.getAttribute('data-player-name'))
                    .filter(name => name);
                    
                // Kan7iydo players li déja kaynin f terrain mn lista
                const availablePlayers = filteredPlayers.filter(player => 
                    !usedPlayers.includes(player.name)
                );

                // Kanbdaw nbniw HTML dyal modal
                let playersHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <div class="players-grid">
                `;
            
           // Kandoro 3la kol player li disponible
            availablePlayers.forEach(player => {
                // Kan7dedo stats li ghadi nwriw 7sab position dyal player
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

                // Kanzido card dyal player l HTML dyal modal
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
            
            // Kansdo HTML dyal modal w kan affichichiwh
            playersHTML += `
                    </div>
                </div>
            `;

            // Kan7to HTML f modal
            playersList.innerHTML = playersHTML;

            // Kanzido modal l page
            document.body.appendChild(playersList);

            // Kan handliw click 3la bouton X bach nsedo modal
            const closeBtn = playersList.querySelector('.close-modal');
            closeBtn.onclick = function() {
                playersList.remove();  // Kan7iydo modal mn page
            };
            
            // Kan handliw click 3la card dyal player
            playersList.querySelectorAll('.player-card').forEach(card => {
                card.onclick = function() {
                     // Kanjbdo player li selected mn data
                    const selectedPlayer = savedPlayers.find(p => p.name === card.dataset.playerId);
                    // Kanbedlo image f terrain b photo dyal player
                    position.setAttribute('href', selectedPlayer.photo);
                     // Kan7tafdo b smiya dyal player li selected
                    position.setAttribute('data-player-name', selectedPlayer.name);
                    // Kansedo modal
                    playersList.remove();
                };
            });
        });
        //------------------------------------------------------------------------------------------


        // Kan handliw hover 3la player f terrain
        position.addEventListener('mouseenter', function(e) {
            // Ila kayna déjà info card, ma ndiro walou
            if (this.infoCard) return;  // Ila makaynch player, ma ndiro walou

             // Kanjbdo smiya dyal player
            const playerName = this.getAttribute('data-player-name');
            if (!playerName) return;

           // Kanjbdo player mn data
            const player = playersData.players.find(p => p.name === playerName);
            if (!player) return;

            // Kan créeyiw info card
            const infoCard = document.createElement('div');
            infoCard.className = 'player-hover-info';
            
            // Kan7dedo stats li ghadi nwriw 7sab position
            let statsHTML = '';
            if (player.position === 'GK') {
                // Stats dyal gardien
                statsHTML = `
                    <div>DIV: ${player.diving}</div>
                    <div>HAN: ${player.handling}</div>
                    <div>KIC: ${player.kicking}</div>
                    <div>REF: ${player.reflexes}</div>
                    <div>SPE: ${player.speed}</div>
                    <div>POS: ${player.positioning}</div>
                `;
            } else {
                // Stats dyal player 3adi
                statsHTML = `
                    <div>PAC: ${player.pace}</div>
                    <div>SHO: ${player.shooting}</div>
                    <div>PAS: ${player.passing}</div>
                    <div>DRI: ${player.dribbling}</div>
                    <div>DEF: ${player.defending}</div>
                    <div>PHY: ${player.physical}</div>
                `;
            }
                // Kanbniw HTML dyal info card
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

            // Kan7dedo position dyal info card li f hovar
            const rect = this.getBoundingClientRect();
            infoCard.style.left = `${rect.right + 10}px`; // 10px mn limin dyal player
            infoCard.style.top = `${rect.top}px`;         // Nfs l-height dyal player

            // Kanzido info card l page
            document.body.appendChild(infoCard);
            this.infoCard = infoCard;

            // Kan handliw click 3la button 'Éditer'
            const editBtn = infoCard.querySelector('.edit-btn');
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Bach ma yt9adch click l elements li t7t
                openEditForm(player); // Kan7lo form dyal modification
                infoCard.remove();  // Kan7iydo info card
            });

          // Kan handliw click 3la button 'Supprimer'
            const deleteBtn = infoCard.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Kan7iydo player mn terrain
                position.setAttribute('href', 'img/badge_gold.webp');  // Kan7to image par défaut
                position.removeAttribute('data-player-name'); // Kan7iydo smiya dyal player

                // Kanwriw message dyal succès
                const toast = document.createElement('div');
                toast.className = 'toast-notification';
                toast.textContent = 'Joueur supprime avec succes';
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 2000);  // Kan7iydo message mn be3d 2 seconds
                
                // Kansedo info card
                infoCard.remove();
            });
            //------------------------------------------------------------------------------------------

            // Kan handliw hover 3la info card
            infoCard.addEventListener('mouseenter', () => {
                // Kan7bso timeout bach info card tb9a visible
                clearTimeout(this.leaveTimeout);
            });

            // Kan handliw mouseleave mn info card
            infoCard.addEventListener('mouseleave', (e) => {
                 // Kanchofo wach l-souris mazal f player
                if (!this.contains(e.relatedTarget)) {
                     // Kan7to timeout bach n7iydo info card mn be3d 100ms
                    this.leaveTimeout = setTimeout(() => {
                        infoCard.remove();
                        this.infoCard = null;
                    }, 100);
                }
            });
        });

        // Kan handliw mouseleave mn player
        position.addEventListener('mouseleave', function(e) {
                // Kanchofo wach l-souris kharjat mn player w info card
            if (this.infoCard && !e.relatedTarget?.closest('.player-hover-info')) {
                // Kan7to timeout bach n7iydo info card mn be3d 100ms
                this.leaveTimeout = setTimeout(() => {
                    if (this.infoCard) {
                        this.infoCard.remove();
                        this.infoCard = null;
                    }
                }, 100);
            }
        });
    });
    //------------------------------------------------------------------------------------------
  

  
});

// Function li katjib l3ab l tiran
function createPlayerSelectionModal() {
     // Kan créeyiw div jdid (modal)
    let modal = document.createElement('div');
    modal.className = 'player-selection-modal';
      // Kanbniw HTML dyal modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Sélectionner un joueur</h2>
            <div class="players-grid"></div>
        </div>
    `;
    // Kanzido modal l page
    document.body.appendChild(modal);
   // Kan returniw modal bach nsta3mloha mn be3d
    return modal;
}



// Function bach n3dlo stats dyal player
function openEditForm(player) {
     // Kan créeyiw div jdid (modal)
    const editModal = document.createElement('div');    
    editModal.className = 'edit-modal';
    
    // Kan7dedo stats li ghadi nwriw 7sab position
    let statsHTML = '';
    if (player.position === 'GK') {
         // Form dyal gardien
        statsHTML = `
            <div class="stats-section">
                <h3>Statistiques du Gardien</h3>
                <div class="stats-grid">
                   <div class="input-group">

                        <label for="editDiving">rating</label>
                        <p>rating</p>
                        <input type="number" id="editrating" value="${player.rating}" min="1" max="99">
                    </div>
                    
                  
                    <div class="input-group">
                        <p>DIV (Plongeon)</p>
                        <label for="editDiving">DIV (Plongeon)</label>
                        <input type="number" id="editDiving" value="${player.diving}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>HAN (Prise de balle)</p>
                        <label for="editHandling">HAN (Prise de balle)</label>
                        <input type="number" id="editHandling" value="${player.handling}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>KIC (Dégagement)</p>
                        <label for="editKicking">KIC (Dégagement)</label>
                        <input type="number" id="editKicking" value="${player.kicking}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>REF (Réflexes)</p>
                        <label for="editReflexes">REF (Réflexes)</label>
                        <input type="number" id="editReflexes" value="${player.reflexes}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>SPE (Vitesse)</p>
                        <label for="editSpeed">SPE (Vitesse)</label>
                        <input type="number" id="editSpeed" value="${player.speed}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>POS (Placement)</p>
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
                        <p>rating</p>
                        <label for="editDiving">rating</label>
                        <input type="number" id="editrating" value="${player.rating}" min="1" max="99">
                    </div>
                     
                    <div class="input-group">
                            <p>PAC (Vitesse)</p>
                        <label for="editPace">PAC (Vitesse)</label>
                        <input type="number" id="editPace" value="${player.pace}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>SHO (Tir)</p>
                        <label for="editShooting">SHO (Tir)</label>
                        <input type="number" id="editShooting" value="${player.shooting}" min="1" max="99">
                    </div>
                    <div class="input-group">
                            <p>PAS (Passe)</p>
                        <label for="editPassing">PAS (Passe)</label>
                        <input type="number" id="editPassing" value="${player.passing}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>DRI (Dribble)</p>
                        <label for="editDribbling">DRI (Dribble)</label>
                        <input type="number" id="editDribbling" value="${player.dribbling}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>DEF (Défense)</p>
                        <label for="editDefending">DEF (Défense)</label>
                        <input type="number" id="editDefending" value="${player.defending}" min="1" max="99">
                    </div>
                    <div class="input-group">
                        <p>PHY (Physique)</p>
                        <label for="editPhysical">PHY (Physique)</label>
                        <input type="number" id="editPhysical" value="${player.physical}" min="1" max="99">
                    </div>
                </div>
            </div>
        `;
    }
    // Kanbniw HTML dyal modal
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
    // Kanzido modal l page
    document.body.appendChild(editModal);

    // Kan updatiw stats 7sab position
    const form = editModal.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        
        // Update stats dyal gardien
        if (player.position === 'GK') {
            player.diving = parseInt(document.getElementById('editDiving').value);
            player.handling = parseInt(document.getElementById('editHandling').value);
            player.kicking = parseInt(document.getElementById('editKicking').value);
            player.reflexes = parseInt(document.getElementById('editReflexes').value);
            player.speed = parseInt(document.getElementById('editSpeed').value);
            player.positioning = parseInt(document.getElementById('editPositioning').value);
            player.rating = parseInt(document.getElementById('editrating').value);
        } else {
             // Update stats dyal player 3adi
            player.pace = parseInt(document.getElementById('editPace').value);
            player.shooting = parseInt(document.getElementById('editShooting').value);
            player.passing = parseInt(document.getElementById('editPassing').value);
            player.dribbling = parseInt(document.getElementById('editDribbling').value);
            player.defending = parseInt(document.getElementById('editDefending').value);
            player.physical = parseInt(document.getElementById('editPhysical').value);
            player.rating = parseInt(document.getElementById('editrating').value);
        }

         // Kan7afdo f localStorage
        localStorage.setItem('players', JSON.stringify(playersData.players));

       // Kanwriw message dyal succès
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = 'Statistiques mises à jour avec succès';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);

        // Kansedo modal
        editModal.remove();
    };
}