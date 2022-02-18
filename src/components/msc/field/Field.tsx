import React, { memo } from "react";

interface propsType {
  title: string;
  value: string;
    className?:string
}

function Field(props: propsType) {
  return (
    <div {...props} style={{height:"24px"}} className={`field grid gap-x-3 font-medium ${props.className}`}>
      <div data-testid="field-value" className="truncate col-span-8">{props.value}</div>
      <div data-testid="field-title" style={{textAlign:"right"}} className="font-bold col-span-4 truncate">:{props.title}</div>
    </div>
  );
}

const PureField=memo(Field)

export default PureField;
