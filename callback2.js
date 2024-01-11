const { lists_1 } = require("./Test/data");
const callback2 = (id, cb) => {

  let result = lists_1[id];

  cb(result || null);
  return result;
};
module.exports = callback2;
