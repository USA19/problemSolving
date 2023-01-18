// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  let isIsomorphic = true
  const map = {};
  const set = {};

  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    // (map[t[index]] && map[t[index]] !== character)
    if ((map[character] && map[character] !== t[index])) {
      isIsomorphic = false
      break;
    } else {

      if ((map[character] && map[character] === t[index])) {
        continue;
      }

      if (set[t[index]]) {
        console.log(set[t[index]], ">???????????????????")
        //   console.log(t[index], ">???????t[index]????????????")
        //   console.log("map[character]???????????/", map[character], "character>>>>>>..", character);
        isIsomorphic = false
        break;
      }

      map[character] = t[index]
      set[t[index]] = t[index]
    }
  }
  console.log("????????????????????set/", set)
  console.log("????????????????????map/", map)

  return isIsomorphic


  // If length of strings are not equal then
  // they are not isomorphic
  // if (s.length !== t.length) {
  //   return false;
  // }

  // // Map to store the mapping between
  // // characters of first string to second
  // const map = new Map();

  // // Set to store the already mapped
  // // character of second string
  // const set = new Set();

  // for (let i = 0; i < s.length; i++) {

  //   // Taking ith char from both strings
  //   char1 = s.charAt(i);
  //   char2 = t.charAt(i);

  //   // If char1 has already been mapped
  //   if (map.has(char1) == true) {

  //     // Then we have to check that
  //     // mapped char should be same
  //     if (map.get(char1) !== char2) {
  //       return false;
  //     }
  //   }

  //   // If char1 is appearing for the first time
  //   else {

  //     // Check in the set that the char2
  //     // is already there or not
  //     if (set.has(char2)) {
  //       return false;
  //     }

  //     // If none of above condition is true
  //     // it means both char1 and char2 are
  //     // appearing for the first time
  //     // insert them into the map
  //     map.set(char1, char2);
  //     set.add(char2);
  //   }
  // }
  // return true;
};

// console.log(">>>>>>>>>foo,<<<<false >>>.bar", isIsomorphic("foo", "bar"))
// console.log(">>>>>>>>>egg>>>>true><>>>egg", isIsomorphic("egg", "add"))
// console.log(">>>>>>>>>badc>>>false>>>>>.baba", isIsomorphic("badc", "baba"))
// console.log(">>>>>>>>>ACAB>>>false>>>>>.XCXY", isIsomorphic("ACAB", "XCXY"))


const isIsomorphicStringV2 = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const mapObj = {}
  let isIsomorphic = true;

  for (let index = 0; index < t.length; index++) {
    const item1 = s[index]      //considering it as key
    const item2 = t[index]      // considering it as value

    if (!!mapObj[item1]) {
      if (mapObj[item1] !== item2) {
        isIsomorphic = false;
        break;
      }
    } else {
      // key does not exist
      if (!Object.values(mapObj).includes(item2)) {  // bi-directional checking
        mapObj[item1] = item2;
      } else {
        isIsomorphic = false;
        break;
      }
    }
  }

  return isIsomorphic
}
// console.log(">papertitle>>>>>>>>>>>>>>>>>>>", isIsomorphicStringV2("paper", "title"))
// console.log(">>>>>>>>>foo,<<<<false >>>.bar", isIsomorphicStringV2("foo", "bar"))
// console.log(">>>>>>>>>egg>>>>true><>>>egg", isIsomorphicStringV2("egg", "add"))
// console.log(">>>>>>>>>badc>>>false>>>>>.baba", isIsomorphicStringV2("badc", "baba"))
// console.log(">>>>>>>>>ACAB>>>true>>>>>.XCXY", isIsomorphicStringV2("ACAB", "XCXY"))

// console.log(">>>>>>>>>aab>>>true>>>>>.xxy", isIsomorphicStringV2("aab", "xxy"))
// console.log(">>>>>>>>>aab>>>false>>>>>.xyz", isIsomorphicStringV2("aab", "xyz"))


