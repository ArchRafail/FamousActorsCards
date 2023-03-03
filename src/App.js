import './App.css';
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <h1>Famous actors and actresses</h1>
            <Card imgLink="https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_.jpg"
                firstName="Robert" lastName="De Niro" age={79}/>
            <Card imgLink="https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_.jpg"
                firstName="Denzel" lastName="Washington" age={68}/>
            <Card imgLink="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_.jpg"
                firstName="Cate" lastName="Blanchett" age={53}/>
        </div>
    );
}

export default App;
