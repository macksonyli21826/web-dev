import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import Tuiter from "./components/tuiter";
import HelloWorld from "./components/HelloWorld"; // no.js extension needed
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen";
//import ProfileScreen from "./components/tuiter/ProfileScreen";
import {BrowserRouter,
    Route,
    Routes} from "react-router-dom";
import Profile from "./components/tuiter/Profile";
import EditProfile from "./components/tuiter/Profile/EditProfile";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route path="/labs"
                             element={<Labs/>}/>
                      <Route index
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path = "explore"
                                 element ={<ExploreScreen/>}/>
                          <Route path = "profile"
                                 element={<Profile/>}/>
                          <Route path = "profile/edit"
                                 element={<EditProfile/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

/*
<Route path="notifications"
                                 element={<NotificationScreen/>}/>
                          <Route path="bookmarks"
                                 element={<BookmarkScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
 */
/*
<Route index
       element={<HomeScreen/>}/>
<Route path="explore"
       element={<ExploreScreen/>}/>

 */
/*
Question:
1. format of Tuit
2. render image in home
3. get navigation sidebar dynamic
 */