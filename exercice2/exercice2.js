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

function requete() {
    console.log("Test");
    var rqt = 
        'CONCAT(Master.nameFirst, " ", Master.namelast) AS "Nom complet du lanceur", ' +
        'Pitching.G, Pitching.W, Pitching.SV, (Pitching.w + Pitching.SV) AS "W + SV", Pitching.L, Pitching.SO, ' +
        'Pitching.H, Pitching.BB, Pitching.IPouts, Salaries.salary AS "Salaire du lanceur" ' +
        'FROM ((Salaries INNER JOIN Master ON Salaries.playerID=Master.playerID) INNER JOIN ' +
        'Pitching ON Salaries.PlayerID=Pitching.PlayerID)' +
        'WHERE (Pitching.teamID="mon") AND (Salaries.teamID="mon") AND (Pitching.GS=0) AND (Salaries.yearID=1996) ' + 
        'AND (Pitching.yearID=1996) ORDER BY (Pitching.w + Pitching.SV) DESC;';

    // Poste la requête
    poste(rqt);
    $('#names').text('Travail réalisé par Mohamed Mehdi Lakhdhar et Swann Suffrin');
};
