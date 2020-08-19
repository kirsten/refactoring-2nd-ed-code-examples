let defaultOwner = { firstName: "Kirsten", lastName: "Nordine" };

function getDefaultOwner() { return defaultOwner; }
function updateDefaultOwner(ownerData) { defaultOwner = ownerData; }

spaceship.owner = defaultOwner;

defaultOwner = { firstName: "Kelsey", lastName: "Nordine" };

