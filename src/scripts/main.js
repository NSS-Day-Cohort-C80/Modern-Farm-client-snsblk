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

const yearlyPlan = createPlan()

const asparagusSeed = createAsparagusSeed()
const cornSeed = createCornSeed()
const potatoSeed = createPotatoSeed()
const soyBeanSeed = createSoybeanSeed()
const sunflowerSeed = createSunflowerSeed()
const wheatSeed = createWheatSeed()

const cornPlant = addPlant(cornSeed)
const potatoPlant = addPlant(potatoSeed)
const soyBeanPlant = addPlant(soyBeanSeed)
const asparagusPlant = addPlant(asparagusSeed)
const sunflowerPlant = addPlant(sunflowerSeed)
const wheatPlant = addPlant(wheatSeed)

plantSeeds(yearlyPlan)

const plantArray = usePlants()
const finalPlants = harvestPlants(plantArray)
console.log(finalPlants)
