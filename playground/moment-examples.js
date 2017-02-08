var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1486579598;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a' ));


// January 3rd, 2016 @ 12:13 AM
console.log('curret moment', currentMoment.format('MMM Do, YYYY @ h:mm A'))