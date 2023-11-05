import './App.css';
import Header from './Components/Header';
import peralimage from '../src/images/beautiful-woman-vintage-image.jpg';
import necklace from '../src/images/pleased-caucasian-girl-looking-down-sad-black-haired-woman-posing-with-plant.jpg';
import Content from './Components/Content';
import { Carousel } from 'react-responsive-carousel';

const image_array = [
  {
    image: peralimage,
    heading1: 'New Pearl',
    heading2: 'Collections',
    button: 'Explore'
  },
  {
    image: necklace,
    heading1: 'Necklace',
    heading2: 'Collections',
    button: 'Explore'
  },
  {
    image: peralimage,
    alt: 'image'
  }
];
function App() {
  return (
    <div>
      <Header />
      <Content id="content" image={image_array[0].image} heading1={image_array[0].heading1} heading2={image_array[0].heading2} button={image_array[0].button} />
          <h1>hello</h1>
    </div>
  );
}

export default App;
