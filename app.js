const dieContainer = document.createElement('div');
const pgContainer = document.getElementById('page-container');
const btnRollDie = document.getElementById('roll-die');
const btnGenDie = document.getElementById('die-gen');
const btnSumTotal = document.getElementById('total-die');

let dieArray = [];  // empty array for created die objects
dieContainer.id = 'die-container';
pgContainer.appendChild(dieContainer);

// die object constructor class
class NewDie {
    constructor() {
        this.render();
        this.roll();
        dieArray.push(this); //pushes this instance of object to array
        this.newDie.addEventListener('click', () => this.roll());
        this.newDie.addEventListener('dblclick', () => this.remove());
    }
    //die render method func
    render() {
        this.newDie = document.createElement('div');
        this.newDie.className = 'dice';
        this.value = document.createTextNode('');
        dieContainer.appendChild(this.newDie);
    }
    //die roll method func: random #1-6
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.newDie.textContent = this.value;
    }
    //die remove method func: removes die, removes object instance from dieArray
    remove() {
        this.newDie.remove();
        let index = dieArray.indexOf(this);
        dieArray.splice(index, 1);
    }
}

//when die is clicked, calls roll function on that die
btnRollDie.addEventListener('click', function () {
    for (let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
})
// click creates object 'NewDie"
btnGenDie.addEventListener('click', function () {
    new NewDie();
})
// sums value of dieArray, alerts sum
btnSumTotal.addEventListener('click', function () {
    let sum = 0
    for (let i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
        // console.log(dieArray[i].value)
    }
    console.log(sum)
    alert(`Total of Die: ${sum}`);
})


