import { useLocation } from "react-router";
import Header from "../components/header";
import Posts from "../components/posts";
import Sidebar from "../components/sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}