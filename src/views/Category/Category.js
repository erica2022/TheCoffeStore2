import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Category() {
    const { catId } = useParams();
    return(
        <div>
            <ItemListContainer catId={catId}/> 
        </div>  
    )
}