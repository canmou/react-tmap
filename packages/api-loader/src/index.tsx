import { Component } from "react";

interface APILoaderProp {
    /**
     * 腾讯地图的web key
     */
    tkey: string;
    /**
     * sdk 包版本
     * @default 
     */
    version?: string;
    /**
     * 协议
     */
    protocol?: 'http' | 'https';
    /**
     * 
     */
    hostAndPath?: string;
    /**
     * JSONP 回调函数
     */
    callbackName: string;
    /**
     * 插件？
     */
    libraries?: string;
}

const _importedScript: { [src: string]: true } = {};
export function requireScript(src: string, id: string = '_react_amap'): Promise<void> {
    const headElement = document && (document.head || document.getElementsByTagName('head')[0]);
    return new Promise((resolve, reject) => {
        if (!document || src in _importedScript) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = id;
        script.async = true;
        script.defer = true;
        script.src = src;
        script.onerror = (err) => {
            headElement.removeChild(script);
            reject(new URIError(`The Script ${src} is no accessible.`));
        };
        script.onload = () => {
            _importedScript[src] = true;
            resolve();
        };
        headElement.appendChild(script);
    });
}

export class APILoader extends Component<APILoaderProp> {
    state = {
        loaded: false,
    }
    public static defaultProps = {
        tkey: '',
        libraries: '',
    };

    public constructor(props: APILoaderProp | Readonly<APILoaderProp>) {
        super(props);
        if (props.tkey === null) {
            throw new TypeError('TMap: tkey is required');
        }
    }

    public async loadMap() {
        const src = this.getScriptSrc();
        await requireScript(src);
    }

    public async loadMap2() {
        const src = this.getScriptSrc2();
        await requireScript(src);
    }

    private getScriptSrc() {
        const cfg = this.props;
        // UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ
        // service,geometry,visualization
        return `https://map.qq.com/api/gljs?v=1.exp&key=${cfg.tkey}&libraries=${cfg.libraries}`;
    }

    private getScriptSrc2() {
        return `https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js`;
    }

    public async componentDidMount() {
        await this.loadMap();
        await this.loadMap2();

        if (window.TMap != null) {
            this.finish();
            // if (window[callbackName as any]) {
            // }
        }

    }

    private finish = () => {
        this.setState({
            loaded: true,
        });
    };

    public render() {
        if (this.state.loaded) {
            return this.props.children;
        }
    }
}