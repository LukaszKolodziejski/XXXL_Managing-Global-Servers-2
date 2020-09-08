import React from "react";
import PropTypes from "prop-types";
import Online from "./Status/Online/Online";
import Offline from "./Status/Offline/Offline";
import Rebooting from "./Status/Rebooting/Rebooting";

const StatusOneServer = React.memo((props) => {
  const { status } = props;
  const oneStatus =
    (status === "ONLINE" && <Online status={status} />) ||
    (status === "OFFLINE" && <Offline status={status} />) ||
    (status === "REBOOTING" && <Rebooting status={status} />);

  return oneStatus;
});

StatusOneServer.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusOneServer;
