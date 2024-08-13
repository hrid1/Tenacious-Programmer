function makePassword(info) {
  
  if ("name" in info && "birthYear" in info && "siteName" in info) {
    const yearLenth = info.birthYear.toString().length;
    // console.log(yearLenth);
    if(yearLenth === 4){
        const password = info.siteName+'#'+info.name+'@'+info.birthYear;
        return password;
    }
  }
  return "Invalid";
}

const user = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const password = makePassword(user);
console.log(password);