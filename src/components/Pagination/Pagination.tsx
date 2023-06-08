import React from "react";
import { IData } from "../../../@types/types";

export function Pagination(
  data: IData[],
  page: number,
  callback: (e: number) => void
) {
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
  if (page === 3) {
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
