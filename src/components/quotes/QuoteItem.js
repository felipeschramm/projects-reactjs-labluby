import classes from './QuoteItem.module.css';
import {Link} from 'react-router-dom'

const QuoteItem = (props) => {
  const {id, author, text} = props
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${id}`} >
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
