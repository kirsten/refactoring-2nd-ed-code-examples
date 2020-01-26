function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return new Bird(bird).plumage
}

function airSpeedVelocity(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCoconuts;
        case 'NorwegianBlueParrot':
            return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default:
            return null
    }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject)
    }

    get plumage() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return 'average'
            case 'AfricanSwallow':
                return (this.numberOfCoconuts > 2) ? 'tired' : 'average'
            case 'NorwegianBlueParrot':
                return (this.voltage > 100) ? 'scorched' : 'beautiful'
            default:
                return 'unknown';
        }
    }

    get airSpeedVelocity() {
        switch (this) {
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

module.exports = { plumages, speeds }