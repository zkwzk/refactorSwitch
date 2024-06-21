# Refactor Practise Project

This is a project to try refactor a **switch case** to different patterns like dictionary, subclass, decorator pattern, it start from a simple project in `1.origin` folder to do the refactor 

## How to use it

### Prerequisites
1. nodejs
2. any code copilot tools(you can do it manually if don't have any)


### install dependencies
`npm i`

### hints
In each of the folder there will be a `*.ts.backup` file which is the final state of the task, can refer it if you get stucked
### Steps
1. make up the unit test for `feeCalculator.test.ts` in `1.origin` folder, you can use the inline prompt tool to let copilot generate the test for you
2. refactor the `feeCalculator.ts` in `2.dic` folder, try to refactor the **switch case** with a dictionary, the key is the type, the value is a lambda expression, can use such prompt `refactor the switch case to a dic, the value of dic must be a function`
3. refactor the `feeCalculator.ts` in `3.factory` folder, try to refactor the **switch case** with a few subclasses which implement the `calculateFee` method, like `CarFeeCalculator`, `TruckFeeCalculator`, and should have a factory to build the instance of each calculator based on the input type, can try this prompt `refactor the switch case to subclasses, and should have a factory to build each subclass instance`
4. refactor the `feeCalculator.ts` in `4.withoutSwitch` folder, try to refactor the **switch case** with a few subclasses, but without the factory in step 3, try to add a `getType()` method to return it's string type, so the caller can check the type by their own, and need to compose a list to include all of the possible subclasses so the caller can enumerate the list to get the correct instance and call the `calculateFee` method, can try with this prompt `refactor switch case with subclasses, need to add a getType() method for each of the sub class to return the string type, then for the caller should have alist include all of the instance of the subclass, and check the input type with getType to determine which is the correct instance to use` 
5. this task is based on the outcome of step 4, we will add a new requiremnt, to add a new calculator which can apply the discount for the fees, we can use the decorator pattern to do that by add a new subclass for the discount calculation after we get the fee from each vehicle fee calculator, can use this prompt `add a new subclass for the discount calculation, should use the decorator pattern`
