import { Layout } from "antd";
import "./style.css";
import NavBar from "../navbar";

interface IProps {
  children: React.ReactNode;
}
const LayoutContent: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Layout.Content>
        <NavBar />
        <div className="content">{children}</div>
      </Layout.Content>
    </>
  );
};

export default LayoutContent;
