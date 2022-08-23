import './CardPro.css'

function CardPro ({title,body,price,img}){

    return(
        <div className = 'theFul'>
            <div className = 'imagez'>
                <img src = {img} alt = "thjdud"/>
            </div>
           <div className = 'back'>
           <div className = 'titlez'>
                <h3>{title}</h3>
            </div>
            <div className = 'pricez'>
                <p> price:  {price} </p>
            </div>
           
            <div className = 'bodyz'>
                <p>{body} </p>
            </div>
           <div className = 'order'>
           <button>Press your order</button>
           </div>

           </div>


        </div>
    )
}
export default CardPro