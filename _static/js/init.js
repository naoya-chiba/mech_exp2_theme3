jQuery(window).on("load", function(){
    Gifffer({
        playButtonStyles: {
            'width': '60px',
            'height': '60px',
            'border-radius': '30px',
            'background': 'rgba(255, 0, 0, 0.7)',
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'margin': '-30px 0 0 -30px'
        },
        playButtonIconStyles: {
            'width': '0',
            'height': '0',
            'border-top': '14px solid transparent',
            'border-bottom': '14px solid transparent',
            'border-left': '14px solid rgba(255, 255, 255, 0.9)',
            'position': 'absolute',
            'left': '26px',
            'top': '16px'
        }
    });
});
