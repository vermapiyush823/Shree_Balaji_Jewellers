import './content.css';
import App from '../App';



function Content(props) {
    return (
    <div className="content">
        <img src={props.image}></img>
        <div className='scroller' >
        <a> {'<'}</a>
        <a> {'>'}</a>
        </div>
        <div className='content-text'>
        <h1>{props.heading1}</h1>
        <h1>{props.heading2}</h1>
        <button>{props.button}</button>   
        </div>
    </div>
        );
}

export default Content;