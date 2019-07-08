/**
 * @class Scrollspy
 */

import React from "react";
import classnames from "classnames";

const SPY_INTERVAL = 100;

export interface SpyItem {
  inView: boolean;
  element: HTMLElement;
}

/**
 * @interface ScrollspyProps
 * @property {string[]} ids - the dom IDs of the page elements to scroll to
 * @property {number} offset - a number of pixels to offset whether the page element is 'in view'
 * @property {boolean} includeParentClasses - will pass classes of spied item to the corresponding menu item
 */
export interface ScrollspyProps {
  ids: string[];
  offset: number;
  itemContainerClassName?: string;
  activeItemClassName?: string;
  itemClassName?: string;
  containerElement?: JSX.Element;
  itemElement?: JSX.Element;
  includeParentClasses?: boolean;
}

export interface ScrollspyState {
  items: SpyItem[];
}

export default class Scrollspy extends React.Component<
  ScrollspyProps,
  ScrollspyState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }

  public static defaultProps: Partial<ScrollspyProps> = {
    offset: 2,
    ids: [],
    containerElement: <ul />,
    itemElement: <li />,
    includeParentClasses: false
  };

  private timer: number;

  private spy() {
    const items = this.props.ids
      .map(id => {
        const element = document.getElementById(id);
        if (element) {
          return {
            inView: this.isInView(element),
            element
          } as SpyItem;
        } else {
          return;
        }
      })
      .filter(item => item);

    const firstTrueItem = items.find(item => !!item && item.inView);

    if (!firstTrueItem) {
      return; // dont update state
    } else {
      const update = items.map(item => {
        return { ...item, inView: item === firstTrueItem } as SpyItem;
      });

      this.setState({ items: update });
    }
  }

  public componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL);
  }

  public componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  private isInView = (element: HTMLElement) => {
    if (!element) {
      return false;
    }
    const { offset } = this.props;
    const rect = element.getBoundingClientRect();

    return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
  };

  private scrollTo(element: HTMLElement) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  private renderItems() {
    const { itemElement, activeItemClassName, itemClassName } = this.props;
    return this.state.items.map((item, k) => {
      return itemElement
        ? React.cloneElement(itemElement, {
            key: k,
            className: classnames(
              this.props.includeParentClasses && item.element.className
                ? item.element.className
                : null,
              itemClassName,
              item.inView ? activeItemClassName : null
            ),
            onClick: () => this.scrollTo(item.element),
            children: item.element.innerText
          })
        : null;
    });
  }

  public render() {
    const { itemContainerClassName, containerElement } = this.props;
    return containerElement
      ? React.cloneElement(containerElement, {
          className: classnames(itemContainerClassName),
          children: this.renderItems()
        })
      : null;
  }
}
