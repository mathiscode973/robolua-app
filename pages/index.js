import { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";

// ─── SVG AVATARS ─────────────────────────────────────────────────────────────

function SuperpapaAvatar({ size = 120, animate = false }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 100 140" className={animate ? "pulse" : ""}>
      {/* Chapeau cowboy */}
      <ellipse cx="50" cy="38" rx="30" ry="5" fill="#c8a96e" />
      <rect x="28" y="18" width="44" height="22" rx="4" fill="#d4b483" />
      <ellipse cx="50" cy="18" rx="22" ry="5" fill="#c8a96e" />
      <rect x="35" y="14" width="30" height="8" rx="4" fill="#b8945a" />
      {/* Tête */}
      <rect x="32" y="38" width="36" height="32" rx="4" fill="#f5d5b8" />
      {/* Yeux */}
      <rect x="39" y="46" width="7" height="7" rx="1" fill="#fff" />
      <rect x="54" y="46" width="7" height="7" rx="1" fill="#fff" />
      <rect x="41" y="48" width="4" height="4" rx="1" fill="#2d3748" />
      <rect x="56" y="48" width="4" height="4" rx="1" fill="#2d3748" />
      {/* Clin d'oeil */}
      <line x1="54" y1="49" x2="61" y2="49" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sourire */}
      <path d="M 40 62 Q 50 70 60 62" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Corps - veste flammes */}
      <rect x="26" y="70" width="48" height="42" rx="3" fill="#1a1a1a" />
      {/* Flammes gauche */}
      <path d="M26 112 Q24 100 28 90 Q30 85 27 78 Q32 86 30 95 Q35 88 33 78 Q38 88 35 100 Q32 108 26 112Z" fill="#e84c4c" />
      <path d="M26 112 Q25 102 29 93 Q31 88 29 82 Q33 90 31 98 Q34 92 33 83 Q37 92 35 103 Q32 109 26 112Z" fill="#f6ad55" />
      <path d="M28 112 Q27 104 31 96 Q32 91 31 86 Q34 93 33 100 Q35 95 34 88 Q37 95 36 105 Q33 110 28 112Z" fill="#ffd700" />
      {/* Flammes droite */}
      <path d="M74 112 Q76 100 72 90 Q70 85 73 78 Q68 86 70 95 Q65 88 67 78 Q62 88 65 100 Q68 108 74 112Z" fill="#e84c4c" />
      <path d="M74 112 Q75 102 71 93 Q69 88 71 82 Q67 90 69 98 Q66 92 67 83 Q63 92 65 103 Q68 109 74 112Z" fill="#f6ad55" />
      <path d="M72 112 Q73 104 69 96 Q68 91 69 86 Q66 93 67 100 Q65 95 66 88 Q63 95 64 105 Q67 110 72 112Z" fill="#ffd700" />
      {/* Chemise blanche */}
      <rect x="40" y="70" width="20" height="42" fill="#f0f0f0" />
      {/* Mains */}
      <rect x="14" y="72" width="12" height="10" rx="3" fill="#f5d5b8" />
      <rect x="74" y="72" width="12" height="10" rx="3" fill="#f5d5b8" />
      {/* Pantalon */}
      <rect x="26" y="112" width="20" height="22" rx="2" fill="#2d3748" />
      <rect x="54" y="112" width="20" height="22" rx="2" fill="#2d3748" />
      {/* Chaussures */}
      <rect x="24" y="130" width="24" height="8" rx="3" fill="#1a1a1a" />
      <rect x="52" y="130" width="24" height="8" rx="3" fill="#1a1a1a" />
    </svg>
  );
}

function MathisAvatar({ size = 100, celebrating = false }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 100 140" className={celebrating ? "pop-in" : ""}>
      {/* Cheveux roux */}
      <rect x="28" y="24" width="44" height="18" rx="6" fill="#c0392b" />
      <rect x="28" y="28" width="8" height="12" rx="2" fill="#c0392b" />
      <rect x="64" y="28" width="8" height="12" rx="2" fill="#c0392b" />
      {/* Tête */}
      <rect x="30" y="32" width="40" height="34" rx="4" fill="#f5d5b8" />
      {/* Yeux - expression excitée */}
      <rect x="36" y="40" width="9" height="9" rx="2" fill="#fff" />
      <rect x="55" y="40" width="9" height="9" rx="2" fill="#fff" />
      <rect x="38" y="42" width="5" height="5" rx="1" fill="#2d3748" />
      <rect x="57" y="42" width="5" height="5" rx="1" fill="#2d3748" />
      {/* Reflets yeux */}
      <rect x="41" y="43" width="2" height="2" fill="#fff" />
      <rect x="60" y="43" width="2" height="2" fill="#fff" />
      {/* Sourire grand */}
      <path d="M 36 56 Q 50 66 64 56" stroke="#2d3748" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Corps */}
      <rect x="25" y="66" width="50" height="44" rx="3" fill="#1a1a1a" />
      {/* Flammes gauche */}
      <path d="M25 110 Q23 98 27 88 Q29 82 26 75 Q31 84 29 93 Q34 86 32 76 Q37 86 34 98 Q31 106 25 110Z" fill="#e84c4c" />
      <path d="M27 110 Q26 100 30 92 Q31 87 30 81 Q34 89 32 97 Q35 91 34 84 Q38 92 36 103 Q33 108 27 110Z" fill="#ffd700" />
      {/* Flammes droite */}
      <path d="M75 110 Q77 98 73 88 Q71 82 74 75 Q69 84 71 93 Q66 86 68 76 Q63 86 66 98 Q69 106 75 110Z" fill="#e84c4c" />
      <path d="M73 110 Q74 100 70 92 Q69 87 70 81 Q66 89 68 97 Q65 91 66 84 Q62 92 64 103 Q67 108 73 110Z" fill="#ffd700" />
      {/* Chemise */}
      <rect x="38" y="66" width="24" height="44" fill="#f0f0f0" />
      {/* Bras gauche normal */}
      <rect x="13" y="68" width="12" height="10" rx="3" fill="#f5d5b8" />
      {/* Bras droit levé */}
      <rect x="75" y="52" width="10" height="22" rx="3" fill="#1a1a1a" />
      <rect x="74" y="46" width="12" height="10" rx="3" fill="#f5d5b8" />
      {/* Flammes bras droit */}
      <path d="M75 74 Q73 66 76 60 Q77 57 75 53 Q78 58 77 64 Q79 60 78 54 Q81 60 80 68 Q78 72 75 74Z" fill="#f6ad55" />
      {/* Pantalon */}
      <rect x="25" y="110" width="21" height="24" rx="2" fill="#2d3748" />
      <rect x="54" y="110" width="21" height="24" rx="2" fill="#2d3748" />
      {/* Chaussures */}
      <rect x="23" y="128" width="25" height="9" rx="3" fill="#1a1a1a" />
      <rect x="52" y="128" width="25" height="9" rx="3" fill="#1a1a1a" />
    </svg>
  );
}

