import './App.css';
import ProductCard from './productCard/ProductCard';

function App() {
  return (
    <div className="App">
      <ProductCard
        onAddToCardPressed={function (): void {
          throw new Error('Function not implemented.');
        } }
        onReject={function (): void {
          throw new Error('Function not implemented.');
        } }
        onClose={function (): void {
          throw new Error('Function not implemented.');
        } }
        title={'Red cool shoes'}
        price={20}
        imageSrc={'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'}
        imageDesc={''}
      />
    </div>
  );
}

export default App;
