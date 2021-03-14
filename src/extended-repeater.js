const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  /*let z = "";
  let a = options.repeatTimes;
  for (let i = 0; i < options.repeatTimes; i++){
    z = z + str;
    let b = 1;
    if (i == (options.repeatTimes - 1)){
      break;
    }
    if (options.additionRepeatTimes !== 0){
      if (b < options.additionRepeatTimes){

        z = z + `${addition}` + `${separator}`;
        b+=1;
      }
    }
    if (b < options.repeatTimes){

      z = z + `${addition}` + `${separator}`;
      b+=1;
    }

  }
  return z;
  */

  const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|'
    } = options;

    if (repeatTimes === undefined) {
    return '';
  }
  let masanys = [];
  const anys = [];

  for (let i = 0; i < repeatTimes; i++) {
    masanys.push(str);
  }
  for (let i = 0; i < additionRepeatTimes; i++) {
    anys.push(`${addition}`);
  }

  const anys2_0 = anys.join(additionSeparator);

  masanys = masanys.map((a) => a + anys2_0)

  return masanys.join(separator);
 };
