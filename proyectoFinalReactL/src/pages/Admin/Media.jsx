import {React,useState} from 'react'
import { ImageGallery } from '../../components/test/ImageGallery'

export default function Media() {
  const st = false;
  cons [state, setState] = useState();
  return (
    <div>
      <UploadImage/>
      <button onClick = {()=> changeState()}className="btn btn-info"></button>
      <ImageGallery/>
    </div>
  )
}
