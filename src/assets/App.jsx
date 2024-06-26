import Stopwatch from "./Stopwatch";

function App() {

    return (
        <>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 1: <span className="label-highlight">College Work</span></span>
                <Stopwatch />
            </div>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 2: <span className="label-highlight">Internship Work</span></span>
                <Stopwatch />
            </div>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 3: <span className="label-highlight">Extra Work</span></span>
                <Stopwatch />
            </div>
        </>
    );
    
    

}
export default App;