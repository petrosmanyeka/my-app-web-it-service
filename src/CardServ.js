
import './CardSer.css'
function CardServ({img,cost,serv,descr}){

    return(
        <div className = 'top'>
            <div>
                <img src ={img} alt ='kdkjdklsjkd' />
            </div>
            <div className = "bac">
                <div className = 'costz'>
                    <p> Cost ={cost}</p>
                </div>
                <div className = 'servz'>
                    <p> {serv} </p>
                </div>
                <div className = 'discrz'>
                    <p> {descr} </p>
                </div>
            </div>

        </div>
    )
}
export default CardServ 
