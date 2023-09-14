import Header from './Header';
import Slider from './Slider';

const Layout = (Component) => ({ ...props }) => (
  <div className="layout">
    <Header />
    <div className="container">
      <Slider />
      <div className="main-container">
        <Component {...props} />
      </div>
    </div>
  </div>
);

export default Layout;