// ─── CURRICULUM DATA ──────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1, icon: "🚀", color: "#4C9BE8",
    title: "Premiers Pas",
    sub: "Heures 1-3 • Scripts, Variables, Fonctions",
    intro: "Howdy ! Je suis Superpapa973, ton guide dans cette aventure du code. On commence par les bases : comment parler à Roblox !",
    lessons: [
      {
        id: "1-1", title: "Ton premier script",
        concept: "print() et commentaires",
        superpapa: "Tout grand jeu commence par une seule ligne de code. La tienne, c'est aujourd'hui !",
        explanation: "Un script, c'est comme une recette que tu donnes à l'ordinateur. Il suit tes instructions une par une, dans l'ordre ! La fonction print() affiche un message dans la console — c'est ton premier outil de développeur.",
        tip: "Les lignes qui commencent par -- sont des commentaires. Roblox les ignore complètement — c'est juste pour toi et tes amis qui liront ton code.",
        code: `-- Mon premier script Roblox !
-- Les commentaires expliquent le code

print("Bonjour le monde !")
print("Je m'appelle Mathis")
print("Je code dans Roblox !")

-- Tu peux imprimer des nombres aussi
print(42)
print(100 + 200)`
      },
      {
        id: "1-2", title: "Variables — tes boîtes magiques",
        concept: "local, types : string, number, boolean",
        superpapa: "Les variables, c'est comme ton inventaire dans un jeu RPG. Tu ranges des choses et tu les retrouves quand tu en as besoin !",
        explanation: "Une variable est une boîte avec un nom. Tu y mets une valeur, et tu peux la récupérer ou la changer plus tard. Il existe trois types principaux : les textes (string), les nombres (number) et les vrais/faux (boolean).",
        tip: "Utilise toujours le mot 'local' devant tes variables. Ça les garde bien rangées dans ton script et évite les bugs !",
        code: `-- Les trois types de variables
local monPrenom = "Mathis"        -- texte (string)
local monAge = 11                  -- nombre (number)
local jaimeCoder = true            -- vrai/faux (boolean)

print("Bonjour, je suis " .. monPrenom)
print("J'ai " .. monAge .. " ans")

-- On peut changer la valeur !
monAge = 12
print("Maintenant j'ai " .. monAge .. " ans")

-- Maths avec les variables
local points = 100
local bonus = 50
local total = points + bonus
print("Score total : " .. total)`
      },
      {
        id: "1-3", title: "Fonctions — tes super-pouvoirs",
        concept: "Créer, nommer et appeler des fonctions",
        superpapa: "Une fonction, c'est comme une attaque spéciale dans un jeu de combat. Tu la crées une fois, et tu peux l'utiliser quand tu veux !",
        explanation: "Une fonction regroupe plusieurs instructions sous un seul nom. Au lieu de réécrire le même code 10 fois, tu l'écris une fois dans une fonction et tu l'appelles autant que tu veux. C'est ça qui rend les développeurs efficaces !",
        tip: "Choisis des noms de fonctions clairs et descriptifs. 'faireSauter()' est bien mieux que 'f1()' — dans 6 mois tu sauras encore ce que ça fait !",
        code: `-- Définir une fonction
local function direBonjour()
    print("Salut tout le monde !")
    print("Bienvenue dans mon jeu !")
end

-- Appeler la fonction (l'utiliser)
direBonjour()
direBonjour()
direBonjour()  -- On peut l'appeler autant de fois qu'on veut !

-- Fonction qui fait un calcul
local function afficherScore()
    local score = 9001
    print("TON SCORE : " .. score)
    print("C'est OVER 9000 !!!")
end

afficherScore()`
      }
    ]
  },
  {
    id: 2, icon: "⚙️", color: "#E8874C",
    title: "Logique de Jeu",
    sub: "Heures 4-8 • Paramètres, Conditions, Boucles",
    intro: "Maintenant qu'on sait écrire du code, on va apprendre à lui donner de l'intelligence — pour qu'il prenne des décisions comme un vrai cerveau de jeu !",
    lessons: [
      {
        id: "2-1", title: "Paramètres — personnalise tes fonctions",
        concept: "Arguments, paramètres, valeurs de retour",
        superpapa: "Les paramètres, c'est comme les ingrédients d'une recette. Même fonction, ingrédients différents — résultat différent !",
        explanation: "Les paramètres permettent d'envoyer des informations à une fonction. Au lieu d'une fonction qui fait toujours la même chose, elle peut s'adapter selon ce qu'on lui donne. La valeur 'return' permet à la fonction de te rendre un résultat.",
        tip: "Une fonction peut recevoir plusieurs paramètres séparés par des virgules, et elle peut aussi retourner plusieurs valeurs !",
        code: `-- Fonction avec paramètres
local function accueillir(prenom, score)
    print("Bienvenue " .. prenom .. " !")
    print("Ton score : " .. score .. " points")
end

accueillir("Mathis", 1500)
accueillir("Lucas", 800)

-- Fonction qui retourne une valeur
local function calculerBonus(score, multiplicateur)
    local bonus = score * multiplicateur
    return bonus
end

local monBonus = calculerBonus(100, 3)
print("Bonus gagné : " .. monBonus)  -- 300

-- Retourner plusieurs valeurs
local function minMax(a, b)
    return math.min(a, b), math.max(a, b)
end

local petit, grand = minMax(42, 17)
print("Min: " .. petit .. ", Max: " .. grand)`
      },
      {
        id: "2-2", title: "Conditions — ton jeu prend des décisions",
        concept: "if / elseif / else / opérateurs logiques",
        superpapa: "C'est la ligne de vie d'un jeu ! Si le joueur touche un ennemi, il perd de la vie. Sinon, il continue. Tout ça avec 'if' !",
        explanation: "Les conditions permettent à ton code d'exécuter différentes actions selon la situation. C'est le cerveau de ton jeu : il observe ce qui se passe et réagit intelligemment. Tu peux combiner des conditions avec 'and' et 'or'.",
        tip: "== teste si deux choses sont égales. = assigne une valeur. Confondre les deux est le bug numéro 1 des débutants !",
        code: `local vie = 65
local bouclier = true

-- if simple
if vie <= 0 then
    print("GAME OVER !")
elseif vie <= 25 then
    print("DANGER ! Fuis !")
elseif vie <= 50 then
    print("Attention, tu es blessé")
else
    print("Tu es en pleine forme !")
end

-- Opérateurs logiques : and, or, not
if vie > 30 and bouclier == true then
    print("Tu peux attaquer !")
end

if vie <= 10 or not bouclier then
    print("Utilise une potion !")
end

-- Comparer des textes
local arme = "épée"
if arme == "épée" then
    print("Dégâts : 50")
elseif arme == "arc" then
    print("Dégâts : 30 à distance")
end`
      },
      {
        id: "2-3", title: "Déboguer — trouver et corriger les bugs",
        concept: "Debouncing, print debugging, pcall",
        superpapa: "Tout développeur fait des bugs — même les pros ! La différence, c'est qu'on sait les trouver. C'est une compétence à part entière.",
        explanation: "Le débogage, c'est l'art de trouver pourquoi ton code ne fait pas ce que tu veux. Le 'debouncing' évite qu'une action se déclenche 100 fois d'un coup. Avec pcall, ton jeu ne plante pas quand il y a une erreur.",
        tip: "Ajoute des print() partout pour voir ce qui se passe dans ton code. C'est la technique la plus simple et la plus efficace !",
        code: `-- Debouncing : éviter de déclencher trop vite
local peutSauter = true

local function sauter()
    if not peutSauter then return end  -- sort si déjà en train de sauter
    
    peutSauter = false
    print("Saut !")
    
    task.wait(0.5)  -- attend 0.5 seconde
    peutSauter = true
    print("Prêt à sauter à nouveau")
end

-- Appels rapides : seul le premier compte
sauter()
sauter()  -- ignoré (peutSauter = false)

-- pcall : exécuter sans planter le jeu
local succes, erreur = pcall(function()
    local x = nil
    print(x.valeur)  -- causerait un bug !
end)

if not succes then
    print("Erreur attrapée : " .. erreur)
    print("Le jeu continue quand même !")
end`
      },
      {
        id: "2-4", title: "Boucle while — répéter tant que",
        concept: "while / repeat-until / task.wait()",
        superpapa: "Imagine devoir compter 1000 ennemis à la main... La boucle while fait ça pour toi en un clin d'oeil !",
        explanation: "La boucle while répète un bloc de code tant qu'une condition est vraie. C'est parfait pour faire des compteurs, des minuteries, ou tout ce qui doit se répéter indéfiniment dans un jeu. task.wait() est essentiel pour ne pas bloquer le jeu.",
        tip: "Fais toujours attention à ce que ta condition devienne fausse un jour — sinon tu crées une boucle infinie qui bloque tout !",
        code: `-- Compte à rebours avant le départ
local temps = 5

while temps > 0 do
    print("Départ dans : " .. temps)
    task.wait(1)  -- attend 1 seconde
    temps = temps - 1
end

print("C'EST PARTI !")

-- Régénération de vie automatique
local vie = 30
local vieMax = 100

while vie < vieMax do
    vie = vie + 10
    print("Vie régénérée : " .. vie .. "/" .. vieMax)
    task.wait(2)
end

print("Vie au maximum !")

-- repeat-until : s'exécute au moins une fois
local tentatives = 0
repeat
    tentatives = tentatives + 1
    print("Tentative " .. tentatives)
until tentatives >= 3`
      },
      {
        id: "2-5", title: "Boucle for — répéter un nombre précis de fois",
        concept: "for numérique / for générique / break / continue",
        superpapa: "La boucle for est ta meilleure amie pour créer des vagues d'ennemis, des récompenses, des niveaux — tout ce qui se répète un nombre précis de fois !",
        explanation: "La boucle for numériquepermet de répéter exactement N fois avec un compteur automatique. Tu peux aussi aller à l'envers, ou sauter de 2 en 2. Le mot 'break' permet de sortir d'une boucle avant la fin.",
        tip: "Utilise 'for' quand tu sais exactement combien de fois répéter. Utilise 'while' quand tu ne sais pas à l'avance.",
        code: `-- Boucle for de base
for i = 1, 5 do
    print("Tour " .. i)
end

-- Compter à l'envers
for i = 10, 1, -1 do
    print("Compte à rebours : " .. i)
end

-- Sauter de 2 en 2
for i = 0, 20, 2 do
    print("Nombre pair : " .. i)
end

-- Créer 10 pièces d'or
for i = 1, 10 do
    print("Pièce " .. i .. " créée !")
end

-- Break : sortir de la boucle
for i = 1, 100 do
    if i == 7 then
        print("Trouvé le chiffre magique !")
        break  -- on sort immédiatement
    end
    print("Cherche... " .. i)
end

-- Boucles imbriquées (grille)
for ligne = 1, 3 do
    for colonne = 1, 3 do
        print("Case [" .. ligne .. "," .. colonne .. "]")
    end
end`
      }
    ]
  },
  {
    id: 3, icon: "📦", color: "#4CBE72",
    title: "Stocker les Données",
    sub: "Heures 9-10 • Tableaux et Dictionnaires",
    intro: "Un jeu, c'est plein de données : inventaires, scores, noms de joueurs... On apprend à tout organiser proprement !",
    lessons: [
      {
        id: "3-1", title: "Tableaux — ton inventaire de jeu",
        concept: "Arrays, table.insert, table.remove, ipairs",
        superpapa: "Ton inventaire dans un RPG ? C'est un tableau ! Une liste d'objets numérotés que tu peux modifier à volonté.",
        explanation: "Un tableau (array) stocke une liste d'éléments dans l'ordre, numérotés à partir de 1. Tu peux ajouter, supprimer, et parcourir les éléments facilement. C'est la structure de données la plus utilisée dans les jeux.",
        tip: "Dans Lua, les tableaux commencent à l'index 1, pas 0 comme dans d'autres langages. # donne la taille du tableau.",
        code: `-- Créer un tableau
local inventaire = {"Épée", "Bouclier", "Potion de vie", "Torche"}

-- Accéder à un élément (commence à 1 !)
print(inventaire[1])   -- Épée
print(inventaire[3])   -- Potion de vie

-- Taille du tableau
print("Objets : " .. #inventaire)  -- 4

-- Ajouter à la fin
table.insert(inventaire, "Arc")
print("Après ajout : " .. #inventaire)  -- 5

-- Insérer à une position précise
table.insert(inventaire, 2, "Dague")
print(inventaire[2])  -- Dague

-- Supprimer un élément
table.remove(inventaire, 1)  -- enlève l'Épée

-- Parcourir avec ipairs
print("=== Inventaire complet ===")
for index, objet in ipairs(inventaire) do
    print(index .. ". " .. objet)
end

-- Tableau de nombres
local scores = {1500, 2300, 800, 4200, 1100}
local total = 0
for _, score in ipairs(scores) do
    total = total + score
end
print("Score moyen : " .. total / #scores)`
      },
      {
        id: "3-2", title: "Dictionnaires — fiches de personnage",
        concept: "Tables clé/valeur, pairs(), tables imbriquées",
        superpapa: "La fiche d'identité d'un personnage — nom, vie, force, niveau — c'est un dictionnaire. Chaque info a un nom précis !",
        explanation: "Un dictionnaire associe des clés (noms) à des valeurs. Contrairement aux tableaux, l'ordre n'a pas d'importance — on accède aux valeurs par leur nom. C'est parfait pour stocker les caractéristiques d'un personnage ou d'un objet.",
        tip: "On peut imbriquer des tables dans des tables — par exemple un joueur qui a un inventaire (tableau) dans sa fiche (dictionnaire).",
        code: `-- Créer un dictionnaire
local joueur = {
    nom = "Mathis",
    vie = 100,
    vieMax = 100,
    force = 45,
    defense = 30,
    niveau = 7,
    estVivant = true
}

-- Lire les valeurs
print("Joueur : " .. joueur.nom)
print("Niveau " .. joueur.niveau)
print("Vie : " .. joueur.vie .. "/" .. joueur.vieMax)

-- Modifier une valeur
joueur.vie = joueur.vie - 25
print("Après dégâts : " .. joueur.vie)

-- Ajouter une nouvelle clé
joueur.experience = 2500
print("XP : " .. joueur.experience)

-- Parcourir avec pairs()
print("=== Fiche complète ===")
for cle, valeur in pairs(joueur) do
    print(cle .. " : " .. tostring(valeur))
end

-- Tables imbriquées
local equipe = {
    {nom = "Mathis", role = "Guerrier", niveau = 7},
    {nom = "Lucas", role = "Mage", niveau = 5},
    {nom = "Emma", role = "Archer", niveau = 6},
}

for _, membre in ipairs(equipe) do
    print(membre.nom .. " - " .. membre.role .. " niv." .. membre.niveau)
end`
      },
      {
        id: "3-3", title: "Trier et chercher dans les données",
        concept: "table.sort, recherche, algorithmes basiques",
        superpapa: "Un classement de meilleurs scores ? Il faut trier ! Voilà comment les algorithmes entrent dans un jeu réel.",
        explanation: "Trier une liste est une opération fondamentale dans les jeux — classements, inventaires par valeur, ennemis par distance... Lua a table.sort() qui fait ça automatiquement, et on peut lui dire comment trier.",
        tip: "table.sort modifie le tableau original. Si tu veux garder l'original intact, copie-le d'abord avec une boucle for.",
        code: `-- Tableau de scores
local scores = {
    {nom = "Mathis", score = 4200},
    {nom = "Lucas", score = 1800},
    {nom = "Emma", score = 5500},
    {nom = "Noah", score = 3100},
}

-- Trier du plus grand au plus petit
table.sort(scores, function(a, b)
    return a.score > b.score
end)

-- Afficher le classement
print("=== CLASSEMENT ===")
for position, joueur in ipairs(scores) do
    print(position .. ". " .. joueur.nom .. " - " .. joueur.score .. " pts")
end

-- Chercher un élément dans un tableau
local inventaire = {"Épée", "Potion", "Arc", "Bouclier", "Torche"}
local objet_cherche = "Arc"
local trouve = false

for index, objet in ipairs(inventaire) do
    if objet == objet_cherche then
        print("'" .. objet_cherche .. "' trouvé à l'index " .. index)
        trouve = true
        break
    end
end

if not trouve then
    print("Objet non trouvé !")
end

-- Filtrer : garder seulement les scores > 2000
local bons_scores = {}
for _, joueur in ipairs(scores) do
    if joueur.score > 2000 then
        table.insert(bons_scores, joueur.nom)
    end
end
print("Joueurs qualifiés : " .. #bons_scores)`
      }
    ]
  },
  {
    id: 4, icon: "🏗️", color: "#9B4CE8",
    title: "Architecture Roblox",
    sub: "Heures 11-13 • Client, Serveur, Modules",
    intro: "C'est ici que ça devient sérieux ! Roblox a une architecture spéciale — il faut comprendre qui fait quoi pour créer des jeux multijoueur robustes.",
    lessons: [
      {
        id: "4-1", title: "Client vs Serveur — deux mondes",
        concept: "LocalScript, Script, workspace, ReplicatedStorage",
        superpapa: "Le serveur, c'est le juge arbitre du jeu. Le client, c'est ce que toi tu vois sur ton écran. Ils doivent se parler !",
        explanation: "Dans Roblox, il y a deux côtés : le Serveur (qui gère la réalité du jeu pour tous) et le Client (ce que chaque joueur voit). Les Scripts s'exécutent côté serveur. Les LocalScripts côté client. Confondre les deux cause des bugs terribles !",
        tip: "La règle d'or : tout ce qui touche à la vie, aux points, aux dégâts → Serveur. Tout ce qui concerne l'interface, la caméra → Client.",
        code: `--[[ SCRIPT (côté serveur) ]]

-- Le serveur voit et contrôle TOUT
local Players = game:GetService("Players")

-- Quand un joueur rejoint
Players.PlayerAdded:Connect(function(player)
    print("Joueur connecté : " .. player.Name)
    
    -- Créer le leaderstats (tableau de scores)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player
    
    local coins = Instance.new("IntValue")
    coins.Name = "Pièces"
    coins.Value = 0
    coins.Parent = leaderstats
end)

Players.PlayerRemoving:Connect(function(player)
    print("Joueur déconnecté : " .. player.Name)
end)

--[[ LOCAL SCRIPT (côté client) ]]

-- Le client gère l'interface du JOUEUR local
local player = game.Players.LocalPlayer
print("Bonjour " .. player.Name)

-- Accéder à la caméra (uniquement côté client)
local camera = workspace.CurrentCamera
camera.FieldOfView = 90`
      },
      {
        id: "4-2", title: "RemoteEvents — faire communiquer client et serveur",
        concept: "RemoteEvent, FireServer, OnServerEvent, FireClient",
        superpapa: "Le client et le serveur ne peuvent pas se parler directement — ils utilisent des RemoteEvents, comme envoyer un message dans une bouteille !",
        explanation: "Les RemoteEvents sont le système de messagerie de Roblox entre le client et le serveur. Le client 'fire' (envoie) un événement, le serveur l'écoute et réagit. C'est obligatoire pour créer des actions multijoueur sécurisées.",
        tip: "Ne fais JAMAIS confiance aux données envoyées par le client — un joueur malveillant peut les modifier. Toujours valider côté serveur !",
        code: `--[[ Dans ReplicatedStorage : créer un RemoteEvent nommé "AcheterObjet" ]]

--[[ LOCAL SCRIPT (client) : quand le joueur clique "Acheter" ]]
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local remoteAcheter = ReplicatedStorage:WaitForChild("AcheterObjet")
local player = Players.LocalPlayer

-- Bouton d'achat (simplifié)
local function clicAcheter()
    local objetVoulu = "Épée de feu"
    local prix = 500
    
    -- Envoyer la demande au serveur
    remoteAcheter:FireServer(objetVoulu, prix)
    print("Demande d'achat envoyée...")
end

--[[ SCRIPT (serveur) : traiter la demande ]]
local remoteAcheter = ReplicatedStorage:WaitForChild("AcheterObjet")

remoteAcheter.OnServerEvent:Connect(function(player, objetVoulu, prix)
    -- Vérifier que le joueur a assez d'argent (côté serveur, sécurisé)
    local coins = player.leaderstats.Pièces
    
    if coins.Value >= prix then
        coins.Value = coins.Value - prix
        print(player.Name .. " a acheté : " .. objetVoulu)
        -- Donner l'objet au joueur...
    else
        print(player.Name .. " n'a pas assez de pièces !")
    end
end)`
      },
      {
        id: "4-3", title: "ModuleScripts — organiser son code",
        concept: "require(), modules réutilisables, DRY principle",
        superpapa: "Quand ton jeu grandit, le code devient énorme. Les ModuleScripts, c'est comme ranger sa chambre — chaque chose à sa place !",
        explanation: "Les ModuleScripts permettent d'écrire du code réutilisable qu'on peut importer partout avec require(). C'est le principe DRY : Don't Repeat Yourself (Ne te répète pas). Un bug corrigé dans le module est corrigé partout à la fois.",
        tip: "Place tes ModuleScripts dans ReplicatedStorage s'ils sont utilisés côté client ET serveur, ou dans ServerScriptService s'ils ne servent que côté serveur.",
        code: `--[[ MODULE : MathJeu (dans ReplicatedStorage) ]]
local MathJeu = {}

-- Calculer les dégâts avec marge aléatoire
function MathJeu.calculerDegats(force, defense)
    local base = math.max(0, force - defense)
    local variation = math.random(-10, 10)
    return base + variation
end

-- Calculer l'expérience gagnée
function MathJeu.xpPourNiveau(niveau)
    return niveau * niveau * 100
end

-- Vérifier si un niveau est suffisant
function MathJeu.peutAcceder(niveauJoueur, niveauRequis)
    return niveauJoueur >= niveauRequis
end

return MathJeu  -- OBLIGATOIRE à la fin du module

--[[ SCRIPT : utiliser le module ]]
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local MathJeu = require(ReplicatedStorage:WaitForChild("MathJeu"))

-- Utiliser les fonctions du module
local degats = MathJeu.calculerDegats(80, 30)
print("Dégâts infligés : " .. degats)

local xpNeeded = MathJeu.xpPourNiveau(5)
print("XP pour niveau 5 : " .. xpNeeded)

if MathJeu.peutAcceder(7, 5) then
    print("Accès au donjon autorisé !")
end`
      }
    ]
  },
  {
    id: 5, icon: "🌍", color: "#E8874C",
    title: "Monde 3D",
    sub: "Heures 14-15 • Coordonnées, CFrame, Animations",
    intro: "On entre dans la troisième dimension ! Ici tu vas apprendre à déplacer, faire pivoter et animer n'importe quel objet dans ton monde Roblox.",
    lessons: [
      {
        id: "5-1", title: "Coordonnées X, Y, Z — GPS du jeu",
        concept: "Vector3, Position, workspace, math.abs",
        superpapa: "X c'est gauche/droite, Y c'est haut/bas, Z c'est avant/arrière. Maîtrise ça et tu contrôles tout l'espace 3D !",
        explanation: "Dans Roblox, chaque objet existe en 3 dimensions. Vector3 est le type de donnée pour représenter une position ou une direction dans cet espace. Avec Position et Size, tu places et redimensionnes tout ce que tu veux.",
        tip: "workspace.CurrentCamera.Focus.Position donne la position actuelle de la caméra — pratique pour trouver où tu te trouves dans le jeu !",
        code: `-- Accéder à une pièce dans le workspace
local part = workspace.MaBrique

-- Lire la position actuelle
local pos = part.Position
print("X: " .. pos.X .. " Y: " .. pos.Y .. " Z: " .. pos.Z)

-- Déplacer la pièce
part.Position = Vector3.new(10, 5, 0)

-- Créer une nouvelle pièce par code
local nouvellePiece = Instance.new("Part")
nouvellePiece.Size = Vector3.new(4, 1, 4)
nouvellePiece.Position = Vector3.new(0, 10, 0)
nouvellePiece.BrickColor = BrickColor.new("Bright red")
nouvellePiece.Anchored = true
nouvellePiece.Parent = workspace

-- Calculer la distance entre deux points
local pointA = Vector3.new(0, 0, 0)
local pointB = Vector3.new(10, 0, 10)
local distance = (pointA - pointB).Magnitude
print("Distance : " .. math.floor(distance) .. " unités")

-- Téléporter le joueur
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character

if character then
    local hrp = character:FindFirstChild("HumanoidRootPart")
    if hrp then
        hrp.CFrame = CFrame.new(0, 50, 0)  -- téléporte en hauteur
    end
end`
      },
      {
        id: "5-2", title: "CFrame — position ET rotation",
        concept: "CFrame, angles, lookAt, multiplication de CFrames",
        superpapa: "CFrame, c'est la clé du placement précis dans Roblox. Position + rotation en un seul objet — indispensable !",
        explanation: "CFrame (Coordinate Frame) contient à la fois la position ET la rotation d'un objet. C'est beaucoup plus puissant que Position seul. La multiplication de CFrames permet d'enchaîner des transformations.",
        tip: "CFrame.lookAt(origin, target) crée un CFrame qui regarde vers un point cible — super utile pour les caméras et les ennemis qui suivent le joueur !",
        code: `local part = workspace.MaBrique

-- CFrame basique : position seulement
part.CFrame = CFrame.new(10, 5, 0)

-- CFrame avec rotation (en radians)
part.CFrame = CFrame.new(10, 5, 0)
    * CFrame.Angles(0, math.rad(45), 0)  -- tourné de 45° sur Y

-- math.rad convertit degrés → radians
local angle45 = math.rad(45)    -- 0.785...
local angle90 = math.rad(90)    -- 1.570...
local angle180 = math.rad(180)  -- 3.141...

-- Faire regarder un objet vers un autre
local cible = workspace.Ennemi.Position
part.CFrame = CFrame.lookAt(part.Position, cible)

-- Décaler depuis la position actuelle
part.CFrame = part.CFrame * CFrame.new(0, 5, 0)  -- +5 en hauteur

-- Faire tourner progressivement
for angle = 0, 360, 10 do
    part.CFrame = CFrame.new(0, 5, 0)
        * CFrame.Angles(0, math.rad(angle), 0)
    task.wait(0.05)
end

-- CFrame pour attacher un objet à un autre
local epee = workspace.Epee
local mainDroite = workspace.Personnage["Right Arm"]
epee.CFrame = mainDroite.CFrame * CFrame.new(0, -1.5, 0)`
      },
      {
        id: "5-3", title: "Tweens — animations fluides",
        concept: "TweenService, TweenInfo, EasingStyle, chaîner les tweens",
        superpapa: "Un jeu sans animations, c'est comme un film sans musique. Les Tweens, c'est ce qui rend tout beau et fluide !",
        explanation: "TweenService anime la transition entre deux états d'un objet — position, rotation, couleur, taille, transparence. EasingStyle contrôle la courbe d'accélération : Bounce, Elastic, Sine... chacun crée une sensation différente.",
        tip: "Tween:Completed:Wait() permet d'attendre qu'une animation soit terminée avant de passer à la suivante — essentiel pour enchaîner des animations !",
        code: `local TweenService = game:GetService("TweenService")
local part = workspace.MaBrique

-- Tween basique : déplacer en 2 secondes
local infos = TweenInfo.new(
    2,                          -- durée en secondes
    Enum.EasingStyle.Sine,      -- style : Sine, Bounce, Elastic...
    Enum.EasingDirection.InOut, -- direction : In, Out, InOut
    0,                          -- répétitions (0 = pas de répétition)
    false,                      -- inverser ?
    0                           -- délai avant départ
)

local objectif = {Position = Vector3.new(20, 10, 0)}
local tween1 = TweenService:Create(part, infos, objectif)
tween1:Play()

-- Attendre la fin et enchaîner
tween1.Completed:Wait()

-- Animation retour avec Bounce !
local infosRebond = TweenInfo.new(1, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out)
local retour = {Position = Vector3.new(0, 0, 0)}
local tween2 = TweenService:Create(part, infosRebond, retour)
tween2:Play()

-- Animer la couleur ET la taille en même temps
local infosGlow = TweenInfo.new(0.5, Enum.EasingStyle.Elastic)
local effetGlow = {
    Size = Vector3.new(6, 6, 6),
    Color = Color3.fromRGB(255, 200, 0)
}
local tweenGlow = TweenService:Create(part, infosGlow, effetGlow)
tweenGlow:Play()`
      }
    ]
  },
  {
    id: 6, icon: "👑", color: "#E84C4C",
    title: "Créer son Jeu",
    sub: "Heures 16-21 • GameLoop, DataStore, POO, Héritage",
    intro: "Le niveau final ! Ici on assemble tout ce qu'on a appris pour construire un vrai jeu avec sauvegarde, personnages et logique complète.",
    lessons: [
      {
        id: "6-1", title: "Game Loop — le cœur de ton jeu",
        concept: "Boucle de jeu, états, RunService, BindableEvents",
        superpapa: "Tout jeu vidéo tourne en boucle : mise à jour → affichage → mise à jour → affichage... C'est le battement de coeur de ton jeu !",
        explanation: "Le Game Loop est la boucle principale qui fait tourner un jeu. À chaque frame (image), le jeu met à jour l'état de tous les objets. RunService.Heartbeat se déclenche à chaque frame — parfait pour les mises à jour continues.",
        tip: "Heartbeat reçoit 'dt' (delta time) : le temps écoulé depuis la dernière frame. Utilise-le pour des mouvements indépendants de la vitesse de l'ordinateur !",
        code: `local RunService = game:GetService("RunService")

-- État du jeu
local jeu = {
    enCours = false,
    score = 0,
    tempsRestant = 60,
    niveau = 1
}

-- Démarrer le jeu
local function demarrerJeu()
    jeu.enCours = true
    jeu.score = 0
    jeu.tempsRestant = 60
    print("=== JEU DÉMARRÉ ===")
end

-- Terminer le jeu
local function terminerJeu()
    jeu.enCours = false
    print("=== GAME OVER ===")
    print("Score final : " .. jeu.score)
end

-- Boucle principale (chaque frame)
local connexion
connexion = RunService.Heartbeat:Connect(function(dt)
    if not jeu.enCours then return end
    
    -- Mettre à jour le temps
    jeu.tempsRestant = jeu.tempsRestant - dt
    
    -- Vérifier la fin
    if jeu.tempsRestant <= 0 then
        terminerJeu()
        connexion:Disconnect()  -- arrêter la boucle
    end
end)

-- Timer séparé pour les événements
task.spawn(function()
    demarrerJeu()
    while jeu.enCours do
        task.wait(5)
        jeu.score = jeu.score + 100
        print("Score : " .. jeu.score)
    end
end)`
      },
      {
        id: "6-2", title: "DataStore — sauvegarder les données",
        concept: "DataStoreService, GetAsync, SetAsync, UpdateAsync",
        superpapa: "Pas de sauvegarde = le joueur perd tout quand il quitte. C'est inadmissible ! Les DataStores gardent les données pour toujours.",
        explanation: "DataStoreService est le système de sauvegarde persistante de Roblox. Les données sont stockées sur les serveurs Roblox et restent même quand le joueur quitte. Il faut activer l'accès API dans les paramètres du jeu.",
        tip: "Toujours utiliser pcall() avec les DataStores — la connexion peut échouer, et ça ne doit pas planter ton jeu !",
        code: `-- IMPORTANT : activer "Enable Studio Access to API Services" dans les paramètres
local DataStoreService = game:GetService("DataStoreService")
local Players = game:GetService("Players")

-- Créer/accéder au datastore
local sauvegardes = DataStoreService:GetDataStore("SauvegardeMathis_v1")

-- Sauvegarder les données d'un joueur
local function sauvegarder(player)
    local cle = "joueur_" .. player.UserId  -- clé unique par joueur
    
    local donnees = {
        coins = player.leaderstats.Pièces.Value,
        niveau = player.leaderstats.Niveau.Value,
        xp = player.leaderstats.XP.Value,
        dateSauvegarde = os.time()
    }
    
    local succes, erreur = pcall(function()
        sauvegardes:SetAsync(cle, donnees)
    end)
    
    if succes then
        print("Sauvegarde réussie pour " .. player.Name)
    else
        warn("Erreur sauvegarde : " .. erreur)
    end
end

-- Charger les données d'un joueur
local function charger(player)
    local cle = "joueur_" .. player.UserId
    
    local succes, donnees = pcall(function()
        return sauvegardes:GetAsync(cle)
    end)
    
    if succes and donnees then
        player.leaderstats.Pièces.Value = donnees.coins or 0
        player.leaderstats.Niveau.Value = donnees.niveau or 1
        print("Chargement réussi ! Pièces : " .. donnees.coins)
    else
        print("Nouveau joueur - données par défaut")
    end
end

-- Connecter aux événements joueur
Players.PlayerAdded:Connect(charger)
Players.PlayerRemoving:Connect(sauvegarder)
game:BindToClose(function()  -- sauvegarde quand le serveur s'arrête
    for _, player in ipairs(Players:GetPlayers()) do
        sauvegarder(player)
    end
end)`
      },
      {
        id: "6-3", title: "Programmation Orientée Objet",
        concept: "Classes, instances, méthodes, self, constructeur",
        superpapa: "La POO, c'est le niveau pro du code. Tu crées des 'moules' pour tes personnages et objets — propre, organisé, réutilisable !",
        explanation: "La Programmation Orientée Objet (POO) permet de créer des 'classes' — des modèles pour créer des objets avec leurs propres propriétés et comportements. C'est la façon dont tous les grands jeux sont programmés.",
        tip: "Le ':' dans 'Ennemi:attaquer()' passe automatiquement l'objet lui-même comme premier paramètre 'self'. C'est la magie de la POO en Lua !",
        code: `-- Classe Ennemi
local Ennemi = {}
Ennemi.__index = Ennemi

-- Constructeur : crée un nouvel ennemi
function Ennemi.new(nom, vie, force)
    local self = setmetatable({}, Ennemi)
    self.nom = nom
    self.vie = vie
    self.vieMax = vie
    self.force = force
    self.estVivant = true
    return self
end

-- Méthode : recevoir des dégâts
function Ennemi:subirDegats(degats)
    self.vie = math.max(0, self.vie - degats)
    print(self.nom .. " subit " .. degats .. " dégâts ! Vie : " .. self.vie)
    
    if self.vie <= 0 then
        self.estVivant = false
        self:mourir()
    end
end

-- Méthode : attaquer
function Ennemi:attaquer(cible)
    if not self.estVivant then return end
    local degats = self.force + math.random(-5, 5)
    print(self.nom .. " attaque " .. cible .. " pour " .. degats .. " dégâts !")
    return degats
end

-- Méthode : mourir
function Ennemi:mourir()
    print(self.nom .. " est vaincu !")
end

-- Méthode : afficher le statut
function Ennemi:statut()
    local pourcentage = math.floor(self.vie / self.vieMax * 100)
    print(self.nom .. " : " .. self.vie .. "/" .. self.vieMax .. " (" .. pourcentage .. "%)")
end

-- Créer des ennemis
local goblin = Ennemi.new("Goblin", 50, 15)
local dragon = Ennemi.new("Dragon Rouge", 500, 80)
local zombie = Ennemi.new("Zombie", 30, 8)

-- Utiliser les méthodes
goblin:statut()
goblin:subirDegats(20)
goblin:subirDegats(35)

dragon:attaquer("Mathis")
dragon:statut()`
      },
      {
        id: "6-4", title: "Héritage — spécialiser les classes",
        concept: "setmetatable, __index, héritage, polymorphisme",
        superpapa: "Et si ton Goblin Archer faisait TOUT ce que fait un Goblin, plus tirer des flèches ? C'est l'héritage : hériter des capacités d'une classe parente !",
        explanation: "L'héritage permet de créer une nouvelle classe basée sur une existante, en ajoutant ou modifiant des comportements. C'est comme un enfant qui hérite des traits de ses parents mais a aussi sa propre personnalité.",
        tip: "Le polymorphisme permet d'appeler la même méthode sur des objets différents — super pratique pour gérer une liste d'ennemis de types différents !",
        code: `-- Classe de base : Personnage
local Personnage = {}
Personnage.__index = Personnage

function Personnage.new(nom, vie, force)
    local self = setmetatable({}, Personnage)
    self.nom = nom
    self.vie = vie
    self.force = force
    return self
end

function Personnage:sePresenter()
    print("Je suis " .. self.nom .. " avec " .. self.vie .. " points de vie")
end

function Personnage:attaquer()
    print(self.nom .. " frappe pour " .. self.force .. " dégâts")
end

-- Classe enfant : Guerrier (hérite de Personnage)
local Guerrier = setmetatable({}, {__index = Personnage})
Guerrier.__index = Guerrier

function Guerrier.new(nom, vie, force, armure)
    local self = Personnage.new(nom, vie, force)  -- appel du parent
    setmetatable(self, Guerrier)
    self.armure = armure
    return self
end

-- Surcharge de la méthode attaquer
function Guerrier:attaquer()
    local degats = self.force * 1.5  -- 50% de bonus
    print(self.nom .. " frappe FORT pour " .. degats .. " dégâts !")
end

function Guerrier:bloquer()
    print(self.nom .. " bloque avec son armure de " .. self.armure .. " !")
end

-- Classe enfant : Mage (hérite de Personnage)
local Mage = setmetatable({}, {__index = Personnage})
Mage.__index = Mage

function Mage.new(nom, vie, force, mana)
    local self = Personnage.new(nom, vie, force)
    setmetatable(self, Mage)
    self.mana = mana
    return self
end

function Mage:attaquer()  -- polymorphisme !
    if self.mana >= 20 then
        self.mana = self.mana - 20
        print(self.nom .. " lance un sort pour " .. self.force * 2 .. " dégâts !")
    else
        print(self.nom .. " n'a plus de mana !")
    end
end

-- Test du polymorphisme
local equipe = {
    Guerrier.new("Mathis le Brave", 150, 50, 30),
    Mage.new("Emma la Sage", 80, 70, 100),
    Personnage.new("Villageois Bob", 40, 10),
}

for _, membre in ipairs(equipe) do
    membre:sePresenter()
    membre:attaquer()  -- chacun attaque à sa façon !
    print("---")
end`
      }
    ]
  }
];

