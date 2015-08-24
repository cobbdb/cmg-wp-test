var cmg = {
    query: jQuery.noConflict(),
    harmony: Harmony({
        forceLog: true
    })
};
cmg.harmony.log.on('metric', function (data) {
    console.debug(data);
});
window.addEventListener('load', function () {
    cmg.harmony.load({
        slots: [{
            name: 'WP01',
            id: 'ad-top',
            sizes: [
                [1200, 90]
            ],
            adunit: '/11347122/dev-test',
            breakpoint: 'test',
            targeting: {
                ad_slot: 'WP01'
            },
            on: {
                slotRenderEnded: function (event) {
                    console.debug('>\t', event);
                }
            }
        }, {
            name: 'WP01-1',
            id: 'ad-mid',
            sizes: [
                [1200, 90]
            ],
            adunit: '/11347122/dev-test',
            breakpoint: 'test',
            targeting: {
                ad_slot: 'WP01'
            },
            on: {
                slotRenderEnded: function (event) {
                    console.debug('>\t', event);
                }
            }
        }, {
            name: 'WP01-2',
            id: 'ad-low',
            sizes: [
                [1200, 90]
            ],
            adunit: '/11347122/dev-test',
            breakpoint: 'test',
            targeting: {
                ad_slot: 'WP01'
            },
            on: {
                slotRenderEnded: function (event) {
                    console.debug('>\t', event);
                }
            }
        }]
    });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    cmg.harmony.show.breakpoint('test');

    /* cmg.harmony.slot('WP01-1').on('slotRenderEnded', function (data) {
        var frame = $('#' + this.divId).find('iframe')[0];
        frame.height = 165;
    });
    cmg.harmony.slot('WP01-2').on('slotRenderEnded', function (data) {
        var frame = $('#' + this.divId).find('iframe')[0];
        frame.height = 165;
    }); */
});
