const { plumages, speeds } = require('./birds');

describe("plumages", () => {
    it("outputs the correct plumages for various birds", () => {
        const birds = [
            { type: "EuropeanSwallow", name: "Jacob" },
            { type: "AfricanSwallow", name: "Mary", numberOfCoconuts: 2 },
            { type: "NorwegianBlueParrot", name: "Xavier", isNailed: true },
        ];
        const expectedPlumages = new Map([["Jacob", "average"], ["Mary", "average"], ["Xavier", "beautiful"]])
        expect(plumages(birds)).toEqual(expectedPlumages);
    });
});

describe("speeds", () => {
    it("outputs the correct speeds for various birds", () => {
        const birds = [
            { type: "EuropeanSwallow", name: "Jacob" },
            { type: "AfricanSwallow", name: "Mary", numberOfCoconuts: 2 },
            { type: "NorwegianBlueParrot", name: "Xavier", isNailed: true },
        ];
        const expectedSpeeds = new Map([["Jacob", 35], ["Mary", 36], ["Xavier", 0]])
        expect(speeds(birds)).toEqual(expectedSpeeds);
    });
});