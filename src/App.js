import Navbar from "./shared/Navbar/navbar";
import arabica from "./assets/images/Arabica.png"

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center">
        <img src={arabica} alt="CoverImage" className="h-96 " style={{width:"90%",height:"600px"}}/>
      </div>
    </>
  );
}

export default App;
