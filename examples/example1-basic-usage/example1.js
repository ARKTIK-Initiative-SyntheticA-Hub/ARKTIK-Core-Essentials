// Import the core module from ARKTIK Core Essentials
const coreModule = require('../../src/core-modules/coreModule');

// Load example data
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./example-data.json', 'utf8'));

// Basic function demonstrating data transformation
function processExampleData(inputData) {
    console.log('Input Data:', inputData);

    // Example usage of a core function to filter and transform data
    const result = coreModule.transformData(inputData, {
        filterKey: 'value',
        filterValue: 42,
        transformFunction: (item) => {
            return {
                ...item,
                status: 'processed',
                timestamp: new Date().toISOString(),
            };
        }
    });

    console.log('Processed Output:', result);
}

// Execute the function
processExampleData(data);
