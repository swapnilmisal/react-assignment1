import React, { useState, useEffect } from "react";
import Button from "./Button";
import User from "./User";

export default function Test() {
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAsc, setIsAsc] = useState(null);
  const [showTwoYoungest, setShowTwoYoungest] = useState(false);
  useEffect(() => {
    if (!showTwoYoungest)
      fetchResults().then(res => setResults(res["results"]));
  }, [showTwoYoungest]);

  async function fetchResults() {
    const response = await fetch(
      "https://randomuser.me/api/?results=100&nat=gb"
    );
    return await response.json();
  }

  function toggleOrder() {
    let resultsCopy = results.sort((a, b) => {
      let userA = a.name.first.toUpperCase() + a.name.last.toUpperCase();
      let userB = b.name.first.toUpperCase() + b.name.last.toUpperCase();
      let comparison = 0;
      if (userA > userB) comparison = isAsc ? -1 : 1;
      else if (userA < userB) comparison = isAsc ? 1 : -1;
      return comparison;
    });
    setResults(resultsCopy);
    setIsAsc(!isAsc);
  }

  function selectUser(index) {
    let resultsCopy = [...results];
    let selectedCopy = resultsCopy[index]["--selected--"]
      ? selected - 1
      : selected + 1;
    resultsCopy[index]["--selected--"] = !resultsCopy[index]["--selected--"];
    setResults(resultsCopy);
    setSelected(selectedCopy);
  }

  function handleYoungestUsers() {
    let resultsCopy = [...results];
    if (!showTwoYoungest) {
      setResults(
        resultsCopy
          .sort(
            (a, b) =>
              new Date(b.dob.date).getTime() - new Date(a.dob.date).getTime()
          )
          .slice(0, 2)
      );
      setIsAsc(null);
    }
    setShowTwoYoungest(!showTwoYoungest);
  }

  function deleteUsers() {
    let resultsCopy = results.filter(result => !result["--selected--"]);
    setResults(resultsCopy);
    setSelected(0);
    if (showTwoYoungest && resultsCopy.length === 0) setShowTwoYoungest(false);
  }
  return (
    <div>
      <Button onClick={() => toggleOrder()}>
        {`${isAsc === null ? "no Order" : isAsc ? "ASC" : "DESC"}`}
      </Button>
      <Button onClick={() => handleYoungestUsers()} active={showTwoYoungest}>
        Show Two youngest
      </Button>
      <Button onClick={() => setIsEditMode(!isEditMode)} active={isEditMode}>
        Edit
      </Button>
      <Button onClick={() => deleteUsers()} disabled={selected && isEditMode}>
        Delete
      </Button>
      {results.map((result, index) => (
        <User
          key={result.login.uuid}
          result={result}
          isEditMode={isEditMode}
          index={index}
          selectUser={() => selectUser(index)}
        />
      ))}
    </div>
  );
}
