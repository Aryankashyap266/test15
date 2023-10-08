import Axios from 'axios';
import { useEffect,useState } from 'react';
function F1(){
    const [data, setData] = useState([]);
    //Https request we need to place inside the lifecycle methods
    //But as we are working with function component there is no lifecycle methods
    //Insted of that we have the concept called Hooks which helps us to Handle hte Http request
    //useEffect() is used the handel the side effects 
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200){
               setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));

    },[])

    const ListNames = () =>{
        return data.map((val)=>{
            return <h1>{val.name}</h1>
        })
    }
    return(
        <div>
            <h1>{ListNames()}</h1>
        </div>
    )
}

export default F1;