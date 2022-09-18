import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { closeModal } from '../redux/modalSlice'
import { Loader } from './Loader'


const ImagePrompt = styled.img`
    width: 100%;
    height: 100%;
`;

export const Modal = ({ isVisible = false, content }) => {
    // Модальное окно для отображения подсказки в виде изображения
    const dispatch = useDispatch()
  
    const close = () => {
        dispatch(closeModal())
    }

    return !isVisible ? null : (
      <div className="modal" onClick={close}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <span className="modal-close" onClick={close}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">
                {content ? <ImagePrompt src={content} alt={content} /> : <Loader/>}
            </div>
          </div>
        </div>
      </div>
    )
  }