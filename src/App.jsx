import "./App.css";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import DataProcessing from "./components/DataProcessing";
import { useState } from "react";

function App() {
  const [modelstate, setmodelstate] = useState(false);
  const [orderedGroupedData, setorderedGroupedData] = useState("");
  const [groupby, setgroupby] = useState(
    () => localStorage.getItem("groupby") || "Status"
  );
  const [orderby, setorderby] = useState(
    () => localStorage.getItem("orderby") || "Priority"
  );
  const handleData = (data) => {
    setorderedGroupedData(data);
    console.log("Processed Data : ", data);
  };
  return (
    <div
      className="container"
      onClick={() => {
        if (modelstate) setmodelstate(false);
      }}
    >
      <DataProcessing
        onSendData={handleData}
        groupby={groupby}
        orderby={orderby}
      />
      <NavBar
        state={modelstate}
        onToggleModelState={() => setmodelstate(!modelstate)}
        setgroup={setgroupby}
        setorder={setorderby}
      />
      {/* <button onClick={() => console.log("Hello ", orderedGroupedData)}>
        Show
      </button> */}
      <Layout data={orderedGroupedData} groupby={groupby} />
    </div>
  );
}

export default App;
