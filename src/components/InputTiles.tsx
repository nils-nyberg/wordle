import { JSX } from "react";

export default function InputTiles() {
  const array = [1, 2, 3, 4, 5];

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40rem" }}
    >
      {array.map(
        (_, index): JSX.Element => (
          <input
            key={index}
            style={{
              height: "6rem",
              width: "6rem",
              marginRight: "0.75rem",
              backgroundColor: "transparent",
              caretColor: "transparent",
              border: "0.25rem solid #8b8b8b",
              borderRadius: "1rem",
              color: "#fff",
              fontSize: "4rem",
              textAlign: "center",
            }}
            readOnly
          />
        )
      )}
    </div>
  );
}
