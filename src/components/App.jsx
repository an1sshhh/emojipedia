import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
function createEntry(eTerm) {
  return (
    <Entry
      key={eTerm.id}
      emoji={eTerm.emoji}
      name={eTerm.name}
      desc={eTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
