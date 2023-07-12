function nearestPointOnLine(nearestCorner1X, nearestCorner1Y, nearestCorner2X, nearestCorner2Y, discX, discY) {
    let dx = nearestCorner2X - nearestCorner1X;
    let dy = nearestCorner2Y - nearestCorner1Y;
    let t = ((discX - nearestCorner1X) * dx + (discY - nearestCorner1Y) * dy) / (dx * dx + dy * dy);
    
    t = Math.max(0, Math.min(1, t));

    return [nearestCorner1X + t * dx, nearestCorner1Y + t * dy];
}