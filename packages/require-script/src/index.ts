const _importedScript: { [src: string]: true } = {};

export function requireScript(
  src: string,
  id: string = "_react_amap"
): Promise<void> {
  const headElement =
    document && (document.head || document.getElementsByTagName("head")[0]);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
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
