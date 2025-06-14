// src/components/ProjectTable.js
import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './ProjectTable.css';

const ProjectTable = () => {
  const columnDefs = useMemo(() => [
    { headerName: "Deal ID", field: "dealID", sortable: true, filter: true, checkboxSelection: true },
    { headerName: "Deal Type", field: "dealType", sortable: true, filter: true },
    { headerName: "Deal Status", field: "status", cellClass: params => {
        if (params.value === 'Completed') return 'status-completed';
        if (params.value === 'In Progress') return 'status-progress';
        return 'status-pending';
      }
    },
    { headerName: "Counterpart", field: "counterpart", sortable: true, filter: true },
    { headerName: "Portfolio", field: "portfolio", sortable: true, filter: true },
    { headerName: "ISO Market", field: "isoMarket", sortable: true, filter: true },
    { headerName: "Business Unit", field: "businessUnit", sortable: true, filter: true },
    { headerName: "Legal Entity Name", field: "legalEntityName", sortable: true, filter: true },
    { headerName: "Start Date", field: "startDate", sortable: true, filter: true },
    { headerName: "End Date", field: "endDate", sortable: true, filter: true },
  ], []);

  const rowData = [
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 6767, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},
    { dealID: 1234, dealType: 'Virtual', status: 'Completed', counterpart: 'ERCOT', portfolio: 'ERCOT_Trading',  isoMarket: "ERCOT", businessUnit: "ORSTED", legalEntityName: "ORSTED", startDate: "01-01-2025", endDate: "31-03-2015"},

  ];

  return (
    <div className="project-table-container">
      <h2 className="table-heading">Deals Information</h2>
      <div className="ag-theme-alpine fancy-grid">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default ProjectTable;
