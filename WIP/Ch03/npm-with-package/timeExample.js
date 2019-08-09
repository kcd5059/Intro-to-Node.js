const moment = require('moment');
const mtz = require('moment-timezone');
console.log(moment().format('MM-DD-YYYY'));

console.log(moment('20110101').fromNow());

var abbrs = {
    EDT : 'Eastern',
    PDT : 'Pacific'
}

moment.fn.zoneName = function() {
    var abbr = this.zoneAbbr();
    return abbrs[abbr] || abbr;
}

console.log(moment().format('ha'), moment().tz('America/New_York').format('zz'));
console.log(moment().tz('America/Los_Angeles').format('ha'), moment().tz('America/Los_Angeles').format('zz'));