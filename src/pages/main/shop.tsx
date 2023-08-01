import './shop.css'
import product from "../../assets/images/shop_products/product.png"

function Shop() {
    return <div className='container shop-contianer'>
    <div className='col content-container'>
    <div className='row g-3' style={{ justifyContent: 'center' }}>
        <p className='shop-title'>AVAILABLE ITEMS</p>           
        <h4 className='col-md-9' style={{ paddingLeft:'60px' }}>Sort by:</h4>
        <div className='col-md-4 department-select'>
        <select className="form-select select" style={{ backgroundColor:'#00215E', color:'white' }}>
            <option value="1">Senior High School</option>
            <option value="2">Elementary and Junior High School</option>
            <option value="3">Criminology</option>
            <option value="4">Nursing</option>
            <option value="5">Allied Engineering</option>
            <option value="6">Customs Management</option>
            <option value="7">Computer Studies</option>
            <option value="8">Marine Transportation</option>
            <option value="9">Teacher Education</option>
            <option value="10">Marine Engineering</option>
            <option value="11">Computer Studies</option>
            <option value="12">Hotel and Tourism Management</option>                
        </select>
        </div>

        <div className='col-md-4 gender-filter-container' style={{alignItems:'center', display:'flex'}}>
        <h3 style={{ paddingRight:'10px' }}>Gender:</h3>
            <div className="form-check-shop">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" checked/>
                <label className="form-check-label">
                    Male
                </label>
            </div>

            <div className="form-check-shop">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" checked/>
                <label className="form-check-label">
                    Female
                </label>
            </div>               
            <div className='col-md-3'>
            <div className="form-check-shop">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Unisex" checked/>
                <label className="form-check-label">
                    Unisex
                </label>
            </div>
            </div>
            </div>
            
            <div className='col-md-12' style={{ marginTop:'50px',justifyContent:'center',display:'flex', marginRight:'250px'}}>
                <div className='col-md-6'>
                <input className="form-control input" placeholder="Search" />
                
                </div>                
            </div>
            
            <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className='col-md-12 product-container'>
                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card" style={{width:'230px'}}>
                        <img src={ product }/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">$999.00</p>
                        </div>
                    </div>
                </div>
        </div>                      
        </div>
        
            
</div>

        
</div>

}

export default Shop