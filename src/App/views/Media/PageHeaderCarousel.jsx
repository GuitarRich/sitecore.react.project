var React = require("react");

var PageHeaderCarousel = React.createClass({
    renderIndicators(slides, carouselId) {

        let indicators = [];
        let self = this;
        slides.map(function (slide, index) {
            let active = "active";
            if (index > 0) {
                active = "";
            }
            indicators.push(
                <li data-target={carouselId} data-slide-to={index} class={active} key={index}></li>
            );
        });

        return indicators;
    },
    renderSlides(items) {
        let slides = [];
        let self = this;
        items.map(function (slide, index) {
            let active = "active";
            if (index > 0) {
                active = "";
            }
            let cssClass = "item " + active;
            let backgroundImage = { backgroundImage: "url('" + slide.ImageUrl + "')" };

            slides.push(
                <div class={cssClass} key={index}>
                    <div class="jumbotron jumbotron-xl bg-media" style={backgroundImage}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 dangerouslySetInnerHTML={{ __html: slide.Title }}></h1>
                                    <p class="lead" dangerouslySetInnerHTML={{ __html: slide.Description }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return slides;
    },
    render() {

        let dataInterval = this.props.data.IsExperienceEditor ? "data-interval" : "";

        return (
            <div id={this.props.data.CarouselId} class="carousel slide" data-ride="carousel" {...dataInterval} >
                <ol class="carousel-indicators">
                    {this.renderIndicators(this.props.data.Slides, this.props.data.CarouselId)}
                </ol>

                <div class="carousel-inner" role="listbox">
                    {this.renderSlides(this.props.data.Slides)}
                </div>

                <a class="left carousel-control" href={this.props.data.CarouselId} role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href={this.props.data.CarouselId} role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
});

module.exports = PageHeaderCarousel;