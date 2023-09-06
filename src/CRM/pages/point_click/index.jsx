import { useLocation, useNavigate } from "react-router-dom";
import "./index.css"
import SHeader from "../../components/header";



export default function PointClick() {
    const { state } = useLocation();
    const { user } = state;
    const navigate = useNavigate();


    return(
        <section className="buttonsPage">
            <SHeader></SHeader>

                 <button
                    className="sp"
                        onClick={()=>{navigate("/crm-good", { state: {  user: user } })}}
                    >good</button>

                    <button
                    className="sp"

                        onClick={()=>{navigate("/crm-pbcount", { state: {  user: user } })}}

                    >pbcount</button>
         </section>
    )

}

 