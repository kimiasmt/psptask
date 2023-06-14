import React from "react";
import withAuthorization from "../../Utils/withAuthorization";
const SettingPage = () => {
  return(
      <div>
          setting page
      </div>
    )
}

export default withAuthorization('admin')(SettingPage);
