import { useLocation, useNavigate } from "react-router-dom";
import "./index.css"
import SHeader from "../../components/header";



export default function HomeClick() {
    const { state } = useLocation();
    const { user } = state;
    const navigate = useNavigate();


    return(
        <section className="buttonsPage">
            <SHeader></SHeader>

                 <button
                    className="sp"
                        onClick={()=>{navigate("/crm-prospect", { state: {  user: user } })}}
                    >management</button>

                    <button
                    className="sp"

                        onClick={()=>{navigate("/crm-description", { state: {  user: user } })}}

                    >Descriptions</button>
         </section>
    )

}

 