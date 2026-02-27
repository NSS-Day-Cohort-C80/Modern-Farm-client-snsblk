
// Create functions that generate seeds in the form of objects.

let key = 1

export const createAsparagusSeed = () => {
    return {
        type: "Asparagus",
        height: 24,
        output: 4,
        id: key++
    }
} 