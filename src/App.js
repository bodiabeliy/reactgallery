import './App.css';
import React from 'react';

import PhotoList from './components/PhotoList'
import Navbar from './components/Navbar'



function App() {

  //дефолтный массив картинок 
  const gallery = [
    {photo: './images/bag.jpg',  id:1, name: 'Night bag', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quam sit nesciunt, accusamus illo ab, beatae iure consequatur consequuntur officiis sapiente velit molestias debitis laborum incidunt. Molestiae aliquid, a quidem nulla omnis sed aspernatur quam quo culpa tenetur neque odit natus eos cupiditate autem quod sint possimus, iure hic nisi.'},
    {photo: './images/walk.jpg', id:2,name: 'Alley', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias delectus quod ut id temporibus officia sapiente fugiat aliquam ab, atque ipsum ratione corrupti error velit incidunt omnis? Minus officiis distinctio sed eum molestias...'},
    {photo: './images/sunset.jpg', id:3, name: 'Sunset', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis similique cum, quos, ullam ea nihil fugiat fugit esse blanditiis voluptatem deserunt, tempore mollitia! Dolores, quia fuga. Dolores praesentium corrupti eveniet eos nobis?'},
    {photo: './images/sunrise.jpg', id:4, name: 'Sunrise', description: '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit magni exercitationem, enim odio quod quae aperiam. Nam, similique iste dolores ipsam sunt, nemo dolor in a minima doloribus ut dicta odio minus perspiciatis voluptatem fugiat tempora sit modi quibusdam inventore. Repellendus, totam corrupti.'},
    {photo: './images/300x200.jpg', name: 'fon'},
    {adding: '', name:''},
  ]

  // атрибут photos - входящие данные для детского компонента (формирование списка фото)
  return (
    <div className="App">
      <Navbar />
      <div className="photoGrid">
      <PhotoList photos={gallery} />
      </div>
    </div>
  );
}

export default App;
