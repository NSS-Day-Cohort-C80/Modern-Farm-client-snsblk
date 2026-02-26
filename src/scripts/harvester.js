/*
This function will iterate the array processed by the plantSeeds function.
*/

export const harvestPlants = (plantsArray) => {
    let seedObjects = []

    for (const bloomPlants of plantsArray ) {

        if (bloomPlants.type === "Corn"){
            for (let index = 0; index < bloomPlants.output / 2; index++) {
            seedObjects.push(bloomPlants)
            }
        }
        else {
            for (let index = 0; index < bloomPlants.output; index++) {
            seedObjects.push(bloomPlants)
            }
        }
    }
    return seedObjects
}