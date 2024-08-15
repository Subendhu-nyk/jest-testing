import { act } from "react";
import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"
import Test2 from "./Test2"
import userEvent from "@testing-library/user-event"
// writing tests-The Three "A"s
// Arrange- setup the test data, test conditions and test environment
// Act-Run logic that should be tested (e.g execute function)
// Assert- Compare execution results with expected results
// describe function is used to group related test cases together
// It allows you to organize your test suite into sections, making it easier to read and understand. Each describe block can contain multiple test or it blocks, which are the individual test cases.
// describe('Greeting Component',()=>{
// test('renders Hello world as a test',()=>{
// //Arrange
// render(<Greeting/>)
// //Act

// //Assert
// // get function - throw an error if the elements is not found
// // find function- return a promise
// const helloWorldelement=screen.getByText('Hello world');
// // expect-function in which we can pass the result
// expect(helloWorldelement).toBeInTheDocument();

// })

// })

describe('Test the button', () => { 
    
    test("renders text is not visible ,if the button is not clicked",()=>{
        render(<Test2/>)

        const outputElement=screen.getByText("Not Visible",{exact:false})
        expect(outputElement).toBeInTheDocument()
    })
    test('render changed! if the button was clicked',async()=>{
        // Arrange
        render(<Test2/>)
    
        //Act
        const buttonElement=screen.getByRole('button')
        await act(async () => {
            userEvent.click(buttonElement);
        });
    
        //Assert
        const outputElement=screen.getByText("Changed!")
        expect(outputElement).toBeInTheDocument()
    })  
    
    // remove !changedText in conditional rendering in test2
    test('does not render Text Is Not Visible if the button was clicked',async()=>{
        render(<Test2/>)
    
        //Act
        const buttonElement=screen.getByRole('button')
        await act(async () => {
            userEvent.click(buttonElement);
        });
    
        //Assert
        const outputElement=screen.queryByText("Text Is Not Visible",{exact:false})
        expect(outputElement).toBeNull()
    })   

     })



