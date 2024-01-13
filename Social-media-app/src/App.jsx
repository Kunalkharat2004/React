import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostContextProvider from "./contexts/PostContext";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const setTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <PostContextProvider>
      <div className="appContainer">
        <Sidebar handleSelect={setTab}></Sidebar>

        <div className="contentContainer">
          <Header></Header>

          <div className="mainContent">
            {selectedTab === "Home" ? (
              <CardList></CardList>
            ) : (
              <CreatePost></CreatePost>
            )}
          </div>
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
