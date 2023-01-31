/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckboxField, Flex } from "@aws-amplify/ui-react";
export default function Task(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Task")}
      {...rest}
    >
      <CheckboxField
        label="Taskname"
        shrink="0"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
    </Flex>
  );
}
