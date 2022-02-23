import React from 'react';
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {

    const {urlToImage,url , title, description,source} = noticia;

    const imagen = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span> 
    </div>
    :null
    return ( 

    
        <div className='row col s12 m6 l4'>
            <div className="card">
                {imagen}
                
                <div className="card-content">
                <h5> {title} </h5>
                <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank"
                    className="waves-effect waves-ligth button">Ver noticia completa</a>
                </div>
            </div>
        </div>


     );
}


Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

 
export default Noticia;