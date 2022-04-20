import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import { FcComboChart ,FcAbout,FcViewDetails,FcCollapse,FcDataRecovery,FcDataConfiguration,FcList,FcBusinessman} from "react-icons/fc";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <FcComboChart /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<FcCollapse />}
          defaultExpandIcon={<FcViewDetails />}
        >
          <TreeItem nodeId="1" label="Products Management">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All Product" icon={<FcDataConfiguration />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create Product" icon={<FcDataRecovery />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <FcList />
          Orders Management
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <FcBusinessman /> Users Management
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <FcAbout />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
