import React, { useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as loginActions from "../redux/actions/loginActions";
import Sidebar from "../library/sidebar/sidebar";
import Navbar from "../library/navbar/navbar";
import "../library/sidebar/sidebar.scss";
import { Drawer } from "@mui/material";
import {
  ACCESS_DENIED,
  ADMIN_CONTRACTOR_DETAILS,
  LANDING_PAGE,
} from "../constant/routeContant";

const PrivateRoutes = (props) => {
  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  // const history = useHistory();
  const isAuth = useSelector((state) => state.login.userSuccess);
  const token = localStorage.getItem("id_token");
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 320;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch = useDispatch();

  // console.log("location", location);
  var islanding =
    location?.pathname == LANDING_PAGE || location?.pathname == ACCESS_DENIED;
  const handleRoute = (url) => {
    if (ADMIN_CONTRACTOR_DETAILS === url) {
      const USERID = JSON.parse(localStorage.getItem("userInfo"));
      navigate(ADMIN_CONTRACTOR_DETAILS, {
        state: {
          rowsss: {
            id: USERID.contractorId,
            contractorName: USERID.contractorName,
            grade: USERID.contractorGrade,
          },
          editMode: false,
        },
      });
    } else {
      navigate(url);
    }
    setMobileOpen(false);
  };
  useEffect(() => {
    dispatch(loginActions.redirectUrlRequest(location?.pathname));
  }, []);
  const { access_token, id_token } = JSON.parse(JSON.stringify(localStorage));
  if (access_token && id_token) {
    dispatch(
      loginActions.setCurrentUserAction({
        idToken: id_token,
        accessToken: access_token,
        tokenType: "id",
      })
    );
  }

  return (
    <>
      {isAuth && token ? (
        <>
          {islanding === true && ( // code for landing page
            <>
              <Navbar
                handleDrawerToggle={handleDrawerToggle}
                islanding={true}
              />
              <div className="container_wrapper">
                <Outlet />
              </div>
            </>
          )}
          {islanding == false && (
            <>
              {" "}
              <div className="dashboard">
                <div className="contentContainer">
                  <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true,
                    }}
                    sx={{
                      display: { xs: "block", sm: "block" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                      },
                    }}
                  >
                    <Sidebar handleRoute={handleRoute} />
                  </Drawer>

                  <Drawer
                    variant="permanent"
                    className="drawerContainer"
                    sx={{
                      // display: { xs: "none", sm: "none" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                      },
                    }}
                    open
                  >
                    <Sidebar handleRoute={handleRoute} />
                  </Drawer>
                  <div className="rightBar">
                    <Navbar handleDrawerToggle={handleDrawerToggle} />
                    <div className="container_wrapper">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default PrivateRoutes;
