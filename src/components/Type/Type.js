import React, { useState, useEffect } from "react";
import { getAllType, getType } from "../../services/pokemon";
import CardType from "../Card/CartType";
import CircularProgress from "@mui/material/CircularProgress";
import "../../App.css";

function Type() {
  const [typeData, setTypeData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/type";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllType(initialUrl);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      let pokemon = await loadingType(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllType(nextUrl);
    await loadingType(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllType(previousUrl);
    await loadingType(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const loadingType = async (data) => {
    let _typeData = await Promise.all(
      data.map(async (type) => {
        let typeRecord = await getType(type.url);
        return typeRecord;
      })
    );

    setTypeData(_typeData);
  };

  return (
    <>
      {loading ? (
        <>
          <CircularProgress />
          <h1 className="text-3xl font-bold underline">Loading .......</h1>
        </>
      ) : (
        <>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <div className="grid-container">
            {typeData.map((type, i) => {
              return <CardType key={i} type={type} />;
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </>
      )}
    </>
  );
}

export default Type;
