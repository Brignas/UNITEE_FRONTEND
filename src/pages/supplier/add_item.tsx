import './add_item.css'
import product from "../../assets/images/shop_products/product.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import logo from "../../assets/images/unitee.png"
import { useEffect  } from 'react'
import axios from 'axios'
import { useState } from 'react'


function Add_item(){

    const [productName, setproductName] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productSize, setproductSize] = useState('');
    const [productGender, setproductGender] = useState('');
    const [productType, setproductType] = useState('');
    const [productQuantity, setproductQuantity] = useState('');
    const [departments, setDepartments] = useState([]);
    const [departmentID, setSelectedDepartments] = useState('');
    const { User_ID } = useParams();
    const navigate = useNavigate();

    const handleGenderChange = (e) => {
        setproductGender(e.target.value);
    };

    // READ ALL DEPARTMENTS
    useEffect(() => {
        axios.post('https://localhost:44374/api/product/Departments')
        .then((response) => {
            setDepartments(response.data); 
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        }, []);


        const handleAddItem = () => {
            const data = {
                User_ID : User_ID
                , // Size_ID : productSize,
                Department_ID : departmentID
                , Product_Name : productName
                , Product_Description : productDescription
                , Product_Gender : productGender
                , Product_Price : productPrice
                , Product_Quantity : productQuantity
                // , Product_Type_ID : productType
            };
        const url = 'https://localhost:44374/api/product/AddProduct';
            axios.post(url, data)
            .then((response) => {
                console.log(response.data);
                alert("Successfully Added");
                navigate(`/supplier_items/${User_ID}`);
            })
            .catch((error) => {
                console.log(error);
            });
        };


    return <div className="container add_item_container">
        <header style={{ marginTop:'30px', display:'flex', alignItems:'center', gap:'45em' }}>
        <Link to={`/supplier_items/${User_ID}`} style={{ textDecoration:'none' }}>
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
                <input className="form-control input" style={{ width:'28em' }} onChange={(e) => setproductName(e.target.value)}/>
            </div>
            <div className="input-group-description">
                <textarea className="form-control" onChange={(e) => setproductDescription(e.target.value)} aria-label="Product description"  placeholder="Enter product description"/>
            </div>

            <div className='col-md-9 department-select' style={{ display:'flex', gap:'20px' }}>
                <p className="department-item">Department:</p>
            <select onChange={(e) => setSelectedDepartments(e.target.value)} value={departmentID} className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }}>
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
                <input onChange={(e) => setproductPrice(e.target.value)} className="form-control input" style={{ width:'28em' }}/>
            </div>

            <div className="col-md-12 price-container">
                <p className="col-md-3 item-price">Enter Quantity:</p>
                <input onChange={(e) => setproductQuantity(e.target.value)} className="form-control input" style={{ width:'28em' }}/>
            </div>

            <div className="size-container">
                <p className="available-sizes">Sizes Available:</p>
                <div className="item-sizes-container" style={{ display:'flex', marginLeft:'20px' }}>
                    <div className="form-check-shop">
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" value="2" onChange={(e) => setproductSize(e.target.value)}/>
                        <label className="form-check-label">
                            S
                        </label>
                    </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" value="3" onChange={(e) => setproductSize(e.target.value)}/>
                            <label className="form-check-label">
                                M
                            </label>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault3" value="4" onChange={(e) => setproductSize(e.target.value)}/>
                            <label className="form-check-label">
                                L
                            </label>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" value="8" onChange={(e) => setproductSize(e.target.value)}/>
                            <label className="form-check-label">
                                XL
                            </label>
                        </div>

                        <div className="form-check-shop">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" value="9" onChange={(e) => setproductSize(e.target.value)}/>
                            <label className="form-check-label">
                                2XL
                            </label>
                        </div>

                        <div className="form-check-shop">
                        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" value="10" onChange={(e) => setproductSize(e.target.value)}/>
                            <label className="form-check-label">
                                3XL
                            </label>
                        </div>
                </div>
                <div className='item-gender-container'>
                <h4>Gender:</h4>
                    <div className='genders'>
                        <div className="form-check-shop">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" onChange={handleGenderChange}/>
                            <label className="form-check-label">
                                Male
                            </label>
                        </div>

                        <div className="form-check-shop">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" onChange={handleGenderChange} />
                            <label className="form-check-label">
                                Female
                            </label>
                        </div>               

                        <div className="form-check-shop">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Unisex" onChange={handleGenderChange} />
                            <label className="form-check-label">
                                Unisex
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-12 category-select'>
                <p className="category-item">Type:</p>
            <select className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }} onChange={(e) => setproductType(e.target.value)}>
                <option value="1">School Uniform</option>
                <option value="2">Event T-shirt</option>
                <option value="3">Department Shirt</option>
                <option value="4">ID Sling</option>
            </select>
            </div>

            <div className="item-btns-container">
            <button type="button" className="btn btn-lg btn-success" onClick={handleAddItem}>Add Item</button>
            <button type="button" className="btn btn-lg btn-danger" onClick={() => navigate(`/supplier_items/${User_ID}`)}>Cancel</button>
            </div>

        </div>
    </div>

        

    </div>
}

export default Add_item