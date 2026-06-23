/*!===================================================\
|   dell's code                                       |
|   MIT license - See LICENSE.txt for more details    |
\====================================================*/

(function install() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dell-optiplex-790.github.io/moreapps/moreapps.js', false);
    xhr.send();
    $store.set('/a/boot/moreapps.js', xhr.responseText);
    $store.set('/a/pkg/README.txt', 'Drop in any package ZIPs here...');
    location.reload();
})();