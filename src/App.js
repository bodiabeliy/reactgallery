import './App.css';
import React from 'react';

import PhotoList from './components/PhotoList'
import Navbar from './components/Navbar'



function App() {

  //дефолтный массив картинок 
  const gallery = [
    {photo: './images/bag.jpg',  id:1, name: 'Night bag'},
    {photo: './images/walk.jpg', id:2,name: 'Alley'},
    {photo: './images/sunset.jpg', id:3, name: 'Sunset'},
    {photo: './images/sunrise.jpg', id:4, name: 'Sunrise'},
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
