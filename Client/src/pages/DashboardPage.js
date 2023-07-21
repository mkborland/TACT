import { useState, useEffect, useCallback } from "react";
// import PropTypes from "prop-types";
import TactApi from "../api/TactApi.js";
// import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
// import GetAllExercises from "../api/exercises/get/GetAllExercises.js";

export default function DashboardPage() {
  const [exerciseList, setExerciseList] = useState([]);
  const [unitExerciseList, setUnitExerciseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    TactApi.getDashboard().then((data) => {
      setExerciseList(data);
      setIsLoading(false);
    });

    TactApi.getAllUnitExercises().then((data) => {
      setUnitExerciseList(data);
      setIsLoading(false);
    })
  }, []);

  console.log(exerciseList);
  console.log(unitExerciseList);
  console.log(isLoading);

  const columns = [
    {
      field: 'exerciseID',
      headerName: 'ID',
      headerClassName: 'dashboard-table-header',
      width: 90,
      editable: false,
    },
    {
      field: 'exerciseName',
      headerName: 'Exercise Name',
      headerClassName: 'dashboard-table-header',
      width: 150,
      editable: false,

    },
    {
      field: 'status',
      headerName: 'Status',
      headerClassName: 'dashboard-table-header',
      width: 150,
      editable: false,
    },


  ];

  function DetailPanelContent({ row: rowProp }) {

    const [unitExerciseList, setUnitExerciseList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      TactApi.getAllUnitExercises().then((data) => {
        setUnitExerciseList(data);
        // setIsLoading(false);
      })
    }, []);

    const columns = [
      {
        field: 'unitExerciseID',
        headerName: 'ID',
        headerClassName: 'dashboard-table-header',
        width: 90,
        editable: false,
      },
      {
        field: 'exerciseID',
        headerName: 'Exercise ID',
        headerClassName: 'dashboard-table-header',
        width: 150,
        editable: false,

      },
      {
        field: 'status',
        headerName: 'Status',
        headerClassName: 'dashboard-table-header',
        width: 150,
        editable: false,
      },
    ];
    let rowsByExercise = [];
    
    unitExerciseList.forEach(ex => {
      if (ex.exerciseID == rowProp.exerciseID) {
        rowsByExercise.push(ex);
      }
    });



    return (
      <DataGrid
        columns={columns}
        rows={rowsByExercise}
        getRowId={(row) => row.unitExerciseID}
      >
      </DataGrid>
    );
  }

  const getDetailPanelContent = useCallback(
    ({ row }) => <DetailPanelContent row={row} />,
    [],
  );

  const getDetailPanelHeight = useCallback(() => 400, []);

  return (
    <Box sx={{
      background: '#d9d9d9', height: 400, width: '100%', borderRadius: 1,
      '& .dashboard-table-header': {
        backgroundColor: '#1975d1',
        color: "white",
        fontSize: 18
      },
    }}>
      <DataGridPro
        style={{ color: 'black', borderRadius: 10 }}
        rows={exerciseList}
        getRowId={(row) => row.exerciseID}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowThreshold={0}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );


};
















