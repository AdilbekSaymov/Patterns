class Developer {
    writeCode() {
    throw new Error("Code yozish kerek");
    }
}


class JavaDeveloper extends Developer {
    writeCode() {
    console.log("Java dasturchi kod yozmoqda");
    }
}


class CppDeveloper extends Developer {
    writeCode() {
    console.log("C++ dasturchi kod yozmoqda");
    }
}


class Game {
    constructor(developer) {
    if (new.target === Game) {
    throw new Error("Game abstrakt klass");
    }

    this.developer = developer;
    }

    developGame() {
    throw new Error("developGame() metodi yozilishi kerak");
    }
}

class RacingGame extends Game {
    developGame() {
    console.log("Poyga o'yini:");
    this.developer.writeCode();
    }
}


class FootballGame extends Game {
    developGame() {
    console.log("Futbol o'yini:");
    this.developer.writeCode();
    }
}


function main() {
    const game1 = new RacingGame(new CppDeveloper());
    const game2 = new RacingGame(new CppDeveloper());

    const game3 = new FootballGame(new JavaDeveloper());
    const game4 = new FootballGame(new CppDeveloper());

    game1.developGame();
    game2.developGame();
    game3.developGame();
    game4.developGame();
}

main();
