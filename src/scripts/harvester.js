/*
This function will iterate the array processed by the plantSeeds function.
*/

export const harvestPlants = (plantsArray) => {
    let seedObjects = []

    for (const bloomPlants of plantsArray ) {
        for (let index = 0; index < bloomPlants.output; index++) {
            seedObjects.push(bloomPlants)
        }
    }
    
    return seedObjects
}