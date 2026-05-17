import { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";

// ─── AVATARS SVG ─────────────────────────────────────────────────────────────

function SuperpapaAvatar({ size = 120, animate = false }) {
  // T-pose image is wider (~0.84 ratio), use natural aspect with width as base
  return (
    <img src="/superpapa.png" alt="Superpapa973"
      style={{
        width: `${size * 1.2}px`,
        height: "auto",
        display: "block",
        objectFit: "contain",
        animation: animate ? "pulse 2.5s ease-in-out infinite" : "none"
      }}
    />
  );
}

function MathisAvatar({ size = 100, celebrating = false }) {
  return (
    <img src="/mathis.png" alt="Michi"
      style={{
        width: `${size}px`,
        height: "auto",
        display: "block",
        objectFit: "contain",
        animation: celebrating ? "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" : "none"
      }}
    />
  );
}

// ─── CURRICULUM ───────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1, icon: "🚀", color: "#4C9BE8",
    title: { fr: "Premiers Pas", en: "First Steps", es: "Primeros Pasos" },
    sub: { fr: "Heures 1-3 • Scripts, Variables, Fonctions", en: "Hours 1-3 • Scripts, Variables, Functions", es: "Horas 1-3 • Scripts, Variables, Funciones" },
    intro: {
      fr: "Howdy ! Je suis Superpapa973, ton guide. On commence par apprendre à parler à Roblox Studio !",
      en: "Howdy! I'm Superpapa973, your guide. Let's start by learning how to talk to Roblox Studio!",
      es: "¡Howdy! Soy Superpapa973, tu guía. ¡Empezamos aprendiendo a hablar con Roblox Studio!"
    },
    lessons: [
      {
        id: "1-1",
        title: { fr: "Ton premier script", en: "Your first script", es: "Tu primer script" },
        concept: { fr: "print() et commentaires", en: "print() and comments", es: "print() y comentarios" },
        superpapa: {
          fr: "Tout grand jeu a commencé par une seule ligne de code. La tienne commence aujourd'hui !",
          en: "Every great game started with a single line of code. Yours starts today!",
          es: "¡Todo gran juego empezó con una sola línea de código. El tuyo empieza hoy!"
        },
        explanation: {
          fr: "Un script, c'est une liste d'instructions que tu donnes à Roblox. Il les suit une par une, dans l'ordre ! La fonction print() affiche un message dans la fenêtre Output — c'est ton premier outil de développeur.",
          en: "A script is a list of instructions you give to Roblox. It follows them one by one, in order! The print() function shows a message in the Output window — it's your first developer tool.",
          es: "Un script es una lista de instrucciones que le das a Roblox. ¡Las sigue una por una, en orden! La función print() muestra un mensaje en la ventana Output — es tu primera herramienta de desarrollador."
        },
        tip: {
          fr: "Les lignes qui commencent par -- sont des commentaires. Roblox les ignore — c'est juste pour expliquer ton code !",
          en: "Lines starting with -- are comments. Roblox ignores them — they're just to explain your code!",
          es: "Las líneas que empiezan con -- son comentarios. ¡Roblox los ignora — solo sirven para explicar tu código!"
        },
        code: {
          fr: `-- Mon premier script Roblox !
-- Les commentaires expliquent le code

print("Hello world!")
print("My name is Michi")
print("I code in Roblox!")

-- On peut aussi afficher des nombres
print(42)
print(100 + 200)`,
          en: `-- My first Roblox script!
-- Comments explain the code

print("Hello world!")
print("My name is Michi")
print("I code in Roblox!")

-- We can display numbers too
print(42)
print(100 + 200)`,
          es: `-- ¡Mi primer script de Roblox!
-- Los comentarios explican el código

print("Hello world!")
print("My name is Michi")
print("I code in Roblox!")

-- También podemos mostrar números
print(42)
print(100 + 200)`
        },
        studio: {
          where: { fr: "ServerScriptService", en: "ServerScriptService", es: "ServerScriptService" },
          steps: {
            fr: [
              "Ouvre Roblox Studio et clique 'New' pour créer un projet vide",
              "Dans le panneau 'Explorer' à droite, trouve 'ServerScriptService'",
              "Clic droit sur ServerScriptService → 'Insert Object' → 'Script'",
              "Double-clique sur le nouveau 'Script' pour l'ouvrir",
              "Efface tout le texte existant (Ctrl+A puis Suppr)",
              "Tape ou colle le code ci-dessus",
              "Clique le bouton ▶ Play en haut (ou appuie F5)",
              "Regarde la fenêtre 'Output' en bas — tes messages apparaissent !"
            ],
            en: [
              "Open Roblox Studio and click 'New' to create an empty project",
              "In the 'Explorer' panel on the right, find 'ServerScriptService'",
              "Right-click ServerScriptService → 'Insert Object' → 'Script'",
              "Double-click the new 'Script' to open it",
              "Select all existing text (Ctrl+A) and delete it",
              "Type or paste the code above",
              "Click the ▶ Play button at the top (or press F5)",
              "Look at the 'Output' window at the bottom — your messages appear!"
            ],
            es: [
              "Abre Roblox Studio y haz clic en 'New' para crear un proyecto vacío",
              "En el panel 'Explorer' a la derecha, encuentra 'ServerScriptService'",
              "Clic derecho en ServerScriptService → 'Insert Object' → 'Script'",
              "Doble clic en el nuevo 'Script' para abrirlo",
              "Selecciona todo el texto existente (Ctrl+A) y bórralo",
              "Escribe o pega el código de arriba",
              "Haz clic en el botón ▶ Play arriba (o presiona F5)",
              "¡Mira la ventana 'Output' abajo — tus mensajes aparecen!"
            ]
          },
          exercise: {
            fr: "🎯 Ton défi : Modifie le code pour afficher TON prénom, TON âge, et le résultat de 7 × 8. Est-ce que tu vois tes 3 messages dans Output ?",
            en: "🎯 Your challenge: Modify the code to display YOUR name, YOUR age, and the result of 7 × 8. Can you see your 3 messages in Output?",
            es: "🎯 Tu reto: Modifica el código para mostrar TU nombre, TU edad, y el resultado de 7 × 8. ¿Ves tus 3 mensajes en Output?"
          }
        }
      },
      {
        id: "1-2",
        title: { fr: "Variables — tes boîtes magiques", en: "Variables — your magic boxes", es: "Variables — tus cajas mágicas" },
        concept: { fr: "local, string, number, boolean", en: "local, string, number, boolean", es: "local, string, number, boolean" },
        superpapa: {
          fr: "Les variables, c'est comme ton inventaire dans un RPG. Tu ranges des infos et tu les retrouves quand tu en as besoin !",
          en: "Variables are like your inventory in an RPG. You store info and find it when you need it!",
          es: "¡Las variables son como tu inventario en un RPG. Guardas info y la encuentras cuando la necesitas!"
        },
        explanation: {
          fr: "Une variable est une boîte avec un nom. Tu y mets une valeur et tu peux la changer plus tard. Il y a 3 types : le texte (string), les nombres (number) et vrai/faux (boolean).",
          en: "A variable is a box with a name. You put a value in it and can change it later. There are 3 types: text (string), numbers (number) and true/false (boolean).",
          es: "Una variable es una caja con nombre. Pones un valor y puedes cambiarlo después. Hay 3 tipos: texto (string), números (number) y verdadero/falso (boolean)."
        },
        tip: {
          fr: "Utilise toujours 'local' devant tes variables ! Ça les garde bien rangées dans ton script et évite les bugs mystérieux.",
          en: "Always use 'local' before your variables! It keeps them tidy in your script and avoids mysterious bugs.",
          es: "¡Usa siempre 'local' antes de tus variables! Las mantiene ordenadas en tu script y evita bugs misteriosos."
        },
        code: {
          fr: `local myName = "Michi"      -- texte
local myAge = 11             -- nombre
local iLikeCoding = true     -- vrai/faux

print("Salut, je suis " .. myName)
print("J'ai " .. myAge .. " ans")

-- On peut changer la valeur !
myAge = 12
print("Maintenant j'ai " .. myAge .. " ans")

-- Calculs avec les variables
local points = 100
local bonus = 50
print("Score total : " .. points + bonus)`,
          en: `local myName = "Michi"      -- text
local myAge = 11             -- number
local iLikeCoding = true     -- true/false

print("Hi, I am " .. myName)
print("I am " .. myAge .. " years old")

-- We can change the value!
myAge = 12
print("Now I am " .. myAge .. " years old")

-- Math with variables
local points = 100
local bonus = 50
print("Total score: " .. points + bonus)`,
          es: `local myName = "Michi"      -- texto
local myAge = 11             -- número
local iLikeCoding = true     -- verdadero/falso

print("Hola, soy " .. myName)
print("Tengo " .. myAge .. " años")

-- ¡Podemos cambiar el valor!
myAge = 12
print("Ahora tengo " .. myAge .. " años")

-- Cálculos con variables
local points = 100
local bonus = 50
print("Puntuación total: " .. points + bonus)`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Dans ton Script de tout à l'heure, efface tout", "Tape le code ci-dessus", "Lance avec ▶ Play et regarde Output"],
            en: ["In your Script from before, clear everything", "Type the code above", "Run with ▶ Play and watch Output"],
            es: ["En tu Script anterior, borra todo", "Escribe el código de arriba", "Ejecuta con ▶ Play y mira Output"]
          },
          exercise: {
            fr: "🎯 Crée des variables pour : ton jeu préféré (texte), ton score (nombre), tu aimes Roblox (vrai/faux). Affiche tout dans Output !",
            en: "🎯 Create variables for: your favorite game (text), your score (number), you like Roblox (true/false). Display everything in Output!",
            es: "🎯 Crea variables para: tu juego favorito (texto), tu puntuación (número), te gusta Roblox (verdadero/falso). ¡Muestra todo en Output!"
          }
        }
      },
      {
        id: "1-3",
        title: { fr: "Fonctions — tes super-pouvoirs", en: "Functions — your superpowers", es: "Funciones — tus superpoderes" },
        concept: { fr: "Créer, nommer et appeler des fonctions", en: "Create, name and call functions", es: "Crear, nombrar y llamar funciones" },
        superpapa: {
          fr: "Une fonction, c'est une attaque spéciale dans un jeu de combat. Tu la crées une fois et tu l'utilises quand tu veux !",
          en: "A function is a special move in a fighting game. You create it once and use it whenever you want!",
          es: "¡Una función es un movimiento especial en un juego de lucha. ¡La creas una vez y la usas cuando quieras!"
        },
        explanation: {
          fr: "Une fonction regroupe plusieurs instructions sous un seul nom. Au lieu de réécrire le même code 10 fois, tu l'écris une fois dans une fonction et tu l'appelles autant que tu veux. C'est ça qui rend les développeurs efficaces !",
          en: "A function groups several instructions under one name. Instead of rewriting the same code 10 times, you write it once in a function and call it as many times as you want. That's what makes developers efficient!",
          es: "Una función agrupa varias instrucciones bajo un nombre. En lugar de reescribir el mismo código 10 veces, lo escribes una vez en una función y la llamas tantas veces como quieras. ¡Eso es lo que hace eficientes a los desarrolladores!"
        },
        tip: {
          fr: "Choisis des noms clairs pour tes fonctions. 'faireSauter()' est bien mieux que 'f1()' — dans 6 mois tu sauras encore ce que ça fait !",
          en: "Choose clear names for your functions. 'makeJump()' is much better than 'f1()' — in 6 months you'll still know what it does!",
          es: "Elige nombres claros para tus funciones. '¡hacerSaltar()' es mucho mejor que 'f1()' — ¡en 6 meses seguirás sabiendo qué hace!"
        },
        code: {
          fr: `-- Définir une fonction
local function sayHello()
    print("Salut tout le monde !")
    print("Bienvenue dans mon jeu !")
end

-- Appeler la fonction
sayHello()
sayHello()  -- encore !

-- Fonction avec un calcul
local function showScore()
    local score = 9001
    print("Ton score : " .. score)
    print("C'est OVER 9000 !!!")
end

showScore()`,
          en: `-- Define a function
local function sayHello()
    print("Hello everyone!")
    print("Welcome to my game!")
end

-- Call the function
sayHello()
sayHello()  -- again!

-- Function with a calculation
local function showScore()
    local score = 9001
    print("Your score: " .. score)
    print("That's OVER 9000!!!")
end

showScore()`,
          es: `-- Definir una función
local function sayHello()
    print("¡Hola a todos!")
    print("¡Bienvenido a mi juego!")
end

-- Llamar a la función
sayHello()
sayHello()  -- ¡otra vez!

-- Función con un cálculo
local function showScore()
    local score = 9001
    print("Tu puntuación: " .. score)
    print("¡Es MÁS de 9000!!!")
end

showScore()`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Efface ton ancien script", "Tape le code ci-dessus", "Lance et regarde Output", "Essaie d'appeler direBonjour() 5 fois !"],
            en: ["Clear your old script", "Type the code above", "Run and watch Output", "Try calling sayHello() 5 times!"],
            es: ["Borra tu script anterior", "Escribe el código de arriba", "Ejecuta y mira Output", "¡Intenta llamar a decirHola() 5 veces!"]
          },
          exercise: {
            fr: "🎯 Crée ta propre fonction appelée 'maFonction' qui affiche 3 messages de ton choix. Appelle-la 3 fois. Vois-tu 9 messages dans Output ?",
            en: "🎯 Create your own function called 'myFunction' that shows 3 messages of your choice. Call it 3 times. Do you see 9 messages in Output?",
            es: "🎯 Crea tu propia función llamada 'miFuncion' que muestre 3 mensajes a tu elección. Llámala 3 veces. ¿Ves 9 mensajes en Output?"
          }
        }
      }
    ]
  },
  {
    id: 2, icon: "⚙️", color: "#E8874C",
    title: { fr: "Logique de Jeu", en: "Game Logic", es: "Lógica de Juego" },
    sub: { fr: "Heures 4-8 • Paramètres, Conditions, Boucles", en: "Hours 4-8 • Parameters, Conditions, Loops", es: "Horas 4-8 • Parámetros, Condiciones, Bucles" },
    intro: {
      fr: "Maintenant qu'on sait écrire du code, on lui donne de l'intelligence — pour qu'il prenne des décisions comme un vrai cerveau de jeu !",
      en: "Now that we can write code, let's give it intelligence — so it makes decisions like a real game brain!",
      es: "¡Ahora que sabemos escribir código, le damos inteligencia — para que tome decisiones como un cerebro de juego real!"
    },
    lessons: [
      {
        id: "2-1",
        title: { fr: "Paramètres — personnalise tes fonctions", en: "Parameters — customize your functions", es: "Parámetros — personaliza tus funciones" },
        concept: { fr: "Arguments, paramètres, valeurs de retour", en: "Arguments, parameters, return values", es: "Argumentos, parámetros, valores de retorno" },
        superpapa: {
          fr: "Les paramètres, c'est comme les ingrédients d'une recette. Même fonction, ingrédients différents — résultat différent !",
          en: "Parameters are like recipe ingredients. Same function, different ingredients — different result!",
          es: "¡Los parámetros son como los ingredientes de una receta. ¡Misma función, ingredientes diferentes — resultado diferente!"
        },
        explanation: {
          fr: "Les paramètres envoient des informations à une fonction. Au lieu de faire toujours la même chose, elle s'adapte selon ce qu'on lui donne. 'return' permet à la fonction de te rendre un résultat.",
          en: "Parameters send information to a function. Instead of always doing the same thing, it adapts based on what you give it. 'return' lets the function give you a result back.",
          es: "Los parámetros envían información a una función. En lugar de hacer siempre lo mismo, se adapta según lo que le damos. 'return' permite que la función te devuelva un resultado."
        },
        tip: {
          fr: "Une fonction peut recevoir plusieurs paramètres séparés par des virgules, et retourner plusieurs valeurs aussi !",
          en: "A function can receive multiple parameters separated by commas, and return multiple values too!",
          es: "¡Una función puede recibir varios parámetros separados por comas, y también devolver varios valores!"
        },
        code: {
          fr: `local function greet(name, score)
    print("Bienvenue " .. name .. " !")
    print("Ton score : " .. score .. " points")
end

greet("Michi", 1500)
greet("Lucas", 800)

-- Fonction qui retourne une valeur
local function calculateBonus(score, multi)
    return score * multi
end

local myBonus = calculateBonus(100, 3)
print("Bonus : " .. myBonus)  -- 300`,
          en: `local function greet(name, score)
    print("Welcome " .. name .. "!")
    print("Your score: " .. score .. " points")
end

greet("Michi", 1500)
greet("Lucas", 800)

-- Function that returns a value
local function calculateBonus(score, multi)
    return score * multi
end

local myBonus = calculateBonus(100, 3)
print("Bonus: " .. myBonus)  -- 300`,
          es: `local function greet(name, score)
    print("¡Bienvenido " .. name .. "!")
    print("Tu puntuación: " .. score .. " puntos")
end

greet("Michi", 1500)
greet("Lucas", 800)

-- Función que devuelve un valor
local function calculateBonus(score, multi)
    return score * multi
end

local myBonus = calculateBonus(100, 3)
print("Bonus: " .. myBonus)  -- 300`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Tape le code dans ton Script", "Lance avec ▶ et regarde Output", "Essaie d'appeler accueillir() avec ton prénom !"],
            en: ["Type the code in your Script", "Run with ▶ and watch Output", "Try calling greet() with your own name!"],
            es: ["Escribe el código en tu Script", "Ejecuta con ▶ y mira Output", "¡Intenta llamar a saludar() con tu nombre!"]
          },
          exercise: {
            fr: "🎯 Crée une fonction 'calculerVie' qui prend la vie actuelle et les dégâts reçus, et retourne la vie restante. Teste avec vie=100 et dégâts=35.",
            en: "🎯 Create a 'calculateHealth' function that takes current health and damage received, and returns remaining health. Test with health=100 and damage=35.",
            es: "🎯 Crea una función 'calcularVida' que tome la vida actual y el daño recibido, y devuelva la vida restante. Prueba con vida=100 y daño=35."
          }
        }
      },
      {
        id: "2-2",
        title: { fr: "Conditions — ton jeu prend des décisions", en: "Conditions — your game makes decisions", es: "Condiciones — tu juego toma decisiones" },
        concept: { fr: "if / elseif / else / and / or", en: "if / elseif / else / and / or", es: "if / elseif / else / and / or" },
        superpapa: {
          fr: "C'est la ligne de vie d'un jeu ! Si le joueur touche un ennemi, il perd de la vie. Sinon, il continue. Tout ça avec 'if' !",
          en: "This is a game's lifeline! If the player touches an enemy, they lose health. Otherwise, they continue. All with 'if'!",
          es: "¡Esta es la línea de vida de un juego! Si el jugador toca un enemigo, pierde vida. De lo contrario, continúa. ¡Todo con 'if'!"
        },
        explanation: {
          fr: "Les conditions permettent à ton code d'exécuter différentes actions selon la situation. C'est le cerveau de ton jeu : il observe et réagit. Tu combines les conditions avec 'and' et 'or'.",
          en: "Conditions let your code do different things depending on the situation. It's your game's brain: it observes and reacts. You combine conditions with 'and' and 'or'.",
          es: "Las condiciones permiten que tu código haga cosas diferentes según la situación. Es el cerebro de tu juego: observa y reacciona. Combinas condiciones con 'and' y 'or'."
        },
        tip: {
          fr: "== teste si deux choses sont égales. = assigne une valeur. Confondre les deux est l'erreur numéro 1 des débutants !",
          en: "== tests if two things are equal. = assigns a value. Confusing the two is the #1 beginner mistake!",
          es: "== comprueba si dos cosas son iguales. = asigna un valor. ¡Confundirlos es el error #1 de los principiantes!"
        },
        code: {
          fr: `local health = 65
local shield = true

if health <= 0 then
    print("GAME OVER !")
elseif health <= 25 then
    print("DANGER ! Fuis !")
elseif health <= 50 then
    print("Tu es blessé...")
else
    print("Tu es en pleine forme !")
end

-- Combiner les conditions
if health > 30 and shield == true then
    print("Tu peux attaquer !")
end

if health <= 10 or not shield then
    print("Utilise une potion !")
end`,
          en: `local health = 65
local shield = true

if health <= 0 then
    print("GAME OVER!")
elseif health <= 25 then
    print("DANGER! Run!")
elseif health <= 50 then
    print("You are hurt...")
else
    print("You are in great shape!")
end

-- Combine conditions
if health > 30 and shield == true then
    print("You can attack!")
end

if health <= 10 or not shield then
    print("Use a potion!")
end`,
          es: `local health = 65
local shield = true

if health <= 0 then
    print("¡GAME OVER!")
elseif health <= 25 then
    print("¡PELIGRO! ¡Huye!")
elseif health <= 50 then
    print("Estás herido...")
else
    print("¡Estás en perfecta forma!")
end

-- Combinar condiciones
if health > 30 and shield == true then
    print("¡Puedes atacar!")
end

if health <= 10 or not shield then
    print("¡Usa una poción!")
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code dans ton Script", "Change la valeur de 'vie' (0, 20, 40, 80)", "Lance à chaque fois — tu vois le message changer ?"],
            en: ["Copy the code to your Script", "Change the value of 'health' (0, 20, 40, 80)", "Run each time — do you see the message change?"],
            es: ["Copia el código en tu Script", "Cambia el valor de 'vida' (0, 20, 40, 80)", "Ejecuta cada vez — ¿ves el mensaje cambiar?"]
          },
          exercise: {
            fr: "🎯 Crée un système de niveau : si score < 100 → 'Niveau 1', si score < 500 → 'Niveau 2', si score < 1000 → 'Niveau 3', sinon → 'Niveau MAX !'. Teste avec différents scores.",
            en: "🎯 Create a level system: if score < 100 → 'Level 1', if score < 500 → 'Level 2', if score < 1000 → 'Level 3', else → 'MAX Level!'. Test with different scores.",
            es: "🎯 Crea un sistema de niveles: si puntuación < 100 → 'Nivel 1', si puntuación < 500 → 'Nivel 2', si puntuación < 1000 → 'Nivel 3', si no → '¡Nivel MAX!'. Prueba con diferentes puntuaciones."
          }
        }
      },
      {
        id: "2-3",
        title: { fr: "Déboguer — trouver les bugs", en: "Debugging — finding bugs", es: "Depuración — encontrar bugs" },
        concept: { fr: "Debouncing, print debugging, pcall", en: "Debouncing, print debugging, pcall", es: "Debouncing, print debugging, pcall" },
        superpapa: {
          fr: "Tout développeur fait des bugs — même les pros ! La différence c'est qu'on sait les trouver. C'est une compétence à part entière !",
          en: "Every developer makes bugs — even pros! The difference is knowing how to find them. It's a skill in itself!",
          es: "¡Todo desarrollador comete bugs — ¡incluso los pros! ¡La diferencia es saber encontrarlos. ¡Es una habilidad en sí misma!"
        },
        explanation: {
          fr: "Le débogage, c'est l'art de trouver pourquoi ton code ne fait pas ce que tu veux. Le 'debouncing' évite qu'une action se déclenche 100 fois d'un coup. pcall protège ton jeu contre les erreurs.",
          en: "Debugging is the art of finding why your code doesn't do what you want. 'Debouncing' prevents an action from triggering 100 times at once. pcall protects your game from errors.",
          es: "Depurar es el arte de encontrar por qué tu código no hace lo que quieres. El 'debouncing' evita que una acción se dispare 100 veces de golpe. pcall protege tu juego de errores."
        },
        tip: {
          fr: "Ajoute des print() partout pour voir ce qui se passe. C'est la technique la plus simple et la plus efficace — même les pros l'utilisent !",
          en: "Add print() everywhere to see what's happening. It's the simplest and most effective technique — even pros use it!",
          es: "¡Añade print() en todas partes para ver qué pasa. ¡Es la técnica más simple y efectiva — ¡incluso los pros la usan!"
        },
        code: {
          fr: `-- Debouncing : éviter trop de déclenchements
local canJump = true

local function jump()
    if not canJump then return end
    canJump = false
    print("Saut !")
    task.wait(0.5)
    canJump = true
end

jump()
jump()  -- ignoré

-- pcall : attraper les erreurs sans planter
local success, err = pcall(function()
    local x = nil
    print(x.value)  -- bug !
end)

if not success then
    print("Erreur : " .. err)
    print("Le jeu continue !")
end`,
          en: `-- Debouncing: avoid too many triggers
local canJump = true

local function jump()
    if not canJump then return end
    canJump = false
    print("Jump!")
    task.wait(0.5)
    canJump = true
end

jump()
jump()  -- ignored

-- pcall: catch errors without crashing
local success, err = pcall(function()
    local x = nil
    print(x.value)  -- bug!
end)

if not success then
    print("Error: " .. err)
    print("Game continues!")
end`,
          es: `-- Debouncing: evitar muchos disparos
local canJump = true

local function jump()
    if not canJump then return end
    canJump = false
    print("¡Salto!")
    task.wait(0.5)
    canJump = true
end

jump()
jump()  -- ignorado

-- pcall: capturar errores sin bloquear
local success, err = pcall(function()
    local x = nil
    print(x.value)  -- ¡bug!
end)

if not success then
    print("Error: " .. err)
    print("¡El juego continúa!")
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code dans Studio", "Lance et regarde Output", "La console rouge montre les erreurs — c'est normal avec pcall !"],
            en: ["Copy the code to Studio", "Run and watch Output", "Red console shows errors — that's normal with pcall!"],
            es: ["Copia el código en Studio", "Ejecuta y mira Output", "¡La consola roja muestra errores — eso es normal con pcall!"]
          },
          exercise: {
            fr: "🎯 Écris un script avec une erreur volontaire (divise par zéro : 5/0 ou accède à nil.quelquechose). Entoure-le avec pcall et affiche un message d'erreur sympa dans Output.",
            en: "🎯 Write a script with an intentional error (divide by zero: 5/0 or access nil.something). Wrap it with pcall and display a friendly error message in Output.",
            es: "🎯 Escribe un script con un error intencional (divide por cero: 5/0 o accede a nil.algo). Envuélvelo con pcall y muestra un mensaje de error amigable en Output."
          }
        }
      },
      {
        id: "2-4",
        title: { fr: "Boucle while — répéter tant que", en: "while loop — repeat while", es: "Bucle while — repetir mientras" },
        concept: { fr: "while / repeat-until / task.wait()", en: "while / repeat-until / task.wait()", es: "while / repeat-until / task.wait()" },
        superpapa: {
          fr: "Imagine devoir compter 1000 ennemis à la main... La boucle while fait ça pour toi en un instant !",
          en: "Imagine counting 1000 enemies by hand... The while loop does that for you in an instant!",
          es: "¡Imagina contar 1000 enemigos a mano... ¡El bucle while lo hace por ti en un instante!"
        },
        explanation: {
          fr: "La boucle while répète un bloc de code tant qu'une condition est vraie. task.wait() est essentiel pour ne pas bloquer le jeu — il fait une pause avant la prochaine répétition.",
          en: "The while loop repeats a block of code as long as a condition is true. task.wait() is essential to not freeze the game — it pauses before the next repetition.",
          es: "El bucle while repite un bloque de código mientras una condición sea verdadera. task.wait() es esencial para no bloquear el juego — hace una pausa antes de la siguiente repetición."
        },
        tip: {
          fr: "Fais toujours attention que ta condition devienne fausse un jour — sinon tu crées une boucle infinie qui bloque tout !",
          en: "Always make sure your condition becomes false eventually — otherwise you create an infinite loop that freezes everything!",
          es: "¡Asegúrate siempre de que tu condición se vuelva falsa algún día — de lo contrario creas un bucle infinito que bloquea todo!"
        },
        code: {
          fr: `-- Compte à rebours
local time = 5
while time > 0 do
    print("Départ dans : " .. time)
    task.wait(1)
    time = time - 1
end
print("C'EST PARTI !")

-- Régénération de vie
local health = 30
local maxHealth = 100
while health < maxHealth do
    health = health + 10
    print("Vie : " .. health .. "/" .. maxHealth)
    task.wait(2)
end
print("Vie au maximum !")`,
          en: `-- Countdown
local time = 5
while time > 0 do
    print("Starting in: " .. time)
    task.wait(1)
    time = time - 1
end
print("GO!")

-- Health regeneration
local health = 30
local maxHealth = 100
while health < maxHealth do
    health = health + 10
    print("Health: " .. health .. "/" .. maxHealth)
    task.wait(2)
end
print("Health at maximum!")`,
          es: `-- Cuenta regresiva
local time = 5
while time > 0 do
    print("Empezando en: " .. time)
    task.wait(1)
    time = time - 1
end
print("¡VAMOS!")

-- Regeneración de vida
local health = 30
local maxHealth = 100
while health < maxHealth do
    health = health + 10
    print("Vida: " .. health .. "/" .. maxHealth)
    task.wait(2)
end
print("¡Vida al máximo!")`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code dans Studio", "Lance avec ▶ Play", "Regarde Output — tu vois le compte à rebours en temps réel !"],
            en: ["Copy the code to Studio", "Run with ▶ Play", "Watch Output — you see the countdown in real time!"],
            es: ["Copia el código en Studio", "Ejecuta con ▶ Play", "¡Mira Output — ves la cuenta regresiva en tiempo real!"]
          },
          exercise: {
            fr: "🎯 Crée une minuterie de jeu : affiche 'Temps : 10', puis 'Temps : 9'... jusqu'à 0, puis affiche 'GAME OVER !'. Le compte doit se faire avec task.wait(1).",
            en: "🎯 Create a game timer: display 'Time: 10', then 'Time: 9'... down to 0, then show 'GAME OVER!'. The countdown must use task.wait(1).",
            es: "🎯 Crea un temporizador de juego: muestra 'Tiempo: 10', luego 'Tiempo: 9'... hasta 0, luego muestra '¡GAME OVER!'. La cuenta debe usar task.wait(1)."
          }
        }
      },
      {
        id: "2-5",
        title: { fr: "Boucle for — répéter exactement N fois", en: "for loop — repeat exactly N times", es: "Bucle for — repetir exactamente N veces" },
        concept: { fr: "for numérique, break, boucles imbriquées", en: "numeric for, break, nested loops", es: "for numérico, break, bucles anidados" },
        superpapa: {
          fr: "La boucle for est ta meilleure amie pour créer des vagues d'ennemis, des récompenses, des niveaux — tout ce qui se répète un nombre précis de fois !",
          en: "The for loop is your best friend for creating enemy waves, rewards, levels — anything that repeats an exact number of times!",
          es: "¡El bucle for es tu mejor amigo para crear oleadas de enemigos, recompensas, niveles — ¡todo lo que se repite un número exacto de veces!"
        },
        explanation: {
          fr: "La boucle for numériquepermet de répéter exactement N fois avec un compteur automatique. Tu peux aussi aller à l'envers ou sauter de 2 en 2. 'break' permet de sortir de la boucle avant la fin.",
          en: "The numeric for loop repeats exactly N times with an automatic counter. You can also count backwards or skip by 2. 'break' lets you exit the loop early.",
          es: "El bucle for numérico repite exactamente N veces con un contador automático. También puedes contar hacia atrás o saltar de 2 en 2. 'break' te permite salir del bucle antes de tiempo."
        },
        tip: {
          fr: "Utilise 'for' quand tu sais exactement combien de fois répéter. Utilise 'while' quand tu ne sais pas à l'avance.",
          en: "Use 'for' when you know exactly how many times to repeat. Use 'while' when you don't know in advance.",
          es: "Usa 'for' cuando sepas exactamente cuántas veces repetir. Usa 'while' cuando no lo sepas de antemano."
        },
        code: {
          fr: `-- Boucle for de base
for i = 1, 5 do
    print("Tour " .. i)
end

-- Compter à l'envers
for i = 10, 1, -1 do
    print("Compte : " .. i)
end

-- Créer 5 ennemis
for i = 1, 5 do
    print("Ennemi " .. i .. " créé !")
end

-- Break : sortir de la boucle
for i = 1, 100 do
    if i == 7 then
        print("Chiffre magique trouvé !")
        break
    end
end`,
          en: `-- Basic for loop
for i = 1, 5 do
    print("Round " .. i)
end

-- Count backwards
for i = 10, 1, -1 do
    print("Count: " .. i)
end

-- Create 5 enemies
for i = 1, 5 do
    print("Enemy " .. i .. " created!")
end

-- Break: exit the loop
for i = 1, 100 do
    if i == 7 then
        print("Magic number found!")
        break
    end
end`,
          es: `-- Bucle for básico
for i = 1, 5 do
    print("Vuelta " .. i)
end

-- Contar hacia atrás
for i = 10, 1, -1 do
    print("Cuenta: " .. i)
end

-- Crear 5 enemigos
for i = 1, 5 do
    print("¡Enemigo " .. i .. " creado!")
end

-- Break: salir del bucle
for i = 1, 100 do
    if i == 7 then
        print("¡Número mágico encontrado!")
        break
    end
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code", "Lance et observe Output", "Change le nombre d'ennemis de 5 à 10"],
            en: ["Copy the code", "Run and observe Output", "Change enemy count from 5 to 10"],
            es: ["Copia el código", "Ejecuta y observa Output", "Cambia el número de enemigos de 5 a 10"]
          },
          exercise: {
            fr: "🎯 Crée une table de multiplication de 7 : affiche '7 x 1 = 7', '7 x 2 = 14'... jusqu'à '7 x 10 = 70'. Utilise une boucle for !",
            en: "🎯 Create a multiplication table of 7: display '7 x 1 = 7', '7 x 2 = 14'... up to '7 x 10 = 70'. Use a for loop!",
            es: "🎯 Crea la tabla de multiplicar del 7: muestra '7 x 1 = 7', '7 x 2 = 14'... hasta '7 x 10 = 70'. ¡Usa un bucle for!"
          }
        }
      }
    ]
  },
  {
    id: 3, icon: "📦", color: "#4CBE72",
    title: { fr: "Stocker les Données", en: "Storing Data", es: "Almacenar Datos" },
    sub: { fr: "Heures 9-10 • Tableaux et Dictionnaires", en: "Hours 9-10 • Arrays and Dictionaries", es: "Horas 9-10 • Arrays y Diccionarios" },
    intro: {
      fr: "Un jeu, c'est plein de données : inventaires, scores, personnages... On apprend à tout organiser !",
      en: "A game is full of data: inventories, scores, characters... Let's learn to organize everything!",
      es: "¡Un juego está lleno de datos: inventarios, puntuaciones, personajes... ¡Aprendamos a organizarlo todo!"
    },
    lessons: [
      {
        id: "3-1",
        title: { fr: "Tableaux — ton inventaire de jeu", en: "Arrays — your game inventory", es: "Arrays — tu inventario de juego" },
        concept: { fr: "table.insert, table.remove, ipairs, #", en: "table.insert, table.remove, ipairs, #", es: "table.insert, table.remove, ipairs, #" },
        superpapa: {
          fr: "Ton inventaire dans un RPG ? C'est un tableau ! Une liste d'objets numérotés que tu peux modifier à volonté.",
          en: "Your inventory in an RPG? That's an array! A numbered list of items you can modify as you wish.",
          es: "¿Tu inventario en un RPG? ¡Eso es un array! Una lista numerada de objetos que puedes modificar a voluntad."
        },
        explanation: {
          fr: "Un tableau stocke une liste d'éléments dans l'ordre, numérotés à partir de 1. Tu peux ajouter, supprimer et parcourir les éléments facilement. C'est la structure de données la plus utilisée dans les jeux.",
          en: "An array stores a list of elements in order, numbered from 1. You can add, remove and browse elements easily. It's the most used data structure in games.",
          es: "Un array almacena una lista de elementos en orden, numerados desde 1. Puedes añadir, eliminar y recorrer elementos fácilmente. Es la estructura de datos más usada en los juegos."
        },
        tip: {
          fr: "Dans Lua, les tableaux commencent à l'index 1, pas 0 comme dans d'autres langages. # donne la taille du tableau.",
          en: "In Lua, arrays start at index 1, not 0 like other languages. # gives the size of the array.",
          es: "En Lua, los arrays empiezan en el índice 1, no en 0 como otros lenguajes. # da el tamaño del array."
        },
        code: {
          fr: `local inventory = {"Sword", "Shield", "Potion"}

print(inventory[1])   -- Sword
print(inventory[3])   -- Potion
print("Taille : " .. #inventory)  -- 3

-- Ajouter
table.insert(inventory, "Bow")
print("Après ajout : " .. #inventory)  -- 4

-- Supprimer
table.remove(inventory, 1)  -- enlève Sword

-- Parcourir
for index, item in ipairs(inventory) do
    print(index .. ". " .. item)
end`,
          en: `local inventory = {"Sword", "Shield", "Potion"}

print(inventory[1])   -- Sword
print(inventory[3])   -- Potion
print("Size: " .. #inventory)  -- 3

-- Add
table.insert(inventory, "Bow")
print("After adding: " .. #inventory)  -- 4

-- Remove
table.remove(inventory, 1)  -- removes Sword

-- Iterate
for index, item in ipairs(inventory) do
    print(index .. ". " .. item)
end`,
          es: `local inventory = {"Sword", "Shield", "Potion"}

print(inventory[1])   -- Sword
print(inventory[3])   -- Potion
print("Tamaño: " .. #inventory)  -- 3

-- Añadir
table.insert(inventory, "Bow")
print("Después de añadir: " .. #inventory)  -- 4

-- Eliminar
table.remove(inventory, 1)  -- quita Sword

-- Recorrer
for index, item in ipairs(inventory) do
    print(index .. ". " .. item)
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code", "Lance et regarde Output", "Ajoute un 5ème objet à l'inventaire"],
            en: ["Copy the code", "Run and watch Output", "Add a 5th item to the inventory"],
            es: ["Copia el código", "Ejecuta y mira Output", "Añade un 5to objeto al inventario"]
          },
          exercise: {
            fr: "🎯 Crée un tableau avec 5 noms de tes jeux préférés. Affiche-les avec leur numéro. Puis ajoute un 6ème jeu et enlève le premier.",
            en: "🎯 Create an array with 5 names of your favorite games. Display them with their number. Then add a 6th game and remove the first.",
            es: "🎯 Crea un array con 5 nombres de tus juegos favoritos. Muéstralos con su número. Luego añade un 6to juego y elimina el primero."
          }
        }
      },
      {
        id: "3-2",
        title: { fr: "Dictionnaires — fiches de personnage", en: "Dictionaries — character sheets", es: "Diccionarios — fichas de personaje" },
        concept: { fr: "Tables clé/valeur, pairs(), tables imbriquées", en: "Key/value tables, pairs(), nested tables", es: "Tablas clave/valor, pairs(), tablas anidadas" },
        superpapa: {
          fr: "La fiche d'identité d'un personnage — nom, vie, force, niveau — c'est un dictionnaire. Chaque info a un nom précis !",
          en: "A character's ID card — name, health, strength, level — that's a dictionary. Each piece of info has a precise name!",
          es: "¡La ficha de identidad de un personaje — nombre, vida, fuerza, nivel — eso es un diccionario. ¡Cada información tiene un nombre preciso!"
        },
        explanation: {
          fr: "Un dictionnaire associe des clés (noms) à des valeurs. On accède aux valeurs par leur nom, pas par un numéro. Parfait pour les caractéristiques d'un personnage ou d'un objet.",
          en: "A dictionary links keys (names) to values. You access values by their name, not a number. Perfect for character or object attributes.",
          es: "Un diccionario vincula claves (nombres) a valores. Accedes a los valores por su nombre, no por un número. Perfecto para atributos de personajes u objetos."
        },
        tip: {
          fr: "On peut imbriquer des tables dans des tables — un joueur avec un inventaire (tableau) dans sa fiche (dictionnaire). Les jeux l'utilisent tout le temps !",
          en: "You can nest tables inside tables — a player with an inventory (array) inside their profile (dictionary). Games use this all the time!",
          es: "¡Puedes anidar tablas dentro de tablas — un jugador con un inventario (array) dentro de su ficha (diccionario). ¡Los juegos lo usan todo el tiempo!"
        },
        code: {
          fr: `local player = {
    name = "Michi",
    health = 100,
    strength = 45,
    level = 7,
    isAlive = true
}

print("Joueur : " .. player.name)
print("Niveau " .. player.level)

-- Modifier
player.health = player.health - 25
print("Vie : " .. player.health)

-- Parcourir avec pairs()
for key, value in pairs(player) do
    print(key .. " = " .. tostring(value))
end`,
          en: `local player = {
    name = "Michi",
    health = 100,
    strength = 45,
    level = 7,
    isAlive = true
}

print("Player: " .. player.name)
print("Level " .. player.level)

-- Modify
player.health = player.health - 25
print("Health: " .. player.health)

-- Iterate with pairs()
for key, value in pairs(player) do
    print(key .. " = " .. tostring(value))
end`,
          es: `local player = {
    name = "Michi",
    health = 100,
    strength = 45,
    level = 7,
    isAlive = true
}

print("Jugador: " .. player.name)
print("Nivel " .. player.level)

-- Modificar
player.health = player.health - 25
print("Vida: " .. player.health)

-- Recorrer con pairs()
for key, value in pairs(player) do
    print(key .. " = " .. tostring(value))
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie et lance le code", "Ajoute une clé 'arme' à ton joueur", "Affiche toutes les infos avec pairs()"],
            en: ["Copy and run the code", "Add a 'weapon' key to your player", "Display all info with pairs()"],
            es: ["Copia y ejecuta el código", "Añade una clave 'arma' a tu jugador", "Muestra toda la info con pairs()"]
          },
          exercise: {
            fr: "🎯 Crée un dictionnaire pour TON personnage avec au moins 6 caractéristiques (nom, vie, force, vitesse, arme, classe). Affiche sa 'fiche de stats' dans Output.",
            en: "🎯 Create a dictionary for YOUR character with at least 6 attributes (name, health, strength, speed, weapon, class). Display its 'stat sheet' in Output.",
            es: "🎯 Crea un diccionario para TU personaje con al menos 6 características (nombre, vida, fuerza, velocidad, arma, clase). Muestra su 'ficha de estadísticas' en Output."
          }
        }
      },
      {
        id: "3-3",
        title: { fr: "Trier et chercher les données", en: "Sorting and searching data", es: "Ordenar y buscar datos" },
        concept: { fr: "table.sort, recherche linéaire, filtres", en: "table.sort, linear search, filters", es: "table.sort, búsqueda lineal, filtros" },
        superpapa: {
          fr: "Un classement de meilleurs scores ? Il faut trier ! Voilà comment les algorithmes entrent dans un jeu réel.",
          en: "A high score leaderboard? You need sorting! This is how algorithms enter a real game.",
          es: "¿Una tabla de récords? ¡Necesitas ordenar! Así es como los algoritmos entran en un juego real."
        },
        explanation: {
          fr: "Trier une liste est fondamental dans les jeux — classements, inventaires par valeur, ennemis par distance. table.sort() fait ça automatiquement avec une fonction de comparaison personnalisée.",
          en: "Sorting a list is fundamental in games — leaderboards, inventory by value, enemies by distance. table.sort() does this automatically with a custom comparison function.",
          es: "Ordenar una lista es fundamental en los juegos — clasificaciones, inventario por valor, enemigos por distancia. table.sort() lo hace automáticamente con una función de comparación personalizada."
        },
        tip: {
          fr: "table.sort modifie le tableau original. Si tu veux garder l'original intact, copie-le d'abord dans un nouveau tableau.",
          en: "table.sort modifies the original array. If you want to keep the original intact, copy it first into a new array.",
          es: "table.sort modifica el array original. Si quieres mantener el original intacto, cópialo primero en un nuevo array."
        },
        code: {
          fr: `local scores = {
    {name = "Michi", score = 4200},
    {name = "Lucas", score = 1800},
    {name = "Emma", score = 5500},
    {name = "Noah", score = 3100},
}

-- Trier du meilleur au moins bon
table.sort(scores, function(a, b)
    return a.score > b.score
end)

print("=== CLASSEMENT ===")
for pos, p in ipairs(scores) do
    print(pos .. ". " .. p.name .. " - " .. p.score)
end

-- Chercher un joueur
for i, p in ipairs(scores) do
    if p.name == "Emma" then
        print("Emma est en position " .. i)
    end
end`,
          en: `local scores = {
    {name = "Michi", score = 4200},
    {name = "Lucas", score = 1800},
    {name = "Emma", score = 5500},
    {name = "Noah", score = 3100},
}

-- Sort from best to worst
table.sort(scores, function(a, b)
    return a.score > b.score
end)

print("=== LEADERBOARD ===")
for pos, p in ipairs(scores) do
    print(pos .. ". " .. p.name .. " - " .. p.score)
end

-- Find a player
for i, p in ipairs(scores) do
    if p.name == "Emma" then
        print("Emma is in position " .. i)
    end
end`,
          es: `local scores = {
    {name = "Michi", score = 4200},
    {name = "Lucas", score = 1800},
    {name = "Emma", score = 5500},
    {name = "Noah", score = 3100},
}

-- Ordenar de mejor a peor
table.sort(scores, function(a, b)
    return a.score > b.score
end)

print("=== CLASIFICACIÓN ===")
for pos, p in ipairs(scores) do
    print(pos .. ". " .. p.name .. " - " .. p.score)
end

-- Buscar un jugador
for i, p in ipairs(scores) do
    if p.name == "Emma" then
        print("Emma está en posición " .. i)
    end
end`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie et lance le code", "Ajoute-toi dans la liste avec un score", "Change le tri pour aller du moins bon au meilleur"],
            en: ["Copy and run the code", "Add yourself to the list with a score", "Change sorting to go from worst to best"],
            es: ["Copia y ejecuta el código", "Añádete a la lista con una puntuación", "Cambia el orden de peor a mejor"]
          },
          exercise: {
            fr: "🎯 Crée un classement de 5 amis avec leurs scores. Trie-les du meilleur au pire. Affiche une médaille 🥇🥈🥉 pour le top 3.",
            en: "🎯 Create a leaderboard of 5 friends with their scores. Sort them best to worst. Display a medal 🥇🥈🥉 for the top 3.",
            es: "🎯 Crea una clasificación de 5 amigos con sus puntuaciones. Ordénalos de mejor a peor. Muestra una medalla 🥇🥈🥉 para el top 3."
          }
        }
      }
    ]
  },
  {
    id: 4, icon: "🏗️", color: "#9B4CE8",
    title: { fr: "Architecture Roblox", en: "Roblox Architecture", es: "Arquitectura Roblox" },
    sub: { fr: "Heures 11-13 • Client, Serveur, Modules", en: "Hours 11-13 • Client, Server, Modules", es: "Horas 11-13 • Cliente, Servidor, Módulos" },
    intro: {
      fr: "C'est ici que ça devient sérieux ! Roblox a une architecture spéciale pour les jeux multijoueur. Comprends ça et tu peux créer n'importe quoi !",
      en: "This is where it gets serious! Roblox has a special architecture for multiplayer games. Understand this and you can create anything!",
      es: "¡Aquí es donde se pone serio! Roblox tiene una arquitectura especial para juegos multijugador. ¡Entiende esto y puedes crear cualquier cosa!"
    },
    lessons: [
      {
        id: "4-1",
        title: { fr: "Client vs Serveur — deux mondes", en: "Client vs Server — two worlds", es: "Cliente vs Servidor — dos mundos" },
        concept: { fr: "LocalScript vs Script, Services Roblox", en: "LocalScript vs Script, Roblox Services", es: "LocalScript vs Script, Servicios Roblox" },
        superpapa: {
          fr: "Le serveur c'est le juge arbitre — il voit tout et décide de la réalité du jeu. Le client c'est ce que toi tu vois sur ton écran !",
          en: "The server is the referee — it sees everything and decides the game's reality. The client is what you see on your screen!",
          es: "¡El servidor es el árbitro — ve todo y decide la realidad del juego. ¡El cliente es lo que tú ves en tu pantalla!"
        },
        explanation: {
          fr: "Dans Roblox, il y a deux côtés : le Serveur (gère la réalité pour tous) et le Client (ce que chaque joueur voit). Les Scripts s'exécutent côté serveur. Les LocalScripts côté client. Confondre les deux = bugs garantis !",
          en: "In Roblox, there are two sides: the Server (manages reality for everyone) and the Client (what each player sees). Scripts run server-side. LocalScripts run client-side. Mix them up = guaranteed bugs!",
          es: "En Roblox, hay dos lados: el Servidor (gestiona la realidad para todos) y el Cliente (lo que cada jugador ve). Los Scripts se ejecutan en el servidor. Los LocalScripts en el cliente. ¡Mezclarlos = bugs garantizados!"
        },
        tip: {
          fr: "Règle d'or : vie, dégâts, scores → Serveur. Interface, caméra, effets visuels → Client.",
          en: "Golden rule: health, damage, scores → Server. Interface, camera, visual effects → Client.",
          es: "Regla de oro: vida, daño, puntuaciones → Servidor. Interfaz, cámara, efectos visuales → Cliente."
        },
        code: {
          fr: `--[[ SCRIPT (côté serveur - ServerScriptService) ]]
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Joueur connecté : " .. player.Name)
    
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = 0
    coins.Parent = leaderstats
end)

--[[ LOCAL SCRIPT (côté client - StarterPlayerScripts) ]]
local player = game.Players.LocalPlayer
print("Bonjour " .. player.Name)`,
          en: `--[[ SCRIPT (server side - ServerScriptService) ]]
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Player connected: " .. player.Name)
    
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = 0
    coins.Parent = leaderstats
end)

--[[ LOCAL SCRIPT (client side - StarterPlayerScripts) ]]
local player = game.Players.LocalPlayer
print("Hello " .. player.Name)`,
          es: `--[[ SCRIPT (lado servidor - ServerScriptService) ]]
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print("Jugador conectado: " .. player.Name)
    
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local coins = Instance.new("IntValue")
    coins.Name = "Coins"
    coins.Value = 0
    coins.Parent = leaderstats
end)

--[[ LOCAL SCRIPT (lado cliente - StarterPlayerScripts) ]]
local player = game.Players.LocalPlayer
print("Hola " .. player.Name)`
        },
        studio: {
          where: { fr: "ServerScriptService (Script) + StarterPlayerScripts (LocalScript)", en: "ServerScriptService (Script) + StarterPlayerScripts (LocalScript)", es: "ServerScriptService (Script) + StarterPlayerScripts (LocalScript)" },
          steps: {
            fr: [
              "Crée un Script dans ServerScriptService avec le code serveur",
              "Dans Explorer, trouve StarterPlayer → StarterPlayerScripts",
              "Clic droit → Insert Object → LocalScript",
              "Mets le code client dans le LocalScript",
              "Lance le jeu — tu vois un compteur 'Pièces' dans le leaderboard !"
            ],
            en: [
              "Create a Script in ServerScriptService with the server code",
              "In Explorer, find StarterPlayer → StarterPlayerScripts",
              "Right-click → Insert Object → LocalScript",
              "Put the client code in the LocalScript",
              "Run the game — you see a 'Coins' counter in the leaderboard!"
            ],
            es: [
              "Crea un Script en ServerScriptService con el código del servidor",
              "En Explorer, encuentra StarterPlayer → StarterPlayerScripts",
              "Clic derecho → Insert Object → LocalScript",
              "Pon el código del cliente en el LocalScript",
              "¡Ejecuta el juego — ves un contador 'Monedas' en el leaderboard!"
            ]
          },
          exercise: {
            fr: "🎯 Ajoute un deuxième IntValue 'Niveau' dans le leaderstats, commençant à 1. Lance le jeu et vérifie que tu vois 'Pièces : 0' et 'Niveau : 1' dans le leaderboard.",
            en: "🎯 Add a second IntValue 'Level' to leaderstats, starting at 1. Run the game and check that you see 'Coins: 0' and 'Level: 1' in the leaderboard.",
            es: "🎯 Añade un segundo IntValue 'Nivel' en leaderstats, empezando en 1. Ejecuta el juego y comprueba que ves 'Monedas: 0' y 'Nivel: 1' en el leaderboard."
          }
        }
      },
      {
        id: "4-2",
        title: { fr: "RemoteEvents — client ↔ serveur", en: "RemoteEvents — client ↔ server", es: "RemoteEvents — cliente ↔ servidor" },
        concept: { fr: "FireServer, OnServerEvent, FireClient", en: "FireServer, OnServerEvent, FireClient", es: "FireServer, OnServerEvent, FireClient" },
        superpapa: {
          fr: "Le client et le serveur ne peuvent pas se parler directement — ils utilisent des RemoteEvents, comme envoyer un message dans une bouteille !",
          en: "Client and server can't talk directly — they use RemoteEvents, like sending a message in a bottle!",
          es: "¡El cliente y el servidor no pueden comunicarse directamente — usan RemoteEvents, ¡como enviar un mensaje en una botella!"
        },
        explanation: {
          fr: "Les RemoteEvents sont le système de messagerie entre client et serveur. Le client 'fire' un événement, le serveur l'écoute et réagit. C'est obligatoire pour créer des actions multijoueur sécurisées.",
          en: "RemoteEvents are the messaging system between client and server. The client 'fires' an event, the server listens and reacts. This is mandatory for creating secure multiplayer actions.",
          es: "Los RemoteEvents son el sistema de mensajería entre cliente y servidor. El cliente 'dispara' un evento, el servidor escucha y reacciona. Esto es obligatorio para crear acciones multijugador seguras."
        },
        tip: {
          fr: "Ne fais JAMAIS confiance aux données envoyées par le client — un joueur malveillant peut les modifier. Toujours valider côté serveur !",
          en: "NEVER trust data sent by the client — a malicious player can modify it. Always validate server-side!",
          es: "¡NUNCA confíes en los datos enviados por el cliente — un jugador malicioso puede modificarlos. ¡Siempre valida en el servidor!"
        },
        code: {
          fr: `--[[ Dans ReplicatedStorage : crée un RemoteEvent "BuyItem" ]]

--[[ LOCAL SCRIPT (client) ]]
local RS = game:GetService("ReplicatedStorage")
local remote = RS:WaitForChild("BuyItem")

-- Le joueur clique "Acheter"
local function buy()
    remote:FireServer("Fire Sword", 500)
    print("Demande envoyée au serveur...")
end
buy()

--[[ SCRIPT (serveur) ]]
local remote = RS:WaitForChild("BuyItem")
remote.OnServerEvent:Connect(function(player, item, price)
    local coins = player.leaderstats.Coins
    if coins.Value >= price then
        coins.Value = coins.Value - price
        print(player.Name .. " a acheté : " .. item)
    else
        print("Pas assez de pièces !")
    end
end)`,
          en: `--[[ In ReplicatedStorage: create a RemoteEvent "BuyItem" ]]

--[[ LOCAL SCRIPT (client) ]]
local RS = game:GetService("ReplicatedStorage")
local remote = RS:WaitForChild("BuyItem")

-- Player clicks "Buy"
local function buy()
    remote:FireServer("Fire Sword", 500)
    print("Request sent to server...")
end
buy()

--[[ SCRIPT (server) ]]
local remote = RS:WaitForChild("BuyItem")
remote.OnServerEvent:Connect(function(player, item, price)
    local coins = player.leaderstats.Coins
    if coins.Value >= price then
        coins.Value = coins.Value - price
        print(player.Name .. " bought: " .. item)
    else
        print("Not enough coins!")
    end
end)`,
          es: `--[[ En ReplicatedStorage: crea un RemoteEvent "BuyItem" ]]

--[[ LOCAL SCRIPT (cliente) ]]
local RS = game:GetService("ReplicatedStorage")
local remote = RS:WaitForChild("BuyItem")

-- El jugador hace clic en "Comprar"
local function buy()
    remote:FireServer("Fire Sword", 500)
    print("Petición enviada al servidor...")
end
buy()

--[[ SCRIPT (servidor) ]]
local remote = RS:WaitForChild("BuyItem")
remote.OnServerEvent:Connect(function(player, item, price)
    local coins = player.leaderstats.Coins
    if coins.Value >= price then
        coins.Value = coins.Value - price
        print(player.Name .. " compró: " .. item)
    else
        print("¡No hay suficientes monedas!")
    end
end)`
        },
        studio: {
          where: { fr: "ReplicatedStorage + ServerScriptService + StarterPlayerScripts", en: "ReplicatedStorage + ServerScriptService + StarterPlayerScripts", es: "ReplicatedStorage + ServerScriptService + StarterPlayerScripts" },
          steps: {
            fr: [
              "Dans ReplicatedStorage, clic droit → Insert Object → RemoteEvent, nomme-le 'AcheterObjet'",
              "Crée un Script dans ServerScriptService avec le code serveur",
              "Crée un LocalScript dans StarterPlayerScripts avec le code client",
              "Lance le jeu et regarde Output des deux côtés"
            ],
            en: [
              "In ReplicatedStorage, right-click → Insert Object → RemoteEvent, name it 'BuyItem'",
              "Create a Script in ServerScriptService with the server code",
              "Create a LocalScript in StarterPlayerScripts with the client code",
              "Run the game and watch Output from both sides"
            ],
            es: [
              "En ReplicatedStorage, clic derecho → Insert Object → RemoteEvent, nómbralo 'ComprarObjeto'",
              "Crea un Script en ServerScriptService con el código del servidor",
              "Crea un LocalScript en StarterPlayerScripts con el código del cliente",
              "Ejecuta el juego y mira Output de ambos lados"
            ]
          },
          exercise: {
            fr: "🎯 Crée un RemoteEvent 'GagnerPieces'. Quand le client l'appelle avec un nombre, le serveur ajoute ce nombre aux pièces du joueur dans leaderstats.",
            en: "🎯 Create a RemoteEvent 'EarnCoins'. When the client calls it with a number, the server adds that number to the player's coins in leaderstats.",
            es: "🎯 Crea un RemoteEvent 'GanarMonedas'. Cuando el cliente lo llama con un número, el servidor suma ese número a las monedas del jugador en leaderstats."
          }
        }
      },
      {
        id: "4-3",
        title: { fr: "ModuleScripts — organiser son code", en: "ModuleScripts — organizing code", es: "ModuleScripts — organizar el código" },
        concept: { fr: "require(), DRY principle, modules réutilisables", en: "require(), DRY principle, reusable modules", es: "require(), principio DRY, módulos reutilizables" },
        superpapa: {
          fr: "Quand ton jeu grandit, le code devient énorme. Les ModuleScripts, c'est comme ranger sa chambre — chaque chose à sa place !",
          en: "As your game grows, the code gets huge. ModuleScripts are like tidying your room — everything in its place!",
          es: "¡A medida que tu juego crece, el código se vuelve enorme. ¡Los ModuleScripts son como ordenar tu habitación — ¡cada cosa en su lugar!"
        },
        explanation: {
          fr: "Les ModuleScripts permettent d'écrire du code réutilisable importable partout avec require(). C'est le principe DRY : Don't Repeat Yourself. Un bug corrigé dans le module est corrigé partout à la fois.",
          en: "ModuleScripts let you write reusable code importable anywhere with require(). It's the DRY principle: Don't Repeat Yourself. A bug fixed in the module is fixed everywhere at once.",
          es: "Los ModuleScripts te permiten escribir código reutilizable importable en cualquier lugar con require(). Es el principio DRY: Don't Repeat Yourself. Un bug corregido en el módulo se corrige en todas partes a la vez."
        },
        tip: {
          fr: "Place tes ModuleScripts dans ReplicatedStorage s'ils sont utilisés côté client ET serveur. Dans ServerScriptService si côté serveur seulement.",
          en: "Place ModuleScripts in ReplicatedStorage if used both client AND server side. In ServerScriptService if server side only.",
          es: "Coloca los ModuleScripts en ReplicatedStorage si se usan en el lado del cliente Y del servidor. En ServerScriptService si solo en el lado del servidor."
        },
        code: {
          fr: `--[[ MODULE GameMath (dans ReplicatedStorage) ]]
local GameMath = {}

function GameMath.calculateDamage(strength, defense)
    local base = math.max(0, strength - defense)
    return base + math.random(-5, 5)
end

function GameMath.xpForLevel(level)
    return level * level * 100
end

return GameMath  -- OBLIGATOIRE !

--[[ Dans ton Script : utiliser le module ]]
local RS = game:GetService("ReplicatedStorage")
local GameMath = require(RS:WaitForChild("GameMath"))

local damage = GameMath.calculateDamage(80, 30)
print("Dégâts : " .. damage)

local xp = GameMath.xpForLevel(5)
print("XP niveau 5 : " .. xp)`,
          en: `--[[ GameMath MODULE (in ReplicatedStorage) ]]
local GameMath = {}

function GameMath.calculateDamage(strength, defense)
    local base = math.max(0, strength - defense)
    return base + math.random(-5, 5)
end

function GameMath.xpForLevel(level)
    return level * level * 100
end

return GameMath  -- REQUIRED!

--[[ In your Script: use the module ]]
local RS = game:GetService("ReplicatedStorage")
local GameMath = require(RS:WaitForChild("GameMath"))

local damage = GameMath.calculateDamage(80, 30)
print("Damage: " .. damage)

local xp = GameMath.xpForLevel(5)
print("XP level 5: " .. xp)`,
          es: `--[[ MÓDULO GameMath (en ReplicatedStorage) ]]
local GameMath = {}

function GameMath.calculateDamage(strength, defense)
    local base = math.max(0, strength - defense)
    return base + math.random(-5, 5)
end

function GameMath.xpForLevel(level)
    return level * level * 100
end

return GameMath  -- ¡OBLIGATORIO!

--[[ En tu Script: usar el módulo ]]
local RS = game:GetService("ReplicatedStorage")
local GameMath = require(RS:WaitForChild("GameMath"))

local damage = GameMath.calculateDamage(80, 30)
print("Daño: " .. damage)

local xp = GameMath.xpForLevel(5)
print("XP nivel 5: " .. xp)`
        },
        studio: {
          where: { fr: "ReplicatedStorage (ModuleScript) + ServerScriptService (Script)", en: "ReplicatedStorage (ModuleScript) + ServerScriptService (Script)", es: "ReplicatedStorage (ModuleScript) + ServerScriptService (Script)" },
          steps: {
            fr: [
              "Dans ReplicatedStorage, clic droit → Insert Object → ModuleScript, nomme-le 'MathJeu'",
              "Copie le code du module dedans (remplace le code existant)",
              "Dans ServerScriptService, crée un Script avec le code d'utilisation",
              "Lance et regarde Output"
            ],
            en: [
              "In ReplicatedStorage, right-click → Insert Object → ModuleScript, name it 'GameMath'",
              "Copy the module code inside (replace existing code)",
              "In ServerScriptService, create a Script with the usage code",
              "Run and watch Output"
            ],
            es: [
              "En ReplicatedStorage, clic derecho → Insert Object → ModuleScript, nómbralo 'MatJuego'",
              "Copia el código del módulo dentro (reemplaza el código existente)",
              "En ServerScriptService, crea un Script con el código de uso",
              "Ejecuta y mira Output"
            ]
          },
          exercise: {
            fr: "🎯 Ajoute une fonction 'MathJeu.calculerVie(vieActuelle, degats, armure)' au module qui retourne la nouvelle vie après défense. Utilise-la dans ton Script.",
            en: "🎯 Add a function 'GameMath.calculateHealth(currentHealth, damage, armor)' to the module that returns the new health after defense. Use it in your Script.",
            es: "🎯 Añade una función 'MatJuego.calcularVida(vidaActual, dano, armadura)' al módulo que devuelva la nueva vida tras la defensa. Úsala en tu Script."
          }
        }
      }
    ]
  },
  {
    id: 5, icon: "🌍", color: "#E8874C",
    title: { fr: "Monde 3D", en: "3D World", es: "Mundo 3D" },
    sub: { fr: "Heures 14-15 • Coordonnées, CFrame, Animations", en: "Hours 14-15 • Coordinates, CFrame, Animations", es: "Horas 14-15 • Coordenadas, CFrame, Animaciones" },
    intro: {
      fr: "On entre dans la troisième dimension ! Tu vas apprendre à déplacer, faire pivoter et animer n'importe quel objet dans ton monde Roblox.",
      en: "We're entering the third dimension! You'll learn to move, rotate and animate any object in your Roblox world.",
      es: "¡Entramos en la tercera dimensión! Aprenderás a mover, rotar y animar cualquier objeto en tu mundo Roblox."
    },
    lessons: [
      {
        id: "5-1",
        title: { fr: "Coordonnées X, Y, Z — GPS du jeu", en: "X, Y, Z Coordinates — game GPS", es: "Coordenadas X, Y, Z — GPS del juego" },
        concept: { fr: "Vector3, Position, Instance.new(), Magnitude", en: "Vector3, Position, Instance.new(), Magnitude", es: "Vector3, Position, Instance.new(), Magnitude" },
        superpapa: {
          fr: "X c'est gauche/droite, Y c'est haut/bas, Z c'est avant/arrière. Maîtrise ça et tu contrôles tout l'espace 3D !",
          en: "X is left/right, Y is up/down, Z is forward/back. Master this and you control all 3D space!",
          es: "¡X es izquierda/derecha, Y es arriba/abajo, Z es adelante/atrás. ¡Domina esto y controlas todo el espacio 3D!"
        },
        explanation: {
          fr: "Dans Roblox, chaque objet existe en 3 dimensions. Vector3 représente une position ou une direction dans cet espace. Avec Instance.new() tu crées des objets par code — sans les glisser-déposer !",
          en: "In Roblox, every object exists in 3 dimensions. Vector3 represents a position or direction in that space. With Instance.new() you create objects by code — no drag and drop!",
          es: "En Roblox, cada objeto existe en 3 dimensiones. Vector3 representa una posición o dirección en ese espacio. ¡Con Instance.new() creas objetos por código — ¡sin arrastrar y soltar!"
        },
        tip: {
          fr: "(pointA - pointB).Magnitude donne la distance entre deux points — super utile pour les systèmes de détection d'ennemis !",
          en: "(pointA - pointB).Magnitude gives the distance between two points — super useful for enemy detection systems!",
          es: "¡(puntoA - puntoB).Magnitude da la distancia entre dos puntos — ¡super útil para sistemas de detección de enemigos!"
        },
        code: {
          fr: `-- Créer une brique par code
local brick = Instance.new("Part")
brick.Size = Vector3.new(4, 2, 4)
brick.Position = Vector3.new(0, 10, 0)
brick.BrickColor = BrickColor.new("Bright red")
brick.Anchored = true
brick.Parent = workspace

-- Déplacer la brique
brick.Position = Vector3.new(10, 5, 0)

-- Calculer une distance
local A = Vector3.new(0, 0, 0)
local B = Vector3.new(10, 0, 10)
local dist = (A - B).Magnitude
print("Distance : " .. math.floor(dist))`,
          en: `-- Create a brick by code
local brick = Instance.new("Part")
brick.Size = Vector3.new(4, 2, 4)
brick.Position = Vector3.new(0, 10, 0)
brick.BrickColor = BrickColor.new("Bright red")
brick.Anchored = true
brick.Parent = workspace

-- Move the brick
brick.Position = Vector3.new(10, 5, 0)

-- Calculate a distance
local A = Vector3.new(0, 0, 0)
local B = Vector3.new(10, 0, 10)
local dist = (A - B).Magnitude
print("Distance: " .. math.floor(dist))`,
          es: `-- Crear un ladrillo por código
local brick = Instance.new("Part")
brick.Size = Vector3.new(4, 2, 4)
brick.Position = Vector3.new(0, 10, 0)
brick.BrickColor = BrickColor.new("Bright red")
brick.Anchored = true
brick.Parent = workspace

-- Mover el ladrillo
brick.Position = Vector3.new(10, 5, 0)

-- Calcular una distancia
local A = Vector3.new(0, 0, 0)
local B = Vector3.new(10, 0, 10)
local dist = (A - B).Magnitude
print("Distancia: " .. math.floor(dist))`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: [
              "Copie le code dans un Script (ServerScriptService)",
              "Lance le jeu avec ▶",
              "Tu vois une brique rouge apparaître dans le jeu !",
              "Modifie la Position et la couleur pour voir les changements"
            ],
            en: [
              "Copy the code into a Script (ServerScriptService)",
              "Run the game with ▶",
              "You see a red brick appear in the game!",
              "Modify Position and color to see changes"
            ],
            es: [
              "Copia el código en un Script (ServerScriptService)",
              "Ejecuta el juego con ▶",
              "¡Ves un ladrillo rojo aparecer en el juego!",
              "Modifica Position y color para ver los cambios"
            ]
          },
          exercise: {
            fr: "🎯 Crée 5 briques de couleurs différentes et les place en ligne (X: 0, 5, 10, 15, 20) à la même hauteur. Elles doivent apparaître en lançant le jeu !",
            en: "🎯 Create 5 bricks of different colors and place them in a line (X: 0, 5, 10, 15, 20) at the same height. They must appear when running the game!",
            es: "🎯 Crea 5 ladrillos de colores diferentes y colócalos en línea (X: 0, 5, 10, 15, 20) a la misma altura. ¡Deben aparecer al ejecutar el juego!"
          }
        }
      },
      {
        id: "5-2",
        title: { fr: "CFrame — position ET rotation", en: "CFrame — position AND rotation", es: "CFrame — posición Y rotación" },
        concept: { fr: "CFrame.new, CFrame.Angles, lookAt, math.rad", en: "CFrame.new, CFrame.Angles, lookAt, math.rad", es: "CFrame.new, CFrame.Angles, lookAt, math.rad" },
        superpapa: {
          fr: "CFrame, c'est la clé du placement précis dans Roblox. Position + rotation en un seul objet — indispensable !",
          en: "CFrame is the key to precise placement in Roblox. Position + rotation in a single object — essential!",
          es: "¡CFrame es la clave para la colocación precisa en Roblox. ¡Posición + rotación en un solo objeto — ¡indispensable!"
        },
        explanation: {
          fr: "CFrame contient à la fois la position ET la rotation d'un objet. La multiplication de CFrames permet d'enchaîner des transformations. math.rad convertit les degrés en radians.",
          en: "CFrame contains both the position AND rotation of an object. Multiplying CFrames chains transformations. math.rad converts degrees to radians.",
          es: "CFrame contiene tanto la posición COMO la rotación de un objeto. Multiplicar CFrames encadena transformaciones. math.rad convierte grados a radianes."
        },
        tip: {
          fr: "CFrame.lookAt(origine, cible) crée un CFrame qui regarde vers un point — parfait pour les ennemis qui suivent le joueur !",
          en: "CFrame.lookAt(origin, target) creates a CFrame that looks toward a point — perfect for enemies following the player!",
          es: "¡CFrame.lookAt(origen, objetivo) crea un CFrame que mira hacia un punto — perfecto para enemigos que siguen al jugador!"
        },
        code: {
          fr: `local brick = workspace.MyBrick

-- Position + rotation (45 degrés)
brick.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)

-- Faire tourner progressivement
for angle = 0, 360, 5 do
    brick.CFrame = CFrame.new(0, 5, 0)
        * CFrame.Angles(0, math.rad(angle), 0)
    task.wait(0.05)
end

-- Regarder vers un point
local target = Vector3.new(20, 5, 0)
brick.CFrame = CFrame.lookAt(
    brick.Position, target
)`,
          en: `local brick = workspace.MyBrick

-- Position + rotation (45 degrees)
brick.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)

-- Rotate progressively
for angle = 0, 360, 5 do
    brick.CFrame = CFrame.new(0, 5, 0)
        * CFrame.Angles(0, math.rad(angle), 0)
    task.wait(0.05)
end

-- Look at a point
local target = Vector3.new(20, 5, 0)
brick.CFrame = CFrame.lookAt(
    brick.Position, target
)`,
          es: `local brick = workspace.MyBrick

-- Posición + rotación (45 grados)
brick.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)

-- Rotar progresivamente
for angle = 0, 360, 5 do
    brick.CFrame = CFrame.new(0, 5, 0)
        * CFrame.Angles(0, math.rad(angle), 0)
    task.wait(0.05)
end

-- Mirar hacia un punto
local target = Vector3.new(20, 5, 0)
brick.CFrame = CFrame.lookAt(
    brick.Position, target
)`
        },
        studio: {
          where: { fr: "Workspace (Part nommée 'MaBrique') + ServerScriptService (Script)", en: "Workspace (Part named 'MaBrique') + ServerScriptService (Script)", es: "Workspace (Part llamada 'MaBrique') + ServerScriptService (Script)" },
          steps: {
            fr: [
              "Dans le Workspace, place une Part (clic droit → Insert Object → Part)",
              "Renomme-la 'MaBrique' dans les propriétés",
              "Crée le Script dans ServerScriptService",
              "Lance et regarde ta brique tourner !"
            ],
            en: [
              "In the Workspace, place a Part (right-click → Insert Object → Part)",
              "Rename it 'MaBrique' in properties",
              "Create the Script in ServerScriptService",
              "Run and watch your brick spin!"
            ],
            es: [
              "En el Workspace, coloca una Part (clic derecho → Insert Object → Part)",
              "Renómbrala 'MiBrique' en propiedades",
              "Crea el Script en ServerScriptService",
              "¡Ejecuta y mira girar tu ladrillo!"
            ]
          },
          exercise: {
            fr: "🎯 Crée une brique qui tourne sur elle-même EN BOUCLE (utilise while true do). Elle doit tourner indéfiniment sans s'arrêter.",
            en: "🎯 Create a brick that spins on itself IN A LOOP (use while true do). It must rotate indefinitely without stopping.",
            es: "🎯 Crea un ladrillo que gire sobre sí mismo EN BUCLE (usa while true do). Debe rotar indefinidamente sin detenerse."
          }
        }
      },
      {
        id: "5-3",
        title: { fr: "Tweens — animations fluides", en: "Tweens — smooth animations", es: "Tweens — animaciones suaves" },
        concept: { fr: "TweenService, TweenInfo, EasingStyle, Completed", en: "TweenService, TweenInfo, EasingStyle, Completed", es: "TweenService, TweenInfo, EasingStyle, Completed" },
        superpapa: {
          fr: "Un jeu sans animations, c'est comme un film sans musique. Les Tweens, c'est ce qui rend tout beau et fluide !",
          en: "A game without animations is like a movie without music. Tweens are what makes everything beautiful and smooth!",
          es: "¡Un juego sin animaciones es como una película sin música. ¡Los Tweens son lo que hace todo bello y fluido!"
        },
        explanation: {
          fr: "TweenService anime la transition entre deux états d'un objet — position, couleur, taille, transparence. EasingStyle contrôle la courbe : Bounce, Elastic, Sine... chacun crée une sensation différente.",
          en: "TweenService animates the transition between two states of an object — position, color, size, transparency. EasingStyle controls the curve: Bounce, Elastic, Sine... each creates a different feel.",
          es: "TweenService anima la transición entre dos estados de un objeto — posición, color, tamaño, transparencia. EasingStyle controla la curva: Bounce, Elastic, Sine... cada uno crea una sensación diferente."
        },
        tip: {
          fr: "tween.Completed:Wait() attend que l'animation soit terminée avant de continuer — essentiel pour enchaîner plusieurs animations !",
          en: "tween.Completed:Wait() waits for the animation to finish before continuing — essential for chaining multiple animations!",
          es: "¡tween.Completed:Wait() espera a que la animación termine antes de continuar — esencial para encadenar varias animaciones!"
        },
        code: {
          fr: `local TweenService = game:GetService("TweenService")
local brick = workspace.MyBrick

-- Tween : déplacer en 2 secondes avec rebond
local info = TweenInfo.new(2,
    Enum.EasingStyle.Bounce,
    Enum.EasingDirection.Out
)

local t1 = TweenService:Create(brick, info,
    {Position = Vector3.new(20, 10, 0)})
t1:Play()

-- Attendre la fin et animer la couleur
t1.Completed:Wait()
local t2 = TweenService:Create(brick,
    TweenInfo.new(0.5, Enum.EasingStyle.Elastic),
    {Color = Color3.fromRGB(255, 200, 0)})
t2:Play()`,
          en: `local TweenService = game:GetService("TweenService")
local brick = workspace.MyBrick

-- Tween: move in 2 seconds with bounce
local info = TweenInfo.new(2,
    Enum.EasingStyle.Bounce,
    Enum.EasingDirection.Out
)

local t1 = TweenService:Create(brick, info,
    {Position = Vector3.new(20, 10, 0)})
t1:Play()

-- Wait for completion and animate color
t1.Completed:Wait()
local t2 = TweenService:Create(brick,
    TweenInfo.new(0.5, Enum.EasingStyle.Elastic),
    {Color = Color3.fromRGB(255, 200, 0)})
t2:Play()`,
          es: `local TweenService = game:GetService("TweenService")
local brick = workspace.MyBrick

-- Tween: mover en 2 segundos con rebote
local info = TweenInfo.new(2,
    Enum.EasingStyle.Bounce,
    Enum.EasingDirection.Out
)

local t1 = TweenService:Create(brick, info,
    {Position = Vector3.new(20, 10, 0)})
t1:Play()

-- Esperar el final y animar el color
t1.Completed:Wait()
local t2 = TweenService:Create(brick,
    TweenInfo.new(0.5, Enum.EasingStyle.Elastic),
    {Color = Color3.fromRGB(255, 200, 0)})
t2:Play()`
        },
        studio: {
          where: { fr: "Workspace (Part 'MaBrique' Anchored=true) + ServerScriptService (Script)", en: "Workspace (Part 'MaBrique' Anchored=true) + ServerScriptService (Script)", es: "Workspace (Part 'MaBrique' Anchored=true) + ServerScriptService (Script)" },
          steps: {
            fr: [
              "Place une Part anchored dans le Workspace, nomme-la 'MaBrique'",
              "Copie le code dans un Script (ServerScriptService)",
              "Lance et regarde ta brique se déplacer avec un rebond !",
              "Essaie d'autres EasingStyle : Sine, Elastic, Quad"
            ],
            en: [
              "Place an anchored Part in the Workspace, name it 'MaBrique'",
              "Copy the code into a Script (ServerScriptService)",
              "Run and watch your brick move with a bounce!",
              "Try other EasingStyles: Sine, Elastic, Quad"
            ],
            es: [
              "Coloca una Part anclada en el Workspace, nómbrala 'MaBrique'",
              "Copia el código en un Script (ServerScriptService)",
              "¡Ejecuta y mira tu ladrillo moverse con un rebote!",
              "Prueba otros EasingStyle: Sine, Elastic, Quad"
            ]
          },
          exercise: {
            fr: "🎯 Crée une animation en 3 étapes : la brique monte (Y+10), change de couleur en rouge, puis redescend à sa position originale. Utilise Completed:Wait() entre chaque étape.",
            en: "🎯 Create a 3-step animation: the brick goes up (Y+10), changes color to red, then comes back down to its original position. Use Completed:Wait() between each step.",
            es: "🎯 Crea una animación de 3 pasos: el ladrillo sube (Y+10), cambia de color a rojo, luego baja de vuelta a su posición original. Usa Completed:Wait() entre cada paso."
          }
        }
      }
    ]
  },
  {
    id: 6, icon: "👑", color: "#E84C4C",
    title: { fr: "Créer son Jeu", en: "Create your Game", es: "Crea tu Juego" },
    sub: { fr: "Heures 16-21 • GameLoop, DataStore, POO, Héritage", en: "Hours 16-21 • GameLoop, DataStore, OOP, Inheritance", es: "Horas 16-21 • GameLoop, DataStore, POO, Herencia" },
    intro: {
      fr: "Le niveau final ! On assemble tout ce qu'on a appris pour construire un vrai jeu avec sauvegarde, personnages et logique complète.",
      en: "The final level! We put together everything we've learned to build a real game with saving, characters and complete logic.",
      es: "¡El nivel final! Juntamos todo lo que hemos aprendido para construir un juego real con guardado, personajes y lógica completa."
    },
    lessons: [
      {
        id: "6-1",
        title: { fr: "Game Loop — le cœur de ton jeu", en: "Game Loop — your game's heart", es: "Game Loop — el corazón de tu juego" },
        concept: { fr: "RunService.Heartbeat, états du jeu, task.spawn", en: "RunService.Heartbeat, game states, task.spawn", es: "RunService.Heartbeat, estados del juego, task.spawn" },
        superpapa: {
          fr: "Tout jeu vidéo tourne en boucle : mise à jour → affichage → mise à jour... C'est le battement de cœur de ton jeu !",
          en: "Every video game runs in a loop: update → display → update... That's your game's heartbeat!",
          es: "¡Todo videojuego funciona en bucle: actualizar → mostrar → actualizar... ¡Ese es el latido de tu juego!"
        },
        explanation: {
          fr: "Le Game Loop est la boucle principale qui fait tourner un jeu. RunService.Heartbeat se déclenche à chaque frame (image par image). Le paramètre 'dt' indique le temps écoulé depuis la dernière image.",
          en: "The Game Loop is the main loop that runs a game. RunService.Heartbeat fires every frame (image by image). The 'dt' parameter indicates the time elapsed since the last frame.",
          es: "El Game Loop es el bucle principal que ejecuta un juego. RunService.Heartbeat se dispara en cada frame (imagen por imagen). El parámetro 'dt' indica el tiempo transcurrido desde el último frame."
        },
        tip: {
          fr: "Utilise 'dt' (delta time) pour des mouvements indépendants de la vitesse de l'ordinateur. Sans dt, le jeu va plus vite sur un bon PC !",
          en: "Use 'dt' (delta time) for movements independent of computer speed. Without dt, the game runs faster on a good PC!",
          es: "¡Usa 'dt' (delta time) para movimientos independientes de la velocidad del ordenador. ¡Sin dt, el juego va más rápido en un buen PC!"
        },
        code: {
          fr: `local RunService = game:GetService("RunService")

local game_state = {
    running = false,
    score = 0,
    timeLeft = 60
}

local function start()
    game_state.running = true
    game_state.score = 0
    game_state.timeLeft = 60
    print("=== JEU DÉMARRÉ ===")
end

local connection
connection = RunService.Heartbeat:Connect(function(dt)
    if not game_state.running then return end
    game_state.timeLeft = game_state.timeLeft - dt
    if game_state.timeLeft <= 0 then
        game_state.running = false
        print("GAME OVER ! Score : " .. game_state.score)
        connection:Disconnect()
    end
end)

task.spawn(function()
    start()
    while game_state.running do
        task.wait(5)
        game_state.score = game_state.score + 100
        print("Score : " .. game_state.score)
    end
end)`,
          en: `local RunService = game:GetService("RunService")

local game_state = {
    running = false,
    score = 0,
    timeLeft = 60
}

local function start()
    game_state.running = true
    game_state.score = 0
    game_state.timeLeft = 60
    print("=== GAME STARTED ===")
end

local connection
connection = RunService.Heartbeat:Connect(function(dt)
    if not game_state.running then return end
    game_state.timeLeft = game_state.timeLeft - dt
    if game_state.timeLeft <= 0 then
        game_state.running = false
        print("GAME OVER! Score: " .. game_state.score)
        connection:Disconnect()
    end
end)

task.spawn(function()
    start()
    while game_state.running do
        task.wait(5)
        game_state.score = game_state.score + 100
        print("Score: " .. game_state.score)
    end
end)`,
          es: `local RunService = game:GetService("RunService")

local game_state = {
    running = false,
    score = 0,
    timeLeft = 60
}

local function start()
    game_state.running = true
    game_state.score = 0
    game_state.timeLeft = 60
    print("=== JUEGO INICIADO ===")
end

local connection
connection = RunService.Heartbeat:Connect(function(dt)
    if not game_state.running then return end
    game_state.timeLeft = game_state.timeLeft - dt
    if game_state.timeLeft <= 0 then
        game_state.running = false
        print("¡GAME OVER! Puntuación: " .. game_state.score)
        connection:Disconnect()
    end
end)

task.spawn(function()
    start()
    while game_state.running do
        task.wait(5)
        game_state.score = game_state.score + 100
        print("Puntuación: " .. game_state.score)
    end
end)`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie le code dans un Script", "Lance le jeu", "Regarde Output — le score monte toutes les 5 secondes et le jeu s'arrête à 60s"],
            en: ["Copy the code into a Script", "Run the game", "Watch Output — score rises every 5 seconds and game stops at 60s"],
            es: ["Copia el código en un Script", "Ejecuta el juego", "Mira Output — la puntuación sube cada 5 segundos y el juego se detiene a los 60s"]
          },
          exercise: {
            fr: "🎯 Modifie le jeu pour que le score augmente de 10 toutes les secondes (pas toutes les 5s). Ajoute un message 'MI-TEMPS !' quand il reste 30 secondes.",
            en: "🎯 Modify the game so the score increases by 10 every second (not every 5s). Add a 'HALF-TIME!' message when 30 seconds remain.",
            es: "🎯 Modifica el juego para que la puntuación aumente en 10 cada segundo (no cada 5s). Añade un mensaje '¡MEDIO TIEMPO!' cuando queden 30 segundos."
          }
        }
      },
      {
        id: "6-2",
        title: { fr: "DataStore — sauvegarder les données", en: "DataStore — saving data", es: "DataStore — guardar datos" },
        concept: { fr: "GetAsync, SetAsync, pcall, BindToClose", en: "GetAsync, SetAsync, pcall, BindToClose", es: "GetAsync, SetAsync, pcall, BindToClose" },
        superpapa: {
          fr: "Pas de sauvegarde = le joueur perd tout quand il quitte. C'est inadmissible ! Les DataStores gardent tout pour toujours.",
          en: "No saving = player loses everything when they leave. Unacceptable! DataStores keep everything forever.",
          es: "¡Sin guardado = el jugador pierde todo al salir. ¡Inaceptable! Los DataStores guardan todo para siempre."
        },
        explanation: {
          fr: "DataStoreService est le système de sauvegarde persistante de Roblox. Les données restent même quand le joueur quitte. Il faut activer 'Enable Studio Access to API Services' dans Game Settings.",
          en: "DataStoreService is Roblox's persistent saving system. Data remains even when the player leaves. You need to enable 'Enable Studio Access to API Services' in Game Settings.",
          es: "DataStoreService es el sistema de guardado persistente de Roblox. Los datos permanecen incluso cuando el jugador se va. Necesitas activar 'Enable Studio Access to API Services' en Game Settings."
        },
        tip: {
          fr: "Toujours utiliser pcall() avec les DataStores — la connexion peut échouer, et ça ne doit pas planter ton jeu !",
          en: "Always use pcall() with DataStores — the connection can fail, and that shouldn't crash your game!",
          es: "¡Usa siempre pcall() con los DataStores — ¡la conexión puede fallar, y no debe bloquear tu juego!"
        },
        code: {
          fr: `-- Activer : Game Settings -> Security -> Enable Studio Access to API Services
local DSS = game:GetService("DataStoreService")
local Players = game:GetService("Players")
local saves = DSS:GetDataStore("SavesMichi_v1")

local function save(player)
    local key = "p_" .. player.UserId
    local data = {
        coins = player.leaderstats.Coins.Value,
        level = player.leaderstats.Level.Value,
    }
    local ok, err = pcall(function()
        saves:SetAsync(key, data)
    end)
    if ok then print("Sauvegardé !") else warn(err) end
end

local function load(player)
    local key = "p_" .. player.UserId
    local ok, data = pcall(function()
        return saves:GetAsync(key)
    end)
    if ok and data then
        player.leaderstats.Coins.Value = data.coins or 0
        print("Chargé ! Pièces : " .. data.coins)
    end
end

Players.PlayerAdded:Connect(load)
Players.PlayerRemoving:Connect(save)`,
          en: `-- Enable: Game Settings -> Security -> Enable Studio Access to API Services
local DSS = game:GetService("DataStoreService")
local Players = game:GetService("Players")
local saves = DSS:GetDataStore("SavesMichi_v1")

local function save(player)
    local key = "p_" .. player.UserId
    local data = {
        coins = player.leaderstats.Coins.Value,
        level = player.leaderstats.Level.Value,
    }
    local ok, err = pcall(function()
        saves:SetAsync(key, data)
    end)
    if ok then print("Saved!") else warn(err) end
end

local function load(player)
    local key = "p_" .. player.UserId
    local ok, data = pcall(function()
        return saves:GetAsync(key)
    end)
    if ok and data then
        player.leaderstats.Coins.Value = data.coins or 0
        print("Loaded! Coins: " .. data.coins)
    end
end

Players.PlayerAdded:Connect(load)
Players.PlayerRemoving:Connect(save)`,
          es: `-- Activar: Game Settings -> Security -> Enable Studio Access to API Services
local DSS = game:GetService("DataStoreService")
local Players = game:GetService("Players")
local saves = DSS:GetDataStore("SavesMichi_v1")

local function save(player)
    local key = "p_" .. player.UserId
    local data = {
        coins = player.leaderstats.Coins.Value,
        level = player.leaderstats.Level.Value,
    }
    local ok, err = pcall(function()
        saves:SetAsync(key, data)
    end)
    if ok then print("¡Guardado!") else warn(err) end
end

local function load(player)
    local key = "p_" .. player.UserId
    local ok, data = pcall(function()
        return saves:GetAsync(key)
    end)
    if ok and data then
        player.leaderstats.Coins.Value = data.coins or 0
        print("¡Cargado! Monedas: " .. data.coins)
    end
end

Players.PlayerAdded:Connect(load)
Players.PlayerRemoving:Connect(save)`
        },
        studio: {
          where: { fr: "Game Settings + ServerScriptService → Script", en: "Game Settings + ServerScriptService → Script", es: "Game Settings + ServerScriptService → Script" },
          steps: {
            fr: [
              "Va dans Game Settings (bouton en haut) → Security",
              "Active 'Enable Studio Access to API Services'",
              "Copie le code dans un Script (assure-toi d'avoir les leaderstats du module 4-1)",
              "Lance, donne des pièces manuellement, arrête, relance — les pièces sont sauvegardées !"
            ],
            en: [
              "Go to Game Settings (top button) → Security",
              "Enable 'Enable Studio Access to API Services'",
              "Copy the code into a Script (make sure you have leaderstats from module 4-1)",
              "Run, manually give coins, stop, rerun — coins are saved!"
            ],
            es: [
              "Ve a Game Settings (botón arriba) → Security",
              "Activa 'Enable Studio Access to API Services'",
              "Copia el código en un Script (asegúrate de tener los leaderstats del módulo 4-1)",
              "Ejecuta, da monedas manualmente, detén, vuelve a ejecutar — ¡las monedas están guardadas!"
            ]
          },
          exercise: {
            fr: "🎯 Ajoute la sauvegarde du 'Niveau' du joueur au DataStore. Quand il charge, affiche 'Bienvenue ! Tu es au niveau X avec Y pièces.'",
            en: "🎯 Add saving of the player's 'Level' to the DataStore. When loading, display 'Welcome! You are at level X with Y coins.'",
            es: "🎯 Añade el guardado del 'Nivel' del jugador al DataStore. Al cargar, muestra '¡Bienvenido! Estás en el nivel X con Y monedas.'"
          }
        }
      },
      {
        id: "6-3",
        title: { fr: "Programmation Orientée Objet", en: "Object-Oriented Programming", es: "Programación Orientada a Objetos" },
        concept: { fr: "Classes, instances, méthodes, self, setmetatable", en: "Classes, instances, methods, self, setmetatable", es: "Clases, instancias, métodos, self, setmetatable" },
        superpapa: {
          fr: "La POO, c'est le niveau pro du code. Tu crées des 'moules' pour tes personnages — propre, organisé, réutilisable !",
          en: "OOP is the pro level of coding. You create 'templates' for your characters — clean, organized, reusable!",
          es: "¡La POO es el nivel pro del código. ¡Creas 'moldes' para tus personajes — limpio, organizado, reutilizable!"
        },
        explanation: {
          fr: "La Programmation Orientée Objet permet de créer des 'classes' — des modèles pour créer des objets avec leurs propres propriétés et comportements. C'est comme ça que tous les grands jeux sont programmés.",
          en: "Object-Oriented Programming lets you create 'classes' — templates for creating objects with their own properties and behaviors. This is how all major games are programmed.",
          es: "La Programación Orientada a Objetos permite crear 'clases' — plantillas para crear objetos con sus propias propiedades y comportamientos. Así es como se programan todos los grandes juegos."
        },
        tip: {
          fr: "Le ':' dans 'Ennemi:attaquer()' passe automatiquement l'objet lui-même comme premier paramètre 'self'. C'est la magie de la POO en Lua !",
          en: "The ':' in 'Enemy:attack()' automatically passes the object itself as the first 'self' parameter. That's the magic of OOP in Lua!",
          es: "¡El ':' en 'Enemigo:atacar()' pasa automáticamente el objeto mismo como primer parámetro 'self'. ¡Esa es la magia de la POO en Lua!"
        },
        code: {
          fr: `local Enemy = {}
Enemy.__index = Enemy

function Enemy.new(name, health, strength)
    local self = setmetatable({}, Enemy)
    self.name = name
    self.health = health
    self.strength = strength
    self.isAlive = true
    return self
end

function Enemy:takeDamage(damage)
    self.health = math.max(0, self.health - damage)
    print(self.name .. " : " .. self.health .. " HP")
    if self.health <= 0 then
        self.isAlive = false
        print(self.name .. " est vaincu !")
    end
end

function Enemy:attack()
    return self.strength + math.random(-5, 5)
end

local goblin = Enemy.new("Goblin", 50, 15)
local dragon = Enemy.new("Dragon", 500, 80)
goblin:takeDamage(30)
goblin:takeDamage(25)
print("Dragon attaque pour : " .. dragon:attack())`,
          en: `local Enemy = {}
Enemy.__index = Enemy

function Enemy.new(name, health, strength)
    local self = setmetatable({}, Enemy)
    self.name = name
    self.health = health
    self.strength = strength
    self.isAlive = true
    return self
end

function Enemy:takeDamage(damage)
    self.health = math.max(0, self.health - damage)
    print(self.name .. ": " .. self.health .. " HP")
    if self.health <= 0 then
        self.isAlive = false
        print(self.name .. " is defeated!")
    end
end

function Enemy:attack()
    return self.strength + math.random(-5, 5)
end

local goblin = Enemy.new("Goblin", 50, 15)
local dragon = Enemy.new("Dragon", 500, 80)
goblin:takeDamage(30)
goblin:takeDamage(25)
print("Dragon attacks for: " .. dragon:attack())`,
          es: `local Enemy = {}
Enemy.__index = Enemy

function Enemy.new(name, health, strength)
    local self = setmetatable({}, Enemy)
    self.name = name
    self.health = health
    self.strength = strength
    self.isAlive = true
    return self
end

function Enemy:takeDamage(damage)
    self.health = math.max(0, self.health - damage)
    print(self.name .. ": " .. self.health .. " HP")
    if self.health <= 0 then
        self.isAlive = false
        print("¡" .. self.name .. " es derrotado!")
    end
end

function Enemy:attack()
    return self.strength + math.random(-5, 5)
end

local goblin = Enemy.new("Goblin", 50, 15)
local dragon = Enemy.new("Dragon", 500, 80)
goblin:takeDamage(30)
goblin:takeDamage(25)
print("Dragon ataca por: " .. dragon:attack())`
        },
        studio: {
          where: { fr: "ServerScriptService → Script (ou ModuleScript)", en: "ServerScriptService → Script (or ModuleScript)", es: "ServerScriptService → Script (o ModuleScript)" },
          steps: {
            fr: ["Copie le code dans un Script", "Lance et regarde le combat dans Output", "Essaie de créer 3 ennemis différents avec new()"],
            en: ["Copy the code into a Script", "Run and watch the combat in Output", "Try creating 3 different enemies with new()"],
            es: ["Copia el código en un Script", "Ejecuta y mira el combate en Output", "Intenta crear 3 enemigos diferentes con new()"]
          },
          exercise: {
            fr: "🎯 Ajoute une méthode 'Ennemi:seSoigner(quantite)' qui ajoute de la vie (sans dépasser vieMax). Teste avec goblin:seSoigner(20).",
            en: "🎯 Add a method 'Enemy:heal(amount)' that adds health (without exceeding maxHealth). Test with goblin:heal(20).",
            es: "🎯 Añade un método 'Enemigo:curar(cantidad)' que añade vida (sin superar vidaMax). Prueba con goblin:curar(20)."
          }
        }
      },
      {
        id: "6-4",
        title: { fr: "Héritage — spécialiser les classes", en: "Inheritance — specializing classes", es: "Herencia — especializar clases" },
        concept: { fr: "setmetatable héritage, polymorphisme, super classe", en: "setmetatable inheritance, polymorphism, super class", es: "setmetatable herencia, polimorfismo, superclase" },
        superpapa: {
          fr: "Ton Goblin Archer fait TOUT ce que fait un Goblin, PLUS tirer des flèches. C'est l'héritage : hériter des capacités d'une classe parente !",
          en: "Your Archer Goblin does EVERYTHING a Goblin does, PLUS shoot arrows. That's inheritance: inheriting abilities from a parent class!",
          es: "¡Tu Goblin Arquero hace TODO lo que hace un Goblin, MÁS disparar flechas. ¡Eso es la herencia: heredar habilidades de una clase padre!"
        },
        explanation: {
          fr: "L'héritage crée une nouvelle classe basée sur une existante, en ajoutant ou modifiant des comportements. Le polymorphisme permet d'appeler la même méthode sur des objets de types différents.",
          en: "Inheritance creates a new class based on an existing one, adding or modifying behaviors. Polymorphism lets you call the same method on objects of different types.",
          es: "La herencia crea una nueva clase basada en una existente, añadiendo o modificando comportamientos. El polimorfismo permite llamar al mismo método en objetos de diferentes tipos."
        },
        tip: {
          fr: "Pour appeler la méthode du parent depuis l'enfant, utilise ClasseParente.methode(self, ...) — ça évite la récursion infinie !",
          en: "To call the parent method from the child, use ParentClass.method(self, ...) — it avoids infinite recursion!",
          es: "Para llamar al método padre desde el hijo, usa ClasePadre.metodo(self, ...) — ¡evita la recursión infinita!"
        },
        code: {
          fr: `local Character = {}
Character.__index = Character
function Character.new(name, health)
    return setmetatable({name=name, health=health, strength=20}, Character)
end
function Character:attack()
    print(self.name .. " frappe pour " .. self.strength)
end

-- Warrior hérite de Character
local Warrior = setmetatable({}, {__index = Character})
Warrior.__index = Warrior
function Warrior.new(name, health, armor)
    local self = Character.new(name, health)
    setmetatable(self, Warrior)
    self.armor = armor
    self.strength = 40  -- plus fort !
    return self
end
function Warrior:attack()  -- redéfini !
    print(self.name .. " FRAPPE FORT pour " .. self.strength * 1.5)
end

local bob = Character.new("Bob", 100)
local michi = Warrior.new("Michi", 150, 50)
bob:attack()    -- méthode parent
michi:attack() -- méthode enfant (polymorphisme)`,
          en: `local Character = {}
Character.__index = Character
function Character.new(name, health)
    return setmetatable({name=name, health=health, strength=20}, Character)
end
function Character:attack()
    print(self.name .. " hits for " .. self.strength)
end

-- Warrior inherits from Character
local Warrior = setmetatable({}, {__index = Character})
Warrior.__index = Warrior
function Warrior.new(name, health, armor)
    local self = Character.new(name, health)
    setmetatable(self, Warrior)
    self.armor = armor
    self.strength = 40  -- stronger!
    return self
end
function Warrior:attack()  -- overridden!
    print(self.name .. " HITS HARD for " .. self.strength * 1.5)
end

local bob = Character.new("Bob", 100)
local michi = Warrior.new("Michi", 150, 50)
bob:attack()    -- parent method
michi:attack() -- child method (polymorphism)`,
          es: `local Character = {}
Character.__index = Character
function Character.new(name, health)
    return setmetatable({name=name, health=health, strength=20}, Character)
end
function Character:attack()
    print(self.name .. " golpea por " .. self.strength)
end

-- Warrior hereda de Character
local Warrior = setmetatable({}, {__index = Character})
Warrior.__index = Warrior
function Warrior.new(name, health, armor)
    local self = Character.new(name, health)
    setmetatable(self, Warrior)
    self.armor = armor
    self.strength = 40  -- ¡más fuerte!
    return self
end
function Warrior:attack()  -- ¡redefinido!
    print(self.name .. " GOLPEA FUERTE por " .. self.strength * 1.5)
end

local bob = Character.new("Bob", 100)
local michi = Warrior.new("Michi", 150, 50)
bob:attack()    -- método padre
michi:attack() -- método hijo (polimorfismo)`
        },
        studio: {
          where: { fr: "ServerScriptService → Script", en: "ServerScriptService → Script", es: "ServerScriptService → Script" },
          steps: {
            fr: ["Copie et lance le code", "Observe que bob et mathis attaquent différemment", "Crée un Mage qui hérite aussi de Personnage"],
            en: ["Copy and run the code", "Observe that bob and mathis attack differently", "Create a Mage that also inherits from Character"],
            es: ["Copia y ejecuta el código", "Observa que bob y mathis atacan diferente", "Crea un Mago que también herede de Personaje"]
          },
          exercise: {
            fr: "🎯 Crée une classe 'Archer' qui hérite de Personnage avec une méthode tirerFleche() qui fait des dégâts à distance. Crée un tableau avec 1 Guerrier, 1 Archer, 1 Personnage et fais-les tous attaquer avec une boucle for.",
            en: "🎯 Create an 'Archer' class that inherits from Character with a shootArrow() method that deals ranged damage. Create an array with 1 Warrior, 1 Archer, 1 Character and make them all attack with a for loop.",
            es: "🎯 Crea una clase 'Arquero' que herede de Personaje con un método dispararFlecha() que cause daño a distancia. Crea un array con 1 Guerrero, 1 Arquero, 1 Personaje y hazlos atacar a todos con un bucle for."
          }
        }
      }
    ]
  }
];

// ─── UI STRINGS ───────────────────────────────────────────────────────────────

const UI = {
  fr: {
    back: "← Retour", markDone: "✓ J'ai compris, leçon suivante !",
    completed: "✓ Terminé", askSuperpapa: "Demander à Superpapa",
    placeholder: "Une question ? Superpapa répond !",
    tip: "Astuce de Superpapa", codeTitle: "Code Lua",
    listenBtn: "🔊 Écouter", stopBtn: "⏹ Stop",
    celebTitle: "Bravo Michi !", nextLesson: "Leçon suivante →",
    celebMsg: ["Super travail !", "Continue comme ça !", "Tu es un vrai codeur !", "Impressionnant !", "Je suis fier de toi !"],
    xpGained: "+50 XP", lessons: "leçons",
    studioTitle: "📺 Dans Roblox Studio",
    studioOpen: "▼ Ouvrir les instructions Studio",
    studioClose: "▲ Fermer",
    studioWhere: "Où écrire ce code :",
    studioSteps: "Étapes :",
    exerciseTitle: "Mini-défi Studio",
    start: "Commencer l'aventure →",
    studioGuideTitle: "Comment ça marche ?",
    studioGuideBtn: "C'est compris, allons-y ! →",
    systemPrompt: (lesson, mod) =>
      `Tu es Superpapa973, professeur de code passionné pour enfants de 8-13 ans apprenant Lua pour Roblox. Réponds en français, simplement et avec encouragement. Analogies jeux vidéo. Max 3-4 phrases courtes. Tu portes une veste à flammes et un chapeau cowboy avec une croix.
Module : ${mod || "général"}. ${lesson ? `Leçon : "${lesson.title?.fr}". Concept : ${lesson.concept?.fr}.` : ""}`
  },
  en: {
    back: "← Back", markDone: "✓ Got it, next lesson!",
    completed: "✓ Done", askSuperpapa: "Ask Superpapa",
    placeholder: "Got a question? Superpapa answers!",
    tip: "Superpapa's tip", codeTitle: "Lua Code",
    listenBtn: "🔊 Listen", stopBtn: "⏹ Stop",
    celebTitle: "Well done Michi!", nextLesson: "Next lesson →",
    celebMsg: ["Great work!", "Keep it up!", "You're a real coder!", "Impressive!", "I'm proud of you!"],
    xpGained: "+50 XP", lessons: "lessons",
    studioTitle: "📺 In Roblox Studio",
    studioOpen: "▼ Open Studio instructions",
    studioClose: "▲ Close",
    studioWhere: "Where to write this code:",
    studioSteps: "Steps:",
    exerciseTitle: "Studio Mini-Challenge",
    start: "Start the adventure →",
    studioGuideTitle: "How does it work?",
    studioGuideBtn: "Got it, let's go! →",
    systemPrompt: (lesson, mod) =>
      `You are Superpapa973, a passionate coding teacher for kids 8-13 learning Lua for Roblox. Reply in English, simply and encouragingly. Video game analogies. Max 3-4 short sentences. You wear a flame jacket and cowboy hat with a cross.
Module: ${mod || "general"}. ${lesson ? `Lesson: "${lesson.title?.en}". Concept: ${lesson.concept?.en}.` : ""}`
  },
  es: {
    back: "← Volver", markDone: "✓ ¡Entendido, siguiente lección!",
    completed: "✓ Completado", askSuperpapa: "Preguntar a Superpapa",
    placeholder: "¿Una pregunta? ¡Superpapa responde!",
    tip: "Consejo de Superpapa", codeTitle: "Código Lua",
    listenBtn: "🔊 Escuchar", stopBtn: "⏹ Parar",
    celebTitle: "¡Bravo Michi!", nextLesson: "Siguiente lección →",
    celebMsg: ["¡Gran trabajo!", "¡Sigue así!", "¡Eres un programador de verdad!", "¡Impresionante!", "¡Estoy orgulloso de ti!"],
    xpGained: "+50 XP", lessons: "lecciones",
    studioTitle: "📺 En Roblox Studio",
    studioOpen: "▼ Abrir las instrucciones Studio",
    studioClose: "▲ Cerrar",
    studioWhere: "Dónde escribir este código:",
    studioSteps: "Pasos:",
    exerciseTitle: "Mini-reto Studio",
    start: "¡Comenzar la aventura →",
    studioGuideTitle: "¿Cómo funciona?",
    studioGuideBtn: "¡Entendido, vamos! →",
    systemPrompt: (lesson, mod) =>
      `Eres Superpapa973, un profesor de código apasionado para niños de 8-13 años que aprenden Lua para Roblox. Responde en español, de forma sencilla y alentadora. Analogías de videojuegos. Máximo 3-4 frases cortas. Llevas una chaqueta de llamas y sombrero vaquero con una cruz.
Módulo: ${mod || "general"}. ${lesson ? `Lección: "${lesson.title?.es}". Concepto: ${lesson.concept?.es}.` : ""}`
  }
};

// ─── AUDIO — OpenAI TTS voix masculine "onyx" ────────────────────────────────

let currentAudio = null;

async function speak(text, lang, onEnd) {
  stopSpeak();
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang }),
    });
    if (!res.ok) throw new Error("TTS error");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    currentAudio = new Audio(url);
    currentAudio.onended = () => { onEnd && onEnd(); URL.revokeObjectURL(url); };
    currentAudio.onerror = () => { onEnd && onEnd(); };
    await currentAudio.play();
    return currentAudio;
  } catch (e) {
    console.error("TTS:", e);
    onEnd && onEnd();
    return null;
  }
}

function stopSpeak() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}

// initVoice n'est plus nécessaire avec OpenAI TTS
function initVoice() {}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function t(obj, lang) { return obj?.[lang] || obj?.fr || obj || ""; }

function highlightLua(code) {
  const kw = ["local","function","if","then","elseif","else","end","while","do","for","return","true","false","not","and","or","nil","repeat","until","break","in"];
  // Step 1: HTML-escape
  let h = code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  // Step 2: Extract comments and strings first (replace with ALPHABETIC placeholders to avoid number-regex conflict)
  const tokens = [];
  const toAlpha = (n) => {
    let s = ''; n = n + 1;
    while (n > 0) { n--; s = String.fromCharCode(97 + (n % 26)) + s; n = Math.floor(n / 26); }
    return s;
  };
  const placeholder = (val) => {
    tokens.push(val);
    return `\x00${toAlpha(tokens.length - 1)}\x00`;
  };
  // Comments (multi-line then single-line)
  h = h.replace(/--\[\[[\s\S]*?\]\]/g, m => placeholder('<span style="color:#6272a4;font-style:italic">'+m+'</span>'));
  h = h.replace(/--[^\n]*/g, m => placeholder('<span style="color:#6272a4;font-style:italic">'+m+'</span>'));
  // Strings
  h = h.replace(/"([^"]*)"/g, m => placeholder('<span style="color:#50fa7b">'+m+'</span>'));
  // Numbers
  h = h.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span style="color:#bd93f9">$1</span>');
  // Keywords
  kw.forEach(k => { h = h.replace(new RegExp(`\\b(${k})\\b`,"g"),'<span style="color:#ff79c6;font-weight:500">$1</span>'); });
  // Capitalized identifiers (like Players, Vector3, Instance)
  h = h.replace(/\b([A-Z][a-zA-Z]+)(?=[:.])/g,'<span style="color:#8be9fd">$1</span>');
  // Restore placeholders (alphabetic IDs)
  h = h.replace(/\x00([a-z]+)\x00/g, (_, id) => {
    let n = 0;
    for (let i = 0; i < id.length; i++) {
      n = n * 26 + (id.charCodeAt(i) - 97 + 1);
    }
    return tokens[n - 1];
  });
  return h;
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function CelebrationModal({ ui, lang, onClose, lessonTitle }) {
  const msg = ui.celebMsg[Math.floor(Math.random() * ui.celebMsg.length)];
  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000 }} onClick={onClose}>
      <div style={{ background:"#fff",borderRadius:24,padding:"28px 24px",textAlign:"center",maxWidth:320,margin:"0 16px",animation:"popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }} onClick={e=>e.stopPropagation()}>
        <MathisAvatar size={110} celebrating={true} />
        <div style={{ fontSize:26,fontWeight:800,color:"#4CBE72",margin:"10px 0 6px" }}>{ui.celebTitle}</div>
        <div style={{ fontSize:17,color:"#2d3748",marginBottom:4 }}>{msg}</div>
        <div style={{ fontSize:13,color:"#718096",marginBottom:16 }}>"{lessonTitle}"</div>
        <div style={{ fontSize:22,fontWeight:800,color:"#f6ad55",marginBottom:20 }}>{ui.xpGained} ⭐</div>
        <button onClick={onClose} style={{ background:"#4CBE72",color:"#fff",border:"none",borderRadius:14,padding:"12px 32px",fontSize:16,fontWeight:700,cursor:"pointer" }}>
          {ui.nextLesson}
        </button>
      </div>
    </div>
  );
}

function StudioSection({ lesson, lang, ui }) {
  const [open, setOpen] = useState(false);
  const s = lesson.studio;
  if (!s) return null;
  const steps = s.steps?.[lang] || s.steps?.fr || [];
  return (
    <div style={{ borderRadius:14,overflow:"hidden",border:"2px solid #f6ad55" }}>
      <div onClick={()=>setOpen(!open)} style={{ background:"#fffbeb",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:10 }}>
        <span style={{ fontSize:18 }}>🖥️</span>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700,color:"#92400e",fontSize:14 }}>{ui.studioTitle}</div>
          <div style={{ fontSize:12,color:"#b45309" }}>{open ? ui.studioClose : ui.studioOpen}</div>
        </div>
      </div>
      {open && (
        <div style={{ background:"#fffbeb",padding:"0 16px 16px",borderTop:"1px solid #fde68a" }}>
          <div style={{ fontSize:12,color:"#92400e",fontWeight:600,marginBottom:4 }}>{ui.studioWhere}</div>
          <div style={{ background:"#1a1a2e",borderRadius:8,padding:"8px 12px",fontSize:12,color:"#f6ad55",fontFamily:"monospace",marginBottom:12 }}>
            {t(s.where, lang)}
          </div>
          <div style={{ fontSize:12,color:"#92400e",fontWeight:600,marginBottom:6 }}>{ui.studioSteps}</div>
          <div style={{ display:"flex",flexDirection:"column",gap:6,marginBottom:14 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display:"flex",gap:10,alignItems:"flex-start" }}>
                <div style={{ width:22,height:22,borderRadius:"50%",background:"#f59e0b",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,marginTop:1 }}>{i+1}</div>
                <div style={{ fontSize:13,color:"#78350f",lineHeight:1.5 }}>{step}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"#fef3c7",borderRadius:10,padding:"10px 14px",border:"1px solid #fcd34d" }}>
            <div style={{ fontSize:12,fontWeight:700,color:"#92400e",marginBottom:4 }}>🎯 {ui.exerciseTitle}</div>
            <div style={{ fontSize:13,color:"#78350f",lineHeight:1.6 }}>{t(s.exercise, lang)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function ChatPanel({ ui, lesson, module, lang, onClose }) {
  const greetings = {
    fr: "Howdy partenaire ! Je suis Superpapa973 🤠 Pose-moi une question, ou clique sur une suggestion en bas !",
    en: "Howdy partner! I'm Superpapa973 🤠 Ask me a question or tap a suggestion below!",
    es: "¡Howdy compañero! Soy Superpapa973 🤠 ¡Hazme una pregunta o toca una sugerencia abajo!"
  };
  const suggestions = {
    fr: [
      "Peux-tu m'expliquer plus simplement ?",
      "Donne-moi un autre exemple",
      "À quoi ça sert dans un vrai jeu ?",
      "Comment je peux m'entraîner ?"
    ],
    en: [
      "Can you explain more simply?",
      "Give me another example",
      "What's this used for in a real game?",
      "How can I practice?"
    ],
    es: [
      "¿Puedes explicarlo más simple?",
      "Dame otro ejemplo",
      "¿Para qué sirve en un juego real?",
      "¿Cómo puedo practicar?"
    ]
  };
  const fallback = {
    fr: "Oups, désolé, réessaie !",
    en: "Oops, sorry, try again!",
    es: "¡Ups, lo siento, inténtalo de nuevo!"
  };
  const networkErr = {
    fr: "⚠️ Erreur réseau. Vérifie ta connexion internet.",
    en: "⚠️ Network error. Check your internet connection.",
    es: "⚠️ Error de red. Comprueba tu conexión a internet."
  };
  const thinking = {
    fr: "Superpapa réfléchit...",
    en: "Superpapa is thinking...",
    es: "Superpapa está pensando..."
  };

  const [messages, setMessages] = useState([{ role:"assistant", content:greetings[lang] }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Reset chat when language changes — avoids mixed-language conversations
  useEffect(() => {
    setMessages([{ role:"assistant", content:greetings[lang] }]);
    setInput("");
  }, [lang]);

  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages, loading]);

  const sendText = async (text) => {
    if (!text || !text.trim() || loading) return;
    const q = text.trim();
    setInput("");
    const newMessages = [...messages, { role:"user", content:q }];
    setMessages(newMessages);
    setLoading(true);
    try {
      // CRITICAL: Anthropic API requires conversations to start with role="user"
      // Filter out the initial assistant greeting (it's UI-only, not real conversation)
      const apiMessages = newMessages.filter((m, i) => !(i === 0 && m.role === "assistant"));

      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          system: ui.systemPrompt(lesson, t(module?.title, lang)),
          messages: apiMessages.map(m=>({role:m.role,content:m.content}))
        })
      });
      const data = await res.json();
      // Never show raw API errors to user - log to console for debugging, show friendly fallback
      if (data.error) console.error("Chat API error:", data.error);
      const reply = data.reply || fallback[lang];
      setMessages(prev=>[...prev,{role:"assistant",content:reply}]);
    } catch {
      setMessages(prev=>[...prev,{role:"assistant",content:networkErr[lang]}]);
    }
    setLoading(false);
  };

  const send = () => sendText(input);
  const showSuggestions = messages.length <= 2 && !loading;

  return (
    <div style={{ border:"0.5px solid #e2e8f0",borderRadius:16,overflow:"hidden",marginTop:12 }}>
      <div style={{ background:"#1a1a2e",padding:"10px 14px",display:"flex",alignItems:"center",gap:10 }}>
        <SuperpapaAvatar size={38} />
        <div><div style={{ fontSize:14,fontWeight:600,color:"#fff" }}>Superpapa973</div><div style={{ fontSize:11,color:"#a0aec0" }}>{lang==="fr"?"Ton professeur":lang==="es"?"Tu profesor":"Your teacher"}</div></div>
        <button onClick={onClose} style={{ marginLeft:"auto",border:"none",background:"rgba(255,255,255,0.1)",cursor:"pointer",color:"#fff",padding:"4px 8px",borderRadius:6,fontSize:14 }}>✕</button>
      </div>
      <div style={{ height:200,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:8,background:"#f8fafc" }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ maxWidth:"85%",padding:"8px 12px",borderRadius:m.role==="user"?"12px 12px 2px 12px":"12px 12px 12px 2px",background:m.role==="user"?"#4C9BE8":"#fff",color:m.role==="user"?"#fff":"#2d3748",alignSelf:m.role==="user"?"flex-end":"flex-start",fontSize:13,lineHeight:1.6,border:m.role==="assistant"?"0.5px solid #e2e8f0":"none" }}>{m.content}</div>
        ))}
        {loading && <div style={{ padding:"8px 12px",background:"#fff",borderRadius:"12px 12px 12px 2px",color:"#718096",fontSize:13,alignSelf:"flex-start",border:"0.5px solid #e2e8f0" }}>{thinking[lang]}</div>}
        <div ref={bottomRef} />
      </div>
      {showSuggestions && (
        <div style={{ padding:"8px 10px",background:"#fffbeb",borderTop:"1px solid #fde68a",display:"flex",flexWrap:"wrap",gap:6 }}>
          <div style={{ fontSize:10,color:"#92400e",fontWeight:600,width:"100%",marginBottom:2 }}>
            {lang==="fr"&&"💡 Suggestions de questions :"}
            {lang==="en"&&"💡 Question suggestions:"}
            {lang==="es"&&"💡 Sugerencias de preguntas:"}
          </div>
          {suggestions[lang].map((s, i) => (
            <button key={i} onClick={()=>sendText(s)} disabled={loading}
              style={{ background:"#fff",border:"0.5px solid #f59e0b",color:"#92400e",borderRadius:14,padding:"5px 10px",fontSize:11,cursor:loading?"not-allowed":"pointer",lineHeight:1.3 }}>
              {s}
            </button>
          ))}
        </div>
      )}
      <div style={{ padding:10,display:"flex",gap:8,background:"#fff",borderTop:"0.5px solid #e2e8f0" }}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder={ui.placeholder}
          style={{ flex:1,padding:"8px 14px",border:"0.5px solid #cbd5e0",borderRadius:20,fontSize:13,outline:"none" }} />
        <button onClick={send} disabled={loading}
          style={{ width:34,height:34,borderRadius:"50%",background:loading?"#a0aec0":"#1a1a2e",border:"none",cursor:loading?"not-allowed":"pointer",color:"#fff",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center" }}>➤</button>
      </div>
    </div>
  );
}

function LessonView({ lesson, module, ui, lang, onBack, completed, onComplete, onNext, hasNext }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const done = completed.has(lesson.id);

  const handleListen = async () => {
    if (speaking) { stopSpeak(); setSpeaking(false); return; }
    // Clean symbols that read awkwardly aloud
    const dashWord = { fr: "deux tirets", en: "double dash", es: "dos guiones" }[lang] || "double dash";
    const concatWord = { fr: "puis", en: "and", es: "y" }[lang] || "and";
    const clean = (s) => (s || "")
      .replace(/--/g, dashWord)
      .replace(/\.\./g, " " + concatWord + " ")
      .replace(/\(\)/g, "")
      .replace(/\s+/g, " ");
    const parts = [
      t(lesson.title, lang),
      clean(t(lesson.superpapa, lang)),
      clean(t(lesson.explanation, lang)),
      clean(t(lesson.tip, lang))
    ];
    const text = parts.filter(Boolean).join(". ");
    setSpeaking(true);
    await speak(text, lang, () => setSpeaking(false));
  };

  const handleDone = () => { if (!done) { onComplete(lesson.id); setShowCelebration(true); } };

  return (
    <div>
      {showCelebration && <CelebrationModal ui={ui} lang={lang} lessonTitle={t(lesson.title,lang)} onClose={()=>{ setShowCelebration(false); if(hasNext) onNext(); else onBack(); }} />}
      <button onClick={onBack} style={{ border:"none",background:"none",cursor:"pointer",color:"#718096",fontSize:13,padding:"6px 0",marginBottom:14 }}>{ui.back}</button>
      <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
        {/* Superpapa */}
        <div style={{ background:"#1a1a2e",borderRadius:16,padding:16,display:"flex",alignItems:"flex-start",gap:12 }}>
          <div style={{ flexShrink:0 }}><SuperpapaAvatar size={58} animate={true} /></div>
          <div>
            <div style={{ fontSize:12,color:"#a0aec0",marginBottom:4 }}>Superpapa973</div>
            <div style={{ fontSize:14,color:"#e2e8f0",lineHeight:1.6,fontStyle:"italic" }}>"{t(lesson.superpapa,lang)}"</div>
          </div>
        </div>
        {/* Explication */}
        <div style={{ background:"#fff",borderRadius:16,border:"0.5px solid #e2e8f0",padding:18 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10 }}>
            <div>
              <div style={{ fontSize:11,color:"#718096",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4 }}>{t(lesson.concept,lang)}</div>
              <div style={{ fontSize:17,fontWeight:700,color:"#1a202c" }}>{t(lesson.title,lang)}</div>
            </div>
            <button onClick={handleListen}
              style={{ padding:"6px 12px",borderRadius:20,border:"0.5px solid "+(speaking?"#e84c4c":"#cbd5e0"),background:speaking?"#e84c4c":"transparent",color:speaking?"#fff":"#718096",fontSize:12,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,marginLeft:8 }}>
              {speaking ? ui.stopBtn : ui.listenBtn}
            </button>
          </div>
          <div style={{ fontSize:14,color:"#4a5568",lineHeight:1.75,marginBottom:12 }}>{t(lesson.explanation,lang)}</div>
          <div style={{ background:"#fffbeb",border:"0.5px solid #f6e05e",borderRadius:10,padding:"10px 14px",fontSize:13,color:"#744210",display:"flex",gap:8,alignItems:"flex-start" }}>
            <span style={{ flexShrink:0 }}>💡</span>
            <span><strong>{ui.tip} :</strong> {t(lesson.tip,lang)}</span>
          </div>
        </div>
        {/* Code */}
        <div style={{ background:"#282a36",borderRadius:16,padding:16 }}>
          <div style={{ fontSize:11,color:"#6272a4",fontFamily:"monospace",marginBottom:10,display:"flex",alignItems:"center",gap:8 }}>
            <span style={{ width:10,height:10,borderRadius:"50%",background:"#ff5555",display:"inline-block" }} />
            <span style={{ width:10,height:10,borderRadius:"50%",background:"#f1fa8c",display:"inline-block" }} />
            <span style={{ width:10,height:10,borderRadius:"50%",background:"#50fa7b",display:"inline-block" }} />
            <span style={{ marginLeft:4 }}>{ui.codeTitle}</span>
          </div>
          <pre style={{ fontFamily:"'Courier New',monospace",fontSize:13,lineHeight:1.7,color:"#f8f8f2",margin:0,whiteSpace:"pre-wrap",wordBreak:"break-word" }}
            dangerouslySetInnerHTML={{ __html:highlightLua(typeof lesson.code === "string" ? lesson.code : (lesson.code?.[lang] || lesson.code?.fr || "")) }} />
        </div>
        {/* Studio */}
        <StudioSection lesson={lesson} lang={lang} ui={ui} />
        {/* Actions */}
        <div style={{ display:"flex",gap:8 }}>
          <button onClick={handleDone}
            style={{ flex:1,padding:14,borderRadius:12,border:"none",background:done?"#e2e8f0":"#4CBE72",color:done?"#718096":"#fff",fontSize:15,fontWeight:600,cursor:done?"default":"pointer" }}>
            {done ? ui.completed : ui.markDone}
          </button>
          {!chatOpen && <button onClick={()=>setChatOpen(true)} style={{ padding:"14px 16px",borderRadius:12,border:"0.5px solid #cbd5e0",background:"#fff",color:"#2d3748",fontSize:14,cursor:"pointer",whiteSpace:"nowrap" }}>🤠 {ui.askSuperpapa}</button>}
        </div>
        {chatOpen && <ChatPanel ui={ui} lesson={lesson} module={module} lang={lang} onClose={()=>setChatOpen(false)} />}
      </div>
    </div>
  );
}

function ModuleView({ module, ui, lang, onBack, completed, onSelectLesson }) {
  const [chatOpen, setChatOpen] = useState(false);
  const doneLessons = module.lessons.filter(l=>completed.has(l.id)).length;
  return (
    <div>
      <button onClick={onBack} style={{ border:"none",background:"none",cursor:"pointer",color:"#718096",fontSize:13,padding:"6px 0",marginBottom:14 }}>{ui.back}</button>
      <div style={{ background:module.color,borderRadius:16,padding:20,marginBottom:14,display:"flex",gap:14,alignItems:"center" }}>
        <div style={{ fontSize:40 }}>{module.icon}</div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:18,fontWeight:700,color:"#fff" }}>{t(module.title,lang)}</div>
          <div style={{ fontSize:12,color:"rgba(255,255,255,0.8)",marginTop:2 }}>{t(module.sub,lang)}</div>
          <div style={{ marginTop:10,height:6,background:"rgba(255,255,255,0.3)",borderRadius:3,overflow:"hidden" }}>
            <div style={{ height:"100%",background:"#fff",width:(doneLessons/module.lessons.length*100)+"%",transition:"width 0.5s",borderRadius:3 }} />
          </div>
          <div style={{ fontSize:11,color:"rgba(255,255,255,0.8)",marginTop:4 }}>{doneLessons}/{module.lessons.length} {ui.lessons}</div>
        </div>
      </div>
      <div style={{ background:"#1a1a2e",borderRadius:14,padding:"12px 16px",marginBottom:14,display:"flex",gap:12,alignItems:"flex-start" }}>
        <SuperpapaAvatar size={50} />
        <div style={{ fontSize:13,color:"#e2e8f0",lineHeight:1.6,fontStyle:"italic",paddingTop:8 }}>"{t(module.intro,lang)}"</div>
      </div>
      <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
        {module.lessons.map((ls,idx)=>{
          const done = completed.has(ls.id);
          return (
            <div key={ls.id} onClick={()=>onSelectLesson(ls)}
              style={{ background:"#fff",borderRadius:12,border:"0.5px solid "+(done?module.color:"#e2e8f0"),padding:"14px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:12 }}>
              <div style={{ width:32,height:32,borderRadius:"50%",background:done?module.color:"#f7fafc",color:done?"#fff":"#718096",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:700,flexShrink:0 }}>
                {done?"✓":(idx+1)}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14,fontWeight:600,color:"#1a202c" }}>{t(ls.title,lang)}</div>
                <div style={{ fontSize:12,color:"#718096",marginTop:2 }}>{t(ls.concept,lang)}</div>
              </div>
              <span style={{ color:"#a0aec0",fontSize:18 }}>›</span>
            </div>
          );
        })}
      </div>
      {!chatOpen ? (
        <button onClick={()=>setChatOpen(true)} style={{ marginTop:14,width:"100%",padding:12,borderRadius:12,border:"0.5px solid #e2e8f0",background:"#fff",color:"#2d3748",fontSize:14,cursor:"pointer" }}>
          🤠 {ui.askSuperpapa}
        </button>
      ) : <ChatPanel ui={ui} lesson={null} module={module} lang={lang} onClose={()=>setChatOpen(false)} />}
    </div>
  );
}

// ─── STUDIO GUIDE SCREEN ─────────────────────────────────────────────────────

function StudioGuide({ lang, ui, onDone }) {
  const content = {
    fr: {
      title: "RoboLua + Roblox Studio",
      sub: "Comment ça marche ensemble ?",
      steps: [
        { icon: "📱", title: "Lis sur cet écran", desc: "RoboLua t'explique les concepts avec Superpapa973. Tu écoutes, tu comprends." },
        { icon: "💻", title: "Ouvre Roblox Studio", desc: "Roblox Studio est GRATUIT sur roblox.com/create. C'est là que tu tapes ton vrai code Lua !" },
        { icon: "✍️", title: "Tape le code", desc: "Chaque leçon te dit exactement où écrire le code dans Studio. Suis les étapes jaunes !" },
        { icon: "▶️", title: "Lance et teste", desc: "Clique ▶ Play pour voir ton code en action dans le jeu. L'Output montre tes messages." },
        { icon: "🎯", title: "Fais le défi", desc: "Chaque leçon a un Mini-défi Studio. Complète-le pour vraiment maîtriser le concept !" },
      ],
      dl: "📥 Télécharger Roblox Studio (gratuit) →"
    },
    en: {
      title: "RoboLua + Roblox Studio",
      sub: "How do they work together?",
      steps: [
        { icon: "📱", title: "Read on this screen", desc: "RoboLua explains concepts with Superpapa973. You listen and understand." },
        { icon: "💻", title: "Open Roblox Studio", desc: "Roblox Studio is FREE at roblox.com/create. That's where you type your real Lua code!" },
        { icon: "✍️", title: "Type the code", desc: "Each lesson tells you exactly where to write the code in Studio. Follow the yellow steps!" },
        { icon: "▶️", title: "Run and test", desc: "Click ▶ Play to see your code in action in the game. Output shows your messages." },
        { icon: "🎯", title: "Do the challenge", desc: "Each lesson has a Studio Mini-Challenge. Complete it to truly master the concept!" },
      ],
      dl: "📥 Download Roblox Studio (free) →"
    },
    es: {
      title: "RoboLua + Roblox Studio",
      sub: "¿Cómo funcionan juntos?",
      steps: [
        { icon: "📱", title: "Lee en esta pantalla", desc: "RoboLua te explica conceptos con Superpapa973. Escuchas y entiendes." },
        { icon: "💻", title: "Abre Roblox Studio", desc: "¡Roblox Studio es GRATIS en roblox.com/create. ¡Ahí es donde escribes tu código Lua real!" },
        { icon: "✍️", title: "Escribe el código", desc: "Cada lección te dice exactamente dónde escribir el código en Studio. ¡Sigue los pasos amarillos!" },
        { icon: "▶️", title: "Ejecuta y prueba", desc: "Haz clic en ▶ Play para ver tu código en acción en el juego. Output muestra tus mensajes." },
        { icon: "🎯", title: "Haz el reto", desc: "¡Cada lección tiene un Mini-reto Studio. ¡Complétalo para dominar de verdad el concepto!" },
      ],
      dl: "📥 Descargar Roblox Studio (gratis) →"
    }
  };
  const c = content[lang] || content.fr;
  return (
    <div style={{ padding:16 }}>
      <div style={{ background:"#1a1a2e",borderRadius:20,padding:24,marginBottom:16,textAlign:"center" }}>
        <div style={{ display:"flex",justifyContent:"center",gap:16,marginBottom:16,alignItems:"flex-end" }}>
          <SuperpapaAvatar size={75} animate={true} />
          <MathisAvatar size={55} />
        </div>
        <div style={{ fontSize:20,fontWeight:800,color:"#fff",marginBottom:4 }}>{c.title}</div>
        <div style={{ fontSize:14,color:"#a0aec0" }}>{c.sub}</div>
      </div>
      <div style={{ display:"flex",flexDirection:"column",gap:10,marginBottom:16 }}>
        {c.steps.map((s,i)=>(
          <div key={i} style={{ background:"#fff",borderRadius:14,border:"0.5px solid #e2e8f0",padding:"14px 16px",display:"flex",gap:14,alignItems:"flex-start" }}>
            <div style={{ fontSize:28,flexShrink:0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize:14,fontWeight:700,color:"#1a202c",marginBottom:4 }}>{s.title}</div>
              <div style={{ fontSize:13,color:"#4a5568",lineHeight:1.6 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <a href="https://www.roblox.com/create" target="_blank" rel="noreferrer"
        style={{ display:"block",background:"#f6ad55",color:"#744210",borderRadius:12,padding:"12px 16px",textAlign:"center",fontSize:14,fontWeight:700,textDecoration:"none",marginBottom:12 }}>
        {c.dl}
      </a>
      <button onClick={onDone}
        style={{ width:"100%",background:"#4C9BE8",color:"#fff",border:"none",borderRadius:12,padding:"14px 16px",fontSize:16,fontWeight:700,cursor:"pointer" }}>
        {ui.studioGuideBtn}
      </button>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState("es");
  const [view, setView] = useState("intro");
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completed, setCompleted] = useState(()=>{
    if (typeof window!=="undefined") { try { return new Set(JSON.parse(localStorage.getItem("robolua_v3")||"[]")); } catch {} }
    return new Set();
  });

  const ui = UI[lang];
  const totalLessons = MODULES.reduce((s,m)=>s+m.lessons.length,0);
  const prog = Math.round(completed.size/totalLessons*100);
  const xp = completed.size * 50;

  const markComplete = useCallback((id)=>{
    setCompleted(prev=>{ const next=new Set([...prev,id]); try{localStorage.setItem("robolua_v3",JSON.stringify([...next]));}catch{} return next; });
  }, []);

  const switchLang = (l) => { stopSpeak(); setLang(l); };

  const goToNextLesson = () => {
    if (!selectedModule||!selectedLesson) return;
    const lessons = selectedModule.lessons;
    const idx = lessons.findIndex(l=>l.id===selectedLesson.id);
    if (idx < lessons.length-1) setSelectedLesson(lessons[idx+1]);
    else setView("module");
  };

  const hasNextLesson = () => {
    if (!selectedModule||!selectedLesson) return false;
    const lessons = selectedModule.lessons;
    return lessons.findIndex(l=>l.id===selectedLesson.id) < lessons.length-1;
  };

  return (
    <>
      <Head>
        <title>RoboLua — Crée ton jeu Roblox</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <style>{`
          @keyframes popIn{0%{transform:scale(0) rotate(-10deg);opacity:0}60%{transform:scale(1.2) rotate(5deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}
          @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        `}</style>
      </Head>

      <div style={{ minHeight:"100vh",background:"#f0f4ff",fontFamily:"system-ui,-apple-system,sans-serif" }}>
        {/* HEADER */}
        {view!=="intro" && (
          <div style={{ background:"#1a1a2e",padding:"10px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:50 }}>
            <div style={{ fontSize:17,fontWeight:800,color:"#fff",letterSpacing:-0.5 }}>Robo<span style={{ color:"#4C9BE8" }}>Lua</span></div>
            <div style={{ display:"flex",gap:4 }}>
              {["fr","en","es"].map(l=>(
                <button key={l} onClick={()=>switchLang(l)}
                  style={{ padding:"3px 8px",borderRadius:6,border:"0.5px solid "+(lang===l?"#4C9BE8":"rgba(255,255,255,0.2)"),background:lang===l?"#4C9BE8":"transparent",color:lang===l?"#fff":"rgba(255,255,255,0.6)",fontSize:11,cursor:"pointer",textTransform:"uppercase",fontWeight:600 }}>
                  {l}
                </button>
              ))}
            </div>
            <div style={{ flex:1,height:5,background:"rgba(255,255,255,0.1)",borderRadius:3,overflow:"hidden" }}>
              <div style={{ height:"100%",background:"#4CBE72",width:prog+"%",transition:"width 0.5s",borderRadius:3 }} />
            </div>
            <div style={{ fontSize:12,color:"#f6ad55",whiteSpace:"nowrap",fontWeight:600 }}>⭐ {xp} XP</div>
          </div>
        )}

        <div style={{ maxWidth:680,margin:"0 auto",padding:view==="intro"?0:16 }}>

          {/* INTRO */}
          {view==="intro" && (
            <div style={{ minHeight:"100vh",background:"#1a1a2e",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24 }}>
              <div style={{ display:"flex",gap:4,marginBottom:32,alignSelf:"flex-end" }}>
                {["fr","en","es"].map(l=>(
                  <button key={l} onClick={()=>setLang(l)}
                    style={{ padding:"4px 10px",borderRadius:6,border:"0.5px solid "+(lang===l?"#4C9BE8":"rgba(255,255,255,0.3)"),background:lang===l?"#4C9BE8":"transparent",color:lang===l?"#fff":"rgba(255,255,255,0.6)",fontSize:12,cursor:"pointer",textTransform:"uppercase",fontWeight:600 }}>
                    {l}
                  </button>
                ))}
              </div>
              <div style={{ display:"flex",gap:20,alignItems:"flex-end",marginBottom:28 }}>
                <div style={{ textAlign:"center" }}>
                  <SuperpapaAvatar size={105} animate={true} />
                  <div style={{ fontSize:11,color:"#a0aec0",marginTop:6 }}>Superpapa973</div>
                  <div style={{ fontSize:10,color:"#718096" }}>Ton professeur</div>
                </div>
                <div style={{ textAlign:"center" }}>
                  <MathisAvatar size={75} />
                  <div style={{ fontSize:11,color:"#a0aec0",marginTop:6 }}>Michi</div>
                  <div style={{ fontSize:10,color:"#718096" }}>Toi !</div>
                </div>
              </div>
              <div style={{ fontSize:34,fontWeight:800,color:"#fff",textAlign:"center",marginBottom:8,letterSpacing:-1 }}>
                Robo<span style={{ color:"#4C9BE8" }}>Lua</span>
              </div>
              <div style={{ fontSize:15,color:"rgba(255,255,255,0.7)",textAlign:"center",marginBottom:10,maxWidth:300 }}>
                {lang==="fr"&&"Apprends à créer ton propre jeu Roblox"}
                {lang==="en"&&"Learn to create your own Roblox game"}
                {lang==="es"&&"Aprende a crear tu propio juego Roblox"}
              </div>
              <div style={{ fontSize:13,color:"#4CBE72",textAlign:"center",marginBottom:28 }}>
                {totalLessons} leçons • 6 modules • FR / EN / ES
              </div>
              <button onClick={()=>setView("studio-guide")}
                style={{ background:"#4C9BE8",color:"#fff",border:"none",borderRadius:14,padding:"16px 40px",fontSize:17,fontWeight:700,cursor:"pointer",letterSpacing:0.3 }}>
                {ui.start}
              </button>
            </div>
          )}

          {/* STUDIO GUIDE */}
          {view==="studio-guide" && <StudioGuide lang={lang} ui={ui} onDone={()=>setView("map")} />}

          {/* MAP */}
          {view==="map" && (
            <div>
              <div style={{ background:"#1a1a2e",borderRadius:16,padding:"16px 18px",marginBottom:16,display:"flex",alignItems:"flex-end",gap:14 }}>
                <SuperpapaAvatar size={58} animate={true} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14,fontWeight:600,color:"#fff",marginBottom:2 }}>
                    {lang==="fr"&&"Choisis ton module, partenaire !"}
                    {lang==="en"&&"Choose your module, partner!"}
                    {lang==="es"&&"¡Elige tu módulo, compañero!"}
                  </div>
                  <div style={{ fontSize:12,color:"#a0aec0" }}>{completed.size}/{totalLessons} {ui.lessons} • {prog}% • {xp} XP</div>
                </div>
                <MathisAvatar size={42} />
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {MODULES.map((mod,idx)=>{
                  const prevDone = idx===0||MODULES[idx-1].lessons.every(l=>completed.has(l.id));
                  const doneLessons = mod.lessons.filter(l=>completed.has(l.id)).length;
                  const modProg = Math.round(doneLessons/mod.lessons.length*100);
                  const locked = !prevDone;
                  return (
                    <div key={mod.id} onClick={()=>!locked&&(setSelectedModule(mod),setView("module"))}
                      style={{ background:"#fff",borderRadius:16,border:"2px solid "+(locked?"#e2e8f0":mod.color+"44"),padding:"16px 18px",cursor:locked?"not-allowed":"pointer",opacity:locked?0.6:1,display:"flex",alignItems:"center",gap:14 }}>
                      <div style={{ width:48,height:48,borderRadius:14,background:locked?"#f7fafc":mod.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0 }}>
                        {locked?"🔒":mod.icon}
                      </div>
                      <div style={{ flex:1,minWidth:0 }}>
                        <div style={{ fontSize:15,fontWeight:700,color:locked?"#a0aec0":"#1a202c",marginBottom:2 }}>{t(mod.title,lang)}</div>
                        <div style={{ fontSize:12,color:"#718096",marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{t(mod.sub,lang)}</div>
                        <div style={{ height:5,background:"#f0f0f0",borderRadius:3,overflow:"hidden" }}>
                          <div style={{ height:"100%",background:mod.color,width:modProg+"%",transition:"width 0.5s",borderRadius:3 }} />
                        </div>
                      </div>
                      <div style={{ textAlign:"right",flexShrink:0 }}>
                        <div style={{ fontSize:13,fontWeight:700,color:mod.color }}>{doneLessons}/{mod.lessons.length}</div>
                        <div style={{ fontSize:11,color:"#a0aec0" }}>{ui.lessons}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MODULE */}
          {view==="module" && selectedModule && (
            <ModuleView module={selectedModule} ui={ui} lang={lang}
              onBack={()=>setView("map")} completed={completed}
              onSelectLesson={(ls)=>{ setSelectedLesson(ls); setView("lesson"); }} />
          )}

          {/* LESSON */}
          {view==="lesson" && selectedLesson && (
            <LessonView lesson={selectedLesson} module={selectedModule} ui={ui} lang={lang}
              onBack={()=>setView("module")} completed={completed}
              onComplete={markComplete} onNext={goToNextLesson} hasNext={hasNextLesson()} />
          )}
        </div>
      </div>
    </>
  );
}
