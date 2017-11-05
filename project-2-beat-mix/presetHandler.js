// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetIndex, newPresetArray ) => {
  // set return variable
  // console.log('Preset length: ', presets.length)
  let result = [];

  if( isValidPreset(presetIndex) ){
    result.push('200')
  } else {
    result.push('404')
  }

  if( isValidType(requestType)){
    if( requestType == 'GET'){
      result.push(presets[preset])
    }
    if( requestType == 'PUT'){
      presets[preset] = newPresetArray;
      result.push(presets[preset]);
    }
  } else {
    result[0] = '400';
  }

  return result;
};

const isValidType = (requestType) => {
  if(requestType == 'GET' || requestType == 'PUT'){
    return true;
  }
  else{
    console.log('Invalid type');
    return false;
  }
}

const isValidPreset = (presetIndex) => {
  console.log('Preset index is: ', presetIndex )
  if(presetIndex >= 0 && presetIndex <= presets.length-1){
    return true;
  } else{
    return false;
  }
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
