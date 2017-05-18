import React from "react";
import TwoColumn48 from "./../views/Sublayouts/TwoColumn48";
import PageHeaderCarousel from "./../views/Media/PageHeaderCarousel";
import PageImageHeader from "./../views/PageContent/PageImageHeader";
import PageTitle from "./../views/PageContent/PageTitle";
import PageBody from "./../views/PageContent/PageBody";
import SecondaryMenu from "./../views/Navigation/SecondaryMenu";
import { Data } from "./../data/Data";

export default class AboutReactIntro extends React.Component {
    render() {
    
        var content = Data.getIntroPageData();

        return(
            <div>
                <PageImageHeader data={content}>
                    <section class="container">
                        <h1>About Sitecore.React - Introduction</h1>
                        <p>Lead text</p>
                    </section>
                </PageImageHeader>
                <TwoColumn48>
                    <div placeholderKey="col-narrow-1">
                        <SecondaryMenu data={Data.getAboutSecondaryMenu()} />
                    </div>
                    <div placeholderKey="col-wide-1">
                        <PageTitle data={content} />
                        <PageBody data={content} />
                    </div>
                </TwoColumn48>
            </div>
        );
    }
}