const circleFactory = function (radius){
    // important thing is returning new object 
    return {
        radius: radius,
        draw: function(){
            console.log("draw")
        }
    };
};

export {circleFactory}; 