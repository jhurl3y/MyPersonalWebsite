import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import SmoothScroll from "smoothscroll-polyfill";

class SmoothAnchor extends Component {
  constructor(props) {
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  componentDidMount() {
    SmoothScroll.polyfill();
  }

  smoothScroll(e) {
    e.preventDefault();

    let offset = () => 0;

    if (typeof this.props.offset !== "undefined") {
      if (
        !!(
          this.props.offset &&
          this.props.offset.constructor &&
          this.props.offset.apply
        )
      ) {
        offset = this.props.offset;
      } else {
        offset = () => parseInt(this.props.offset);
      }
    }

    const id = e.currentTarget.getAttribute("href").slice(1);
    const $anchor = document.getElementById(id);
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop - offset(),
      behavior: "smooth"
    });

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    // This is a hack to fix a scrolling issue in Safari.
    // Safari scrolls much quicker than chrome when a href
    // is clicked further down the page.
    // Our handleScroll method that checks the offsets
    // only runs a few times and doesnt set the clicked page
    // correctly. By triggering an extra scroll event we can force
    // the handleScroll function to run again and update the page
    // appropriately. Will come back to this and fix properly.
    if (this.props.extraScroll) {
      setTimeout(function() {
        window.scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      }, 200);
    }
  }

  render() {
    const { offset, extraScroll, ...rest } = this.props;
    return <Link {...rest} onClick={this.smoothScroll} />;
  }
}

export default SmoothAnchor;
