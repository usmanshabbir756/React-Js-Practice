import classes from './Page.module.css'

function Page(props) {
  return (
    <li className={classes.post}>
        <p  className={classes.author} >{props.author}</p>
        <p className={classes.body}>{props.body}</p>
    </li>
  )
}

export default Page