// Fonctions prise du cours

function genereTableau(donnees, id){
    var nb = donnees.length;
    if(nb>0){
        var htmltable="<tr>";
        for(var attr in donnees[0]){
            htmltable=htmltable+"<th>"+attr+"</th>";
        };
        htmltable=htmltable+"</tr>";
        for(var x=0;x<nb;x++){
            htmltable=htmltable+"<tr>";
            for(var a in donnees[x]){
                htmltable=htmltable+"<td>"+donnees[x][a]+"</td>";
            }
            htmltable=htmltable+"</tr>";
        }
        $("#"+id).html(htmltable);
    }else{
        alert("La réponse à la requête est vide.");
        $("#"+id).html("");
    }
};

function poste(requete){
    var postData = {};
    postData["db"] = "dift6800_baseball";
    postData["query"] = requete;  
    //La requête AJAX suivante, fait appel au backend db.php
    $.post(
      "http://www-ens.iro.umontreal.ca/~dift6800/baseball/db.php",
      postData,
      function(reponse,status){
        console.log(status);
        var obj = JSON.parse(reponse);
        if(obj.error==""){  
            genereTableau(obj.data, "table");
        }else{
          alert("Erreur:"+obj.error);
        }
      }
    );
};

function requete(date) {
  if (date.length != 0) {
    var rqt = 
        'nameLast AS Nom, nameFirst AS Prenom, teamID AS TEAM, salary AS Salaire FROM Master, Salaries ' +
        `WHERE Master.playerID = Salaries.playerID AND yearID = ${date} ` +
        `AND salary = (SELECT MAX(salary) FROM Salaries WHERE yearID = ${date});`;

    // Poste la requête
    $('#texte').text(`Joueur avec le plus haut salaire en ${date}`);

    poste(rqt);

    $('#names').text('Travail réalisé par Mohamed Mehdi Lakhdhar et Swann Suffrin');


  } else {
    $('#texte').text('Merci de choisir une date avant de lancer la requête');
  }
};