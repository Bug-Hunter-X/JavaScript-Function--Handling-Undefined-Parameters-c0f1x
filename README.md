# JavaScript Function: Handling Undefined Parameters

This repository demonstrates a common error in JavaScript functions: improper handling of undefined parameters. The `foo` function attempts to add two numbers, but doesn't explicitly check for `undefined` values.  This can lead to unexpected behavior or runtime errors.

The `bug.js` file contains the original code with the bug.  The `bugSolution.js` file provides a corrected version that addresses the issue.

## Bug
The bug lies in the lack of handling for undefined parameters.  JavaScript's loose typing can lead to unexpected results when adding `undefined` to a number.

## Solution
The solution involves explicitly checking for `undefined` parameters and providing a suitable default value or handling mechanism.