var crypto = require('crypto');

var key = 'private secret key';
var input = 'PasswordForTutorial';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
var decipheredOutput = decipher.update(cipheredOutput, 'base64', 'utf8');
decipheredOutput += decipher.final('utf8');

console.log( "input: " + input );
console.log( "암호화: " + cipheredOutput );
console.log( "해석: " + decipheredOutput );
