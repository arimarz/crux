import{useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';

function SingleRoute(){
    const[route, setRoute]= useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    const{ id } = useParams()
    
    useEffect(() => {
        console.log('in useEffect')
        fetch(`/routes/${id}`)
        .then((r)=> r.json())
        .then((route)=> {
            setRoute(route);
            setIsLoaded(true);
        });
    }, [id])
    
    if (!isLoaded) return <h1>Loading...</h1>;
    const { name, style, grade, image, location} = route

    return(
        <div className="single-route">
        <div className="single-nontext">
            <h2>{name}</h2>
            <img className="single-image" src={image} alt={name} />
            <Link to={`/routes/${id}/edit`}><p className="linkToEdit">Edit This Route</p></Link>
        </div>
        <div className="tick">
            <Link to={`/routes/${id}/ticks`}><p className="linkToTick">Add Tick</p></Link>
        </div>
        <div className="single-center">
        <h3 className="single-name">{name}</h3>
        <p>Style: {style}</p>
        <p>Grade: {grade}</p>
        <p>Location: {location.place} </p>
        </div>
    </div>
    )
}

export default SingleRoute;