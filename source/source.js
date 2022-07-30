javascript:(function(){var link = window.location.href;
    var source = "view-source:" + link;
    navigator.clipboard.writeText(source);
    alert("View-Source link copied to clipboard");})();
