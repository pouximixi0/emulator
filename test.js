const fs = require("fs");
fs.appendFile("nouveauFichier.txt", "Mon contenu", function (err) {
  if (err) throw err;
  console.log("Fichier créé !");
});
console.log("lanccer");
