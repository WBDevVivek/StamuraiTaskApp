import React from "react";

interface MetaDataPropsType {
    title:string | null;
}

const MetaData: React.FC<MetaDataPropsType> = ({ title }) => {
  return (
      <title>{title}</title>
  );
};

export default MetaData;



