import Page from "./Page"
import classes from './PagesList.module.css'

function PagesList() {
  return (
    <ul className={classes.posts}>
        <Page author="Usman" body="React js is awesome!" />
        <Page author="UMAR" body="jAVA is awesome!" />
    </ul>
  )
}

export default PagesList