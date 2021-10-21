const arguments = process.argv.slice(2);

function circleArea(radius) {
  let area = Math.PI * radius * radius;

  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}

circleArea(arguments[0]);