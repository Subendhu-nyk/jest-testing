
import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"
// writing tests-The Three "A"s
// Arrange- setup the test data, test conditions and test environment
// Act-Run logic that should be tested (e.g execute function)
// Assert- Compare execution results with expected results


test('renders Hello world as a test',()=>{
//Arrange
render(<Greeting/>)
//Act

//Assert
// get function - throw an error if the elements is not found
// find function- return a promise
const helloWorldelement=screen.getByText('Hello world');
// expect-function in which we can pass the result
expect(helloWorldelement).toBeInTheDocument();

})