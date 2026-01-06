function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function () {
  console.log(this.name + ' говорить мовою: ' + this.language);
};

function Orc(name, language, weapon) {
  Character.call(this, 'Орк', name, language);
  this.weapon = weapon;
}

Orc.prototype.__proto__ = Character.prototype;

Orc.prototype.attack = function () {
  console.log(this.name + ' бʼє зброєю: ' + this.weapon);
};

function Elf(name, language, spellType) {
  Character.call(this, 'Ельф', name, language);
  this.spellType = spellType;
}

Elf.prototype.__proto__ = Character.prototype;

Elf.prototype.castSpell = function () {
  console.log(this.name + ' створює заклинання типу: ' + this.spellType);
};

// використання
const orc = new Orc('Гром', 'Ороча', 'сокира');
const elf = new Elf('Ліара', 'Ельфійська', 'вогонь');

orc.speak();
orc.attack();

elf.speak();
elf.castSpell();
