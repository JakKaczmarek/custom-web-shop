import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IData } from "../../../@types/types";

export function Pagination(
  data: IData[] | null,
  page: number,
  callback: (e: number) => void
) {
  if (page === 1) {
    return (
      <div className="pagination">
        &nbsp;
        <div className="pagination">{page}</div>
        &nbsp;
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "white",
              ":hover": {
                bgcolor: "grey",
              },
            }}
            onClick={() => callback(page + 1)}
          >
            Next
          </Button>
        </Stack>
      </div>
    );
  }
  if (data!.length < 3 && data!.length > 0) {
    return (
      <div className="pagination">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "white",
              ":hover": {
                bgcolor: "grey",
              },
            }}
            onClick={() => callback(page - 1)}
          >
            Prev
          </Button>
        </Stack>
        <div className="pagination">{page}</div>
      </div>
    );
  }
  if (data?.length)
    return (
      <div className="pagination">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "white",
              ":hover": {
                bgcolor: "grey",
              },
            }}
            onClick={() => callback(page - 1)}
          >
            Prev
          </Button>
        </Stack>
        &nbsp;
        <div className="pagination">{page}</div>
        &nbsp;
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "white",
              ":hover": {
                bgcolor: "grey",
              },
            }}
            onClick={() => callback(page + 1)}
          >
            Next
          </Button>
        </Stack>
      </div>
    );
  return (
    <div>
      <div>
        <h2 className="pagination">More bikes later...</h2>
      </div>
      &nbsp;
      <div>
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              height: 75,
              width: 200,
              background: "white",
              color: "black",
              ":hover": {
                bgcolor: "grey",
              },
            }}
            onClick={() => callback(page - 1)}
          >
            Back to bikes
          </Button>
        </Stack>
      </div>
      &nbsp;
    </div>
  );
}
