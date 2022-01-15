import './App.css';
import React, {Component} from "react";
import Product from "./Product/Product";

class App extends Component {


    state = {
        pageTitle: "Product List",
        productList: [
            {name: "Milk", brand: "Agromol", price: 25, showEdit: false},
            {name: "Bread", brand: "Saltov", price: 17, showEdit: false},
            {name: "Sugar", brand: "Hz", price: 13, showEdit: false},
            {name: "Salt", brand: "Hz", price: 9, showEdit: false},
            {name: "Tea", brand: "Ahmed", price: 85, showEdit: false},
            {name: "Coffee", brand: "Jacobs", price: 234, showEdit: false},
        ],
        showAddNew: false,
        name: '',
        brand: '',
        price: ''


    }

    showAddnew = () => {
        this.setState(
            {
                showAddNew: !this.state.showAddNew
            }
        )
    }
    showEdit = (index) => {
        const newProducts = [...this.state.productList]
        newProducts[index].showEdit = true
        this.setState({
            productList: newProducts
        })

    }
    hideEdit = (index) => {
        const newProducts = [...this.state.productList]
        console.log()
        newProducts[index].showEdit = false
        this.setState({
            productList: newProducts
        })

    }
    deleteProd = (index) => {

        const newProducts = [...this.state.productList]
        newProducts.splice(index, 1)
        this.setState({
            productList: newProducts
        })
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    brandChange = (event) => {
        this.setState({
            brand: event.target.value
        })
    }
    priceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    addNew() {


        const newProducts = [...this.state.productList]
        newProducts.push({name: this.state.name, brand: this.state.brand, price: this.state.price, showEdit: false})

        this.setState({
            productList: newProducts,
            showAddNew: !this.state.showAddNew
        })
        this.state.name=''
        this.state.brand=''
        this.state.price=''


    }

    updateProd(index) {

    }


    render() {
        const pStyle = {
            color: 'red',
            fontSize: '10px'
        }

        return (
            <div className="App" style={{width: "95%", margin: 'auto', padding: '10px', boxSizing: "border-box"}}>
                <h1>{this.state.pageTitle}</h1>
                <button
                    onClick={() => {
                        this.showAddnew()
                    }}
                >Add New
                </button>
                {
                    this.state.showAddNew ?
                        <div className="addNew" style={{marginTop: "15px"}} onSubmit={this.handleSubmit} method="POST">
                            <div className="name">
                                <label htmlFor="name">Name: </label>
                                <input type="text"
                                       onChange={this.nameChange}
                                       id="name"/>
                            </div>
                            <div className="brand">
                                <label htmlFor="brand">Brand: </label>
                                <input type="text"
                                       onChange={this.brandChange}
                                       id="brand"/>
                            </div>
                            <div className="price">
                                <label htmlFor="price">Price: </label>
                                <input type="number"
                                       onChange={this.priceChange}
                                       id="price"/>
                            </div>


                            <button onClick={() => {
                                this.addNew()
                            }}>Add
                            </button>
                            <button style={{marginLeft: "5px"}}
                                    onClick={() => {
                                        this.showAddnew()
                                    }}
                            >Cancel
                            </button>
                        </div>
                        : null
                }

                <h1>{this.state.pageTitle}</h1>


                <hr/>
                {
                    this.state.productList.map((item, index) => {

                        return (
                            <Product
                                key={index}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                showEdit={item.showEdit}
                                onShowEdit={() => this.showEdit(index)}
                                onHideEdit={() => this.hideEdit(index)}
                                onDeleteProduct={() => this.deleteProd(index)}
                                onUpdateProduct={() => this.updateProd(index)}
                                onNameChange={() => this.nameChange(index)}
                                onBrandChange={() => this.brandChange(index)}
                                onPriceChange={() => this.priceChange(index)}/>
                        )

                    })
                }


            </div>
        )

    }



}

export default App;