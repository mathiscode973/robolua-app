import { useState, useRef, useEffect } from "react";
import Head from "next/head";

// ─── CURRICULUM DATA ───────────────────────────────────────────────────────────
const DATA = {
  fr: {
    ui: {
      back: "← Retour",
      done: "✓ Leçon terminée !",
      completed: "✓ Terminé",
      askRobo: "Demander à Robo",
      chatTitle: "Robo",
      chatSub: "Ton tuteur IA",
      placeholder: "Une question sur le code ?",
      welcome: "Bienvenue chez RoboLua !",
      welcomeText:
        "Apprends à coder dans Roblox avec Robo ! Choisis un niveau pour commencer.",
      tip: "Astuce",
      lessons: "leçons",
      greeting:
        "Salut ! Je suis Robo 🤖 Pose-moi toutes tes questions sur le code Lua ! Je suis là pour t'aider.",
      systemPrompt: (lesson) =>
        `Tu es Robo, un tuteur adorable et encourageant pour enfants de 8-13 ans qui apprennent à coder en Lua pour Roblox. 
Réponds en français. Explique simplement avec des analogies jeux vidéo. Maximum 3-4 phrases courtes.
Sois toujours positif et encourageant.
${lesson ? "Leçon actuelle: " + lesson.title + ". Concept: " + lesson.explanation : ""}`,
    },
    levels: [
      {
        id: 1,
        icon: "🚀",
        color: "#4C9BE8",
        title: "Premiers Pas",
        sub: "Hours 1-3 • Scripts, Variables, Fonctions",
        lessons: [
          {
            id: "1-1",
            title: "Ton premier script",
            concept: "Écrire du code Lua",
            tip: "-- sert à écrire des commentaires. Roblox ne les lit pas, c'est juste pour toi !",
            explanation:
              "Un script, c'est comme une recette pour l'ordinateur. Tu lui dis quoi faire, étape par étape ! Dans Roblox Studio, tes scripts font vivre ton jeu.",
            code: `-- Mon premier script Roblox !
print("Bonjour le monde !")
print("Je code dans Roblox !")`,
          },
          {
            id: "1-2",
            title: "Variables : les boîtes magiques",
            concept: "Stocker des informations",
            tip: "Le mot 'local' garde ta variable dans ton script. Toujours utiliser 'local' !",
            explanation:
              "Une variable, c'est comme une boîte avec un nom. Tu peux y mettre des informations et les récupérer plus tard. Comme tes coffres dans Minecraft !",
            code: `local monPrenom = "Mathis"
local monAge = 11
local jaimeLesJeux = true

print("Salut, je suis " .. monPrenom)
print("J'ai " .. monAge .. " ans")`,
          },
          {
            id: "1-3",
            title: "Fonctions : tes super-pouvoirs",
            concept: "Créer et appeler des fonctions",
            tip: "Tu peux appeler une fonction autant de fois que tu veux, sans réécrire le code !",
            explanation:
              "Une fonction, c'est un groupe d'instructions qui a un nom. C'est comme un super-pouvoir que tu inventes : tu lui donnes un nom et tu peux l'utiliser quand tu veux !",
            code: `local function sauterCommeUnHeros()
    print("Je saute haut !")
    print("YEEAH !")
end

sauterCommeUnHeros()
sauterCommeUnHeros()  -- encore !`,
          },
        ],
      },
      {
        id: 2,
        icon: "🔍",
        color: "#E8874C",
        title: "Explorateur",
        sub: "Hours 4-8 • Paramètres, Conditions, Boucles",
        lessons: [
          {
            id: "2-1",
            title: "Paramètres : personnalise tes fonctions",
            concept: "Passer des infos aux fonctions",
            tip: "Les paramètres sont comme des cases vides que tu remplis quand tu appelles la fonction !",
            explanation:
              "Avec les paramètres, tu peux envoyer des informations à une fonction. C'est comme commander une pizza : tu dis quelle pizza et quels ingrédients !",
            code: `local function accueillir(prenom, points)
    print("Salut " .. prenom .. " !")
    print("Tu as " .. points .. " points !")
end

accueillir("Mathis", 500)
accueillir("Lucas", 1200)`,
          },
          {
            id: "2-2",
            title: "Si... Alors : ton jeu prend des décisions",
            concept: "if / elseif / else",
            tip: ">= veut dire 'plus grand ou égal à'. Tu peux aussi utiliser ==, ~=, <, >",
            explanation:
              "Avec 'if', ton programme peut choisir quoi faire. Comme toi quand tu décides selon la météo : soleil → on sort, pluie → on joue en intérieur !",
            code: `local vie = 75

if vie > 80 then
    print("Super forme !")
elseif vie > 30 then
    print("Attention, tu es blessé !")
else
    print("DANGER ! Vie critique !")
end`,
          },
          {
            id: "2-3",
            title: "Boucles : répéter sans se fatiguer",
            concept: "for et while loops",
            tip: "La boucle for est parfaite quand tu sais combien de fois répéter. La boucle while quand tu ne sais pas !",
            explanation:
              "Les boucles répètent des actions automatiquement. Imagine afficher 100 ennemis sans les écrire 100 fois ! C'est la magie des boucles.",
            code: `-- Faire apparaître 5 ennemis
for i = 1, 5 do
    print("Ennemi " .. i .. " apparu !")
end

-- Compter les pièces
local pieces = 10
while pieces > 0 do
    print("Pièce ! Reste : " .. pieces)
    pieces = pieces - 1
end`,
          },
        ],
      },
      {
        id: 3,
        icon: "🏗️",
        color: "#4CBE72",
        title: "Constructeur",
        sub: "Hours 9-13 • Tableaux, Dictionnaires, Modules",
        lessons: [
          {
            id: "3-1",
            title: "Tableaux : ton inventaire de jeu",
            concept: "Arrays (tables ordonnées)",
            tip: "Dans Lua, les tableaux commencent à l'index 1, pas 0 comme dans d'autres langages !",
            explanation:
              "Un tableau, c'est comme ton inventaire de jeu. Tu peux y mettre plein d'objets dans l'ordre, et les retrouver par leur numéro (index) !",
            code: `local inventaire = {"Épée", "Bouclier", "Potion"}

print(inventaire[1])  -- Épée
print(inventaire[2])  -- Bouclier

-- Ajouter un objet
table.insert(inventaire, "Arc")
print("Objets : " .. #inventaire)  -- 4`,
          },
          {
            id: "3-2",
            title: "Dictionnaires : fiches de personnage",
            concept: "Tables avec clés/valeurs",
            tip: "Utilise les dictionnaires pour stocker toutes les infos d'un personnage ou d'un objet du jeu !",
            explanation:
              "Un dictionnaire, c'est comme une fiche de personnage de jeu de rôle. Chaque caractéristique a un nom (une clé) et une valeur. Parfait pour les joueurs et les ennemis !",
            code: `local joueur = {
    nom = "Mathis",
    vie = 100,
    force = 45,
    niveau = 7
}

print("Joueur : " .. joueur.nom)
print("Niveau " .. joueur.niveau)
joueur.vie = joueur.vie - 20
print("Vie : " .. joueur.vie)`,
          },
        ],
      },
      {
        id: 4,
        icon: "🌍",
        color: "#9B4CE8",
        title: "Architecte 3D",
        sub: "Hours 14-18 • 3D, Animations, Algorithmes",
        lessons: [
          {
            id: "4-1",
            title: "L'espace 3D : X, Y, Z",
            concept: "Coordonnées et CFrame dans Roblox",
            tip: "X = gauche/droite, Y = haut/bas, Z = avant/arrière. Pense à un GPS en 3D !",
            explanation:
              "Dans Roblox, chaque objet a une adresse en 3D. Avec X, Y et Z tu peux placer n'importe quoi n'importe où dans ton monde ! C'est comme le GPS de tes objets.",
            code: `local part = workspace.MaBrique

-- Téléporter la brique
part.Position = Vector3.new(10, 5, 0)

-- CFrame pour position + rotation
part.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)`,
          },
          {
            id: "4-2",
            title: "Animations Tween : tout en douceur",
            concept: "TweenService pour animer les objets",
            tip: "Essaie différentes durées : 0.5 pour rapide, 3.0 pour lent et dramatique !",
            explanation:
              "TweenService fait glisser les objets en douceur d'une position à une autre. C'est ça qui rend tes animations fluides et professionnelles !",
            code: `local TweenService = game:GetService("TweenService")
local part = workspace.MaBrique

local info = TweenInfo.new(2)  -- 2 secondes
local objectif = {
    Position = Vector3.new(0, 20, 0)
}

local anim = TweenService:Create(part, info, objectif)
anim:Play()`,
          },
        ],
      },
      {
        id: 5,
        icon: "👑",
        color: "#E84C4C",
        title: "Maître du Code",
        sub: "Hours 20-24 • POO, Héritage, Raycasting",
        lessons: [
          {
            id: "5-1",
            title: "Classes : tes moules à personnages",
            concept: "Programmation Orientée Objet",
            tip: "setmetatable est la magie Lua pour créer des classes. Ça vient avec la pratique !",
            explanation:
              "Avec les classes, tu crées un 'moule' pour tes personnages. Comme un moule à gâteau : tu le fais une fois et tu crées autant de gâteaux que tu veux !",
            code: `local Personnage = {}
Personnage.__index = Personnage

function Personnage.new(nom, vie)
    local self = setmetatable({}, Personnage)
    self.nom = nom
    self.vie = vie
    return self
end

function Personnage:sePresenter()
    print("Je suis " .. self.nom)
    print("Vie : " .. self.vie)
end

local hero = Personnage.new("Héros", 100)
local boss = Personnage.new("Dragon", 999)
hero:sePresenter()
boss:sePresenter()`,
          },
        ],
      },
    ],
  },
  en: {
    ui: {
      back: "← Back",
      done: "✓ Lesson complete!",
      completed: "✓ Completed",
      askRobo: "Ask Robo",
      chatTitle: "Robo",
      chatSub: "Your AI tutor",
      placeholder: "Any question about the code?",
      welcome: "Welcome to RoboLua!",
      welcomeText:
        "Learn to code in Roblox with Robo! Pick a level to start.",
      tip: "Tip",
      lessons: "lessons",
      greeting:
        "Hey! I'm Robo 🤖 Ask me anything about Lua code! I'm here to help you.",
      systemPrompt: (lesson) =>
        `You are Robo, a fun and encouraging tutor for kids 8-13 learning Lua for Roblox.
Reply in English. Explain simply with gaming analogies. Maximum 3-4 short sentences.
Always be positive and encouraging.
${lesson ? "Current lesson: " + lesson.title + ". Concept: " + lesson.explanation : ""}`,
    },
    levels: [
      {
        id: 1,
        icon: "🚀",
        color: "#4C9BE8",
        title: "First Steps",
        sub: "Hours 1-3 • Scripts, Variables, Functions",
        lessons: [
          {
            id: "1-1",
            title: "Your first script",
            concept: "Writing Lua code",
            tip: "-- is for comments. Roblox won't read them, they're just for you!",
            explanation:
              "A script is like a recipe for the computer. You tell it what to do, step by step! In Roblox Studio, your scripts bring your game to life.",
            code: `-- My first Roblox script!
print("Hello world!")
print("I'm coding in Roblox!")`,
          },
          {
            id: "1-2",
            title: "Variables: magic boxes",
            concept: "Storing information",
            tip: "The 'local' keyword keeps your variable inside your script. Always use 'local'!",
            explanation:
              "A variable is like a box with a name on it. You can put information inside and get it back later. Like your chests in Minecraft!",
            code: `local myName = "Mathis"
local myAge = 11
local iLoveGames = true

print("Hi, I'm " .. myName)
print("I am " .. myAge .. " years old")`,
          },
          {
            id: "1-3",
            title: "Functions: your superpowers",
            concept: "Creating and calling functions",
            tip: "You can call a function as many times as you want without rewriting the code!",
            explanation:
              "A function is a group of instructions with a name. It's like a superpower you invent: give it a name and use it whenever you want!",
            code: `local function jumpLikeAHero()
    print("I jump high!")
    print("YEAAH!")
end

jumpLikeAHero()
jumpLikeAHero()  -- again!`,
          },
        ],
      },
      {
        id: 2,
        icon: "🔍",
        color: "#E8874C",
        title: "Explorer",
        sub: "Hours 4-8 • Parameters, Conditions, Loops",
        lessons: [
          {
            id: "2-1",
            title: "Parameters: customize your functions",
            concept: "Passing info to functions",
            tip: "Parameters are like empty slots you fill when you call the function!",
            explanation:
              "With parameters you can send information to a function. It's like ordering a pizza: you say which pizza and which toppings!",
            code: `local function greet(name, points)
    print("Hey " .. name .. "!")
    print("You have " .. points .. " points!")
end

greet("Mathis", 500)
greet("Lucas", 1200)`,
          },
          {
            id: "2-2",
            title: "If...Then: your game makes choices",
            concept: "if / elseif / else",
            tip: ">= means 'greater than or equal to'. You can also use ==, ~=, <, >",
            explanation:
              "With 'if', your program can choose what to do. Like you deciding what to do based on the weather: sun → go outside, rain → play inside!",
            code: `local health = 75

if health > 80 then
    print("Top shape!")
elseif health > 30 then
    print("Watch out, you're hurt!")
else
    print("DANGER! Critical health!")
end`,
          },
          {
            id: "2-3",
            title: "Loops: repeat without getting tired",
            concept: "for and while loops",
            tip: "Use for when you know how many times. Use while when you don't!",
            explanation:
              "Loops repeat actions automatically. Imagine spawning 100 enemies without writing it 100 times! That's the magic of loops.",
            code: `-- Spawn 5 enemies
for i = 1, 5 do
    print("Enemy " .. i .. " spawned!")
end

-- Count coins
local coins = 10
while coins > 0 do
    print("Coin collected! Left: " .. coins)
    coins = coins - 1
end`,
          },
        ],
      },
      {
        id: 3,
        icon: "🏗️",
        color: "#4CBE72",
        title: "Builder",
        sub: "Hours 9-13 • Arrays, Dictionaries, Modules",
        lessons: [
          {
            id: "3-1",
            title: "Arrays: your game inventory",
            concept: "Ordered tables (arrays)",
            tip: "In Lua, arrays start at index 1, not 0 like other languages!",
            explanation:
              "An array is like your game inventory. You can put lots of items in order and find them by their number (index)!",
            code: `local inventory = {"Sword", "Shield", "Potion"}

print(inventory[1])  -- Sword
print(inventory[2])  -- Shield

-- Add an item
table.insert(inventory, "Bow")
print("Items: " .. #inventory)  -- 4`,
          },
          {
            id: "3-2",
            title: "Dictionaries: character stats",
            concept: "Tables with key/value pairs",
            tip: "Use dictionaries to store all the info about a character or game object!",
            explanation:
              "A dictionary is like a character sheet in a role-playing game. Each stat has a name (key) and a value. Perfect for players and enemies!",
            code: `local player = {
    name = "Mathis",
    health = 100,
    strength = 45,
    level = 7
}

print("Player: " .. player.name)
print("Level " .. player.level)
player.health = player.health - 20
print("Health: " .. player.health)`,
          },
        ],
      },
      {
        id: 4,
        icon: "🌍",
        color: "#9B4CE8",
        title: "3D Architect",
        sub: "Hours 14-18 • 3D, Animations, Algorithms",
        lessons: [
          {
            id: "4-1",
            title: "3D Space: X, Y, Z",
            concept: "Coordinates and CFrame in Roblox",
            tip: "X = left/right, Y = up/down, Z = forward/back. Think of a 3D GPS!",
            explanation:
              "In Roblox, every object has a 3D address. With X, Y and Z you can place anything anywhere in your world! It's like GPS for your objects.",
            code: `local part = workspace.MyBrick

-- Teleport the brick
part.Position = Vector3.new(10, 5, 0)

-- CFrame for position + rotation
part.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)`,
          },
          {
            id: "4-2",
            title: "Tween Animations: smooth moves",
            concept: "TweenService to animate objects",
            tip: "Try different durations: 0.5 for fast, 3.0 for slow and dramatic!",
            explanation:
              "TweenService smoothly slides objects from one position to another. That's what makes your animations fluid and professional!",
            code: `local TweenService = game:GetService("TweenService")
local part = workspace.MyBrick

local info = TweenInfo.new(2)  -- 2 seconds
local goal = {
    Position = Vector3.new(0, 20, 0)
}

local anim = TweenService:Create(part, info, goal)
anim:Play()`,
          },
        ],
      },
      {
        id: 5,
        icon: "👑",
        color: "#E84C4C",
        title: "Code Master",
        sub: "Hours 20-24 • OOP, Inheritance, Raycasting",
        lessons: [
          {
            id: "5-1",
            title: "Classes: character templates",
            concept: "Object-Oriented Programming",
            tip: "setmetatable is Lua's magic for creating classes. It comes with practice!",
            explanation:
              "With classes, you create a 'template' for your characters. Like a cookie cutter: make it once and create as many cookies as you want!",
            code: `local Character = {}
Character.__index = Character

function Character.new(name, health)
    local self = setmetatable({}, Character)
    self.name = name
    self.health = health
    return self
end

function Character:introduce()
    print("I am " .. self.name)
    print("Health: " .. self.health)
end

local hero = Character.new("Hero", 100)
local boss = Character.new("Dragon", 999)
hero:introduce()
boss:introduce()`,
          },
        ],
      },
    ],
  },
  es: {
    ui: {
      back: "← Volver",
      done: "✓ ¡Lección completada!",
      completed: "✓ Completado",
      askRobo: "Preguntar a Robo",
      chatTitle: "Robo",
      chatSub: "Tu tutor IA",
      placeholder: "¿Alguna pregunta sobre el código?",
      welcome: "¡Bienvenido a RoboLua!",
      welcomeText:
        "¡Aprende a programar en Roblox con Robo! Elige un nivel para empezar.",
      tip: "Consejo",
      lessons: "lecciones",
      greeting:
        "¡Hola! Soy Robo 🤖 ¡Pregúntame lo que quieras sobre el código Lua! Estoy aquí para ayudarte.",
      systemPrompt: (lesson) =>
        `Eres Robo, un tutor divertido y alentador para niños de 8-13 años que aprenden Lua para Roblox.
Responde en español. Explica con analogías de videojuegos. Máximo 3-4 frases cortas.
Sé siempre positivo y alentador.
${lesson ? "Lección actual: " + lesson.title + ". Concepto: " + lesson.explanation : ""}`,
    },
    levels: [
      {
        id: 1,
        icon: "🚀",
        color: "#4C9BE8",
        title: "Primeros Pasos",
        sub: "Hours 1-3 • Scripts, Variables, Funciones",
        lessons: [
          {
            id: "1-1",
            title: "Tu primer script",
            concept: "Escribir código Lua",
            tip: "-- sirve para comentarios. ¡Roblox no los lee, son solo para ti!",
            explanation:
              "Un script es como una receta para el ordenador. ¡Le dices qué hacer, paso a paso! En Roblox Studio, tus scripts dan vida a tu juego.",
            code: `-- ¡Mi primer script de Roblox!
print("¡Hola mundo!")
print("¡Estoy programando en Roblox!")`,
          },
          {
            id: "1-2",
            title: "Variables: cajas mágicas",
            concept: "Guardar información",
            tip: "La palabra 'local' mantiene tu variable dentro del script. ¡Siempre usa 'local'!",
            explanation:
              "Una variable es como una caja con un nombre. Puedes guardar información dentro y recuperarla después. ¡Como tus cofres en Minecraft!",
            code: `local miNombre = "Mathis"
local miEdad = 11
local meGustandLosJuegos = true

print("Hola, soy " .. miNombre)
print("Tengo " .. miEdad .. " años")`,
          },
          {
            id: "1-3",
            title: "Funciones: tus superpoderes",
            concept: "Crear y llamar funciones",
            tip: "¡Puedes llamar una función tantas veces como quieras sin reescribir el código!",
            explanation:
              "Una función es un grupo de instrucciones con un nombre. ¡Es como un superpoder que inventas: le das un nombre y lo usas cuando quieras!",
            code: `local function saltarComoHeroe()
    print("¡Salto muy alto!")
    print("¡YEEAH!")
end

saltarComoHeroe()
saltarComoHeroe()  -- ¡otra vez!`,
          },
        ],
      },
      {
        id: 2,
        icon: "🔍",
        color: "#E8874C",
        title: "Explorador",
        sub: "Hours 4-8 • Parámetros, Condiciones, Bucles",
        lessons: [
          {
            id: "2-1",
            title: "Parámetros: personaliza tus funciones",
            concept: "Pasar info a las funciones",
            tip: "¡Los parámetros son como espacios vacíos que llenas cuando llamas la función!",
            explanation:
              "Con parámetros puedes enviar información a una función. ¡Es como pedir una pizza: dices qué pizza y qué ingredientes!",
            code: `local function saludar(nombre, puntos)
    print("¡Hola " .. nombre .. "!")
    print("¡Tienes " .. puntos .. " puntos!")
end

saludar("Mathis", 500)
saludar("Lucas", 1200)`,
          },
          {
            id: "2-2",
            title: "Si...Entonces: tu juego decide",
            concept: "if / elseif / else",
            tip: ">= significa 'mayor o igual que'. También puedes usar ==, ~=, <, >",
            explanation:
              "Con 'if', tu programa puede elegir qué hacer. ¡Como tú cuando decides según el tiempo: sol → salir afuera, lluvia → jugar adentro!",
            code: `local vida = 75

if vida > 80 then
    print("¡Perfecta forma!")
elseif vida > 30 then
    print("¡Cuidado, estás herido!")
else
    print("¡PELIGRO! ¡Vida crítica!")
end`,
          },
          {
            id: "2-3",
            title: "Bucles: repetir sin cansarse",
            concept: "Bucles for y while",
            tip: "Usa for cuando sabes cuántas veces. Usa while cuando no lo sabes.",
            explanation:
              "Los bucles repiten acciones automáticamente. ¡Imagina crear 100 enemigos sin escribirlo 100 veces! Esa es la magia de los bucles.",
            code: `-- Crear 5 enemigos
for i = 1, 5 do
    print("¡Enemigo " .. i .. " apareció!")
end

-- Contar monedas
local monedas = 10
while monedas > 0 do
    print("Moneda recogida. Quedan: " .. monedas)
    monedas = monedas - 1
end`,
          },
        ],
      },
      {
        id: 3,
        icon: "🏗️",
        color: "#4CBE72",
        title: "Constructor",
        sub: "Hours 9-13 • Tablas, Diccionarios, Módulos",
        lessons: [
          {
            id: "3-1",
            title: "Tablas: tu inventario del juego",
            concept: "Arrays (tablas ordenadas)",
            tip: "¡En Lua, los arrays empiezan en el índice 1, no en 0 como otros lenguajes!",
            explanation:
              "Una tabla es como tu inventario del juego. ¡Puedes poner muchos objetos en orden y encontrarlos por su número (índice)!",
            code: `local inventario = {"Espada", "Escudo", "Poción"}

print(inventario[1])  -- Espada
print(inventario[2])  -- Escudo

-- Agregar un objeto
table.insert(inventario, "Arco")
print("Objetos: " .. #inventario)  -- 4`,
          },
          {
            id: "3-2",
            title: "Diccionarios: ficha de personaje",
            concept: "Tablas con claves y valores",
            tip: "¡Usa diccionarios para guardar toda la info de un personaje o objeto del juego!",
            explanation:
              "Un diccionario es como una hoja de personaje de rol. Cada característica tiene un nombre (clave) y un valor. ¡Perfecto para jugadores y enemigos!",
            code: `local jugador = {
    nombre = "Mathis",
    vida = 100,
    fuerza = 45,
    nivel = 7
}

print("Jugador: " .. jugador.nombre)
print("Nivel " .. jugador.nivel)
jugador.vida = jugador.vida - 20
print("Vida: " .. jugador.vida)`,
          },
        ],
      },
      {
        id: 4,
        icon: "🌍",
        color: "#9B4CE8",
        title: "Arquitecto 3D",
        sub: "Hours 14-18 • 3D, Animaciones, Algoritmos",
        lessons: [
          {
            id: "4-1",
            title: "El espacio 3D: X, Y, Z",
            concept: "Coordenadas y CFrame en Roblox",
            tip: "X = izquierda/derecha, Y = arriba/abajo, Z = adelante/atrás. ¡Como un GPS en 3D!",
            explanation:
              "En Roblox, cada objeto tiene una dirección 3D. ¡Con X, Y y Z puedes colocar cualquier cosa en tu mundo! Es como el GPS de tus objetos.",
            code: `local part = workspace.MiLadrillo

-- Teleportar el ladrillo
part.Position = Vector3.new(10, 5, 0)

-- CFrame para posición + rotación
part.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)`,
          },
          {
            id: "4-2",
            title: "Animaciones Tween: movimiento suave",
            concept: "TweenService para animar objetos",
            tip: "Prueba diferentes duraciones: 0.5 para rápido, 3.0 para lento y dramático.",
            explanation:
              "TweenService desliza los objetos suavemente de una posición a otra. ¡Eso es lo que hace que tus animaciones sean fluidas y profesionales!",
            code: `local TweenService = game:GetService("TweenService")
local part = workspace.MiLadrillo

local info = TweenInfo.new(2)  -- 2 segundos
local objetivo = {
    Position = Vector3.new(0, 20, 0)
}

local anim = TweenService:Create(part, info, objetivo)
anim:Play()`,
          },
        ],
      },
      {
        id: 5,
        icon: "👑",
        color: "#E84C4C",
        title: "Maestro del Código",
        sub: "Hours 20-24 • POO, Herencia, Raycasting",
        lessons: [
          {
            id: "5-1",
            title: "Clases: moldes de personajes",
            concept: "Programación Orientada a Objetos",
            tip: "setmetatable es la magia de Lua para crear clases. ¡Llega con la práctica!",
            explanation:
              "Con las clases creas una 'plantilla' para tus personajes. ¡Como un molde para galletas: lo haces una vez y creas tantas galletas como quieras!",
            code: `local Personaje = {}
Personaje.__index = Personaje

function Personaje.new(nombre, vida)
    local self = setmetatable({}, Personaje)
    self.nombre = nombre
    self.vida = vida
    return self
end

function Personaje:presentarse()
    print("Soy " .. self.nombre)
    print("Vida: " .. self.vida)
end

local heroe = Personaje.new("Héroe", 100)
local jefe = Personaje.new("Dragón", 999)
heroe:presentarse()
jefe:presentarse()`,
          },
        ],
      },
    ],
  },
};

