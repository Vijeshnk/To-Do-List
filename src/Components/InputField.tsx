import React from 'react'
import { Form ,Input,Button} from 'reactstrap'
import '../App.css';

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}



const InputField:React.FC<Props>= ({todo,setTodo,handleAdd}) => {
  return (
    
    <Form onSubmit={handleAdd}>  
       
    <Input
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      name="input"
      placeholder="with a placeholder"
      type="text"
    />
    <div className="text-center">
    <Button type="submit" >
        Submit
      </Button>
      </div>
  </Form>
  
  )
}

export default InputField