import { Button, ButtonProps, Tooltip } from "antd";
import { EditFilled } from "@ant-design/icons";
import { useContext } from "react";

interface Props extends ButtonProps { }

const EditBtn: React.FC<Props> = (props) => {
  return (
    <Tooltip title={"Edit"}>
      <Button
        type="link"
        size="large"
        style={{ color: "#F8B01C" }}
        shape="circle"
        icon={props?.icon ?? <EditFilled />}
        {...props}
      />
    </Tooltip>
  );
};

export default EditBtn;