// ─── HELPERS ───────────────────────────────────────────────────────────────────
function highlightLua(code) {
  const keywords = [
    "local","function","if","then","elseif","else","end",
    "while","do","for","return","true","false","not","and","or","nil",
  ];
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(--[^\n]*)/g, '<span style="color:#718096">$1</span>')
    .replace(/"([^"]*)"/g, '<span style="color:#68D391">"$1"</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color:#F6AD55">$1</span>');
  keywords.forEach((kw) => {
    html = html.replace(
      new RegExp(`\\b(${kw})\\b`, "g"),
      '<span style="color:#63B3ED">$1</span>'
    );
  });
  return html;
}

// ─── COMPONENTS ────────────────────────────────────────────────────────────────
function ChatPanel({ d, lesson, onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: d.ui.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const q = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user", content: q }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: d.ui.systemPrompt(lesson),
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Oups ! Réessaie." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Erreur réseau. Réessaie !" },
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "0.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden", marginTop: 12 }}>
      <div style={{ padding: "10px 14px", borderBottom: "0.5px solid #e2e8f0", display: "flex", alignItems: "center", gap: 10, background: "#fff" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#4C9BE8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🤖</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{d.ui.chatTitle}</div>
          <div style={{ fontSize: 12, color: "#718096" }}>{d.ui.chatSub}</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto", border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#718096", padding: 4 }}>✕</button>
      </div>
      <div style={{ height: 200, overflowY: "auto", padding: 12, display: "flex", flexDirection: "column", gap: 8, background: "#f9fafb" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ maxWidth: "85%", padding: "8px 12px", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: m.role === "user" ? "#4C9BE8" : "#fff", color: m.role === "user" ? "#fff" : "#2d3748", alignSelf: m.role === "user" ? "flex-end" : "flex-start", fontSize: 13, lineHeight: 1.5, border: m.role === "assistant" ? "0.5px solid #e2e8f0" : "none" }}>
            {m.content}
          </div>
        ))}
        {loading && (
          <div style={{ maxWidth: "85%", padding: "8px 12px", borderRadius: "12px 12px 12px 2px", background: "#fff", color: "#718096", alignSelf: "flex-start", fontSize: 13, border: "0.5px solid #e2e8f0" }}>...</div>
        )}
        <div ref={bottomRef} />
      </div>
      <div style={{ padding: 10, display: "flex", gap: 8, background: "#fff", borderTop: "0.5px solid #e2e8f0" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={d.ui.placeholder}
          style={{ flex: 1, padding: "8px 12px", border: "0.5px solid #cbd5e0", borderRadius: 20, fontSize: 13, outline: "none", background: "#fff" }}
        />
        <button
          onClick={send}
          disabled={loading}
          style={{ width: 32, height: 32, borderRadius: "50%", background: loading ? "#a0aec0" : "#4C9BE8", border: "none", cursor: loading ? "not-allowed" : "pointer", color: "#fff", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

function LessonView({ lesson, levelColor, d, onBack, completed, onComplete }) {
  const [chatOpen, setChatOpen] = useState(false);
  const done = completed.has(lesson.id);

  return (
    <div>
      <button onClick={onBack} style={{ border: "none", background: "none", cursor: "pointer", color: "#718096", fontSize: 13, padding: "6px 0", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
        {d.ui.back}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "#fff", borderRadius: 12, border: "0.5px solid #e2e8f0", padding: 16 }}>
          <div style={{ fontSize: 11, color: "#718096", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{lesson.concept}</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: "#1a202c", marginBottom: 10 }}>{lesson.title}</div>
          <div style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.7 }}>{lesson.explanation}</div>
          <div style={{ background: "#EBF8FF", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#2b6cb0", marginTop: 10, display: "flex", gap: 8 }}>
            <span>💡</span>
            <span><strong>{d.ui.tip} :</strong> {lesson.tip}</span>
          </div>
        </div>
        <div style={{ background: "#1A1A2E", borderRadius: 12, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "#718096", fontFamily: "monospace", marginBottom: 8 }}>💻 Code Lua</div>
          <pre style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1.7, color: "#E2E8F0", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            dangerouslySetInnerHTML={{ __html: highlightLua(lesson.code) }}
          />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => !done && onComplete(lesson.id)}
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "none", background: done ? "#e2e8f0" : "#4CBE72", color: done ? "#718096" : "#fff", fontSize: 14, fontWeight: 500, cursor: done ? "default" : "pointer" }}
          >
            {done ? d.ui.completed : d.ui.done}
          </button>
          {!chatOpen && (
            <button onClick={() => setChatOpen(true)} style={{ padding: "10px 16px", borderRadius: 8, border: "0.5px solid #cbd5e0", background: "transparent", color: "#2d3748", fontSize: 14, cursor: "pointer" }}>
              {d.ui.askRobo} ↗
            </button>
          )}
        </div>
        {chatOpen && <ChatPanel d={d} lesson={lesson} onClose={() => setChatOpen(false)} />}
      </div>
    </div>
  );
}

function LevelView({ level, d, onBack, completed, onComplete, onSelectLesson }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div>
      <button onClick={onBack} style={{ border: "none", background: "none", cursor: "pointer", color: "#718096", fontSize: 13, padding: "6px 0", marginBottom: 12 }}>
        {d.ui.back}
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 28 }}>{level.icon}</span>
        <div>
          <div style={{ fontSize: 16, fontWeight: 500, color: level.color }}>{level.title}</div>
          <div style={{ fontSize: 12, color: "#718096" }}>{level.sub}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {level.lessons.map((ls) => {
          const done = completed.has(ls.id);
          return (
            <div key={ls.id} onClick={() => onSelectLesson(ls)} style={{ background: "#fff", borderRadius: 8, border: "0.5px solid #e2e8f0", padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: done ? level.color + "22" : "#f7fafc", color: done ? level.color : "#718096", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                {done ? "✓" : "▶"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#1a202c" }}>{ls.title}</div>
                <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>{ls.concept}</div>
              </div>
              <span style={{ color: "#a0aec0" }}>›</span>
            </div>
          );
        })}
      </div>
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)} style={{ marginTop: 12, width: "100%", padding: 10, borderRadius: 8, border: "0.5px solid #cbd5e0", background: "transparent", color: "#2d3748", fontSize: 14, cursor: "pointer" }}>
          {d.ui.askRobo} ↗
        </button>
      )}
      {chatOpen && <ChatPanel d={d} lesson={null} onClose={() => setChatOpen(false)} />}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState("fr");
  const [view, setView] = useState("map");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completed, setCompleted] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("robolua_completed");
        return saved ? new Set(JSON.parse(saved)) : new Set();
      } catch { return new Set(); }
    }
    return new Set();
  });

  const d = DATA[lang];
  const totalLessons = d.levels.reduce((s, l) => s + l.lessons.length, 0);
  const prog = Math.round((completed.size / totalLessons) * 100);

  const markComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set([...prev, id]);
      try { localStorage.setItem("robolua_completed", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const switchLang = (l) => {
    setLang(l);
    setView("map");
    setSelectedLevel(null);
    setSelectedLesson(null);
  };

  return (
    <>
      <Head>
        <title>RoboLua — Apprends à coder avec Roblox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4C9BE8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {/* HEADER */}
        <div style={{ background: "#fff", borderBottom: "0.5px solid #e2e8f0", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a202c" }}>
            Robo<span style={{ color: "#4C9BE8" }}>Lua</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["fr", "en", "es"].map((l) => (
              <button key={l} onClick={() => switchLang(l)} style={{ padding: "3px 9px", borderRadius: 6, border: "0.5px solid " + (lang === l ? "#4C9BE8" : "#cbd5e0"), background: lang === l ? "#4C9BE8" : "transparent", color: lang === l ? "#fff" : "#718096", fontSize: 12, cursor: "pointer", textTransform: "uppercase" }}>
                {l}
              </button>
            ))}
          </div>
          <div style={{ flex: 1, height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "#4CBE72", width: prog + "%", borderRadius: 3, transition: "width 0.5s" }} />
          </div>
          <div style={{ fontSize: 13, color: "#718096", whiteSpace: "nowrap" }}>⭐ {completed.size}/{totalLessons}</div>
        </div>

        {/* CONTENT */}
        <div style={{ maxWidth: 680, margin: "0 auto", padding: 16 }}>
          {view === "map" && (
            <>
              <div style={{ background: "#fff", borderRadius: 12, border: "0.5px solid #e2e8f0", padding: 20, textAlign: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎮</div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#1a202c", marginBottom: 8 }}>{d.ui.welcome}</div>
                <div style={{ fontSize: 14, color: "#718096", lineHeight: 1.6 }}>{d.ui.welcomeText}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {d.levels.map((lvl, idx) => {
                  const prevDone = idx === 0 || d.levels[idx - 1].lessons.every((ls) => completed.has(ls.id));
                  const lvlDone = lvl.lessons.filter((ls) => completed.has(ls.id)).length;
                  const lvlProg = Math.round((lvlDone / lvl.lessons.length) * 100);
                  const locked = !prevDone;
                  return (
                    <div key={lvl.id} onClick={() => !locked && (setSelectedLevel(lvl), setView("level"))}
                      style={{ background: "#fff", borderRadius: 12, border: "0.5px solid #e2e8f0", padding: 16, cursor: locked ? "not-allowed" : "pointer", opacity: locked ? 0.5 : 1 }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>{locked ? "🔒" : lvl.icon}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: locked ? "#a0aec0" : lvl.color, marginBottom: 4 }}>{lvl.title}</div>
                      <div style={{ fontSize: 11, color: "#718096", lineHeight: 1.4 }}>{lvl.sub}</div>
                      <div style={{ marginTop: 10, height: 4, background: "#e2e8f0", borderRadius: 2, overflow: "hidden" }}>
                        <div style={{ height: "100%", background: lvl.color, width: lvlProg + "%", transition: "width 0.5s" }} />
                      </div>
                      <div style={{ fontSize: 11, color: "#718096", marginTop: 6 }}>{lvlDone}/{lvl.lessons.length} {d.ui.lessons}</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {view === "level" && selectedLevel && (
            <LevelView
              level={selectedLevel}
              d={d}
              onBack={() => setView("map")}
              completed={completed}
              onComplete={markComplete}
              onSelectLesson={(ls) => { setSelectedLesson(ls); setView("lesson"); }}
            />
          )}

          {view === "lesson" && selectedLesson && (
            <LessonView
              lesson={selectedLesson}
              levelColor={selectedLevel?.color || "#4C9BE8"}
              d={d}
              onBack={() => setView("level")}
              completed={completed}
              onComplete={markComplete}
            />
          )}
        </div>
      </div>
    </>
  );
}
