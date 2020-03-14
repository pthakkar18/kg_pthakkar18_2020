var myArgs = process.argv.slice(2);
s1 = myArgs[0];
s2 = myArgs[1];
if (s1==null && s2==null) {
console.log("Please enter command line arguments");
}
if (s1==null || s2==null) {
console.log("Please enter valid command line arguments");
}
try{
const isMappable = (s1, s2) => {
  if (s1.length !== s2.length) { return false; }
  const map1 = new Map();
  const map2 = new Map();
  return [...s1].every((s, i) => {
    if (!map1.has(s) && !map2.has(s2[i])) {
      map1.set(s, s2[i]);
    }
    return map1.get(s) === s2[i];
  });

};
console.log(isMappable(s1, s2));
}
catch(ex){
console.log("parameters are undefined");
}

