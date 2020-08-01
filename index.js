const wakeDog= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const leashDog= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const walkToPark= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const throwFrisbee= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const walkHome= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const unleashDog= function(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
};

const routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function exerciseDog(dogName,dogBreed){
   return routine.map(dog,breed);
}

exerciseDog('Byron','poodle') ;