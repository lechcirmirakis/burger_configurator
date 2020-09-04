import React from "react";
import PropTypes from "prop-types";
import anime from "animejs";

const TOUCH_DELAY = 150;

const Touched = (ComposedComponent, delayed = false, direction = -1) =>
  class extends React.PureComponent {
    static propTypes = {
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    };

    constructor() {
      super();
      this.state = {
        isTouched: false,
        timeout: null,
        rect: null,
      };
      this.onTouchStart = this.onTouchStart.bind(this);
    }

    componentDidMount() {
      const fxProps = {
        targets: this.element,
        duration: 125,
        direction: "alternate",
        easing: "easeOutQuad",
        filter: ["brightness(1)", "brightness(0.85)"],
        autoplay: false,
        complete: anim => {
          anim.reset();
        },
      };
      this.fx = {
        push: anime({
          ...fxProps,
          scale: [1, 0.95],
        }),
        pull: anime({
          ...fxProps,
          scale: [1, 1.1],
        }),
      };
    }

    onTouchStart() {
      if (this.props.disabled) return;

      if (!delayed) {
        this.animeElement(direction);
        return;
      }

      const rect = this.element.getBoundingClientRect();
      this.setState({
        timeout: setTimeout(() => this.onTouchDelayed(), TOUCH_DELAY),
        rect,
      });
    }

    onTouchDelayed() {
      const rect = this.element.getBoundingClientRect();
      const diff = Math.abs(this.state.rect.top - rect.top);
      this.setState({ timeout: null });
      if (diff > 1) {
        return;
      }
      this.animeElement(direction);
    }

    onTouchEnd() {
      if (this.state.timeout !== null) {
        clearTimeout(this.state.timeout);
        this.setState({ timeout: null });
      }
    }

    animeElement(value = 1) {
      this.fx[value > 0 ? "pull" : "push"].play();
    }

    render() {
      return (
        <ComposedComponent
          ref={element => {
            this.element = element;
          }}
          onTouchStart={() => this.onTouchStart()}
          onTouchEnd={() => this.onTouchEnd()}
          onTouchMove={() => this.onTouchEnd()}
          {...this.state}
          {...this.props}
        />
      );
    }
  };

export default Touched;
