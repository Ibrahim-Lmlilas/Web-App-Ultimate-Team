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
                image.setAttribute('href', 'img/CARTAXXX-removebg-preview.png');
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
});