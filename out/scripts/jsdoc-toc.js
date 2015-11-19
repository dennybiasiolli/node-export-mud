(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"module-mud.html\">mud</a>","id":"module:mud","children":[{"label":"<a href=\"module-mud.module_anag.html\">anag</a>","id":"module:mud.module:anag","children":[]},{"label":"<a href=\"module-mud.module_imb.html\">imb</a>","id":"module:mud.module:imb","children":[]},{"label":"<a href=\"module-mud.module_int.html\">int</a>","id":"module:mud.module:int","children":[]},{"label":"<a href=\"module-mud.module_mat.html\">mat</a>","id":"module:mud.module:mat","children":[]},{"label":"<a href=\"module-mud.module_raee.html\">raee</a>","id":"module:mud.module:raee","children":[]},{"label":"<a href=\"module-mud.module_rif.html\">rif</a>","id":"module:mud.module:rif","children":[]},{"label":"<a href=\"module-mud.module_utils.html\">utils</a>","id":"module:mud.module:utils","children":[]},{"label":"<a href=\"module-mud.module_vfu.html\">vfu</a>","id":"module:mud.module:vfu","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
