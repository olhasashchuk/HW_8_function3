// Доробити об'єкт ladder (сходи) – об'єкт, який дозволяє підніматися вгору, спускатися та отримувати сходинку:

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();