
// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          getInstruction('mashedPotatoes', 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
          }, (error) => console.log(error));
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises

obtainInstruction('steak', 0) 
  .then((step) => printStep('steak', step))
  .then(() => obtainInstruction('steak', 1).then((step) => printStep('steak', step)))
  .then(() => obtainInstruction('steak', 2).then((step) => printStep('steak', step)))
  .then(() => obtainInstruction('steak', 3).then((step) => printStep('steak', step)))
  .then(() => obtainInstruction('steak', 4).then((step) => printStep('steak', step)))
  .then(() => obtainInstruction('steak', 5).then((step) => printStep('steak', step)))
  .then(() => obtainInstruction('steak', 6).then((step) => printStep('steak', step)))
  .finally(() => document.querySelector(`#steak`).innerHTML += `<li>Steak is ready!</li>`)

function printStep(food, step) {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
}

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    for (let i = 0; i < 7; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    }
    document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch (error) {
    console.log(error);
  };
};
makeBroccoli();

// Bonus 2 brussel sprouts
promiseArr = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
]

Promise.all([
 promiseArr[0],
 promiseArr[1],
 promiseArr[2],
 promiseArr[3],
 promiseArr[4],
 promiseArr[5],
 promiseArr[6],
 promiseArr[7]])
 .then(promiseArr.forEach((item, step) => obtainInstruction('brusselsSprouts', step).then((item) => printStep('brusselsSprouts', item))))
  .then(document.querySelector('#brusselsSproutsImg').removeAttribute('hidden'))


