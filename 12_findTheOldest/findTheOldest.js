const findTheOldest = function (people) {
    return people.reduce((oldestPerson, currentPerson) => {
  
      var oldestPersonsAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth || (new Date()).getFullYear() - oldestPerson.yearOfBirth
      var currentPersonsAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth || (new Date()).getFullYear() - currentPerson.yearOfBirth;
          
      if (currentPersonsAge > oldestPersonsAge) {
          return currentPerson
      } else {
          return oldestPerson
      }
    })
  };

// Do not edit below this line
module.exports = findTheOldest;
