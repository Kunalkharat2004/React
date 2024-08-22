import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostContextProvider from "./contexts/PostContext";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <PostContextProvider>
      <div className="appContainer">
        <Sidebar></Sidebar>

        <div className="contentContainer">
          <Header></Header>

          {/* <div className="mainContent">
            {selectedTab === "Home" ? (
              <CardList></CardList>
            ) : (
              <CreatePost></CreatePost>
            )}
          </div> */}

          <Outlet/>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;