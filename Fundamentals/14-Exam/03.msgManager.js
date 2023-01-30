function msgManager(input) {
    let capacity = Number(input.shift());
    let ppl = {};

    while (input[0] != "Statistics") {
        let tokens = input.shift().split("=");
        let commandName = tokens[0];

        if (commandName == "Add") {
            let username = tokens[1];
            let sent = Number(tokens[2]);
            let recived = Number(tokens[3]);

            if (!ppl[username]) {
                ppl[username] = {
                    sent: sent,
                    recived: recived
                }
            }
        }

        
        if (commandName == "Message") {
            let sender = tokens[1];
            let receiver = tokens[2];

            if (ppl[sender] && ppl[receiver]) {
                ppl[sender].sent += 1;
                ppl[receiver].recived += 1;

                if ((ppl[sender].sent + ppl[sender].recived) == capacity) {
                    console.log(`${sender} reached the capacity!`)
                    delete ppl[sender];
                }
                if ((ppl[receiver].sent + ppl[receiver].recived) == capacity) {
                    console.log(`${receiver} reached the capacity!`)
                    delete ppl[receiver];
                }
            }
        }

        if (commandName == "Empty") {
            let username = tokens[1];
            if (ppl[username]) {
                delete ppl[username];
            }
            if (username == "All") {
                for (let key in ppl) {
                    delete ppl[key];
                }
            }
        }

        if (input[0] == "Statistics") {

            let count = Object.keys(ppl).length;
            console.log(`Users count: ${count}`)

            for (let pplData of Object.entries(ppl)) {
                let user = pplData[0];
                let msg = Number(pplData[1].sent) + Number(pplData[1].recived);

                console.log(`${user} - ${msg}`);

            }

        }

    }

}

msgManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"]);

console.log("==============");

msgManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]);

console.log("==============");

msgManager(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"]);

