import { createAsparagusSeed } from "./seeds/asparagus.js"
import { createCornSeed } from "./seeds/corn.js"
import { createPotatoSeed } from "./seeds/potato.js"
import { createSoybeanSeed } from "./seeds/soybean.js"
import { createSunflowerSeed } from "./seeds/sunflower.js"
import { createWheatSeed } from "./seeds/wheat.js"
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

const asparagusSeed = createAsparagusSeed()
const cornSeed = createCornSeed()
const potatoSeed = createPotatoSeed()
const soyBeanSeed = createSoybeanSeed()
const sunflowerSeed = createSunflowerSeed()
const wheatSeed = createWheatSeed()

console.log(createAsparagusSeed())
console.log(createCornSeed())
console.log(createPotatoSeed())
console.log(createSoybeanSeed())
console.log(createSunflowerSeed())
console.log(createWheatSeed())



