import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />

          <div className="row mt-4">
            <Editor />
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
