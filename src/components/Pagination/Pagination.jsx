import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ShopPagination() {
  return (
    <div>
      &nbsp;
      <Stack spacing={2}>
        <Pagination count={5} className="pagination" />
      </Stack>
      &nbsp;
    </div>
  );
}
