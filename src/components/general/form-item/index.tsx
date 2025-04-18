import React from "react";
import styles from "./style.module.scss";

interface IProps {
  label?: string;
  isOptional?: boolean;
  required?: boolean;
  children: React.ReactNode;
}

const FormItem: React.FC<IProps> = ({
  label,
  required,
  isOptional,
  children,
}) => {
  return (
    <div className={styles.formItem}>
      {label !== "" && (
        <>
          {required && <span className={styles.star}>*</span>}
          {label} {isOptional && <span>Optional</span>}
        </>
      )}
      <label className={styles.formItemLabel}></label>
      {children}
    </div>
  );
};

export default FormItem;
