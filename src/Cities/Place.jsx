import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let Place = () => {
    let [api, setapi] = useState({});
    let id = useParams();
    console.log(id.id);

    useEffect(() => {
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=${id.id}`)
        .then(x => x.json())
        .then(y => {
            setapi(y);
            console.log(y);
        })
        .catch(e => console.log(e))
    }, [id.id]);

    return (
        <>
            <div className="niaboytown-container">
                <h1 className="niaboytown-title">{api.name || "No Name Available"}</h1>
                <h2 className="niaboytown-subtitle">{api.subtitle || "No Subtitle Available"}</h2>
                <p className="niaboytown-content">{api.content || "No Content Available"}</p>
                <p className="niaboytown-cost">Cost per head: ${api.costPerHead || "Not Specified"}</p>
                <p className="niaboytown-availability">Available: {api.available ? "Yes" : "No"}</p>
                <p className="niaboytown-reserved">Reserved: {api.reserved ? "Yes" : "No"}</p>
                {api.images && api.images.length > 0 ? (
                    <Carousel className="custom-carousel">
                        {api.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </>
    )
}

export default Place;