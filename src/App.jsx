import ClassComponent from './001_Components/ClassComponent'
import FunctionalComponent from './001_Components/FunctionalComponent'
import Props from './002_Props/Props'
import Destructuring from './003_Destructuring/Destructuring'
import UseStateHook from './003_Hooks/01_UseStateHook/UseStateHook'
import UseStateHookWithPrev from './003_Hooks/01_UseStateHook/UseStateHookWithPrev'
import UseRef from './003_Hooks/02_UseRefHook/UseRef'
import AfterEveryRender from './003_Hooks/03_UseEffectHook/AfterEveryRender'
import AfterFirstRender from './003_Hooks/03_UseEffectHook/AfterFirstRender'
import IfelseRendering from './004_ConditionalRendering/IfelseRendering'
import TernaryRendering from './004_ConditionalRendering/TernaryRendering'
import ListRendering from './005_ListRendering/ListRendering'
import ObjectRendering from './006_ObjectRendering/ObjectRendering'
import FormHandling from './007_FormHandling/FormHandling'
import Get from './008_HTTPOperations/Get'
import Post from './008_HTTPOperations/Post'
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
      <UseStateHookWithPrev />
      <hr />
      <UseRef />
      <hr />
      <AfterEveryRender />
      <hr />
      <AfterFirstRender />
      <hr />
      <IfelseRendering />
      <hr />
      <TernaryRendering />
      <hr />
      <ListRendering />
      <hr />
      <ObjectRendering />
      <hr />
      <FormHandling />
      <hr />
      <Get />
      <hr />
      <Post />
    </>
  )
}

export default App
