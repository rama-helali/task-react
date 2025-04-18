import {Row} from "antd";
import PageHeader from "../../components/general/page-header";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Home = () => {

  return (
    <>
      <PageHeader
        title={"Dashboard"}
        subTitle="Analytics"
        extra={[
          localStorage.getItem("type") == "parentt" && (
            <>
              <Row className="mb-4" gutter={[16, 8]}>
                
              </Row>
            </>
          ),
        ]}
      />
    </>
  );
};
export default Home;
