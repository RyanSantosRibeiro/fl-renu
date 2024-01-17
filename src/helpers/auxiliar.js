export const screen = {
        width: window.screen.width,
        height: window.screen.height,
        documentWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        documentHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

export const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}