// ─── UI STRINGS ───────────────────────────────────────────────────────────────

const UI = {
  fr: {
    appName: "RoboLua",
    welcome: "Bienvenue !",
    welcomeSub: "Apprends à créer ton propre jeu Roblox",
    start: "Commencer l'aventure →",
    modules: "leçons",
    back: "← Retour",
    nextLesson: "Leçon suivante →",
    markDone: "✓ J'ai compris, leçon suivante !",
    completed: "✓ Terminé",
    askSuperpapa: "Demander à Superpapa",
    placeholder: "Une question ? Superpapa répond !",
    locked: "Termine le module précédent pour débloquer",
    tip: "Astuce de Superpapa",
    codeTitle: "Code Lua",
    listenBtn: "🔊 Écouter",
    stopBtn: "⏹ Stop",
    celebTitle: "Bravo Mathis !",
    celebMsg: ["Super travail !", "Continue comme ça !", "Tu es un vrai codeur !", "Impressionnant !", "Je suis fier de toi !"],
    xpGained: "+50 XP",
    progress: "Progression",
    systemPrompt: (lesson, module) =>
      `Tu es Superpapa973, un professeur de code passionné et bienveillant pour les enfants de 8-13 ans qui apprennent Lua pour Roblox. Tu parles en français, de façon simple et encourageante. Tu utilises des analogies avec les jeux vidéo. Tes réponses font maximum 3-4 phrases courtes. Tu t'appelles Superpapa973, tu portes une veste à flammes et un chapeau de cowboy, et tu es très fier de tes élèves.
Module actuel : ${module || "général"}.
${lesson ? `Leçon : "${lesson.title}". Concept : ${lesson.concept}. Explication : ${lesson.explanation}` : ""}`
  },
  en: {
    appName: "RoboLua",
    welcome: "Welcome!",
    welcomeSub: "Learn to create your own Roblox game",
    start: "Start the adventure →",
    modules: "lessons",
    back: "← Back",
    nextLesson: "Next lesson →",
    markDone: "✓ Got it, next lesson!",
    completed: "✓ Done",
    askSuperpapa: "Ask Superpapa",
    placeholder: "Got a question? Superpapa answers!",
    locked: "Complete the previous module to unlock",
    tip: "Superpapa's tip",
    codeTitle: "Lua Code",
    listenBtn: "🔊 Listen",
    stopBtn: "⏹ Stop",
    celebTitle: "Well done Mathis!",
    celebMsg: ["Great work!", "Keep it up!", "You're a real coder!", "Impressive!", "I'm proud of you!"],
    xpGained: "+50 XP",
    progress: "Progress",
    systemPrompt: (lesson, module) =>
      `You are Superpapa973, a passionate and caring coding teacher for kids aged 8-13 learning Lua for Roblox. Reply in English, simply and encouragingly. Use video game analogies. Maximum 3-4 short sentences. You are called Superpapa973, you wear a flame jacket and a cowboy hat, and you are very proud of your students.
Current module: ${module || "general"}.
${lesson ? `Lesson: "${lesson.title}". Concept: ${lesson.concept}.` : ""}`
  },
  es: {
    appName: "RoboLua",
    welcome: "¡Bienvenido!",
    welcomeSub: "Aprende a crear tu propio juego de Roblox",
    start: "Comenzar la aventura →",
    modules: "lecciones",
    back: "← Volver",
    nextLesson: "Siguiente lección →",
    markDone: "✓ ¡Entendido, siguiente lección!",
    completed: "✓ Completado",
    askSuperpapa: "Preguntar a Superpapa",
    placeholder: "¿Una pregunta? ¡Superpapa responde!",
    locked: "Completa el módulo anterior para desbloquear",
    tip: "Consejo de Superpapa",
    codeTitle: "Código Lua",
    listenBtn: "🔊 Escuchar",
    stopBtn: "⏹ Parar",
    celebTitle: "¡Bravo Mathis!",
    celebMsg: ["¡Gran trabajo!", "¡Sigue así!", "¡Eres un verdadero programador!", "¡Impresionante!", "¡Estoy orgulloso de ti!"],
    xpGained: "+50 XP",
    progress: "Progreso",
    systemPrompt: (lesson, module) =>
      `Eres Superpapa973, un profesor de código apasionado y amable para niños de 8-13 años que aprenden Lua para Roblox. Responde en español, de forma sencilla y alentadora. Usa analogías de videojuegos. Máximo 3-4 frases cortas. Te llamas Superpapa973, llevas una chaqueta de llamas y un sombrero de vaquero, y estás muy orgulloso de tus alumnos.
Módulo actual: ${module || "general"}.
${lesson ? `Lección: "${lesson.title}". Concepto: ${lesson.concept}.` : ""}`
  }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function highlightLua(code) {
  const kw = ["local","function","if","then","elseif","else","end","while","do","for","return","true","false","not","and","or","nil","repeat","until","break","in"];
  let h = code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(--\[\[[\s\S]*?\]\]|--[^\n]*)/g, '<span style="color:#6272a4;font-style:italic">$1</span>')
    .replace(/"([^"]*)"/g, '<span style="color:#50fa7b">"$1"</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color:#bd93f9">$1</span>');
  kw.forEach(k => {
    h = h.replace(new RegExp(`\\b(${k})\\b`, "g"), '<span style="color:#ff79c6;font-weight:500">$1</span>');
  });
  h = h.replace(/\b([A-Z][a-zA-Z]+)(?=[:.])/g, '<span style="color:#8be9fd">$1</span>');
  return h;
}

