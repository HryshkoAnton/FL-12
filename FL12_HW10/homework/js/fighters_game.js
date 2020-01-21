class Fighter {
    constructor(obj) {
        this._winsCount = 0;
        this._lossesCount = 0;
        this._name = obj.name;
        this._damage = obj.damage;
        this._hp = obj.hp;
        this._strength = obj.strength;
        this._agility = obj.agility;
    }
  
    getName() {
        return this._name;
    }
  
    getDamage() {
        return this._damage;
    }
  
    getStrength() {
        return this._strength;
    }
  
    getAgility() {
        return this._agility;
    }
  
    getHealth() {
        return this._hp;
    }
  
    attack(defender) {
        const hundredPercent = 100;
        const success = Math.random();
        const defense = 1 - (defender.getStrength() + defender.getAgility()) / hundredPercent;
        if (success > defense) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
  
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this._winsCount}, Losses: ${this._lossesCount}`);
    }
  
    heal(healPoints) {
        const maxHealth = 100;
        const healedHealth = this._hp += healPoints;
        this._hp = healedHealth > maxHealth ? maxHealth : healedHealth;
    }
  
    dealDamage(dealPoints) {
        const dealedHealth = this._hp -= dealPoints;
        this._hp = dealedHealth < 0 ? 0 : dealedHealth;
    }
  
    addWin() {
        this._winsCount++;
    }
  
    addLoss() {
        this._lossesCount++;
    }
  }
  
function battle(fighter1, fighter2) {
    if (!fighter1.getHealth() || !fighter2.getHealth()) {
        !fighter1.getHealth() ? 
        console.log(`${fighter1.getName()} is dead and can't fight`) : 
        console.log(`${fighter2.getName()} is dead and can't fight`);
        return;
    }

    while (fighter1.getHealth() && fighter2.getHealth()) {
        fighter1.attack(fighter2);
        [fighter1, fighter2] = [fighter2, fighter1];
    }
    const winner = fighter1.getHealth() > fighter2.getHealth() ? fighter1 : fighter2;
    const loser = fighter1.getHealth() < fighter2.getHealth() ? fighter1 : fighter2;
    winner.addWin();
    loser.addLoss();
    console.log(`${winner.getName()} has won!`);
}
  
const myFighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 15, agility: 10});