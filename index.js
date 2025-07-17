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
        question: 'Quels sont les langages utilisés pour le web ?',
        options: ['HTML', 'Python', 'CSS', 'JavaScript'],
        correct: [0, 2, 3],
        numero: 3, // Numéro de la question
        tips: "Prase de commentaires affiché si reponse fausse à l'affichage des résultats",
        categorie: 'Sécurité',
    },
    // Ajoute ici les autres questions
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
