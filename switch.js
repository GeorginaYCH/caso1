//Uso de Switch con lista de frutas
var fruta;
fruta=prompt("Ingresa el nombre de una fruta");
switch (fruta) {
    case 'naranja':
        document.write('El kilogramo de naranja cuesta S/. 2.00.');
      break;
    case 'manzana':
        document.write('El kilogramo de manzana cuesta S/. 2.00.');
      break;
    case 'platano':
        document.write('El kilogramo de platano cuesta S/. 4.00');
      break;
    case 'fresa':
        document.write('El kilogramo de fresa cuesta S/. 4.00.');
      break;
    case 'piña':
        document.write("El kilogramo de piña cuesta S/. 2.00.");
        break;
   case 'sandía':
        document.write("El kilogramo de sandía cuesta S/. 2.00.");
        break;
    case 'papaya':
        document.write('El kilogramo de papayas cuesta S/. 2.50.');
      break;
      default:
      document.write("Lo lamentamos, por el momento no disponemos de "+ fruta +"."  );
  }
  
  