import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import VisitedEvent from "../components/VisitedEvent";

export default function VisitedEventPage() {
  
  return (
    <div >
     
      <AccountNav />
      <br />
     
      <VisitedEvent />
    
    </div>
  );
}