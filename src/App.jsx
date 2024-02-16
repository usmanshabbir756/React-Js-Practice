import MainHeader from "./components/MainHeaderr";
import PagesList from "./components/PagesList";
import { useState } from "react";

function App() {
  const [modelIsVisible , setModelIsVisible] = useState(false);

  function hideModelHandler(){
    setModelIsVisible(false)
  }

  function showModelHandler(){
    setModelIsVisible(true)
  }


  return (
    <>
        <MainHeader onCreatePost={showModelHandler}  />
        <main> 
          <PagesList onCloseModel={hideModelHandler} isCreatePostVisible={modelIsVisible}/>
        </main>
  </>
  );
}

export default App;
