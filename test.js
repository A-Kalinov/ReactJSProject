const moment = require("moment");
const momentRange = require("moment-range");

momentRange.extendMoment(moment);

const lStartDate = moment("2021-05-01");
const lEndtDate = moment("2021-05-25");

const rStartDate = moment("2021-05-10");
const rEndtDate = moment("2021-05-30");

const range1 = moment.range(lStartDate, lEndtDate);
const range2 = moment.range(lStartDate, lEndtDate);

console.log("2021-05-01".toUpperCase());
