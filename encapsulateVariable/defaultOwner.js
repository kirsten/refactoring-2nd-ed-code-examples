let defaultOwnerData = { firstName: "Kirsten", lastName: "Nordine" };

export function defaultOwner() { return Object.assign({}, defaultOwnerData); }
export function updateDefaultOwner(ownerData) { defaultOwnerData = ownerData; }

