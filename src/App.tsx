import './styles/global.scss';
import './styles/desktopVersion.scss';
import desktopParfum from './assets/images/image-product-desktop.jpg';

function App() {
  return (
    <>
      <div>
        <img src={desktopParfum} alt="" />
      </div>
      <div>
        <h6>PERFUME</h6>
        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p>
          A floral, solar and voluptuous interpretation composed bu Oliver Polge, Pergfumer-Creator 
          for the House of CHANEL.
        </p>

        <strong>$149.99</strong>
        <span>$169.99</span>

        <div>
          <button>Add to Cart</button>
        </div>
      </div>  
    </>
  
  )
}

export default App
