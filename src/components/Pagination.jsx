import React from 'react';
import data from '../data/data';

export const Pagination = ({ page, handleChangePage }) => {
  const handlePrev = () => {
    if (page > 0) handleChangePage(page - 1);
  };
  const handleNext = () => {
    if (page < data.length) handleChangePage(page + 1);
  };

  return (
    <div className="pagination">
      <button
        name="start"
        onClick={() => handleChangePage(0)}
        disabled={page < 1}
      >
        {'<<'}
      </button>
      <button
        name="prev"
        className="prevbtn"
        onClick={handlePrev}
        disabled={page < 1}
      >
        Prev
      </button>
      {data.map((x, i) => {
        return (
          <button
            key={i}
            disabled={i === page}
            onClick={() => handleChangePage(i)}
          >
            {x.id}
          </button>
        );
      })}
      <button
        name="next"
        className="nextbtn"
        onClick={handleNext}
        disabled={page >= data.length - 1}
      >
        Next
      </button>
      <button
        name="end"
        onClick={() => handleChangePage(data.length - 1)}
        disabled={page >= data.length - 1}
      >
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
