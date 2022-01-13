
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
  .then((step0) => { document.querySelector('#steak').innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
    .then((step1) => { document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
      obtainInstruction('steak', 2)
      .then((step2) => { document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
        obtainInstruction('steak', 3)
        .then((step3) => { document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
          obtainInstruction('steak', 4)
          .then((step4) => { document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
            obtainInstruction('steak', 5)
            .then((step5) => { document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
              obtainInstruction('steak', 6)
              .then((step6) => { document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
                obtainInstruction('steak', 7)
                .then((step7) => { document.querySelector('#steak').innerHTML += `<li>${step7}</li>`
                  obtainInstruction('steak', 8)
                  .then((step8) => { document.querySelector('#steak').innerHTML += `<li>${step8}</li>`
                  }).catch((error) => console.log(error));
                  document.querySelector('#steakImg').removeAttribute('hidden');
                }).catch((error) => console.log(error));
              }).catch((error) => console.log(error));
            }).catch((error) => console.log(error));
          }).catch((error) => console.log(error));
        }).catch((error) => console.log(error));
      }).catch((error) => console.log(error));
    }).catch((error) => console.log(error));
  }).catch((error) => console.log(error));
  
/* function steakInstructions() {
  for(let i = 0; i < steak.length; i++) {
    const step = obtainInstruction('steak', i);
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  }
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  document.querySelector("#steakImg").removeAttribute('hidden');
}
steakInstructions(); */


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
function brusselSproutInstructions() {
  for(let i = 0; i < 7; i++) {
    const step = obtainInstruction('brusselsSprouts', i);
    Promise.all([obtainInstruction('brusselsSprouts', i)]).then(() => { 
      document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`;
    })
    }
}
brusselSproutInstructions();

