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
        tips: "Pour éviter tout risque d'utilisation accidentelle, l'arme doit être transportée de manière à ne pas être prête à tirer : elle doit être désapprovisionnée, démontée, rangée dans une mallette/housse ou équipée d'un dispositif empêchant son usage immédiat.",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Les munitions peuvent-elle être transportées dans la même mallette que l'arme?",
        options: ['Oui', 'Non, mais dans une mallette à part'],
        correct: [0],
        numero: 2, // Numéro de la question
        tips: "Pour limiter les risques d'accident, les munitions doivent être transportées séparément de l'arme, dans une mallette distincte.",
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
        tips: "Pour maintenir la sécurité, le tireur doit d'abord amener la mallette (contenant l'arme sécurisée) au pas de tir, puis sortir l'arme dans un environnement contrôlé.",
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
        tips: "La sécurité de l'arme s'assure en retirant les munitions, en ouvrant la culasse ou en orientant le barillet de façon à montrer qu'il est vide, en vérifiant visuellement et physiquement l'absence de munitions et en plaçant un drapeau de sécurité dans la chambre. La méthode de démontage intégral n'est pas recommandée pour toutes les armes.",
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
        tips: "Une arme est dite approvisionnée lorsqu'elle contient des munitions, indépendamment de l'état de la culasse ou du chien.",
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
        tips: "Une arme prête à tirer est celle dont le simple fait d'actionner la détente permet de tirer immédiatement, ce qui implique qu'elle est non seulement approvisionnée mais aussi dans un état opérationnel sans dispositifs de blocage.",
        categorie: 'Sécurité',
        eliminatoire: false,
    },
    {
        question:
            'A priori, une arme doit-elle être considérée comme chargée ?',
        options: ['Oui', 'Non'],
        correct: [0],
        numero: 7, // Numéro de la question
        tips: "Par principe de sécurité, toute arme doit être considérée comme chargée jusqu'à preuve du contraire. Cela signifie qu'il faut toujours agir avec prudence et vérifier l'état de l'arme avant de la manipuler.",
        categorie: 'Sécurité',
        eliminatoire: true,
    },
    {
        question:
            "Est-il possible pour un tireur de diriger son arme vers quelqu'un ?",
        options: ['Oui', 'Non'],
        correct: [1],
        numero: 8, // Numéro de la question
        tips: "Il est formellement interdit de diriger une arme vers une personne, même si elle est vide. La sécurité prime toujours et il faut éviter tout risque d'accident.",
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
        tips: 'Les simulacres de visée avec une arme, même vide, ne sont autorisés que dans des zones sécurisées et prévues à cet effet, comme le pas de tir ou les cibles, et jamais vers une personne. En dehors des stands, ces pratiques sont interdites.',
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
        tips: "Même lors d'une pause, si l'arme est chargée, le tireur doit toujours la mettre en sécurité pour éviter tout risque d'accident. Cela implique de retirer les munitions et de s'assurer que l'arme ne peut pas être utilisée accidentellement.",
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
        tips: "Pour être en sécurité, un tireur doit éviter de manipuler son arme lorsque d'autres tireurs sont aux cibles. Il doit laisser son arme en sécurité et ne pas toucher à celle-ci pour prévenir tout risque d'accident.",
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
        tips: "Le port de lunettes est recommandé pour la sécurité et la performance dans toutes les disciplines, mais il est obligatoire uniquement dans certaines disciplines où la réglementation l'exige.",
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
        tips: "En cas d'incident, le tireur doit immédiatement mettre son arme en sécurité  et, si besoin, demander l'aide d'un responsable sans quitter le poste. Les réparations doivent se faire dans une zone contrôlée, comme le pas de tir orienté vers les cibles, et non dans l'arrière-stand.",
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
        tips: "Pour les armes soumises à autorisation, la loi impose un stockage sécurisé dans un coffre-fort, une armoire forte ou une pièce forte, et les munitions doivent y être rangées également. Le stockage dans une simple mallette n'est pas suffisant.",
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
        tips: "Pour une arme soumise à déclaration, le stockage sécurisé peut être réalisé en l'entreposant dans un coffre-fort ou une armoire forte, en démontant une pièce essentielle pour la rendre inutilisable, ou en utilisant un dispositif empêchant son enlèvement. Le rangement dans une mallette ne répond pas aux exigences de sécurité requises.",
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
        tips: "L'action du lâcher consiste à relâcher la queue de détente afin de déclencher le coup",
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
        tips: "Un mauvais lâcher peut déstabiliser l'arme, ce qui compromet la précision du tir et conduit à manquer la cible.",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            'Quels éléments faut-il aligner pour une réaliser une visée correcte ?',
        options: ['Le guidon', "L'oeil", 'Le cran de mire', 'La cible'],
        correct: [0, 1, 2, 3],
        numero: 18, // Numéro de la question
        tips: "Une visée correcte requiert l'alignement précis de plusieurs éléments : le guidon (ou hausse), l’œil du tireur, le cran de mire et la cible. Tout désalignement peut compromettre la précision.",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            "Faute pour l'oeil de voir net simultanément à différentes distances, quel's) éléments(s) faut-il voir de façon nette ?",
        options: ['Le visuel de la cible', 'La ligne de mire'],
        correct: [1],
        numero: 19, // Numéro de la question
        tips: "L’œil humain ne peut focaliser sur plusieurs distances en même temps. Il est donc primordial d'avoir une ligne de mire nette pour assurer la précision, même si la cible apparaît en arrière-plan.",
        categorie: 'Connaissance technique',
        eliminatoire: false,
    },
    {
        question:
            'Pour tirer plus à droite, dans quelle direction faut-il déplacer la hausse ?',
        options: ['A gauche', 'A droite'],
        correct: [1],
        numero: 20, // Numéro de la question
        tips: "Pour corriger une trajectoire trop à gauche, il faut déplacer la hausse vers la droite, ce qui déplace le point d'impact vers la droite.",
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
