import React from "react";
import "../styles/components/Pagination/pagination.scss";

interface Props {
  count: number;
  current: number;
  handleClick(index: number): void;
}
const Pagination = ({ count, current, handleClick }: Props) => {
  return (
    <div className="pagination">
      <div className="pagination__list">
        {Array.from(Array(count === 1 ? count + 1 : count), (e, i) => {
          return (
            <div
              className={
                "pagination__list--item" + (current === i ? " active" : "")
              }
              key={i}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
