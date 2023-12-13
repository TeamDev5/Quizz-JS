const questions = [
    {
        question: "Qu'est-ce que JavaScript ?",
        choices: [
            "Un langage de programmation pour les serveurs",
            "Un langage de balisage pour structurer le contenu web",
            "Un langage de programmation pour rendre les pages web interactives",
            "Un logiciel de gestion de bases de données"
        ],
        correctAnswer: 2
    },
    {
        question: "Quel est le symbole utilisé pour les commentaires sur une seule ligne en JavaScript ?",
        choices: [
            "//",
            "/* */",
            "--",
            "#"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour afficher quelque chose dans la console ?",
        choices: [
            "console.display()",
            "print()",
            "console.log()",
            "show()"
        ],
        correctAnswer: 2
    },
    
    {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        choices: [
            "append()",
            "addToEnd()",
            "push()",
            "addElement()"
        ],
        correctAnswer: 2
    },
    
    {
        question: "Quel est l'opérateur de comparaison strict en JavaScript ?",
        choices: [
            "==",
            "===",
            "!=",
            "!=="
        ],
        correctAnswer: 1
    },
    {
        question: "Comment déclarer une variable en JavaScript ?",
        choices: [
            "let variableName;",
            "variable variableName;",
            "name = variableName;",
            "var variableName;"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour trier un tableau ?",
        choices: [
            "sort()",
            "order()",
            "arrange()",
            "organize()"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour extraire une sous-chaîne d'une chaîne de caractères ?",
        choices: [
            "substring()",
            "slice()",
            "substr()",
            "cut()"
        ],
        correctAnswer: 2
    },
    {
        question: "Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément HTML ?",
        choices: [
            "onhover",
            "onchange",
            "onclick",
            "onselect"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne en minuscules ?",
        choices: [
            "toLowerCase()",
            "toLower()",
            "lowerCase()",
            "convertToLower()"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle fonction JavaScript est utilisée pour arrondir un nombre à l'entier le plus proche ?",
        choices: [
            "ceil()",
            "round()",
            "floor()",
            "nearest()"
        ],
        correctAnswer: 1
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour trouver la position d'un élément dans un tableau ?",
        choices: [
            "findIndex()",
            "searchIndex()",
            "indexOf()",
            "getPosition()"
        ],
        correctAnswer: 2
    },
    {
        question: "Comment déclarer une fonction en JavaScript ?",
        choices: [
            "function = myFunction()",
            "myFunction() = function()",
            "function myFunction()",
            "declare function myFunction()"
        ],
        correctAnswer: 2
    },
    {
        question: "Quel événement JavaScript est déclenché lorsqu'un formulaire HTML est soumis ?",
        choices: [
            "onsubmit",
            "onchange",
            "oninput",
            "onclick"
        ],
        correctAnswer: 0
    },
    {
        question: "Quel symbole est utilisé pour représenter un commentaire sur plusieurs lignes en JavaScript ?",
        choices: [
            "/* */",
            "//",
            "#",
            "--"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle fonction JavaScript est utilisée pour parser une chaîne JSON en un objet JavaScript ?",
        choices: [
            "JSON.parse()",
            "parseJSON()",
            "stringify()",
            "fromJSON()"
        ],
        correctAnswer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour afficher une boîte de dialogue avec un message ?",
        choices: [
            "popup()",
            "alert()",
            "display()",
            "messageBox()"
        ],
        correctAnswer: 1
    },
    {
        question: "Quel est l'opérateur logique 'ET' en JavaScript ?",
        choices: [
            "&",
            "&&",
            "|",
            "||"
        ],
        correctAnswer: 1
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour remplacer du texte dans une chaîne ?",
        choices: [
            "replace()",
            "swap()",
            "change()",
            "modify()"
        ],
        correctAnswer: 0
    },
    {
        question: "Quel est l'opérateur logique 'OU' en JavaScript ?",
        choices: [
            "&",
            "&&",
            "|",
            "||"
        ],
        correctAnswer: 3
    },
];
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = "";

    if (current.image) {
        const imagesContainer = document.createElement("div"); // Créer un conteneur pour les images
        imagesContainer.className = "images-container"; // Ajouter une classe pour le conteneur
    
        const imageElement = document.createElement("img");
        imageElement.src = current.image;
    
        // Ajouter une classe aux images pour gérer leur style si nécessaire
        imageElement.className = "quiz-image";
    
        imagesContainer.appendChild(imageElement); // Ajouter l'image au conteneur
        choicesElement.appendChild(imagesContainer); // Ajouter le conteneur à l'élément des choix
    }


    current.choices.forEach((choice, index) => {
        const choiceElement = document.createElement("div");
        choiceElement.textContent = choice;
        choiceElement.className = "choice";
        choiceElement.addEventListener("mouseover", () => {
            choiceElement.classList.add("hovered-choice");
        });
        choiceElement.addEventListener("mouseout", () => {
            choiceElement.classList.remove("hovered-choice");
        });
        choiceElement.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceElement);
    });
}


function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
    } else {
        incorrectAnswers.push(currentQuestion);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    // Masquer les éléments de la question
    questionElement.style.display = "none";
    choicesElement.style.display = "none";

    // Création des éléments HTML pour les résultats
    const resultHeading = document.createElement('h1');
    resultHeading.textContent = 'Résultat :';

    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Score : ${score} sur ${questions.length}`;

    quizContainer.appendChild(resultHeading);
    quizContainer.appendChild(scoreParagraph);

    if (incorrectAnswers.length > 0) {
        const incorrectAnswersList = incorrectAnswers.map((index) => {
            return `${questions[index].question} : ${questions[index].choices[questions[index].correctAnswer]}`;
        });

        const incorrectAnswersHeading = document.createElement('h2');
        incorrectAnswersHeading.textContent = 'Réponses incorrectes :';

        const incorrectAnswersUL = document.createElement('ul');
        incorrectAnswersList.forEach(answerText => {
            const listItem = document.createElement('li');
            listItem.textContent = answerText;
            incorrectAnswersUL.appendChild(listItem);
        });

        quizContainer.appendChild(incorrectAnswersHeading);
        quizContainer.appendChild(incorrectAnswersUL);
    }
}

loadQuestion();