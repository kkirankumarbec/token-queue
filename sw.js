// Lets phones (Android Chrome) show notifications, and opens the page when one is tapped.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(list => {
    if (list.length) return list[0].focus();
    return self.clients.openWindow('./');
  }));
});
