import {useContext, useState} from "react";
import {UserContext} from "../UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";
import UserDetail from "../components/UserDetail.jsx";

export default function ProfilePage() {
  // const [redirect,setRedirect] = useState(null);
  // const {ready,user,setUser} = useContext(UserContext);
   let {subpage} = useParams();
  // if (subpage === undefined) {
  //   subpage = 'profile';
  // }

  // async function logout() {
  //   await axios.post('/logout');
  //   setRedirect('/');
  //   setUser(null);
  // }

  // if (!ready) {
  //   return 'Loading...';
  // }

  // if (ready && !user && !redirect) {
  //   return <Navigate to={'/login'} />
  // }

  // if (redirect) {
  //   return <Navigate to={redirect} />
  // }
  return (
    <div>
      <AccountNav />
       <UserDetail />
    </div>
  );
}