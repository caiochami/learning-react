import React from "react";
import Title from "../../../components/DesigningReactHooksTheRightWay/ChapterTwo/Title";
import SimpleCard from "../../../components/SimpleCard";

export default function Index() {
  return (
    <SimpleCard title="Chapter Two">
      <div className="grid grid-cols-1">
        <Title />
      </div>
    </SimpleCard>
  );
}
