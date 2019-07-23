import React from 'react'
import ReactDom from 'react-dom'
import {Loader} from '../components'

export default {
  show() {
    if (!this.elem) {
      this.elem = document.createElement('div')
      document.body.appendChild(this.elem);
      ReactDom.render(<Loader/>, this.elem);
    }
  },
  hide() {
    const unmountResult = ReactDom.unmountComponentAtNode(this.elem)
    if (unmountResult && this.elem.parentNode) {
      document.body.removeChild(this.elem);
      this.elem = null;
    }
  }
}
