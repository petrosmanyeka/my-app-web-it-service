import CardPro from "./CardPro";
import './Product.css'

function Product( ){
    return(
        <div  className = 'head'>
        <div className = 'shead' >
           
             <CardPro
            img = '../hp1.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />
             <CardPro
            img = '../hp2.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />
             <CardPro
            img = '../hp3.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />
        </div>
        <div className = 'chead'>
        <CardPro
            img = '../mac1.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />
             <CardPro
            img = '../mac2.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />
             
             <CardPro
            img = '../mac3.jpg'
            title = 'HP PC FOR SALE'
            price = '700k'
            body = 'This pc is so expensive to buy from other shops'
            
            />

        </div>
        </div>

        
    )
}
export default Product