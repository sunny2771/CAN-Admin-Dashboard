import "./Opportunities.scss";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DataTable from "../../components/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import {userRows} from '../../data';


const columns: GridColDef[] = [
  {
    field: "Name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div style={{display : 'flex', alignItems : 'center', gap : '10px'}}>
          <img src='https://www.usatoday.com/gcdn/presto/2019/08/16/USAT/bd6538e4-5535-41ce-857b-518451c3a958-Snapchat_Logo_H.png?crop=1125,1500,x674,y0' width='40px' height='40px' style={{borderRadius : '5px'}} alt="" />
          {params.row.name}
        </div>
      )
    },
  },
  { field: "id", headerName: "Mission ID", width: 90, align : "center"},
  {
    field: "brand",
    type: "string",
    headerName: "Brand",
    width: 150,
  },
  {
    field: "start",
    headerName: "Start",
    width: 150,
    type: "string",
  },
  {
    field: "end",
    headerName: "End",
    width: 150,
    type: "string",
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    type: "string",
  },
  {
    field: "openings",
    headerName: "Openings",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "signedup",
    headerName: "Signed Up",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "submitted",
    headerName: "Submitted",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "approved",
    headerName: "Approved",
    width: 100,
    align: "center",
    type: "number",
  },
  {
    field: "status",
    headerName: "Mission Status",
    width: 180,
    renderCell: (params) => {
      return <div className="status" style={{background : params.row.status === 'Draft' ? 'tomato' : params.row.status === 'Completed' ? 'green' : params.row.status === 'Evaluating' ? 'orange' : params.row.status === 'Started' ? 'blue' : params.row.status === 'Unpublished' ? 'pink' : 'white'}} >{params.row.status}</div>;
      
    },
  },
];

const Opportunities = () => {
  return (
    <div className="opportunitiesSection">
      <div className="content">
        <div className="top">
          <div className="heading">
            <ContentCopyOutlinedIcon />
            <span>Opportunities</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          {/* Mui data grid table has been used to show data */}
          {/* All filters, pagination functionalities are working */}
          <DataTable slug="users" columns={columns} rows={userRows} />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
