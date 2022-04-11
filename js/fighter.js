class Fighter {
  name = "Fighter";
  health = 10;
  money = 10;
  description = "";
  attack = 0;
  defense = 0;
  constructor(name, health, money, description, attack, defense) {
    this.name = name ?? "Fighter";
    this.health = health ?? 10;
    this.money = money ?? 10;
    this.description = description ?? "";
    this.attack = attack ?? 0;
    this.defense = defense ?? this.attack;
  }
  static list = [
    new Fighter("Warrior", 10, 10, "A simple fighter.", 2, 2),
    new Fighter("Cat (SPECIAL)", 9, 9, "People often believe that cats have nine lives. We've made it real! Get a fighter with nine lives for the price of nine!", 2, 3),
    new Fighter("Solider", 50, 100, "An improved fighter.", 10, 10),
    new Fighter("Knight", 250, 400, "The expert of the fighters. It can do a great deal!", 40, 40),
    new Fighter("Tankette", 500, 650, "A piece of machinery determined to make fighting easier... but harder for the most.", 250, 250),
    new Fighter("Tank", 750, 900, "Too bad for the tankette... the original is the tank!", 750, 750),
    new Fighter("Wall", 1000, 1000, "A simple wall for defending.", 0, 1500),
    new Fighter("The Great Wall of China (SPECIAL)", 2500, 2000, "For people who speak Chinese, and for a better wall, buy a Great Wall! Built by the Chinese population thousands of years ago.", 0, 4000),
    new Fighter("Paul Bunyan's Blue Ox (SPECIAL)", 4000, 4000, "Paul Bunyan had a sidekick: his blue ox. If you can't buy Paul, buy his sidekick!", 2500, 3000),
    new Fighter("Paul Bunyan (SPECIAL)", 5000, 5000, "Paul Bunyan cuts down trees for money in Bemijidi, Akeley, and Brainerd in Minnesota, and alos Bangor in Maine! Where do YOU live? Did you ever meet him? Meet him -- again or for the first time!", 4000, 3500),
    new Fighter("Giant", 5000, 5000, "A big fighter.", 3500, 3500),
    new Fighter("Queen", 1_000_000, 1_000_000, "Now you're just showing off.", 500_000, 500_000)
  ];
}
