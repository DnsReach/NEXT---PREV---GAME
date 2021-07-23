import IMAGE1 from './image/depositphotos177512316xl-2015-2-copia_5.jpg';
import IMAGE2 from './image/image.jpg';
import IMAGE3 from './image/photo2.jpeg';
import IMAGE4 from './image/photo3.jpg';
import IMAGE5 from './image/photo.jpg';

const persons = [
  // pessoa 1 
  {
    name: "Luiza",
    job: "Web dev  -  responsible for the coding.",
    image: < img src={IMAGE1} />
  },
  // pessoa 2
  {
    name: "Morgan",
    job: "Dev mobile - development mobile in Swift.",
    image: <img src={IMAGE2} />
  },
  // pessoa 3 
  {
    name: "Arthur",
    job: "Devops - collaboration in the development.",
    image: <img src={IMAGE3} />
  },
  // pessoa 4
  {
    name: "Elton",
    job: "Lawyer - solve individualized problem.",
    image: <img src={IMAGE4} />
  },
  // pessoa 5
  {
    name: "Jonathan",
    job: "Streamer - broadcast in real time while talk.",
    image: <img src={IMAGE5} />
  }

];

export default persons;
