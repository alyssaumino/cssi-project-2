// allow for checkbox functionality when displaying the different types of graphical representations of the data
let otherCheckbox = document.querySelectorAll('input[name="chart"]');
for (const check of otherCheckbox){
  check.addEventListener('click', () => {
    if (check.checked == true){
      const chart = document.querySelector(`.${check.value}`)
      chart.style.display = "block"
    } else {
      const chart = document.querySelector(`.${check.value}`)
      chart.style.display =  "none"
    }
  })
}

//create a snapshot of the current state of the database in Firebase
const messagesRef = firebase.database().ref();
messagesRef.on("value", (snapshot) => {
    const data = snapshot.val();
    //console.log(data);
    
    //allow graphs and charts to update real time based on user input
    let array = [];
  
    for(let key in data) {
      console.log(data[key].date, data[key].calories);
    }
})

//update the database in Firebase according to user input (of calories) as well as the current date
const d = new Date();
const time = document.querySelector("#Time");
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();

const dateString = year + " / " + month + " / " + day;
time.innerHTML = dateString;

function update() {
  const caloriesField = document.querySelector("#calorieField");
  const caloriesInput = parseInt(caloriesField.value);
  
  const messagesRef = firebase.database().ref();
  messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
  })
  
  const payload = {
      date: dateString,
      calories: caloriesInput
  }
  console.log(payload);
  firebase.database().ref().push(payload);
  
  caloriesField.innerHTML = "";
}
