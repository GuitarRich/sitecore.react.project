import React from "react";

import PageHeaderCarousel from "./../views/Media/PageHeaderCarousel";
import PageHeader from "./../views/Sublayouts/PageHeader";
import OneColumn from "./../views/Sublayouts/OneColumn";
import { Data } from "./../data/Data";

export default class Home extends React.Component {
  render() {
    return (
        <div>
          <PageHeader>
            <PageHeaderCarousel data={Data.getCarousel()} />
          </PageHeader>
          <OneColumn>
            <p placeholderKey="col-huge">todo: add some body components here</p>
          </OneColumn>
        </div>
    );
  }
}
