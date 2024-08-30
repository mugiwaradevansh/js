async function dev() {
  let dehliWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 -C");
    }, 2000);
  });
  let gujaratWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 -C");
    }, 13000);
  });
  // dehliWeather.then(alert)
  // gujaratWeather.then(alert)
  console.log("delhi weather is fetching");
  let delhw = await dehliWeather;
  console.log("delhi weather is :"+delhw );
  console.log("gujarat weather is fetching");
  let guju = await gujaratWeather;
  console.log("gujarat weather is " + guju);

  return [delhw, guju];
}

console.log(" welcome to the weather room ");
let a = dev();
a.then((x) => {
  console.log(x);
});
