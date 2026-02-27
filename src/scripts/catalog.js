
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

// export const Catalog = (harvestedSeeds) => {
    //     const plantEmojis = {
    //     "Corn": "🌽",
    //     "Wheat": "🌾",
    //     "Soybean": "🫘",
    //     "Asparagus": "🥬",
    //     "Potato": "🥔",
    //     "Sunflower": "🌻"
    // }
//      return `
//         <h1>Harvest Catalog</h1>
//         <ul class="plantList">
//             ${harvestedSeeds.map(seed => `
//                 <li class="plant">${plantEmojis[seed.type]}</li>
//             `).join('')}
//         </ul>
//         `
// }

export const Catalog = (harvestedSeeds) => {
    const plantEmojis = {
        "Corn": "🌽",
        "Wheat": "🌾",
        "Soybean": "🫘",
        "Asparagus": "🥬",
        "Potato": "🥔",
        "Sunflower": "🌻"
    }
    let corn = harvestedSeeds.filter(product => product.type === "Corn").length
    let asparagus = harvestedSeeds.filter(product => product.type === "Asparagus").length
    let potato = harvestedSeeds.filter(product => product.type === "Potato").length
    let sunflower = harvestedSeeds.filter(product => product.type === "Sunflower").length
    let soybean = harvestedSeeds.filter(product => product.type === "Soybean").length
    let wheat = harvestedSeeds.filter(product => product.type === "Wheat").length
    return `
         <h1>Harvest Catalog</h1>
         <ul class="plantList">
             ${harvestedSeeds.map(seed => `
                 <li class="plant">${plantEmojis[seed.type]}</li>
             `).join('')}
         </ul>
         <section class="plant_amount">
                <table id="plant_table">
                <tr>
                    <th>Plant</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>Asparagus</td>
                    <td>${asparagus}</td>
                </tr>
                <tr>
                    <td>Corn</td>
                    <td>${corn}</td>
                </tr>
                <tr>
                    <td>Potato</td>
                    <td>${potato}</td>
                </tr>
                <tr>
                    <td>Soybean</td>
                    <td>${soybean}</td>
                </tr>
                <tr>
                    <td>Sunflower</td>
                    <td>${sunflower}</td>
                </tr>
                <tr>
                    <td>Wheat</td>
                    <td>${wheat}</td>
                </tr>
                </table>
         </section>
         `
}