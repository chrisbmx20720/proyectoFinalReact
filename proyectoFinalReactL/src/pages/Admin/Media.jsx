import {React,useState} from 'react'
import { ImageGallery } from '../../components/test/ImageGallery'
import {UploadImage} from '../../components/test/UploadImage'

export default function Media() {

  return (
    <div>
      <UploadImage/>
      <button onClick = {()=> changeState()}className="btn btn-info"></button>
      <ImageGallery/>
    </div>
  )
}