function speak(text, lang) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang === "fr" ? "fr-FR" : lang === "es" ? "es-ES" : "en-US";
  utt.rate = 0.88;
  utt.pitch = 1.0;
  window.speechSynthesis.speak(utt);
}

function stopSpeak() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function CelebrationModal({ ui, onClose, lessonTitle }) {
  const msg = ui.celebMsg[Math.floor(Math.random() * ui.celebMsg.length)];
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}
      onClick={onClose}>
      <div className="pop-in" style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", textAlign: "center", maxWidth: 320, margin: "0 16px" }}
        onClick={e => e.stopPropagation()}>
        <div style={{ marginBottom: 8 }}>
          <MathisAvatar size={120} celebrating={true} />
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#4CBE72", marginBottom: 8 }}>{ui.celebTitle}</div>
        <div style={{ fontSize: 18, color: "#2d3748", marginBottom: 4 }}>{msg}</div>
        <div style={{ fontSize: 14, color: "#718096", marginBottom: 20 }}>"{lessonTitle}"</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#f6ad55", marginBottom: 20 }}>{ui.xpGained} ⭐</div>
        <button onClick={onClose} style={{ background: "#4CBE72", color: "#fff", border: "none", borderRadius: 12, padding: "12px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
          {ui.nextLesson}
        </button>
      </div>
    </div>
  );
}

