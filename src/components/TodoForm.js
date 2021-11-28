import React, {useStae, useState} from "react";

import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon,
  } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

import { connect } from "react-redux";
import { addTodo } from "../action/todo";


const TodoForm = ({addTodo}) => {

    const [title,setTitle] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (title === '') {
            return alert("Please Add Todo")
        }
        const todo = {
            title,
            id:uuidv4()
        }
        addTodo(todo)

        setTitle("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next Todo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                        <Button color="primary" onClick={handleSubmit}>
                            ADD
                        </Button>
     
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
