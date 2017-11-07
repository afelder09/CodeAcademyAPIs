// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetIndex, newPresetArray ) => {
  // set return variable
  // console.log('Preset length: ', presets.length)
  let result = [];
  // console.log('Request Type is: ', requestType)
  // console.log('Preset Index is: ', presetIndex)
  // console.log('New Preset Array is: ', newPresetArray)
  // console.log('Starting result is: ',result)
  if( isValidPreset(presetIndex) ){
    result.push(200)
  } else {
    result.push(404)
  }

  if( isValidType(requestType)){
    if( requestType === 'GET'){
      result.push(presets[presetIndex])
    }
    if( requestType === 'PUT'){
      presets[presetIndex] = newPresetArray;
      result.push(presets[presetIndex]);
    }
  } else {
    result[0] = 400;
  }
  // console.log('Final result is: ', result)
  return result;
};

const isValidType = (requestType) => {
  if(requestType === 'GET' || requestType === 'PUT'){
    return true;
  }
  else{
    console.log('Invalid type');
    return false;
  }
}

const isValidPreset = (presetIndex) => {
  if(presetIndex >= 0 && presetIndex <= presets.length-1){
    return true;
  } else {
    return false;
  }
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
