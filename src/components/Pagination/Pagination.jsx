export function test(data, page, callback) {
  if (page === 1) {
    return (
      <div className="pagination">
        &nbsp;
        <div className="pagination">{page}</div>
        &nbsp;
        <button
          className="pagination"
          type="button"
          onClick={() => callback(page + 1)}
        >
          NEXT
        </button>
      </div>
    );
  }
  if (data.length < 3) {
    return (
      <div className="pagination">
        <button
          className="pagination"
          type="button"
          onClick={() => callback(page - 1)}
        >
          PREV
        </button>
        <div className="pagination">{page}</div>
      </div>
    );
  }
  return (
    <div className="pagination">
      <button
        className="pagination"
        type="button"
        onClick={() => callback(page - 1)}
      >
        PREV
      </button>
      &nbsp;
      <div className="pagination">{page}</div>
      &nbsp;
      <button
        className="pagination"
        type="button"
        onClick={() => callback(page + 1)}
      >
        NEXT
      </button>
    </div>
  );
}
