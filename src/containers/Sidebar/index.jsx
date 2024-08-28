import React from "react";
import routes from "../../routers/routes";
import NavItem from "../../components/NavItem";

const Sidebar = () => {
  return (
    <div className="px-4 pt-8">
      {routes.map((e) => (
        <React.Fragment key={e.id}>
            {!e.hideSidebar&&(<NavItem {...e} />)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
