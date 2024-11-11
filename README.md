# Example 1: Data Transformation and Basic Processing

## Welcome

Welcome to **Example 1** of the ARKTIK Core Essentials journey! In this example, we will walk through a simple yet powerful demonstration of data transformation using our core module. This example is designed to be accessible for beginners while showcasing the versatility of the library.

---

## Objectives

By completing this example, you will:
1. Learn how to load and manipulate data using ARKTIK Core Essentials.
2. Understand the basic concepts of data filtering and transformation.
3. Gain hands-on experience with a practical use case.

---

## Prerequisites

Ensure you have completed the following before running this example:
- Installed all dependencies for ARKTIK Core Essentials (refer to the [Installation Guide](../../docs/installation-guide.md)).
- Familiarity with basic JavaScript syntax (optional but helpful).

---

## Example Walkthrough

### Step 1: Overview of the Example

This example demonstrates how to:
- Load a data file (`example-data.json`).
- Filter data based on a specific criterion.
- Transform the data using a provided function.

### Step 2: Files in This Example

- **`example1.js`**: The main script containing the code to process the data.
- **`example-data.json`**: A sample data file used for demonstration purposes.

---

## Running the Example

### 1. Navigate to the Example Directory

Move to the `example1-basic-usage` directory:
```bash
cd examples/example1-basic-usage
```

### 2. Execute the Script

Run the script using Node.js:
```bash
node example1.js
```

### 3. Expected Output

The script will process the input data, filter it based on specific criteria, transform it, and display the output. You should see output similar to the following:

```
Input Data: [
  { name: 'ARKTIK Example 1', value: 42, description: 'This is a sample input for demonstrating basic usage of the ARKTIK Core Essentials module.' },
  { name: 'ARKTIK Example 2', value: 15, description: 'Another data entry that should be filtered out based on the filter criteria.' }
]
Processed Output: [
  { name: 'ARKTIK Example 1', value: 42, description: 'This is a sample input for demonstrating basic usage of the ARKTIK Core Essentials module.', status: 'processed', timestamp: '2024-11-11T10:00:00.000Z' }
]
```

---

## Explanation of the Code

### Loading the Core Module

The script begins by importing the ARKTIK Core Essentials module:
```javascript
const coreModule = require('../../src/core-modules/coreModule');
```

### Loading the Data

The sample data is loaded from a JSON file:
```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./example-data.json', 'utf8'));
```

### Processing the Data

We define a function to process the data using a core function from the module:
```javascript
function processExampleData(inputData) {
    console.log('Input Data:', inputData);

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
```

### Key Concepts Demonstrated

1. **Data Filtering**: Only items with a `value` of `42` are selected.
2. **Data Transformation**: A `status` and `timestamp` are added to the selected items.

---

## Experiment Further

Try modifying the `example-data.json` file or changing the filtering criteria in the script to see how different inputs are handled.

---

## Need Help?

For any questions or issues, feel free to reach out at `GitARKTIK@arktiksecure.com` or open an [issue](https://github.com/ARKTIK-Initiative-SyntheticA-Hub/ARKTIK-Core-Essentials/issues).
