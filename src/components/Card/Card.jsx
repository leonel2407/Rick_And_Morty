import { connect } from "react-redux";
import { addfav, removefav } from "../../redux/action";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


  function Card({id, name, status, species, gender, origin, image, onClose, addfav, removefav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removefav(id);
      }else {
         setIsFav(true);
         addfav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);


     return (
        <div>     
           <button onClick={() => onClose(id)}>X</button>
           <Link to={`/detail/${id}`}>
              <h2>{name}</h2>
           </Link>
           <h2>name:{name}</h2>
           <h2>status:{status}</h2>
           <h2>species:{species}</h2>
           <h2>gender:{gender}</h2>
           <h2>origin:{origin}</h2>
           <img src={image} alt='' />
           <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
        </div>
     );
  }

  const mapDispatchToProps = (dispatch) =>{
     return{
        addfav: (character) => {dispatch(addfav(character))},
        removefav: (id) => {dispatch(removefav(id))}
     }
  }
  
  const mapStateToProps  = (state) => {
   return{
      myFavorites: state.myFavorites
   }
  }


  export default connect(
     mapStateToProps,
     mapDispatchToProps
  )(Card);