import React from 'react'
import '../scss/components/cart.scss'
import obuv from '../img/obuv.jpg'
import trush from '../img/trash 1.svg'

export const Cart = () => {
  return (
    <div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
    
    <div class="modal-content">
      <div class="modal-body">
        <button data-dismiss="modal" class="close">&times;</button>
        <h4>Login</h4>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Username"/>
          <input type="password" name="password" class="password form-control" placeholder="password"/>
          <input class="btn login" type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>  
</div>
    // <div id='openModal' className='modal'>
    //   <div>

    //   </div>
    //   {/* <div className='modal_dialog'>
    //     <div className='cart_modal_content'>
    //       <div className='modal_header'>
    //         <h2 className='modal_title'>Корзина</h2>
    //         <a href='#close' title='Close' className='close'>x</a>
    //       </div>
    //       <div className='modal_body'>
    //         <div>
    //           <img src={obuv} alt='obuv' />
    //         </div>
    //         <div>
    //           <div className='sneakblock_title'>Кроссовки Nike Air Force 1 '07 QS</div>
    //           <div className='sneakblock_price'>11 000 ₽ </div>
    //         </div>
    //         <img src={trush} alt='delete'/>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  )
}
