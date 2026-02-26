
// export const Catalog = (harvestPlantsArray) => {
//     let html = ""
//     html = "<ul>"

//     for (const plants of harvestPlantsArray) {
//             const plantName = plants.type
                
//             html += `<li data-type="plant">${plantName}</li>`
//     }

//     html += "</ul>"

//     return html
// }

export const Catalog = (harvestedSeeds) => {
    return `
        <h1>🌾 Harvest Catalog</h1>
        <ul class="plantList">
            ${harvestedSeeds.map(seed => `
                <li class="plant">${seed.type}</li>
            `).join('')}
        </ul>
        `
}