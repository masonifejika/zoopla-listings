import ZooplaLogo from './components/ZooplaLogo';
import ListingsProvider from './ListingsProvider';
import Listings from './components/Listings';

function App() {

  return (
    <ListingsProvider>
      <header data-testid="header">
        <ZooplaLogo />
      </header>
      <section>
        <Listings />
      </section>
    </ListingsProvider>
  );
}

export default App;
