import classes from './Model.module.css'

function Model({hideModel , children}) {
  return (
    <>
        <div className={classes.backdrop} onClick={hideModel}/>
        <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}

export default Model