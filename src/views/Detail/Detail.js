import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

export default function Detail () {

const {detailId} = useParams(); 

return(
        <div>
            <ItemDetailContainer detailId = {detailId}/>
        </div>   
    );
}