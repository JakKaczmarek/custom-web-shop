import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IData } from "../../../@types/types";

export function Pagination(
  data: IData[] | null,
  page: number,
  callback: (e: number) => void
) {
  const buttonVariant = "contained";
  const buttonStyles = {
    background: "black",
    color: "white",
    ":hover": {
      bgcolor: "grey",
    },
  };

  const renderButton = (text: string, onClick: () => void) => (
    <Stack direction="row" spacing={2}>
      <Button variant={buttonVariant} sx={buttonStyles} onClick={onClick}>
        {text}
      </Button>
    </Stack>
  );

  if (page === 1) {
    return (
      <div className="pagination">
        &nbsp;
        <div className="pagination">{page}</div>
        &nbsp;
        {renderButton("Next", () => callback(page + 1))}
      </div>
    );
  }

  if (data!.length < 3 && data!.length > 0) {
    return (
      <div className="pagination">
        {renderButton("Prev", () => callback(page - 1))}
        <div className="pagination">{page}</div>
      </div>
    );
  }

  if (data?.length) {
    return (
      <div className="pagination">
        {renderButton("Prev", () => callback(page - 1))}
        &nbsp;
        <div className="pagination">{page}</div>
        &nbsp;
        {renderButton("Next", () => callback(page + 1))}
      </div>
    );
  }

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
            variant={buttonVariant}
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
