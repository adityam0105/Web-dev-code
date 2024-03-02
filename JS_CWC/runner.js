const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("OOPS something went Wrong!!!");
    }
  }, 2000);
});
async function consumeMyPromise() {
    const response= await promiseFive;
    console.log(response);
}
consumeMyPromise();
