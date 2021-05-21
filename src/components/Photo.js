import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import VisibilityIcon from '@material-ui/icons/Visibility';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function Photo({image}) {
  // состояние для открытия модального окна
  const [open, setModalOpen] = useState(false);
  // открытие окна
  const ShowModal = () => {
    setModalOpen(true);
  };
 // закрытие окна
  const ModalClose = () => {
    setModalOpen(false);
  };
  

  // ф-я подсчета размера файла
  function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
   }


  // состояние для выбраного файла
  const [selectedFile, setSelectedFile] = useState()
  // состояние для создания превью картинки
  const [preview, setPreview] = useState()
  // проверка на отсуствие файла для его подальшего добавления
      useEffect((file) => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      
      // добавление новой фотографии
      const selector = document.querySelector('.MuiGrid-root')
      selector.insertAdjacentHTML('beforeend', `
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 MuiGrid-grid-lg-4">
      <p>Upload images: <b>${bytesToSize(selectedFile.size)}</b></p>
        <div class="MuiPaper-root makeStyles-paper-2 MuiPaper-elevation1 MuiPaper-rounded">
        <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label">
          <div class="cardAdd">
          <h3>${selectedFile.name}</h3>
            <img class="card-img card card-img" src="${objectUrl}">
          </div>
        </div>` )
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  // выбор файла изображения с компютера
  const onSelectFile = e => {
    setSelectedFile(e.target.files[0])
    // конвертация объекта картинки в массив, 
    // для последующих манипуляций
    const files = Array.from(e.target.files)
    files.forEach(file => {
     
    })
  }
// если карточка имеет поле фото
  if (image.photo != null) {
    return (
      <Button>
      <div className='card'>
        <Card.Img className='card' src={image.photo} />
        <Button
          className='authbtn'
          startIcon={<VisibilityIcon></VisibilityIcon>}
          onClick={ShowModal}
          variant="contained"
          style={{background: '#ff9800', color:'#fff' }}
        >
        Show details
      </Button>
      <Modal
        className='modalPhoto'
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={ModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <h2 className='modal_header'> {image.name}</h2>
            <Card.Img className='cardModal' src={image.photo} />
        </div>
        </Fade>
      </Modal>
      </div>

      </Button>
    );
  }

  // возвращение карточки с отсутствующим изображением
    return (
      <Button type='file'>
      <div className='cardAdd'>
          {selectedFile && 
           <Card.Img
           className='card card-img' 
           src={preview} 
           /> }
          <Fab color="primary" >
          <input 
           className='input'
           type="file" 
           onChange={onSelectFile}
           /> 
            <AddIcon />
          </Fab> 
      </div>
      </Button>
    )
 
}