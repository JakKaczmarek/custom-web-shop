export function test(page, firstCallback, secondCallback) {
  return (
    <div className="pagination">
      <button
        className="pagination"
        type="button"
        onClick={() => firstCallback(page - 1)}
      >
        PREV
      </button>
      &nbsp;&nbsp;
      <div className="pagination">{page}</div>
      &nbsp;&nbsp;
      <button
        className="pagination"
        type="button"
        onClick={() => secondCallback(page + 1)}
      >
        NEXT
      </button>
    </div>
  );
}
