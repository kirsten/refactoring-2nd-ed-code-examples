let defaultOwner = { firstName: "Kirsten", lastName: "Nordine" };

function getDefaultOwner() { return defaultOwner; }
function updateDefaultOwner(ownerData) { defaultOwner = ownerData; }

spaceship.owner = getDefaultOwner();

defaultOwner = updateDefaultOwner({ firstName: "Kelsey", lastName: "Nordine" });

