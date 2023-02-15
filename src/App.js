import "./App.scss";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";
import requests from "./config/Requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true} // les images en format poster et non portrait
      />
      <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
      <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />
      <Footer />
    </div>
  );
}

export default App;
