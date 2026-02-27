import { createAsparagusSeed } from "./seeds/asparagus.js"
import { createCornSeed } from "./seeds/corn.js"
import { createPotatoSeed } from "./seeds/potato.js"
import { createSoybeanSeed } from "./seeds/soybean.js"
import { createSunflowerSeed } from "./seeds/sunflower.js"
import { createWheatSeed } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const plantSeeds = (yearsPlantingPlan) => {
        for (const row of yearsPlantingPlan){
            for (const plant of row){
                if (plant === "Asparagus") {
                    addPlant(createAsparagusSeed())
                }
                else if (plant === "Wheat") {
                    addPlant(createWheatSeed())
                }
                else if (plant === "Potato") {
                    addPlant(createPotatoSeed())
                }
                else if (plant === "Corn") {
                    addPlant(createCornSeed())
                }
                else if (plant === "Soybean") {
                    addPlant(createSoybeanSeed())
                }
                else if (plant === "Sunflower") {
                    addPlant(createSunflowerSeed())
                }
            }
        }
    }


