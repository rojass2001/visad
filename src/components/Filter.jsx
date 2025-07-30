// SidePanel.jsx
import { Filter, Globe, MapPin, UserCircle2, CheckCircle, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateascendingsort, datedescendingsort, Nameascendingsort, Namedescendingsort, statusfilter } from "../redux/Visaslice";
import Sidebaricons from "./Sidebaricons";
import { Typewriter } from "react-simple-typewriter";
import "./SidePanel.css";

export default function SidePanel() {
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState("");
  const { filterdetails1 } = useSelector((state) => state.visa);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory("");
    setStatus([]);
  }, [filterdetails1]);

  const nameascending = (value) => {
    setCategory(value);
    dispatch(Nameascendingsort());
  };

  const namedescending = (value) => {
    setCategory(value);
    dispatch(Namedescendingsort());
  };

  const dateascending = (value) => {
    setCategory(value);
    dispatch(dateascendingsort());
  };

  const datedescending = (value) => {
    setCategory(value);
    dispatch(datedescendingsort());
  };

  function handlechange(value) {
    const updatedStatus = status.includes(value)
      ? status.filter((a) => a !== value)
      : [...status, value];
    setStatus(updatedStatus);
    setCategory("");
    dispatch(statusfilter(updatedStatus));
  }

  return (
    <aside className="side-panel">
      <div className="user-section">
        <div className="user-image-wrapper">
          <img
            src="https://t4.ftcdn.net/jpg/10/00/85/93/360_F_1000859366_P6SmEvxeMgvXUhx5oFnsbM8rOiGN6SAG.jpg"
            alt="Profile"
            className="user-image"
          />
          <button className="add-button">+</button>
        </div>
        <h2 className="greeting-text">
          <Typewriter
            words={["Hi Rojass Cherian"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={300}
            delaySpeed={1000}
          />
        </h2>
      </div>

      <Sidebaricons />

      <div className="section-heading">
        <Filter className="icon" /> Filters
      </div>

      <div>
        <h3 className="filter-title">
          <Calendar className="icon" /> By Date
        </h3>
        <ul className="filter-list">
          <li><input checked={category === "dateasc"} onChange={() => dateascending("dateasc")} type="radio" name="date" />Low - High</li>
          <li><input checked={category === "datedesc"} onChange={() => datedescending("datedesc")} type="radio" name="date" />High - Low</li>
        </ul>
      </div>

      <div>
        <h3 className="filter-title">
          <UserCircle2 className="icon" /> By Name
        </h3>
        <ul className="filter-list">
          <li><input checked={category === "nameasc"} onChange={() => nameascending("nameasc")} type="radio" name="name" />Low - High</li>
          <li><input checked={category === "namedesc"} onChange={() => namedescending("namedesc")} type="radio" name="name" />High - Low</li>
        </ul>
      </div>

      <div>
        <h3 className="filter-title">
          <CheckCircle className="icon" /> Status
        </h3>
        <ul className="filter-list">
          {['Pending', 'Refunded', 'Cancelled', 'Appointment', 'Activated'].map(stat => (
            <li key={stat}><input type="checkbox" checked={status.includes(stat)} onChange={() => handlechange(stat)} />{stat}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="filter-title">
          <MapPin className="icon" /> Visa Center
        </h3>
        <ul className="filter-list">
          {['London', 'Manchester', 'Edinburgh'].map(center => (
            <li key={center}><input type="checkbox" checked={status.includes(center)} onChange={() => handlechange(center)} />{center}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="filter-title">
          <Globe className="icon" /> Country
        </h3>
        <ul className="filter-list">
          {['America', 'Portugal', 'France', 'Denmark'].map(country => (
            <li key={country}><input type="checkbox" checked={status.includes(country)} onChange={() => handlechange(country)} />{country}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
