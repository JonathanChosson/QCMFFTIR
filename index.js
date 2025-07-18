const questions = [
    {
        question:
            'Comment doit-on transporter une arme lors du déplacement entre son domicile et le stand de tir ?',
        options: [
            'Désapprovisionnée',
            'Soit démontée',
            'Dans une mallette ou une housse',
            "Soit munie d'un dispositif rendant son utilisation immédiate impossible",
            'Dans un holster',
            'Sur soi',
            'Chargée',
        ],
        correct: [0, 1, 2, 3],
        numero: 1, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Les munitions peuvent-elle être transportées dans la même mallette que l'arme?",
        options: ['Oui', 'Non, mais dans une mallette à part'],
        correct: [0],
        numero: 2, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question: 'Arrivé au stand le tireur :',
        options: [
            "Sort l'arme de la mallette et l'apporte au pas de tir ?",
            "Apporte la mallette au pas de tir avant de sortir l'arme ?",
        ],
        correct: [1],
        numero: 3, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question: 'Comment met-on son arme en sécurité',
        options: [
            'En démontant la culasse ou le barillet',
            'En ôtant le chargeur et les munitions',
            'En ouvrant la culasse ou en basculant le barillet vidé',
            'En contrôlant visuellement et physiquement l’absence de munitions',
            'En mettant dans la chambre un drapeau de sécurité',
        ],
        correct: [1, 2, 3, 4],
        numero: 4, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question: "Qu'appelle-t-on une arme approvisionnée ?",
        options: [
            'Une arme qui contiens des munitions',
            'Une arme qui a la culasse fermée',
            'Une arme qui as le chien armé',
        ],
        correct: [0],
        numero: 5, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question: "Qu'appelle-t-on une arme prête à tirer ?",
        options: [
            'Une arme approvisionnée',
            'Une arme dont la culasse est fermée',
            'Une arme dont toute action sur la queue de détente fait partir le coup',
        ],
        correct: [2],
        numero: 6, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question:
            'A priori, une arme doit-elle être considérée comme chargée ?',
        options: ['Oui', 'Non'],
        correct: [0],
        numero: 7, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Est-il possible pour un tireur de diriger son arme vers quelqu'un ?",
        options: ['Oui', 'Non'],
        correct: [1],
        numero: 8, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            'Un tireur est-il autorisé à faire des simulacres de visée avec une arme, même vide ?',
        options: [
            "Vers quelqu'un",
            'Dans un endroit prévu à cet effet',
            "En direction du pas de tir ou des cibles, lorsqu'il n'y a personne",
            'En dehors des stands',
        ],
        correct: [1, 2],
        numero: 9, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Un tireur arrête un instant de tirer, pour se reposer assis en arrière du pas de tir, l'arme étant chargée, que doit-il faire ?",
        options: [
            'Mettre son arme en sécurité',
            "Démonter l'arme",
            "Laissé l'arme chargée sur le pas de tir",
        ],
        correct: [0],
        numero: 10, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Pendants que d'autres tireurs sont aux cibles, qu'a le droit de faire un tireur resté au pas de tir ?",
        options: [
            'Régler son arme',
            'Laissé le chargeur engagé',
            'Manipuler son arme',
            'Ne pas toucher à son arme',
        ],
        correct: [3],
        numero: 11, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question: 'Le port de lunettes est-il ?',
        options: [
            'Obligatoire dans toutes les disciplines',
            'Recommandé dans toutes les disciplines',
            'Obligatoire dans certaines disciplines',
        ],
        correct: [1, 2],
        numero: 12, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question: "Lorsque l'arme chargée a un incident, un tireur peut-il ?",
        options: [
            'Faire appel à un responsable du club sans quitter le poste de tir',
            'Réparer dans le stand en arrière du pas de tir',
            "Mettre l'arme en sécurité",
            "Réparer au pas de tir, le canon de l'arme face aux cibles ou la butte de tir",
        ],
        correct: [0, 2, 3],
        numero: 13, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question:
            'Un tireur possède une arme soumise à autorisation de détention. Comment doit-il la stocker à son domicile ?',
        options: [
            "L'entreposer dans un coffre-fort ou une armoire forte ou une pièce forte",
            'La ranger assurée dans une malette fermée à clef',
            "Stocket les munitions de l'arme soumise à autorisation dans le même coffre-fort, armoire-forte ou pièce forte",
        ],
        correct: [0, 3],
        numero: 14, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            'Un tireur possède une arme soumise à déclaration ou enregistrement, comment doit-il la stocker à son domicile ? (3 possibilités)',
        options: [
            'La ranger assurée dans une mallette fermant à clé',
            "L'entreposer dans un coffre-fort ou une armoire forte",
            "Démonter une pièce essentielle de l'arme la rendant inutilisable",
            "Utiliser un dispositif empêchant l'enlèvement de l'arme",
        ],
        correct: [1, 2, 3],
        numero: 15, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question: "En quoi consiste l'action du lâcher ? ",
        options: [
            'Appuyer sur la queue de détente',
            'Poser son arme sur la table de tir',
        ],
        correct: [0],
        numero: 16, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question: "Quelles sont les conséquences d'un mauvais lâcher ?",
        options: [
            "Enrayer l'arme",
            "Destabilisation de l'arme",
            'Ne pas atteindre le point visé',
        ],
        correct: [1, 2],
        numero: 17, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            'Quels éléments faut-il aligner pour une réaliser une visée correcte ?',
        options: ['Le guidon', "L'oeil", 'Le cran de mire', 'La cible'],
        correct: [0, 1, 2, 3],
        numero: 18, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            "Faute pour l'oeil de voir net simultanément à différentes distances, quel's) éléments(s) faut-il voir de façon nette ?",
        options: ['Le visuel de la cible', 'La ligne de mire'],
        correct: [1],
        numero: 19, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            'Pour tirer plus à droite, dans quelle direction faut-il déplacer la hausse ?',
        options: ['A gauche', 'A droite'],
        correct: [1],
        numero: 20, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
]

let currentQuestion = 0
let score = 0
let erreurs = []
let erreursEliminatoires = []

const questionEl = document.getElementById('question')
const categorieEl = document.getElementById('categorie')
const numEl = document.getElementById('num')
const answersEl = document.getElementById('answers')
const nextBtn = document.getElementById('next-btn')
const resultEl = document.getElementById('result')
const restartBtn = document.getElementById('restart-btn')
const progressBar = document.getElementById('progress-bar')

function showQuestion() {
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`
    const q = questions[currentQuestion]
    questionEl.textContent = q.question
    numEl.textContent = 'Question n°' + q.numero + '/' + questions.length
    categorieEl.textContent = q.categorie
    answersEl.innerHTML = ''

    q.options.forEach((option, index) => {
        const label = document.createElement('label')
        const input = document.createElement('input')
        input.type = 'checkbox'
        input.name = 'answer'
        input.value = index
        label.appendChild(input)
        label.append(' ' + option)
        answersEl.appendChild(label)
    })
}

function arraysEqual(arr1, arr2) {
    return (
        arr1.length === arr2.length &&
        arr1.sort().every((val, i) => val === arr2.sort()[i])
    )
}

nextBtn.addEventListener('click', () => {
    const selected = Array.from(
        document.querySelectorAll('input[name="answer"]:checked')
    ).map((input) => parseInt(input.value))

    if (selected.length === 0) {
        alert('Choisissez au moins une réponse.')
        return
    }

    const correctAnswers = questions[currentQuestion].correct
    if (arraysEqual(selected, correctAnswers)) {
        score++
    } else {
        const current = questions[currentQuestion]

        erreurs.push({
            numero: current.numero,
            question: current.question,
            tips: current.tips,
        })

        if (current.eliminatoire) {
            erreursEliminatoires.push({
                numero: current.numero,
                question: current.question,
                tips: current.tips,
            })
        }
    }

    function showImpactEffect(callback) {
        const impact = document.getElementById('impact-effect')

        // Taille de la fenêtre
        const width = window.innerWidth
        const height = window.innerHeight

        // Position aléatoire (évite bords)
        const x = Math.random() * (width - 60) + 10
        const y = Math.random() * (height - 60) + 10

        // Positionne et montre l’image
        impact.style.left = `${x}px`
        impact.style.top = `${y}px`
        impact.style.display = 'block'

        // Optionnel : effet sonore ici

        // Cache l’image après un délai
        setTimeout(() => {
            impact.style.display = 'none'
            if (typeof callback === 'function') callback()
        }, 1000) // L’impact reste visible 300ms
    }

    currentQuestion++
    if (currentQuestion < questions.length) {
        showImpactEffect(() => {
            // Charge la question suivante après 1.5 seconde
            setTimeout(() => {
                showQuestion() // Remplace par ta vraie fonction
            }, 1100)
        })
    } else {
        questionEl.style.display = 'none'
        numEl.style.display = 'none'
        categorieEl.style.display = 'none'
        answersEl.style.display = 'none'
        nextBtn.style.display = 'none'
        restartBtn.style.display = 'inline-block'
        resultEl.style.display = 'inline-block'
        progressBar.style.display = 'none'
        resultEl.innerHTML = `<p><strong>Score :</strong> ${score} / ${questions.length}</p>`

        if (erreurs.length > 0) {
            resultEl.innerHTML += `<h3>Commentaires :</h3>`
            erreurs.forEach((e) => {
                resultEl.innerHTML += `<li><strong>❌ Question ${e.numero} :</strong> ${e.tips}</li>`
            })
            if (erreursEliminatoires.length > 0) {
                resultEl.innerHTML += `
                    <h3>⚠️ Questions éliminatoires échouées </h3>
                    <p style="color:red;"><strong>Malgré ton score de ${score}/${questions.length}, tu as échoué à ${erreursEliminatoires.length} question(s) éliminatoire(s).</strong></p>
                `
            } else {
                resultEl.innerHTML += `<p style="color:green;"><strong>✅ Aucune erreur éliminatoire. Bravo !</strong></p>`
            }
        }
    }
})

restartBtn.addEventListener('click', () => {
    // Réinitialisation
    currentQuestion = 0
    score = 0
    erreurs = []
    erreursEliminatoires = []
    resultEl.textContent = ''
    questionEl.style.display = 'block'
    answersEl.style.display = 'block'
    nextBtn.style.display = 'inline-block'
    restartBtn.style.display = 'none'
    numEl.style.display = 'block'
    categorieEl.style.display = 'block'
    progressBar.style.display = 'block'
    progressBar.style.width = `0%`
    resultEl.style.display = 'none'
    showQuestion()
})

showQuestion()
