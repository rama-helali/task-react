import { Button, ButtonProps, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { IoEye } from "react-icons/io5";

interface Props extends ButtonProps { }

const ViewBtn: React.FC<Props> = (props) => {
  return (
    <Tooltip title={"View"}>
      <Button type="link"
        size="large"
        style={{ color: "gray" }} shape="circle" icon={props?.icon ?? <IoEye/>} {...props} />
    </Tooltip>
  );
};

export default ViewBtn;
