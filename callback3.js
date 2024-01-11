const { cards } = require("./Test/data");
const callback3 = (id, cb) => {
  const cardIdInformation = cards[id];
 
  cb(cardIdInformation || null);

  return cardIdInformation;
};

module.exports = callback3;
