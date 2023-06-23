import Favourites from './Favourites';
import PlayLists from './PlayLists';
import Released from './Released';

function Home() {
  return (
    <>
      <Released />
      <Favourites />
      <PlayLists />
    </>
  );
}

export default Home;
