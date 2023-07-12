function rotatePoint(x, y, angle, originX, originY) {
    let newX = (x - originX) * cos(angle) - (y - originY) * sin(angle) + originX;
    let newY = (x - originX) * sin(angle) + (y - originY) * cos(angle) + originY;
    
    return [newX, newY];
}