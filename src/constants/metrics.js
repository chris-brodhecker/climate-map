

export const Months = {
    january: { name: 'January', display: 'January' },
    february: { name: 'February', display: 'February' },
    march: { name: 'March', display: 'March' },
    april: { name: 'April', display: 'April' },
    may: { name: 'May', display: 'May' },
    june: { name: 'June', display: 'June' },
    july: { name: 'July', display: 'July' },
    august: { name: 'August', display: 'August' },
    september: { name: 'September', display: 'September' },
    october: { name: 'October', display: 'October' },
    november: { name: 'November', display: 'November' },
    december: { name: 'December', display: 'December' },
}


// How the temperatures change based on climate scenarios.
// This could be a much more complex function if needed.
const tempChangeFunction = (temp, change=1) => {
    console.log(temp, change)
    return temp * change
}

export const ClimateScenarios = {
    scenario0: { name: 'Current Emissions', display: 'Current Emissions', changeAmount: 1, tempChange: (t) => (t) },
    scenario1: { name: 'Emmision Scenario A1', display: 'Emmision Scenario A1', changeAmount: 1.5, tempChange: tempChangeFunction},
    scenario2: { name: 'Emmision Scenario A2', display: 'Emmision Scenario A2', changeAmount: 1.2, tempChange: tempChangeFunction},
    scenario3: { name: 'Emmision Scenario B1', display: 'Emmision Scenario B1', changeAmount: 0.5, tempChange: tempChangeFunction}
}

