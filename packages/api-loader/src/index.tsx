/// <reference types="@canmou/react-tmap-types" />
import { Component } from "react";
import { requireScript } from '@canmou/react-tmap-require-script';
// import React from "react";

export interface APILoaderProp {
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

interface State {
    loaded: boolean;
    error?: Error;
}

export class APILoader extends Component<APILoaderProp> {
    public static defaultProps = {
        tkey: '',
        libraries: '',
    }
    public state: State = {
        loaded: false,
    }
    // static a = {};
    // b = 2;
    // static c = 22;

    public constructor(props: APILoaderProp | Readonly<APILoaderProp>) {
        console.log('props', props);
        super(props);
        if (props.tkey === null) {
            throw new TypeError('TMap: tkey is required');
        }
    }

    public async loadMap() {
        const src = this.getScriptSrc();
        await requireScript(src);
    }

    public async loadMapGeoLocation() {
        const src = this.getScriptSrcGeoLocation();
        await requireScript(src);
    }

    private getScriptSrc() {
        const cfg = this.props;
        // UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ
        // service,geometry,visualization
        return `https://map.qq.com/api/gljs?v=1.exp&key=${cfg.tkey}&libraries=${cfg.libraries}`;
    }

    private getScriptSrcGeoLocation() {
        return `https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js`;
    }

    public async componentDidMount() {
        console.log(this);
        await this.loadMap();
        await this.loadMapGeoLocation();
        if (window.TMap != null) {
            this.setState({
                loaded: true,
            });
            // this.finish();
            // if (window[callbackName as any]) {
            // }
        }

    }

    // private finish = () => {
    //     this.setState({
    //         loaded: true,
    //     });
    // };

    public render() {
        if (this.state.loaded) {
            return this.props.children;
        } else {
            return <div>test</div>;
        }
    }
}
