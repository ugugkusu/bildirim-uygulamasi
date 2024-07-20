window.addEventListener('load', async () => {
  const subscribeButton = document.getElementById('subscribeButton');

  const sW = await navigator.serviceWorker.register('./sw.js');
  console.log(sW);

  subscribeButton.addEventListener('click', async () => {
    const ServiceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        'BBGWvhhwVEtFOWD6AKw6j6IJ5TVsRcUHmq2-uhdI5meNKs5OOLmqEhRqKUMWUI0-2HwIblCgvWAPiCCqKP4sgYQ',
    });

    console.log(clientID);
    console.log(HSON.stringify(clientID));
  });
});
