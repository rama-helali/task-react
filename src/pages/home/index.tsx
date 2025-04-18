import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Select,
  Slider,
  Space,
  Typography,
} from "antd";
import PageHeader from "../../components/general/page-header";
import styles from "./style.module.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../../context/auth/context";
import {
  FaBook,
  FaDownload,
  FaEdit,
  FaFolder,
  FaGraduationCap,
} from "react-icons/fa";
import { PiListChecksFill } from "react-icons/pi";
import { TfiPencilAlt2 } from "react-icons/tfi";
import { getGender } from "../../models/base/enum";
import Image from "../../components/general/image";
import { DownOutlined } from "@ant-design/icons";

const localizer = dayjsLocalizer(dayjs);
const Home = () => {
  const navigate = useNavigate();

  const { Title } = Typography;

  const {
    userPermissions,
    authUser,
    actions: SelectStudent,
  } = useContext(AuthContext);

  const handleMenuClick = (e: any) => {
    console.log("click", e);
  };
  const items = [
    {
      label: "Month",
      key: "1",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <PageHeader
        title={"Dashboard"}
        subTitle="Analytics"
        extra={[
          localStorage.getItem("type") == "parentt" && (
            <>
              <Row className="mb-4" gutter={[16, 8]}>
                {authUser?.parent?.students?.map((el: any) => (
                  <Col>
                    <Card
                      onClick={() => {
                        SelectStudent.setStudentSelect(el.id);
                      }}
                      className={styles.cardContent}
                      hoverable
                      style={{
                        backgroundColor:
                          authUser?.studentSelect == el?.id
                            ? "#e6f4ff"
                            : "white",
                      }}
                    >
                      <Row justify="start" gutter={[16, 8]}>
                        <Col>
                          <Avatar
                            size="large"
                            style={{ color: "gray", background: "#dfe6e9" }}
                            src={el?.user?.image?.url ?? "/images/user.png"}
                          />
                        </Col>
                        <Col>
                          <Typography.Title level={5}>
                            {el?.user?.firstName + "   " + el?.user?.secondName}
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          ),
        ]}
      />

      {/* header */}
      <Row gutter={[16, 8]}>
        <Col xs={24} lg={6} md={12} sm={12}>
          <Card className={styles.cardContent}>
            <Row justify="start" gutter={[16, 8]}>
              <Col>
                <FaGraduationCap className="w-16 h-16" color="gray" />
              </Col>
              <Col>
                <Title level={3}>
                  Grades <Title level={2}> 00</Title>
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={6} md={12} sm={12}>
          <Card className={styles.cardContent}>
            <Row justify="start" gutter={[16, 8]}>
              <Col>
                <FaFolder className="w-16 h-16" color="gray" />
              </Col>
              <Col>
                <Title level={3}>
                  Documents <Title level={2}> 00</Title>
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={6} md={12} sm={12}>
          <Card className={styles.cardContent}>
            <Row justify="start" gutter={[16, 8]}>
              <Col>
                <PiListChecksFill className="w-16 h-16" color="gray" />
                <TfiPencilAlt2 className="w-10 h-16" color="gray" />
              </Col>
              <Col>
                <Title level={3}>
                  Exames <Title level={2}> 00</Title>
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={6} md={12} sm={12}>
          <Card className={styles.cardContent}>
            <Row justify="start" gutter={[16, 8]}>
              <Col>
                <FaBook className="w-16 h-16" color="gray" />
              </Col>
              <Col>
                <Title level={3}>
                  Subjects <Title level={2}> 00</Title>
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* end header */}
      <Row className="mt-4">
        <Col span={8}>
          {/* profile */}
          <Col span={24}>
            <Card className={styles.cardProfile}>
              <Row justify="space-between" gutter={[16, 8]}>
                <Col>
                  <Title level={3}> {authUser?.username}</Title>
                  <Typography.Text>
                    {" "}
                    Name : {authUser?.firstName} <br></br> Gender :{" "}
                    {getGender(authUser?.gender ?? 1)} <br /> Class : <br />{" "}
                    Section : <br /> ID:{" "}
                  </Typography.Text>
                </Col>
                <Col>
                  <Row justify="end">
                    {" "}
                    <div>
                      <FaEdit size="1rem" color="gray" />{" "}
                      <FaDownload size="1rem" color="gray" />{" "}
                    </div>
                  </Row>
                  <Row justify="end">
                    <Image
                      src={authUser?.image?.url}
                      alt="image"
                      style={{
                        borderRadius: "50px",
                        objectFit: "cover",
                        height: "130px",
                        width: "130px",
                      }}
                    />
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* end profile card */}
          {/* performance */}
          <Col span={24} className="mt-8">
            <Card className={styles.cardContent}>
              <Row justify="space-between" gutter={[16, 8]}>
                <Col>
                  <Title level={3}> Performance</Title>
                </Col>
                <Col>
                  <Dropdown menu={menuProps}>
                    <Button style={{ backgroundColor: "#f0f0f0" }}>
                      <Space>
                        Button
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <Typography.Text>
                    {" "}
                    Total Quiz <Title> 00</Title>
                  </Typography.Text>
                </Col>
                <Col></Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <Typography.Text>
                    {" "}
                    Resultes <Title> 00</Title>
                  </Typography.Text>
                </Col>
                <Col></Col>
              </Row>
            </Card>
          </Col>
          {/* curriculum */}
          <Col span={24} className="mt-8">
            <Card className={styles.cardContent}>
              <Row justify="space-between" gutter={[16, 8]}>
                <Col>
                  <Title level={3}> Curriculum</Title>
                </Col>
              </Row>
              <Row justify="space-between" style={{ alignItems: "center" }}>
                <Col>
                  <Typography.Text>
                    {" "}
                    Done <Title> 80% </Title>
                  </Typography.Text>
                </Col>
                <Col span={18}>
                  <Slider
                    styles={{
                      track: {
                        height: 8,
                      },
                      rail: {
                        height: 8,
                      },
                      handle: {
                        marginTop: 2,
                      },
                    }}
                    defaultValue={30}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          {/* end col one */}
        </Col>
        <Col span={16} style={{ paddingLeft: 10 }}>
          <Row>
            <Col span={24}>
              <div className={styles.containerCard}>
                <Title level={4}> Event Calender</Title>
                <Calendar
                  localizer={localizer}
                  onSelectEvent={(event: any) => {}}
                  // events={bookings}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 380 }}
                />
              </div>
            </Col>
            <Col span={24} className="mt-6">
              <Card className={styles.cardContent} style={{ height: 250 }}>
                <Row justify="space-between" gutter={[16, 8]}>
                  <Col>
                    <Title level={3}> School Activity</Title>
                  </Col>
                </Row>
                <Row justify="space-between" style={{ alignItems: "center" }}>
                  <Col>
                    <Typography.Text>
                      {" "}
                      Done <Title> 80% </Title>
                    </Typography.Text>
                  </Col>
                  <Col>
                    <Typography.Text>
                      {" "}
                      Done <Title> 80% </Title>
                    </Typography.Text>
                  </Col>
                  <Col>
                    <Typography.Text>
                      {" "}
                      Done <Title> 80% </Title>
                    </Typography.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Home;
