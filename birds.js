function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return createBird(bird).plumage
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity
}

function createBird(bird) {
    switch(bird.type) {
            case 'EuropeanSwallow':
                return new EuropeanSwallow(bird)
            case 'AfricanSwallow':
                return new AfricanSwallow(bird)
            case 'NorwegianBlueParrot':
                return new NorwegianBlueParrot(bird)
            default:
                return new Bird(bird)
    }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject)
    }

    get plumage() {
        return 'unknown';
    }

    get airSpeedVelocity() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return 35;
            case 'AfricanSwallow':
                return 40 - 2 * this.numberOfCoconuts;
            case 'NorwegianBlueParrot':
                return (this.isNailed) ? 0 : 10 + this.voltage / 10;
            default:
                return null
        }
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? 'tired' : 'average'
    }
}
class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? 'scorched' : 'beautiful'
    }

}

module.exports = { plumages, speeds }