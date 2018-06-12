function registerServiceWorker() {
  if(!navigator.serviceWorker) return;

  console.log("testing");
  navigator.serviceWorker.register('/js/sw.js').then(function() {
    console.log('Registration Worked');
  }).catch(function(err) {
    console.log(err);
  });
 
    // if(reg.waiting) {
    //  updateReady(reg.waiting);
    //  return;
    // }

    // if(reg.installing) {
    //  trackInstalling(reg.installing);
    //  return;
    // }

    // reg.addEventListener('update found', function() {
    //   trackInstalling();
    // });
}

registerServiceWorker();
