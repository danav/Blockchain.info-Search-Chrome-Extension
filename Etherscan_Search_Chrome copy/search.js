// Context menu click callback
function genericOnClick(info, tab) {
    var text = info.selectionText;
    
    // Bitcoin addresses are 34 characters or less, as a rule. (https://en.bitcoin.it/wiki/Address)
    if( text.length > 42 ){
        chrome.tabs.create( {url: 'https://etherscan.io/address/' + text} );
    } else {
        chrome.tabs.create( {url: 'https://etherscan.io/address/' + text} );
    }
}

// Create menu item for selected address
var context = 'selection';
var title = 'Search Etherscan for this address/transaction...';

chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});

// Create menu item for right-click on a page
context = 'page';
title = 'Select Ethereum address or transaction-hash to search';

chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});
