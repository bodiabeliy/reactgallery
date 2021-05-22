import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
  // появление предупреждающего уведомления
  function Btn() {
    const modal = document.querySelector('.photoGrid')
    setTimeout(() => {
    const notification = document.querySelector('.SnackbarItem-variantError-34 ')
    notification.style.display ='none'
    }, 3000)
    setTimeout(() => {
      modal.insertAdjacentHTML('afterend', 
     `
      <div class="SnackbarItem-root-24 SnackbarItem-wrappedRoot-39 SnackbarItem-anchorOriginBottomLeft-30">
        <div class="ForwardRef-root-40 SnackbarItem-contentRoot-31 SnackbarItem-variantError-34 SnackbarItem-lessPadding-32" aria-describedby="notistack-snackbar" role="alert" style="transform: none;">
          <div id="notistack-snackbar" class="SnackbarItem-message-37"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 20px; margin-inline-end: 8px;">
            <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
              6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
              13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"></path>
                </svg>Only regrsted user can edit files!
          </div>
        </div>
      </div>
      `)
    }, 500)
  }

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
      // добавление ссылки на картинки для текущего файла
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
          <button onclick=${Btn()} class="MuiButtonBase-root MuiButton-root MuiButton-contained authbtn" tabindex="0" type="button" style="background: rgb(255, 152, 0); color: rgb(255, 255, 255); margin-bottom: 14px; margin-left: 50px;">
            <span class="MuiButton-label"><span class="MuiButton-startIcon MuiButton-iconSizeMedium">
              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg></span>Edit photo</span>
                <span class="MuiTouchRipple-root"></span>
          </button>
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
      <Button >
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
            <p><b>Description:</b> {image.description}</p>
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