function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      let salarySum = 0;
      let salaryAvg = 0;
      let salaryAvgBest = 0;
      let salaryBest = 0;
      let bestResto = '';
      let obj = {}

      for (let element of input) {
         let restoInfo = element.split(" - ");
         let restoName = restoInfo.shift();
         let employeeData = restoInfo[0].split(", ");

         for (let employee of employeeData) {
            let [nameWorker, salaryWorker] = employee.split(' ');

            if (!obj.hasOwnProperty(restoName)) {
               obj[restoName] = {};
            }
            obj[restoName][nameWorker] = Number(salaryWorker);

         }

      }

      let entries = Object.entries(obj);

      for (let entry of entries) {
         let keyNameResto = entry[0];
         let values = Object.entries(entry[1]);
         
         for (let [nameWorker, salaryWorker] of values) {
            salarySum += salaryWorker;
         }

         salaryAvg = (salarySum / values.length).toFixed(2);

         if (salaryAvg > salaryAvgBest) {
            salaryAvgBest = salaryAvg;
            bestResto = keyNameResto;
            salarySum = 0;
         }
         
      }

      let entriesBestResto = Object.entries(obj[bestResto]);

      for (let entry of entriesBestResto) {
         if(salaryBest < entry[1]) {
            salaryBest = entry[1];
         }
      }
      

      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestResto} Average Salary: ${salaryAvg} Best Salary: ${salaryBest.toFixed(2)}`

      let print = '';
      entriesBestResto.forEach(employee => print += `Name: ${employee[0]} With Salary: ${employee[1]} `);
      document.querySelector("#workers p").textContent = print;

   }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]
