import React from "react";

const TestWithMockData = ({ data, displayUnorderedList, handleClick }: any) => {
  return (
    <div>
      {displayUnorderedList ? (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>
              {item.id}
              {item.first_name},{item.last_name},
              <span
                onClick={() => {
                  console.log("email link clicked");
                  handleClick();
                }}
              >
                {item.email}
              </span>
              {item.age > 50 ? "Senior" : "Not senior"}
            </li>
          ))}
        </ul>
      ) : (
        <ol>
          {data.map((item: any) => (
            <li key={item.id}>Last name: {item.last_name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};
export default TestWithMockData;
