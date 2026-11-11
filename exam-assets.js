(function (root) {
  'use strict';

  const packs = new Map();
  const pending = new Map();

  function register(name, images) {
    packs.set(name, images);
  }

  function load(name) {
    if (packs.has(name)) return Promise.resolve(packs.get(name));
    if (pending.has(name)) return pending.get(name);
    const request = new Promise((resolve, reject) => {
      const script = root.document.createElement('script');
      function complete() {
        script.remove();
        const images = packs.get(name);
        if (images) resolve(images);
        else reject(new Error('题图加载失败'));
      }
      script.src = name;
      script.onload = complete;
      script.onerror = complete;
      root.document.head.append(script);
    }).finally(() => pending.delete(name));
    pending.set(name, request);
    return request;
  }

  function set(image, source, pack) {
    if (!pack) {
      image.src = source;
      return;
    }
    load(pack).then((images) => {
      const data = images[source];
      if (!data) throw new Error('题图缺失');
      image.src = data;
    }).catch(() => {
      image.alt += '（加载失败，可重新打开该题）';
    });
  }

  root.HeatAssets = { register, set };
})(window);
