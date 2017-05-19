import React from "react";

import PageHeader from "./../views/Sublayouts/PageHeader";
import OneColumn from "./../views/Sublayouts/OneColumn";

import { Data } from "./../data/Data";

export default class Home extends React.Component {
  render() {
    return (
        <div>
          <PageHeader>
            <h1>todo: Add a carousel here</h1>
          </PageHeader>
          <OneColumn>
            <p placeholderKey="col-huge">todo: add some body components here</p>
          </OneColumn>
        </div>
    );
  }
}
