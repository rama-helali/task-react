import { Button, ButtonProps, Popconfirm, Tooltip } from "antd";
import { DeleteFilled, DeleteOutlined, QuestionCircleTwoTone } from "@ant-design/icons";

import { StrictMode, useContext } from "react";
import { TooltipPlacement } from "antd/es/tooltip";

interface Props extends ButtonProps {
  onConfirm: () => void;
  placement?: TooltipPlacement;
}

const DeleteBtn: React.FC<Props> = ({ onConfirm, ...props }) => {
  return (
    <Popconfirm
      title={"Confirm Delete"}
      placement={props.placement}
      okButtonProps={{ danger: true, loading: props.loading }}
      icon={<QuestionCircleTwoTone twoToneColor="red" />}
      onConfirm={onConfirm}
    >
      <Button
        type="link"
        size="large"
        style={{ color: "#001529" }}
        shape="circle"
        icon={props?.icon ?? <DeleteFilled />}
        {...props}
      />
    </Popconfirm>
  );
};

export default DeleteBtn;
