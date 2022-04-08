class Fighter {
  name = "Fighter";
  health = 10;
  money = 10;
  description = "";
  constructor(name, health, money, description) {
    this.name = name ?? "Fighter";
    this.health = health ?? 10;
    this.money = money ?? 10;
    this.description = description ?? "";
  }
  static list = [
    new Fighter("Warrior", 10, 10, "A simple fighter."),
    new Fighter("Cat (SPECIAL)", 9, 9, "People often believe that cats have nine lives. We've made it real! Get a fighter with nine lives for the price of nine!"),
    new Fighter("Solider", 50, 100, "An improved fighter."),
    new Fighter("Knight", 250, 400, "The expert of the fighters. It can do a great deal!"),
    new Fighter("Tankette", 500, 650, "A piece of machinery determined to make fighting easier... but harder for the most."),
    new Fighter("Tank", 750, 900, "Too bad for the tankette... the original is the tank!")
  ]
}
