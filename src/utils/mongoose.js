module.exports = {
  arrayToObject: (mongooses) => {
    return mongooses.map((e) => e.toObject());
  },
  objToObject: (mongooses) => {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
