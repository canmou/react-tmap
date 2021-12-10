declare global {
  interface Window {
    TMap: typeof TMap;
  }
}

declare namespace TMap {
  class LatLng {
    constructor(lng: number, lat: number, noWrap?: boolean);
  }

  class constants {
    static DEFAULT_CONTROL_ID: any;
  }

  interface EventsCommonProps {
    // onMouseOut?(evene)
  }
}
