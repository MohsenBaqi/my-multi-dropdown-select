import { useState } from "react";
import "./App.scss";
import MultiDropdownSelect, {
  MultiDropdownSelectOptionsType,
} from "./MultiDropdownSelect";

function App() {
  const [initialOptions, setInitialOptions] = useState<
    MultiDropdownSelectOptionsType[]
  >([
    { value: "education", customTitle: "Education 🎓" },
    { value: "science", customTitle: "Yeeeah, science! ⚗️" },
    { value: "art", customTitle: "Art 🎭" },
    { value: "sport", customTitle: "Sport ⚽️" },
    { value: "games", customTitle: "Games 🎮" },
    { value: "health", customTitle: "Health 🏥" },
    { value: "1", customTitle: "Option one" },
    { value: "Two" },
    "Three",
    "4",
  ]);
  const [selectedOptions, setSelectedOptions] = useState([
    "education",
    "1",
    "Three",
  ]);
  const [result, setResult] = useState<string[]>([]);

  return (
    <div>
      <h1>My multi dropdown select</h1>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(selectedOptions);
        }}
      >
        <MultiDropdownSelect
          className="dropdown"
          name="test_multi_dropdown_select"
          initialOtions={initialOptions}
          onOptionsUpdate={(newOptions) => setInitialOptions(newOptions)}
          defaultValue={selectedOptions}
          onChange={(e) =>
            setSelectedOptions(
              Array.from(e.target.selectedOptions).map((item) => item.value)
            )
          }
          color="red"
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <br />
      {!!result?.length && (
        <>
          <h3>Result:</h3>
          <ul className="result-list">
            {result.map((item, index) => (
              <li key={`result-item-${item}${index}`}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
