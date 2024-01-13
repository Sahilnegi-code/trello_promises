const { board } = require("./Test/data");
const callback1 = (id) => {
  let informId = board.filter((boardKey) => boardKey.id === id);

  const resultOfPromise = new Promise((res, rej) => {
    if (informId) {
      res(informId);
    } else {
      rej(null);
    }
  });
  resultOfPromise
    .then((val) => {
      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    });

  return informId;
};
module.exports = callback1;