function ChatPanel({ ui, lesson, module, lang, onClose }) {
  const greetings = {
    fr: "Howdy partenaire ! Je suis Superpapa973 🤠 Pose-moi toutes tes questions sur cette leçon !",
    en: "Howdy partner! I'm Superpapa973 🤠 Ask me anything about this lesson!",
    es: "¡Howdy compañero! Soy Superpapa973 🤠 ¡Pregúntame lo que quieras sobre esta lección!"
  };
  const [messages, setMessages] = useState([{ role: "assistant", content: greetings[lang] }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

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
          system: ui.systemPrompt(lesson, module?.title),
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply || "Réessaie !" }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Erreur réseau !" }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "0.5px solid #e2e8f0", borderRadius: 16, overflow: "hidden", marginTop: 12 }}>
      <div style={{ background: "#1a1a2e", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <SuperpapaAvatar size={36} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Superpapa973</div>
          <div style={{ fontSize: 11, color: "#a0aec0" }}>Ton professeur</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto", border: "none", background: "rgba(255,255,255,0.1)", cursor: "pointer", color: "#fff", padding: "4px 8px", borderRadius: 6, fontSize: 14 }}>✕</button>
      </div>
      <div style={{ height: 200, overflowY: "auto", padding: 12, display: "flex", flexDirection: "column", gap: 8, background: "#f8fafc" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ maxWidth: "85%", padding: "8px 12px", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: m.role === "user" ? "#4C9BE8" : "#fff", color: m.role === "user" ? "#fff" : "#2d3748", alignSelf: m.role === "user" ? "flex-end" : "flex-start", fontSize: 13, lineHeight: 1.6, border: m.role === "assistant" ? "0.5px solid #e2e8f0" : "none" }}>
            {m.content}
          </div>
        ))}
        {loading && <div style={{ padding: "8px 12px", background: "#fff", borderRadius: "12px 12px 12px 2px", color: "#718096", fontSize: 13, alignSelf: "flex-start", border: "0.5px solid #e2e8f0" }}>Superpapa réfléchit...</div>}
        <div ref={bottomRef} />
      </div>
      <div style={{ padding: 10, display: "flex", gap: 8, background: "#fff", borderTop: "0.5px solid #e2e8f0" }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
          placeholder={ui.placeholder}
          style={{ flex: 1, padding: "8px 14px", border: "0.5px solid #cbd5e0", borderRadius: 20, fontSize: 13, outline: "none" }} />
        <button onClick={send} disabled={loading}
          style={{ width: 34, height: 34, borderRadius: "50%", background: loading ? "#a0aec0" : "#1a1a2e", border: "none", cursor: loading ? "not-allowed" : "pointer", color: "#fff", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
          ➤
        </button>
      </div>
    </div>
  );
}

function LessonView({ lesson, module, ui, lang, onBack, completed, onComplete, onNext, hasNext }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const done = completed.has(lesson.id);

  const handleListen = () => {
    if (speaking) { stopSpeak(); setSpeaking(false); return; }
    const text = lesson.superpapa + " " + lesson.explanation + " " + ui.tip + " : " + lesson.tip;
    speak(text, lang);
    setSpeaking(true);
    const utt = new SpeechSynthesisUtterance(text);
    utt.onend = () => setSpeaking(false);
  };

  const handleDone = () => {
    if (!done) {
      onComplete(lesson.id);
      setShowCelebration(true);
    }
  };

  return (
    <div>
      {showCelebration && (
        <CelebrationModal ui={ui} lessonTitle={lesson.title} onClose={() => { setShowCelebration(false); if (hasNext) onNext(); else onBack(); }} />
      )}
      <button onClick={onBack} style={{ border: "none", background: "none", cursor: "pointer", color: "#718096", fontSize: 13, padding: "6px 0", marginBottom: 14, display: "flex", alignItems: "center", gap: 4 }}>
        {ui.back}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Superpapa intro */}
        <div style={{ background: "#1a1a2e", borderRadius: 16, padding: 16, display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ flexShrink: 0 }}>
            <SuperpapaAvatar size={60} animate={true} />
          </div>
          <div>
            <div style={{ fontSize: 13, color: "#a0aec0", marginBottom: 4 }}>Superpapa973</div>
            <div style={{ fontSize: 14, color: "#e2e8f0", lineHeight: 1.6, fontStyle: "italic" }}>"{lesson.superpapa}"</div>
          </div>
        </div>

        {/* Explication */}
        <div style={{ background: "#fff", borderRadius: 16, border: "0.5px solid #e2e8f0", padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 11, color: "#718096", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{lesson.concept}</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#1a202c" }}>{lesson.title}</div>
            </div>
            <button onClick={handleListen}
              style={{ padding: "6px 12px", borderRadius: 20, border: "0.5px solid " + (speaking ? "#e84c4c" : "#cbd5e0"), background: speaking ? "#e84c4c" : "transparent", color: speaking ? "#fff" : "#718096", fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, marginLeft: 8 }}>
              {speaking ? ui.stopBtn : ui.listenBtn}
            </button>
          </div>
          <div style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.75 }}>{lesson.explanation}</div>
          <div style={{ background: "#fffbeb", border: "0.5px solid #f6e05e", borderRadius: 10, padding: "10px 14px", marginTop: 14, fontSize: 13, color: "#744210", display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ flexShrink: 0 }}>💡</span>
            <span><strong>{ui.tip} :</strong> {lesson.tip}</span>
          </div>
        </div>

        {/* Code */}
        <div style={{ background: "#282a36", borderRadius: 16, padding: 16, overflow: "hidden" }}>
          <div style={{ fontSize: 11, color: "#6272a4", fontFamily: "monospace", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5555", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f1fa8c", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#50fa7b", display: "inline-block" }} />
            <span style={{ marginLeft: 4 }}>{ui.codeTitle}</span>
          </div>
          <pre style={{ fontFamily: "'Courier New', monospace", fontSize: 13, lineHeight: 1.7, color: "#f8f8f2", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            dangerouslySetInnerHTML={{ __html: highlightLua(lesson.code) }} />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={handleDone}
            style={{ flex: 1, padding: 14, borderRadius: 12, border: "none", background: done ? "#e2e8f0" : "#4CBE72", color: done ? "#718096" : "#fff", fontSize: 15, fontWeight: 600, cursor: done ? "default" : "pointer" }}>
            {done ? ui.completed : ui.markDone}
          </button>
          {!chatOpen && (
            <button onClick={() => setChatOpen(true)}
              style={{ padding: "14px 16px", borderRadius: 12, border: "0.5px solid #cbd5e0", background: "#fff", color: "#2d3748", fontSize: 14, cursor: "pointer", whiteSpace: "nowrap" }}>
              🤠 {ui.askSuperpapa}
            </button>
          )}
        </div>
        {chatOpen && <ChatPanel ui={ui} lesson={lesson} module={module} lang={lang} onClose={() => setChatOpen(false)} />}
      </div>
    </div>
  );
}

function ModuleView({ module, ui, lang, onBack, completed, onComplete, onSelectLesson }) {
  const [chatOpen, setChatOpen] = useState(false);
  const doneLessons = module.lessons.filter(l => completed.has(l.id)).length;

  return (
    <div>
      <button onClick={onBack} style={{ border: "none", background: "none", cursor: "pointer", color: "#718096", fontSize: 13, padding: "6px 0", marginBottom: 14 }}>
        {ui.back}
      </button>
      {/* Module header */}
      <div style={{ background: module.color, borderRadius: 16, padding: 20, marginBottom: 14, display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ fontSize: 40 }}>{module.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{module.title}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 2 }}>{module.sub}</div>
          <div style={{ marginTop: 10, height: 6, background: "rgba(255,255,255,0.3)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "#fff", width: (doneLessons / module.lessons.length * 100) + "%", transition: "width 0.5s", borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{doneLessons}/{module.lessons.length} {ui.modules}</div>
        </div>
      </div>
      {/* Superpapa intro */}
      <div style={{ background: "#1a1a2e", borderRadius: 14, padding: "12px 16px", marginBottom: 14, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <SuperpapaAvatar size={50} />
        <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6, fontStyle: "italic", paddingTop: 8 }}>"{module.intro}"</div>
      </div>
      {/* Lesson list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {module.lessons.map((ls, idx) => {
          const done = completed.has(ls.id);
          return (
            <div key={ls.id} onClick={() => onSelectLesson(ls)}
              style={{ background: "#fff", borderRadius: 12, border: "0.5px solid " + (done ? module.color : "#e2e8f0"), padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.2s" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: done ? module.color : "#f7fafc", color: done ? "#fff" : "#718096", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>
                {done ? "✓" : (idx + 1)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a202c" }}>{ls.title}</div>
                <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>{ls.concept}</div>
              </div>
              <span style={{ color: "#a0aec0", fontSize: 18 }}>›</span>
            </div>
          );
        })}
      </div>
      {!chatOpen ? (
        <button onClick={() => setChatOpen(true)}
          style={{ marginTop: 14, width: "100%", padding: 12, borderRadius: 12, border: "0.5px solid #e2e8f0", background: "#fff", color: "#2d3748", fontSize: 14, cursor: "pointer" }}>
          🤠 {ui.askSuperpapa}
        </button>
      ) : (
        <ChatPanel ui={ui} lesson={null} module={module} lang={lang} onClose={() => setChatOpen(false)} />
      )}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState("fr");
  const [view, setView] = useState("intro");
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completed, setCompleted] = useState(() => {
    if (typeof window !== "undefined") {
      try { return new Set(JSON.parse(localStorage.getItem("robolua_v2") || "[]")); } catch {}
    }
    return new Set();
  });

  const ui = UI[lang];
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const prog = Math.round((completed.size / totalLessons) * 100);
  const xp = completed.size * 50;

  const markComplete = useCallback((id) => {
    setCompleted(prev => {
      const next = new Set([...prev, id]);
      try { localStorage.setItem("robolua_v2", JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  const switchLang = (l) => {
    stopSpeak();
    setLang(l);
  };

  const goToNextLesson = () => {
    if (!selectedModule || !selectedLesson) return;
    const lessons = selectedModule.lessons;
    const idx = lessons.findIndex(l => l.id === selectedLesson.id);
    if (idx < lessons.length - 1) {
      setSelectedLesson(lessons[idx + 1]);
    } else {
      setView("module");
    }
  };

  const hasNextLesson = () => {
    if (!selectedModule || !selectedLesson) return false;
    const lessons = selectedModule.lessons;
    const idx = lessons.findIndex(l => l.id === selectedLesson.id);
    return idx < lessons.length - 1;
  };

  return (
    <>
      <Head>
        <title>RoboLua — Crée ton jeu Roblox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#f0f4ff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {/* HEADER */}
        {view !== "intro" && (
          <div style={{ background: "#1a1a2e", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 50 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>
              Robo<span style={{ color: "#4C9BE8" }}>Lua</span>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["fr", "en", "es"].map(l => (
                <button key={l} onClick={() => switchLang(l)}
                  style={{ padding: "3px 8px", borderRadius: 6, border: "0.5px solid " + (lang === l ? "#4C9BE8" : "rgba(255,255,255,0.2)"), background: lang === l ? "#4C9BE8" : "transparent", color: lang === l ? "#fff" : "rgba(255,255,255,0.6)", fontSize: 11, cursor: "pointer", textTransform: "uppercase", fontWeight: 600 }}>
                  {l}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", background: "#4CBE72", width: prog + "%", transition: "width 0.5s", borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 12, color: "#f6ad55", whiteSpace: "nowrap", fontWeight: 600 }}>⭐ {xp} XP</div>
          </div>
        )}

        <div style={{ maxWidth: 680, margin: "0 auto", padding: view === "intro" ? 0 : 16 }}>

          {/* INTRO SCREEN */}
          {view === "intro" && (
            <div style={{ minHeight: "100vh", background: "#1a1a2e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 32, alignSelf: "flex-end", marginRight: 8 }}>
                {["fr", "en", "es"].map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    style={{ padding: "4px 10px", borderRadius: 6, border: "0.5px solid " + (lang === l ? "#4C9BE8" : "rgba(255,255,255,0.3)"), background: lang === l ? "#4C9BE8" : "transparent", color: lang === l ? "#fff" : "rgba(255,255,255,0.6)", fontSize: 12, cursor: "pointer", textTransform: "uppercase", fontWeight: 600 }}>
                    {l}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-end", marginBottom: 32 }}>
                <div style={{ textAlign: "center" }}>
                  <SuperpapaAvatar size={110} animate={true} />
                  <div style={{ fontSize: 11, color: "#a0aec0", marginTop: 4 }}>Superpapa973</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <MathisAvatar size={90} />
                  <div style={{ fontSize: 11, color: "#a0aec0", marginTop: 4 }}>Mathis</div>
                </div>
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 8, letterSpacing: -1 }}>
                Robo<span style={{ color: "#4C9BE8" }}>Lua</span>
              </div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", textAlign: "center", marginBottom: 12, maxWidth: 300 }}>
                {ui.welcomeSub}
              </div>
              <div style={{ fontSize: 13, color: "#4CBE72", textAlign: "center", marginBottom: 32 }}>
                {totalLessons} leçons • 6 modules • FR / EN / ES
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "14px 20px", marginBottom: 32, maxWidth: 340, textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#a0aec0", lineHeight: 1.7 }}>
                  {lang === "fr" && "De ton premier print() à ton premier jeu complet — avec Superpapa973 comme guide !"}
                  {lang === "en" && "From your first print() to your first complete game — with Superpapa973 as your guide!"}
                  {lang === "es" && "¡Desde tu primer print() hasta tu primer juego completo — con Superpapa973 como guía!"}
                </div>
              </div>
              <button onClick={() => setView("map")}
                style={{ background: "#4C9BE8", color: "#fff", border: "none", borderRadius: 14, padding: "16px 40px", fontSize: 17, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 }}>
                {ui.start}
              </button>
            </div>
          )}

          {/* MODULE MAP */}
          {view === "map" && (
            <div>
              <div style={{ background: "#1a1a2e", borderRadius: 16, padding: "16px 18px", marginBottom: 16, display: "flex", alignItems: "center", gap: 14 }}>
                <SuperpapaAvatar size={54} animate={true} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 2 }}>
                    {lang === "fr" && "Choisis ton module, partenaire !"}
                    {lang === "en" && "Choose your module, partner!"}
                    {lang === "es" && "¡Elige tu módulo, compañero!"}
                  </div>
                  <div style={{ fontSize: 12, color: "#a0aec0" }}>
                    {completed.size}/{totalLessons} {ui.modules} • {prog}% • {xp} XP
                  </div>
                </div>
                <MathisAvatar size={54} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {MODULES.map((mod, idx) => {
                  const prevDone = idx === 0 || MODULES[idx - 1].lessons.every(l => completed.has(l.id));
                  const doneLessons = mod.lessons.filter(l => completed.has(l.id)).length;
                  const modProg = Math.round(doneLessons / mod.lessons.length * 100);
                  const locked = !prevDone;
                  return (
                    <div key={mod.id} onClick={() => !locked && (setSelectedModule(mod), setView("module"))}
                      style={{ background: "#fff", borderRadius: 16, border: "2px solid " + (locked ? "#e2e8f0" : mod.color + "44"), padding: "16px 18px", cursor: locked ? "not-allowed" : "pointer", opacity: locked ? 0.6 : 1, display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: locked ? "#f7fafc" : mod.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                        {locked ? "🔒" : mod.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: locked ? "#a0aec0" : "#1a202c", marginBottom: 2 }}>{mod.title}</div>
                        <div style={{ fontSize: 12, color: "#718096", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mod.sub}</div>
                        <div style={{ height: 5, background: "#f0f0f0", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ height: "100%", background: mod.color, width: modProg + "%", transition: "width 0.5s", borderRadius: 3 }} />
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: mod.color }}>{doneLessons}/{mod.lessons.length}</div>
                        <div style={{ fontSize: 11, color: "#a0aec0" }}>{ui.modules}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MODULE VIEW */}
          {view === "module" && selectedModule && (
            <ModuleView
              module={selectedModule}
              ui={ui}
              lang={lang}
              onBack={() => setView("map")}
              completed={completed}
              onComplete={markComplete}
              onSelectLesson={(ls) => { setSelectedLesson(ls); setView("lesson"); }}
            />
          )}

          {/* LESSON VIEW */}
          {view === "lesson" && selectedLesson && (
            <LessonView
              lesson={selectedLesson}
              module={selectedModule}
              ui={ui}
              lang={lang}
              onBack={() => setView("module")}
              completed={completed}
              onComplete={markComplete}
              onNext={goToNextLesson}
              hasNext={hasNextLesson()}
            />
          )}
        </div>
      </div>
    </>
  );
}
