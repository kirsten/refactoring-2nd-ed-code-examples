import { getDefaultOwner, updateDefaultOwner } from './defaultOwner';

spaceship.owner = getDefaultOwner();

updateDefaultOwner({ firstName: "Kelsey", lastName: "Nordine" });

