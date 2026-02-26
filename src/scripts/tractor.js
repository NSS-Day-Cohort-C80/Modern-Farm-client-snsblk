import { createAsparagusSeed } from "./seeds/asparagus.js"
import { createCornSeed } from "./seeds/corn.js"
import { createPotatoSeed } from "./seeds/potato.js"
import { createSoybeanSeed } from "./seeds/soybean.js"
import { createSunflowerSeed } from "./seeds/sunflower.js"
import { createWheatSeed } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


    //We don't need Array.isArray. This method only checks if the parameter is an array or not. We can get rid of it (though its not hurting anything). What we needed was to go through each index of the yearly plan, which can be done by using for (const row of yearsPlantingPlan). We were only going through one level of the array at first. We were also not testing it right lol, which I added at the end of the page. 
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


