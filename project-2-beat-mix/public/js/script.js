// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

// Toggle drum function
const toggleDrum = ( drum, index ) => {
  if(isValidDrum(drum) && isValidIndex(index)){
    switch(drum) {
      case 'kicks':
        kicks[index] = !kicks[index];
        break;
      case 'snares':
        snares[index] = !snares[index];
        break;
      case 'hiHats':
        hiHats[index] = !hiHats[index];
        break;
      case 'rideCymbals':
        rideCymbals[index] = !rideCymbals[index];
        break;
    }
  }
}

// clear function
const clear = ( drum ) => {
  switch(drum) {
    case 'kicks':
      kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
      break;
    case 'snares':
      snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
      break;
    case 'hiHats':
      hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
      break;
    case 'rideCymbals':
      rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
      break;
  }
}

const invert = ( arrayName ) => {
  switch( arrayName ){
    case 'kicks':
      for(let i=0;i<kicks.length;i++){
        kicks[i]= !kicks[i];
      }
      break;
    case 'snares':
      for(let i=0;i<snares.length;i++){
        snares[i]= !snares[i];
      }
      break;
    case 'hiHats':
      for(let i=0;i<hiHats.length;i++){
        hiHats[i]= !hiHats[i];
      }
      break;
    case 'rideCymbals':
      for(let i=0;i<rideCymbals.length;i++){
        rideCymbals[i]= !rideCymbals[i];
      }
      break;
  }
}

const isValidDrum = ( drum ) => {
    if( drum == 'kicks' || drum == 'snares' || drum == 'hiHats' || drum == 'rideCymbals'){
      return true;
    } else {
      return false;
    }
}

const isValidIndex = ( index ) => {
  if( index >=0 && index <= 15){
    return true;
  } else{
    return false;
  }
}
