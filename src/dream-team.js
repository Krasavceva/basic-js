const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = '';
  let arr = [];

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) === 'string') {
        arr.push(members[i].trim().toUpperCase());
      }
    }
  }

  let sort = arr.sort();

  for (let i = 0; i < sort.length; i++) {
    str += sort[i].slice(0, 1);
  }

  return str;
}

module.exports = {
  createDreamTeam
};
