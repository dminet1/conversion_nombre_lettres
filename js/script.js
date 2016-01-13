var number = document.getElementById("nombre");
var boutonGo = document.getElementById("boutonGo");
var resultat = document.getElementById("resultat");
var boutonReset = document.getElementById("boutonReset");
var n = "";
var unite = "";
var dizaine = "";
var centaine = "";
var conversion = "";

function checking() {
  var nombre = parseInt(number.value,10);
  //alert("nombre parseint = " + nombre);
  //alert("isnan : " + isNaN(nombre));
  if(isNaN(nombre) == false && nombre >= 0 && nombre <= 999) {
    convert(nombre);
  } else if (isNaN(nombre) == false && nombre > 999) {
    resultat.innerHTML = "Vous avez saisi un nombre supérieur à 999 !";
  } else {
    resultat.innerHTML = "Vous n'avez pas saisi un nombre entre 0 et 999 !";
  }
}

function convert(n) {
  conversion = "";
  // nombre compris entre 0 et 16 :
  if (n <= 16) {
    resultat.innerHTML = f_unite(n);
  // nombre supérieur ou égal à 100 :
  } else if (n >= 100) {
    //alert("n = " + n);
    var modulo = n % 10;
    var d = (n - modulo) / 10;
    var c = (d - (d % 10)) / 10;
    //alert("centaine = " + c);
    centaine = f_centaine(c);
    d = d % 10;
    if ((d == 1 || d == 7 || d == 9) && (modulo == 1 || modulo == 2 || modulo == 3 || modulo == 4 || modulo == 5 || modulo == 6)) {
      d--;
      modulo += 10;
    }
    //alert("dizaine = " + d)
    dizaine = f_dizaine(d);
    //alert("unite = " + modulo);
    if (modulo > 0) {
      unite = f_unite(modulo);
    }
    if (modulo == 0 && d !== 8 && d !==0) {
      conversion = centaine + "-" + dizaine;
    } else if (modulo == 0 && d == 8) {
      conversion = centaine + "-" + dizaine + "s";
    } else if ((modulo == 1 && d !== 8 && d !==0) || (d == 6  && modulo == 11)) {
      conversion = centaine + "-" + dizaine + "-et-" + unite;
    } else if (c > 1 && d == 0 && modulo == 0) {
      conversion = centaine + "s";
    } else if (c == 1 && d == 0 && modulo == 0) {
      conversion = "cent";
    } else if (d == 0) {
      conversion = centaine + "-" + unite;
    } else {
      conversion = centaine + "-" + dizaine + "-" + unite;
    }
    resultat.innerHTML = conversion;
  // nombre compris entre 17 et 99 :
  } else {
    //alert("n = " + n);
    var modulo = n % 10;
    var d = (n - modulo) / 10;
    if ((d == 7 || d == 9) && (modulo == 1 || modulo == 2 || modulo == 3 || modulo == 4 || modulo == 5 || modulo == 6)) {
      d--;
      modulo += 10;
    }
    unite = f_unite(modulo);
    dizaine = f_dizaine(d);
    if (modulo == 0 && d !== 8) {
      conversion = dizaine;
    } else if (modulo == 0 && d == 8) {
      conversion = dizaine + "s";
    } else if ((modulo == 1 && d !== 8) || (d == 6  && modulo == 11)) {
      conversion = dizaine + "-et-" + unite;
    } else {
      conversion = dizaine + "-" + unite;
    }
    resultat.innerHTML = conversion;
  }
}

function f_unite(n) {
  //alert("n = " + n);
  switch (n) {
    case 0:
    unite = 'zéro';
    break;
    case 1:
    unite = 'un';
    break;
    case 2:
    unite = 'deux';
    break;
    case 3:
    unite = 'trois';
    break;
    case 4:
    unite = 'quatre';
    break;
    case 5:
    unite = 'cinq';
    break;
    case 6:
    unite = 'six';
    break;
    case 7:
    unite = 'sept';
    break;
    case 8:
    unite = 'huit';
    break;
    case 9:
    unite = 'neuf';
    break;
    case 10:
    unite = 'dix';
    break;
    case 11:
    unite = 'onze';
    break;
    case 12:
    unite = 'douze';
    break;
    case 13:
    unite = 'treize';
    break;
    case 14:
    unite = 'quatorze';
    break;
    case 15:
    unite = 'quinze';
    break;
    case 16:
    unite = 'seize';
    break;
    default : break;
  }
  return unite;
}

function f_dizaine(d) {
  //alert("d = " + d);
  switch (d) {
    case 1:
    dizaine = 'dix';
    break;
    case 2:
    dizaine = 'vingt';
    break;
    case 3:
    dizaine = 'trente';
    break;
    case 4:
    dizaine = 'quarante';
    break;
    case 5:
    dizaine = 'cinquante';
    break;
    case 6:
    dizaine = 'soixante';
    break;
    case 7:
    dizaine = 'soixante-dix';
    break;
    case 8:
    dizaine = 'quatre-vingt';
    break;
    case 9:
    dizaine = 'quatre-vingt-dix';
    break;
    default : break;
  }
  return dizaine;
}

function f_centaine(c) {
  //alert("c = " + c);
  switch (c) {
    case 1:
    centaine = 'cent';
    break;
    case 2:
    centaine = 'deux-cent';
    break;
    case 3:
    centaine = 'trois-cent';
    break;
    case 4:
    centaine = 'quatre-cent';
    break;
    case 5:
    centaine = 'cinq-cent';
    break;
    case 6:
    centaine = 'six-cent';
    break;
    case 7:
    centaine = 'sept-cent';
    break;
    case 8:
    centaine = 'huit-cent';
    break;
    case 9:
    centaine = 'neuf-cent';
    break;
    default : break;
  }
  return centaine;
}

function reset() {
  document.location.reload(true);
}
