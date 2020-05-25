import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="!#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                href="!#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              class="page-link"
              href="!#"
              onClick={() => onButtonClick("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
