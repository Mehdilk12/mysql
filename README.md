
# Web Devoir 3

>

## Instructions

Le but de ce devoir est de concevoir, exécuter et afficher à l'écran des requêtes SQL. Pour cela, vous aurez à utiliser HTML, CSS, Javascript, Ajax ainsi que SQL.

Pour chacun des exercices, vous devrez afficher sur votre page le résultat de la requête SQL que vous aurez obtenu avec Javascript. Vous pouvez simplement utiliser le meme tableau d'affichage que celui de la demo 9 sans auncun style mais vous allez perdre des points d'originalité (Voir les critères de correction).

Vous devez faire un fichier HTML, un fichier CSS et un fichier Javascript pour chaque exercice.

### Exercice 1
- Ajouter un sélecteur d'année qui permet de choisir une année entre **1985** et **2013**.
- Ecrire une requête SQL qui  retourne dans l'ordre  le **nom, prenom, teamID,  salary** du joueur ayant le plus gros salaire pour cette année. Ecrire la requête dans un fichier `requete1.txt`.
- Ajouter un bouton ayant pour texte **Lancer** qui va appeler une fonction Javascript  **requete()** qui va exécuter la requête et l'afficher sur la page.
- Ecrire votre code HTML dans un fichier `exercice1.html`.
- Ecrire votre code CSS dans un fichier `exercice1.css`.
- Ecrire votre code Javascript dans un fichier `exercice1.js`.

**Indice:** Vous devez utiliser les tables Master, Salaries

### Exercice 2
- Ecrire une requête pour les lanceurs de relève des Expos de Montréal(**teamID="MON"**) en **1996**. Ce sont les lanceurs pour lesquels l'attribut **GS=0**. Nous voulons alors voir les statistiques suivantes dans l'ordre: **Nom complet du lanceur, G, W,SV, W+SV, L, SO, H, BB, IPouts, salaire du lanceur**. Triez de façon **décroissante** en fonction de l'attribut **W+SV**. Ecrire la requête dans un fichier `requete2.txt`.
- Ajouter un bouton ayant pour texte **Lancer** qui va appeler une fonction Javascript  **requete()** qui va exécuter la requête et l'afficher sur la page.
- Ecrire votre code HTML dans un fichier `exercice2.html`.
- Ecrire votre code CSS dans un fichier `exercice2.css`.
- Ecrire votre code Javascript dans un fichier `exercice2.js`.

**Indice:** Vous devez utiliser les tables Pitching, Master et Salaries

## Informations sur la base de données

La base de données `dift6800_baseball` que vous devez utiliser dans ce devoir contient des statistiques sur diverses équipes de baseball ainsi que sur les joueurs de ces équipes.

Cette base de données de type MySQL est hébergée ici au DIRO.

## Connection à la base de données
Pour afficher les résultats de vos requêtes SQL, vous devez utiliser Javascript ou jQuery. Pour cela, vous pouvez réutiliser le code exemple `Ajax.js` de la démo 9, plus exactement la fonction `poste(requete)`. 

Si vous préférez d'abord exécuter les requêtes SQL directement sur la base de données, vous pouvez vous connecter directement à la base de données des expos grace aux instructions du fichier `Infos connection BD Devoir 3` disponible sur Studium.

## Soumission

Votre dernier commit avant le Samedi 4 Décembre, 23 h, sera corrigé.

La seule branche qui sera corrigée est la branche par défaut, `main`. Elle devrait contenir seulement ces choses:

* le fichier `README.md`
* le fichier `requete1.txt`
* le fichier `requete2.txt`
* le dossier `exercice1` qui contient les fichiers suivants
    * `exercice1.html`
    * `exercice1.css`
    * `exercice1.js`
* le dossier `exercice2` qui contient les fichiers suivants
    * `exercice2.html`
    * `exercice2.css`
    * `exercice2.js`
## Grille de correction sur 100 points

| Valeur | Critère de correction                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20 %   | Exactitude de la requête SQL de l'exercice 1                                                                                                                                                                                                                                                                                                                                                                                                                |
| 20 %   | Exactitude de la requête SQL de l'exercice 2                                                                                                                                                                                                                                                                                                                                                  |
| 20 %   | Utilisation de Javascript pour afficher les requête SQL                                                                                                                                         |
| 20 %   | Design de votre page. Soyez créatif et utilisez un design simple mais original. Il est clair que si vous remettez une simple page HTML avec un background rouge, vous n'allez pas avoir beaucoup de points. Utilisez les diverses propriétés de CSS et amusez vous.                                                                                                                                                                |
| 10 %   | HTML + CSS                                                                                                                                                                                                                                                                                                                                                                                         |
| 10 %   | [Validation W3C](https://validator.w3.org/)                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                             
| -2 %   | Chaque heure de retard après la date de remise. Comme lors du devoir 2, je ne corrigerai que le dernier commit avant la limite pour la remise, sauf si vous me demandez de corriger un commit ultérieur. Les commits ayant plus de 24h de retard ne seront pas corrigés.  
| -15 %  |Non respect des consignes de remise 
| -100%  |[Plagiat](https://integrite.umontreal.ca/boite-a-outils/quiz-generaux/)       |
                                                                                                                                                          

## Remarques

* Essayez de poser toutes vos questions sur Studium. Si vous devez absolument m'écrire en privé, utilisez le courriel, idéalement avec votre adresse @umontreal.ca.

* Révisez les **SELECT**, **SELECT () AS**, **JOIN**, **ORDER BY** et autres clauses SQL.

## Restrictions

- Javascript, jQuery et Ajax sont autorisés. 

- L'utilisation d'autres librairies est interdite.

- Vous pouvez réutiliser les script vues en demo et en classe, du moment que vous citez vos sources.

- CSS externe seulement!

- Javascript externe seulement!
