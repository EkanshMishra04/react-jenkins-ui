import React from 'react';
import './urlComponents.css';

const UrlComponent = (props) => {
    const {method,uri,detail} = props;
    // const method = props.method;
    // const uri = props.uri;
    // const detail = props.detail;
    return (
        <div className='url-main-container'>
            <div className='url-divA'>
                <button class="btn btn-primary">{method}</button>
                <h6 style={{marginLeft:'20px'}}>{uri}</h6>
                <label style={{marginLeft:'20px'}}>{detail}</label>
            </div>
        </div>
    )
}

// UrlComponent.propsTypes = {
//     method: PropTypes.string.isRequired,
//     uri :PropTypes.string.isRequired,
//     detail: PropTypes.string.isRequired
// }


export default UrlComponent;


// options: PropTypes.arrayOf(

//     PropTypes.shape({

//       item: PropTypes.string.isRequired,

//       id: PropTypes.any.isRequired,

//     }),

//   ).isRequired,
