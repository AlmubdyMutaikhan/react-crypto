import './PaginationButtons.css';

const PaginationButton = ({ pagingNext, pagingPrev }) => {
  return (
    <div className="pagination">
      <button onClick={pagingPrev}>Previous</button>
      <button onClick={pagingNext}>Next</button>
    </div>
  );
};

export default PaginationButton;
