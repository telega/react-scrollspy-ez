import React, { Component } from "react";

import Scrollspy from "react-scrollspy-ez";

export default class App extends Component {
  render() {
    return (
      <div>
        <Scrollspy
          ids={["one", "two", "three"]}
          itemContainerClassName="scrollSpyContainer"
          activeItemClassName="active"
          itemClassName="spyItemClass"
          includeParentClasses="true"
        />
        <h1 id="one">Heading One</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat accumsan volutpat. Sed viverra nisl at consectetur cursus.
          Duis id ex risus. Pellentesque non purus eu felis tempus faucibus.
          Duis tempus, diam in efficitur lacinia, turpis mauris ultrices lectus,
          et dictum massa lorem in felis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nam rhoncus,
          lectus efficitur facilisis tincidunt, nisi orci consequat nulla, non
          varius sapien leo ut lectus. Donec dapibus, dolor et sodales pharetra,
          lorem mi tincidunt dolor, quis convallis justo arcu non risus. Nulla
          nunc nunc, vehicula et venenatis vel, fermentum congue sapien. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed rutrum
          nisi. Etiam pellentesque, turpis non mattis egestas, erat risus
          tincidunt odio, non blandit orci metus quis justo. Phasellus
          imperdiet, nisi hendrerit congue sagittis, metus neque porttitor enim,
          sit amet consectetur metus mi eu ex. Aliquam feugiat mauris dolor,
          eget porta metus rutrum quis.
        </p>
        <p>
          Cras dictum metus iaculis justo pretium vehicula. Integer at venenatis
          eros. Donec pulvinar purus vel augue pretium, at euismod massa
          pharetra. Integer quis blandit sem. Vestibulum in libero iaculis erat
          sollicitudin lobortis. Cras euismod porttitor gravida. Mauris pulvinar
          elit vel luctus euismod. Vestibulum consequat suscipit viverra. Fusce
          neque diam, tincidunt at enim vitae, egestas commodo magna.
        </p>
        <h2 id="two" class="underline">
          Heading Two
        </h2>
        <p>
          Vestibulum consectetur congue vulputate. Donec gravida leo auctor,
          iaculis ante ut, tincidunt metus. Duis aliquet odio vel turpis
          volutpat, et imperdiet leo gravida. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nullam non
          finibus nulla. Mauris laoreet pellentesque neque quis blandit. Proin
          eget fringilla lacus. Nam quis justo aliquet, ultricies sem pulvinar,
          fringilla enim. Praesent bibendum tortor nec ipsum malesuada, at
          pulvinar ipsum semper. Sed fermentum feugiat nisl, a ornare ante
          euismod non. Duis risus est, fermentum sit amet nibh nec, tristique
          ultrices lacus. Curabitur fringilla lectus eget massa vehicula maximus
          vitae quis tellus.
        </p>
        <h2 id="three" class="underline">
          Heading Three
        </h2>
        <p>
          Phasellus dignissim, lorem vel cursus luctus, turpis massa
          sollicitudin nisi, eu facilisis tellus nibh eu lacus. Fusce sodales
          leo id viverra tristique. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Morbi aliquet
          risus sed posuere tristique. Curabitur ultricies, eros id eleifend
          volutpat, sapien nisl tristique lectus, in cursus sapien sapien vitae
          velit. Fusce laoreet, ipsum eget ullamcorper venenatis, nibh tellus
          vulputate quam, nec ultrices est dolor a enim. Phasellus commodo lorem
          et ex laoreet convallis. Nulla non orci maximus, cursus augue
          accumsan, sollicitudin nisl. Nam blandit ultricies velit id porta.
          Pellentesque nulla felis, lacinia ac mauris et, dignissim dapibus
          sapien. Duis erat ante, efficitur vitae laoreet id, molestie quis
          eros. Donec elit nulla, blandit et orci non, euismod condimentum
          sapien. Morbi et nibh felis. Praesent vitae odio id mauris finibus
          varius nec at nibh. Aenean a odio risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat accumsan volutpat. Sed viverra nisl at consectetur cursus.
          Duis id ex risus. Pellentesque non purus eu felis tempus faucibus.
          Duis tempus, diam in efficitur lacinia, turpis mauris ultrices lectus,
          et dictum massa lorem in felis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nam rhoncus,
          lectus efficitur facilisis tincidunt, nisi orci consequat nulla, non
          varius sapien leo ut lectus. Donec dapibus, dolor et sodales pharetra,
          lorem mi tincidunt dolor, quis convallis justo arcu non risus. Nulla
          nunc nunc, vehicula et venenatis vel, fermentum congue sapien. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed rutrum
          nisi. Etiam pellentesque, turpis non mattis egestas, erat risus
          tincidunt odio, non blandit orci metus quis justo. Phasellus
          imperdiet, nisi hendrerit congue sagittis, metus neque porttitor enim,
          sit amet consectetur metus mi eu ex. Aliquam feugiat mauris dolor,
          eget porta metus rutrum quis.
        </p>
      </div>
    );
  }
}
