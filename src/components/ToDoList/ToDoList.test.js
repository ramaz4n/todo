import ToDoList from "./ToDoList";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"



describe('ToDoList component', ()=>{
	it('renders todo list', ()=>{
		render(<ToDoList/>)
		userEvent.type(screen.getByPlaceholderText('new todo'), 'Work')
		userEvent.click(screen.getByRole('button'))
		const listItem = screen.getByText('Work')
		expect(listItem).toBeInTheDocument()
	})
})