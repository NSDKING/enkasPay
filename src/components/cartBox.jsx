import "./css/cardBox.css";
import delet from './img/delete.png'


function CartBox({articles, cover, title, number,price, type,loading, setLoading }){

    function handleRemove(id) {
     
       }
    

  return (
      
      <div className="cart_box_item">
           <img src={cover} alt={title} className="cart_box_item_left" />
           <div className="cart_box_item_bottom">
                <h3>{title}</h3>
                <div >
                    <div className="cart_box_item_action">
                        <div className="actions">-</div>
                        <span className="number">{2}</span>

                        <div className="actions">+</div>
                    </div>

                </div>
           </div>
           <div className="cart_box_item_right">
                <span>12244Fcfa</span>
           </div>
      </div>


  );
}

export default CartBox;