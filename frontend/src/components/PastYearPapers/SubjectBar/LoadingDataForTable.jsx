import { Skeleton } from "@mui/material";
import React from "react";

const LoadingDataForTable = ({ column }) => {
  return (
    <>
      <tr className="bg-white border-b   hover:bg-gray-50 ">
        {Array.from({ length: column }, (_, index) => (
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <Skeleton variant="rectangular" className="mx-2" />
          </th>
        ))}
      </tr>
    </>
  );
};

export default LoadingDataForTable;
