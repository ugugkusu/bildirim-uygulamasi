self.addEventListener('push', (e) => {
  const config = {
    body: 'Body Bilgisi',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '3',
    },
  };

  e.waitUntil(
    self.registration.showNotification('Yeni Makalle Eklendi', config)
  );
});
