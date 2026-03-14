import "./styles/home.css";
import RouteBoxes from "./components/RouteBoxes";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <div className="home-page page">
      <Overview />
      <RouteBoxes />
    </div>
  );
}
