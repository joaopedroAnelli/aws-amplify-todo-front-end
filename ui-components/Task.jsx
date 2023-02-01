/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckboxField, View } from "@aws-amplify/ui-react";
export default function Task(props) {
  const { task, onClick, overrides, ...rest } = props;
  return (
    <View
      width="255px"
      height="62px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Task")}
      {...rest}
    >
      <CheckboxField
        label={task?.title}
        width="255px"
        height="62px"
        justifyContent="space-between"
        position="absolute"
        padding="16px 16px 16px 16px"
        top="0px"
        left="0px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
    </View>
  );
}
