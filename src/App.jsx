import ClassComponent from './001_Components/ClassComponent'
import FunctionalComponent from './001_Components/FunctionalComponent'
import Props from './002_Props/Props'
import Destructuring from './003_Destructuring/Destructuring'
import UseStateHook from './003_Hooks/UseStateHook'
import IfelseRendering from './004_ConditionalRendering/IfelseRendering'
import TernaryRendering from './004_ConditionalRendering/TernaryRendering'
import ListRendering from './005_ListRendering/ListRendering'
import ObjectRendering from './006_ObjectRendering/ObjectRendering'
import './App.css'

function App() {

  return (
    <>
      <FunctionalComponent />
      <hr />
      <ClassComponent />
      <hr />
      <Props name="Vikas.Shanabhog" callname="Vikas">
        This is children
      </Props>
      <hr />
      <Destructuring name="Vikas" course="B. Tech" college="Presidency University" />
      <hr />
      <UseStateHook />
      <hr />
      <IfelseRendering />
      <hr />
      <TernaryRendering />
      <hr />
      <ListRendering />
      <hr />
      <ObjectRendering />
      <hr />
    </>
  )
}

export default App
