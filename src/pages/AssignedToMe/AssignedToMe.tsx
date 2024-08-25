import "./AssignedToMe.scss";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MaterialTable from "../../components/MaterialTable/MaterialTable";

const AssignedToMe = () => {
  return (
    <div className="assignedSection">
      <div className="content">
        <div className="top">
          <div className="heading">
            <PermIdentityOutlinedIcon />
            <span>Assigned to Me</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          {/* Material table used for grouping the rows based on state - Admin, Evaluator and Moderator */}
          {/* All filters, pagination and drag & drop functionalities are working */}
          <MaterialTable />
        </div>
      </div>
    </div>
  );
};

export default AssignedToMe;
