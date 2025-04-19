import React, { useEffect } from 'react';
import styles from "./style.module.scss";
import { Row, Col } from 'antd';

const BaseBagEdit: React.FC = () => {
    const [Rows, setRows] = React.useState<number[]>([]);
    const [Cols, setCols] = React.useState<number[]>([]);

    useEffect(() => {
        const totalRows = Math.floor(window.innerHeight / 36);
        const totalCols = Math.floor(window.innerWidth / 36);
        setRows(Array.from({ length: totalRows }, (_, index) => index));
        setCols(Array.from({ length: totalCols }, (_, index) => index));
    }, []);

    return (
        <div className={styles.container}>
            {/* Background Circles */}
            <div className={styles.bgContainer}>
                {Rows.map((rowIndex) => (
                    <Row key={rowIndex}>
                        {Cols.map((colIndex) => (
                            <Col key={colIndex}>
                                <div
                                    className={styles.bgCircle}
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        border: "1px solid #CBCBCB",
                                        margin:"0px 2px",
                                    }}
                                ></div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>

            {/* Page Items */}
            <div className={styles.content}>
                <h1 style={{ textAlign: "center", marginTop: "20px", zIndex: 1, position: "relative" }}>
                    Page Items
                </h1>
                <div style={{ display: "flex", justifyContent: "center", zIndex: 1, position: "relative" }}>
                    <div style={{ width: "100px", height: "100px", backgroundColor: "#ff5733" }}></div>
                    <div style={{ width: "100px", height: "100px", backgroundColor: "#33c4ff"}}></div>
                </div>
            </div>
        </div>
    );
};

export default BaseBagEdit;
