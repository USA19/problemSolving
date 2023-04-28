const findSubsetArray = (array) => {
  const subsetArray = []
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    let set = [];
    for (let indexF = index + 1; indexF < array.length; indexF++) {
      const subItem = array[indexF];
      set = [...set, [item, subItem]]
    }

    subsetArray.push(set)
  }

  return subsetArray;
}

console.log(findSubsetArray([1, 4, 3, 2,]), "findSubsetArray<>>>>>>>>>>>>>>>>>>.")