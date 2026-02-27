// This function will add our seeds generated into our field.
// It will first check if the seed is an array (corn), and then push that object into plants []. Otherwise, it will just push seedObject into plants [].
// import { plantSeeds } from "./tractor.js"
// import { createPlan } from "./plan.js"

const plants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const plant of seedObject){
            plants.push(plant)
        }
    }
    else {
        plants.push(seedObject)
    }
}

export const usePlants = () => {
    return structuredClone(plants).sort((a, b) => a.type.localeCompare(b.type))
}

// console.log(plantSeeds(createPlan()))
// console.log(usePlants())