//The function generates a random integer number
// with a value between the minNumber and the maxNumber inclusively.
//Please pay attention:
//the maxNumber must be greater or equal than the minNumber, else the function returns null
function generateInteger(min, max){
  const minNumber = Number(min);
  const maxNumber = Number(max);
  if(maxNumber > minNumber){
    const amplitude = (maxNumber-minNumber)*0.5;
    const currentTime = Date.now();
    const offset = amplitude*Math.sin(currentTime);
    const outcome = minNumber+Math.round(amplitude+offset);

    if(outcome>maxNumber){
      return maxNumber;
    }
    if(outcome<minNumber){
      return minNumber;
    }
    return outcome;
  }
  if(maxNumber === minNumber){
    return maxNumber;
  }
  return null;
}
//The function generates a random floating point number
// with a value between the minNumber and the maxNumber inclusively.
// digits is the number of digits to appear after the decimal point
//Please pay attention:
//the maxNumber must be greater or equal than the minNumber, else the function returns null
function generateFloat(min, max, digits){
  const minNumber = Number(min);
  const maxNumber = Number(max);
  if(maxNumber > minNumber){
    const amplitude = (maxNumber-minNumber)*0.5;
    const currentTime = Date.now();
    const offset = amplitude*Math.sin(currentTime);
    let outcome = minNumber+amplitude+offset;
    let scaler = 1;

    for(let i=0; i<digits;i++){
      scaler*=10;
    }
    outcome=Math.round(outcome*scaler)/scaler;
    if(outcome>maxNumber){
      return maxNumber;
    }
    if(outcome<minNumber){
      return minNumber;
    }
    return outcome;
  }
  if(maxNumber === minNumber){
    return maxNumber;
  }
  return null;
}
generateInteger(0,1);
generateFloat(1.0001, 1.0002,7);
