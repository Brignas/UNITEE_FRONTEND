import './home.css'
import home_1 from '../../assets/images/main/home_1.png'
import home_2 from '../../assets/images/main/home_2.png'
import { Link } from 'react-router-dom'

function Home() {
    return <div className="container home-container">
        <div>
            <div className='display-img goto-shop-container'>
                <h1 style={{ fontWeight: 'bold' }}>Eat. Sleep. Code. Style.</h1>
                <Link to='shop'>
                    <button className="btn btn-warning btn-lg button">Shop Now</button>
                </Link>
            </div>
            <img src={ home_1 } className='display-img'/>
        </div>
        <div>
            <img src={ home_2 } className='display-img'/>
        </div>
    </div>
}

export default Home