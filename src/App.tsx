import './App.css';
import Card, { CardClass } from './Card/Card';
import ProductCard from './productCard/ProductCard';

const imageUrls = [
  "https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
];

function App() {
  return (
    <div className="App">
      <ProductCard
        onAddToCardPressed={() => console.log("click onAddToCardPressed")}
        onReject={() => console.log("click onReject")}
        onClose={() => console.log("click onClose")}
        title={'Red cool shoes'}
        price={20}
        imageSrc={'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'}
        imageDesc={''}
      />

      <Card
        title='Blue Pop'
        subtext='This is a nice text that you can show'
        className={CardClass.BluePop}
        // imageUrl={'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'}
        imageUrl={imageUrls[0]}
      />

      <Card
        title="Green frame"
        subtext='This is a ice text that you can show'
        className={CardClass.GreenFrame}
        imageUrl={imageUrls[1]}
      />
    </div>
  );
}

export default App;
