import react from "react";

function BookSelect({ islem1, islem2 }) {
  const options = [
    { value: "girl", label: "Choose a search criteria" },
    { value: "Math", label: "Math" },
    { value: "Javascript", label: "Javascript" },
    { value: "Teach", label: "Teach" },
    { value: "Class", label: "Class" },
  ];

  return (
    <div className="select-main">
      <select
        className="select-title"
        value={islem1}
        onChange={(e) => islem2(e.target.value)}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value} islem2={item.value}>
            {" "}
            {item.label}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookSelect;
