//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (abilityScore) => {
  if (abilityScore > 18) {
    throw 'Ability scores can be at most 18';
  }
  if (abilityScore < 3) {
    throw 'Ability scores must be at least 3';
  }
  return Math.floor((abilityScore - 10) / 2);
};

function rollD6() {
  return Math.floor(Math.random() * Math.floor(6));
}

export class Character {

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    let rolls = [rollD6(), rollD6(), rollD6(), rollD6()];
    rolls.splice(rolls.indexOf(Math.min.apply(Math, rolls)), 1);
    let abilityScore = rolls.reduce(function (a, b) {
      return a + b;
    }, 0);
    return abilityScore;
  }

  set strength(str) {
    this._strength = str;
  }

  set dexterity(dex) {
    this._dexterity = dex;
  }

  set constitution(con) {
    this._constitution = con;
  }

  set intelligence(int) {
    this._intelligence = int
  }

  set wisdom(wis) {
    this._wisdom = wis;
  }

  set charisma(cha) {
    this._charisma = cha;
  }

  set hitpoints(hit) {
    this._hitpoints = hit;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}