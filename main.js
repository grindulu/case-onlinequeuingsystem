class Doctor {
    constructor(amount, avgtime){
        this.amount = amount;
        this.avgtime = avgtime;
    }
    
    generate(){
        console.log(`Doctor Availability : ${this.amount} Doctor${(this.amount === 0 || this.amount === 1) ? '' : 's'}`);
        var arrD = new Array(); // array of doctors
        for (let i = 0; i < this.amount; i++) {
            arrD.push("Doctor "+ (i+10).toString(36).toUpperCase());
            console.log(`${i+1}. ${arrD[i]}`);
        }
        console.log(`Average Consultation Times Per Patient : ${this.avgtime} Minute${(this.avgtime === 0 || this.avgtime === 1) ? '' : 's'}`,'\n', "-".repeat(45));
        return arrD;
    }
}

class Queue extends Doctor {
    constructor(amount, position, avgtime){
        super(amount, avgtime);
        this.position = position;
    }
    waitingtime() {
        const arrD = this.generate();
        let qrow = Math.ceil(this.position / this.amount) - 1;
        let qcol = this.position % this.amount;
        let qcol_ = qcol !== 0 ? qcol - 1 : this.amount - 1;
        let qrowavg = qrow * this.avgtime;
        console.log(`\nQueue Position : ${this.position} \nWaiting Time : ${qrowavg} minute${(qrowavg === 0 || qrowavg === 1 ? '' : 's')}\nDoctor : ${arrD[qcol_]}`);
    }
}
// Queue(Amount of doctor, Queue position, Average consultation time)
const estim = new Queue(3, 20, 3);
estim.waitingtime();