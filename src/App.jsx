import { useState, useEffect } from "react";
import "./App.css";
import ButtonSection from "./ButtonSection";
import ContentSection from "./ContentSection";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [mode, setMode] = useState("posts");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url, endPoint) => {
    setLoading(true); // Start loading
    setError(false); // Reset error state
    try {
      const response = await fetch(`${url}/${endPoint}`);
      if (!response.ok) throw new Error("Did not receive expected data");
      const myData = await response.json();
      setData(myData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchData(API_URL, mode);
  }, [mode]); // Fetch data based on the mode

  const onBtnClick = (newMode) => {
    setMode(newMode);
  };

  return (
    <>
      <ButtonSection onBtnClick={onBtnClick} mode={mode} />
      {error && (
        <p
          style={{
            minHeight: "82vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "red",
            fontSize: "1.3rem",
          }}
        >
          Did not receive expected data !!!
        </p>
      )}
      {loading && (
        <p
          style={{
            minHeight: "82vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "green",
            fontSize: "1.3rem",
          }}
        >
          Loading data...
        </p>
      )}

      {!loading && !error && <ContentSection data={data} mode={mode} />}
    </>
  );
}

export default App;
