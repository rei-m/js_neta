// Characterクラス
class Character {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character){
    if (!character instanceof Character) throw new Error('');
    character.health_ -= 10;
  }
}

// Characterクラスを継承してMonsterクラスをつくる
class Monster extends Character {
  constructor(x, y, name){
    super(x, y);
    this.name = name;
  }
  attack(character) {
    // superで親クラスのattackをそのまま呼ぶ
    super.attack(character);
    character.health_ -= 5;
  }
}

var slime = new Monster(10, 20, 'すらいむ');
var goast = new Monster(20, 30, 'ごーすと');

console.log(goast.health_);
console.log(`${slime.name} が ${goast.name} にあたっく!`);
slime.attack(goast);
console.log(goast.health_);
