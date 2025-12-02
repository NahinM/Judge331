import { useState } from 'react'
import './App.css'
import ProblemSet from './components/problemset/problems'
import Question from './components/question/Question'
import Submit from './components/submit/Submit'
import Custom from './components/custom/Custom'

function App() {
  const [page,setPage] = useState("problemset");
  const [item,setItem] = useState(null);
  const getItem = (item)=> {
    setItem(item);
    setPage("question");
  }
  return (
    <>
      <div className='p-2'>
      <button className={'btn btn-outline-dark' + (page=="problemset"?" active":"")} onClick={()=>setPage("problemset")}>Problem Set</button>
      <button className={'btn btn-outline-dark' + (page=="question"?" active":"")} onClick={()=>setPage("question")}>Question</button>
      <button className={'btn btn-outline-dark' + (page=="submit"?" active":"")} onClick={()=>setPage("submit")}>Submit</button>
      <button className={'btn btn-outline-dark' + (page=="custom"?" active":"")} onClick={()=>setPage("custom")}>Custom</button>
      </div>
      <br />
      <br />
      { page=="problemset" && <ProblemSet setItem={getItem}/>}
      { item!=null && page=="submit" && <Submit item={item}/>}
      { page=="custom" && <Custom/>}
      { item!=null && page=="question" && <Question item={item}/>}
      { item==null && (page=="submit" || page=="question") && <div class="alert alert-primary container" role="alert">Click on a question first</div>}
    </>
  )
}

export default App
