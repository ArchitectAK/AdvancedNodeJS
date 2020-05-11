function dealy(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}
console.log("Starting Delays");
dealy(2, () => {
  console.log("Two seconds");
  dealy(1, () => {
    console.log("Three seconds");
    dealy(1, () => {
      console.log("Four seconds");
    });
  });
});
