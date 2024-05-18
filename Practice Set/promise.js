// Promises
let simranPromise = new Promise((resolve, reject) => {
  let parentDecision = false;
  if (parentDecision == true) {
    resolve("yay shaddi ki tyari karo");
  } else {
    reject("IAS Has been fonded Sorry ");
  }
});
// Resolve part
simranPromise
  .then((msg) => {
    console.log("Simran Message :", msg);
    console.log("Raj Reply: Let's Book a Wedding venue");
  })
  .catch((msg) => {
    // Reject Part
    console.log("Simran Message :", msg);
    console.log("Raj Reply: Tinder kaha ho yarr...");
  });

let rajPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("yes let's go to Goa");
    } else {
      reject("No I have some work");
    }
  }, 3000);
});

let surajPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("yes let's go to Goa");
    } else {
      reject("No I have to go somewhere else");
    }
  }, 5000);
});

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("yes let's go to Goa");
    } else {
      reject("No I have to attend my classes");
    }
  }, 5000);
});

Promise.all([surajPromise, rajPromise, myPromise])
  .then((msg) => {
    console.log(msg);
    console.log("Yehh! We all are ready to go.");
  })
  .catch((msg) => {
    console.log(msg);
    console.log("Let's close the topic.");
  });
