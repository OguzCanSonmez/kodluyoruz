import getData from "./module.js";

try {
  let result = getData(4);

  result.then((res) => {
    console.log(res);
  });
} catch(e) {
  console.log(e);
}
