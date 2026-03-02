/*
This function will iterate the array processed by the plantSeeds function.
*/

export const harvestPlants = (plantsArray) => {
    let seedObjects = []

    for (const bloomPlant of plantsArray ) {

        if (bloomPlant.type === "Corn"){
            for (let index = 0; index < bloomPlant.output / 2; index++) {
                seedObjects.push(bloomPlant)
            }
        }
        else {
            for (let index = 0; index < bloomPlant.output; index++) {
                seedObjects.push(bloomPlant)
            }
        }
    }
    return seedObjects
}