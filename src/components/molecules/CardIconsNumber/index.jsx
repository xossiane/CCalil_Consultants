import React from 'react'
import { useSpring, animated } from 'react-spring';

function Number ({n}) {
    const { number } = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: { mass: 1 , tension: 8, friction: 20 },

    });
    return <span><animated.div>{number.to((n) => n.toFixed(0))}</animated.div></span>;
}


export default Number;