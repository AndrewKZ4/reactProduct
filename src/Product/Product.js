import React from "react";
import './Product.css'

export default (props) => (

    <div className="prod" style={{width: "18rem"}}>
        {
        !props.showEdit?
        <div>
            <h3>
                {props.name}
            </h3>
            <hr/>
            <h4>Brand:{props.brand}</h4>
            <p>Price: <strong> {props.price}</strong></p>
            {props.children}
            <br/>
            <button
                onClick={ props.onShowEdit}
            >Edit
            </button>
            <br/>
            <button
                onClick={props.onDeleteProduct}
            >Delete
            </button>
        </div>
        :
        <div className="addNew" style={{marginTop: "15px"}}>
            <div className="name">
                <label htmlFor="name">Name: </label>
                <input type="text"
                       value={props.name}
                       onChange={props.onNameChange}
                       name="name" id="name"/>
            </div>
            <div className="brand">
                <label htmlFor="brand">Brand: </label>
                <input type="text" name="brand" value={props.brand} id="brand"/>
            </div>
            <div className="price">
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" value={props.price} id="price"/>
            </div>
            <button
                onClick={props.onUpdateProduct}
            >Update
            </button>
            <button style={{marginLeft: "5px"}}
                    onClick={props.onHideEdit}
            >Cancel
            </button>
        </div>
        }
    </div>


)