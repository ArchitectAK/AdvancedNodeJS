var delay = (seconds) =>
  new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("long delay has ended");
    }, seconds * 1000);
  });
delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`hello word: ${number}`));

console.log("end first tick");
