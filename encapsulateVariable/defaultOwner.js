let defaultOwnerData = { firstName: "Kirsten", lastName: "Nordine" };

export function defaultOwner() { return defaultOwnerData; }
export function updateDefaultOwner(ownerData) { defaultOwnerData = ownerData; }

