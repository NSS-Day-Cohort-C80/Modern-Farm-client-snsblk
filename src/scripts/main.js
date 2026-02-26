import { createAsparagusSeed } from "./seeds/asparagus.js"
import { createCornSeed } from "./seeds/corn.js"
import { createPotatoSeed } from "./seeds/potato.js"
import { createSoybeanSeed } from "./seeds/soybean.js"
import { createSunflowerSeed } from "./seeds/sunflower.js"
import { createWheatSeed } from "./seeds/wheat.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantArray = usePlants()
const finalPlants = harvestPlants(plantArray)
console.log(finalPlants)

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    ${Catalog(finalPlants)}
`

mainContainer.innerHTML = applicationHTML
