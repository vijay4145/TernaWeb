import { Skeleton } from "@mui/material";
import React from "react";

const LoadingDataForTable = ({ column }) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {Array.from({ length: column }, (_, index) => (
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <Skeleton variant="rectangular" className="mx-2" />
          </th>
        ))}
      </tr>
    </>
  );
};

export default LoadingDataForTable;
