import { Link, useParams } from 'react-router-dom';
import product from "../../assets/images/shop_products/product.png";
import logo from "../../assets/images/unitee.png";
import { useEffect, useState  } from 'react';
import axios from 'axios';

function Update_item() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [departments, setDepartments] = useState([]);
    const [departmentID, setSelectedDepartments] = useState('');
    const { id } = useParams();

    // READ ALL DEPARTMENTS
    useEffect(() => {
        axios.post('https://localhost:44374/api/product/Departments')
        .then((response) => {
            setDepartments(response.data); 
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleUpdateItem = () => {
        const data = {
            Department_ID : departmentID,
            Product_Name : productName,
            Product_Description : productDescription,
            Product_Price : productPrice,
            Product_Quantity : productQuantity,
        };

        const url = 'https://localhost:44374/api/product/UpdateProduct';
        axios.post(url, data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // READ ALL PRODUCTS
    useEffect(() => {
        axios.post('https://localhost:44374/api/product/Products/${id}')
        .then((response) => {
            const product = response.data;
            setProductName(product.Product_Name);
            setProductDescription(product.Product_Description);
            setProductPrice(product.Product_Price);
            setProductQuantity(product.Product_Quantity);
            setSelectedDepartments(product.Department_ID);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="container add_item_container">
            <header style={{ marginTop:'30px', display:'flex', alignItems:'center', gap:'45em' }}>
                <Link to='/supplier_items' style={{ textDecoration:'none' }}>
                        <span className="back_btn">Back</span>
                </Link>
                <img className="logo" src={ logo }/>
            </header>
            <div style={{ display:'flex', justifyContent:'center', marginTop:'50px', gap:'30px'}}>
                <div>
                    <img src={ product } style={{ width:'350px' }} />
                </div>
                <div className="col-md-4 item_deatils_container">           
                    <div className="col-md-12 price-container">
                        <p className="col-md-3 item-price">Product Name:</p>
                        <input 
                            className="form-control input" 
                            style={{ width:'28em' }} 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="input-group-description">
                        <textarea 
                            className="form-control" 
                            aria-label="Product description" 
                            placeholder="Enter product description"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                        />
                    </div>

                    <div className='col-md-9 department-select' style={{ display:'flex', gap:'20px' }}>
                        <p className="department-item">Department:</p>
                        <select 
                            className="form-select select" 
                            style={{ backgroundColor:'#00215E', color:'white' }}
                            value={departmentID}
                            onChange={(e) => setSelectedDepartments(e.target.value)}
                        >
                            <option value="">Select Department</option>
                            {departments.map((department) => (
                                <option key={department.Department_ID} value={department.Department_ID}>
                                {department.Department_Name}
                                </option>
                            ))}                   
                        </select>
                    </div>

                    <div className="col-md-12 price-container">
                        <p className="col-md-3 item-price">Enter price:</p>
                        <input 
                            className="form-control input" 
                            style={{ width:'28em' }} 
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>

                    {/* Other form elements... */}

                    <div className="item-btns-container">
                        <button 
                            type="button" 
                            className="btn btn-lg btn-warning" 
                            onClick={handleUpdateItem}
                        >
                            Update Item
                        </button>
                        <button type="button" className="btn btn-lg btn-danger">Deactivate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update_item;