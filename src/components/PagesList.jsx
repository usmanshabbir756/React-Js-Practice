import Model from "./Model";
import NewPost from "./NewPost"
import Page from "./Page"
import classes from './PagesList.module.css'
import { useState } from "react";

function PagesList() {
  const [modelIsVisible , setModelIsVisible] = useState(true);
  const [enteredBody,setEnteredBody]= useState('');
  const [enteredAuthor,setEnteredAuthor]= useState('');

  function hideModelHandler(){
    setModelIsVisible(false)
  }

  function bodyChangeHandler(e){
      setEnteredBody(e.target.value);
  }

  function authorChangeHandler(e){
    setEnteredAuthor(e.target.value);
}


  return (
    <>
    {modelIsVisible && (
      <Model hideModel={hideModelHandler}>
      <NewPost
        onBodyChange={bodyChangeHandler}  
        onAuthorChange={authorChangeHandler}
      />
      </Model>
    )}
    
    <ul className={classes.posts}>
        <Page author={enteredAuthor} body={enteredBody} />
        <Page author="UMAR" body="jAVA is awesome!" />
    </ul>
    </>
  )
}

export default PagesList