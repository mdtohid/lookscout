import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Features from './Component/Features/Features';
import ProductFeatures from './Component/ProductFeatures/ProductFeatures';
import NightModeFeature from './Component/NightModeFeature/NightModeFeature';
import CEOmessage from './Component/CEOmessage/CEOmessage';
import Blog from './Component/Blog/Blog';
import Brand from './Component/Brand/Brand';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <ProductFeatures></ProductFeatures>
      <NightModeFeature></NightModeFeature>
      <CEOmessage></CEOmessage>
      <Blog></Blog>
      <Brand></Brand>
    </div>
  );
}

export default App;
