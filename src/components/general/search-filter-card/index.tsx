import { Input, Collapse, Button, Space } from "antd";
import React, { useState, Fragment } from "react";
import {
  ClearOutlined,
  CaretRightOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";
import SubmitBtn from "../../form-components/submit-btn";
import { debounce } from "lodash";
import { Controller, useForm } from "react-hook-form";

const { Search } = Input;
const { Panel } = Collapse;

interface ISearchFilterCard {
  onReset: () => void;
  resetLoading: boolean;
  applyLoading?: boolean;
  formId?: string;
  searchValue: string | undefined;
  setSearchValue: (searchKey: any) => void;
  children?: React.ReactNode;
}

const SearchFilterCard: React.FC<ISearchFilterCard> = ({
  children,
  onReset,
  formId,
  resetLoading,
  searchValue,
  setSearchValue,
  applyLoading,
}) => {
  const handleChange = debounce(({ target }) => {
    if (target.value) {
      setSearchValue(target.value);
    } else {
      setSearchValue(undefined);
    }
  }, 500);

  // const { permissions, loading } = useContext(AppContext)
  const [showFilters, setShowFilters] = useState(false);

  const { control, reset } = useForm({ defaultValues: { keyword: undefined } });
  return (
    <div className={styles.filterCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className={React.Children.count(children) > 0 ? styles.cardHeader : ""}
      >
        <Controller
          name="keyword"
          control={control}
          render={({ field }) => {
            return (
              <Search
                {...field}
                placeholder={`Search....`}
                style={{ width: "30%" }}
                enterButton
                onSearch={(value) => {
                  value ? setSearchValue(value) : setSearchValue(undefined);
                }}
                onChange={(e) => {
                  field.onChange(e);
                  handleChange(e);
                }}
                allowClear
              />
            );
          }}
        />

        <Button
          danger
          type="default"
          loading={resetLoading}
          icon={<ClearOutlined />}
          onClick={(e) => {
            reset({ keyword: undefined });
            setSearchValue(undefined);
            e.stopPropagation();
            onReset();
          }}
        >
          Reset
        </Button>
      </div>
      {children && (
        <Collapse
          bordered={true}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          onChange={(key) => {
            setShowFilters(key?.includes("1"));
          }}
          style={{ marginTop: "15px" }}
          accordion
        >
          <Panel
            extra={
              <Fragment>
                {showFilters && (
                  <Space>
                    <SubmitBtn
                      icon={<FilterOutlined />}
                      loading={applyLoading}
                      onClick={(e) => e.stopPropagation()}
                      form={formId}
                    >
                      Apply
                    </SubmitBtn>
                  </Space>
                )}
              </Fragment>
            }
            header={"Filters"}
            key="1"
          >
            {children}
          </Panel>
        </Collapse>
      )}
    </div>
  );
};

export default SearchFilterCard;
