import '../css/styles.css';
import axios from 'axios';
import React, { useEffect,useState} from 'react';
function CardsProduto() {
    
const [posts, setPosts] = useState([]);

useEffect(() =>{
        axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
        .then((response)=>{
            setPosts(response.products)
        })
        .catch(() =>{
            console.log("deu tudo errado");
        })

    }, [])

return(
  <div>
   {posts.map(post => (
        
            <h2>{post.descriptionShort} </h2>
        )
    )}
  </div>
 )
}

export default CardsProduto;
