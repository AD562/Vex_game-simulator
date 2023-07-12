function linesIntersect(line1, line2) {
    var x1 = line1[0];
    var y1 = line1[1];
    var x2 = line1[2];
    var y2 = line1[3];

    var x3 = line2[0];
    var y3 = line2[1];
    var x4 = line2[2];
    var y4 = line2[3];

    var denominator = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1));

    if (denominator == 0) {
        return false;
    }

    var a = y1 - y3;
    var b = x1 - x3;

    var numerator1 = ((x4 - x3) * a) - ((y4 - y3) * b);

    var numerator2 = ((x2 - x1) * a) - ((y2 - y1) * b);

    a = numerator1 / denominator;
    b = numerator2 / denominator;

    // if line1 is a segment and line2 is infinite, they intersect if:
    if (a > 0 && a < 1 && b > 0 && b < 1) {
        return true;
    }

    // if line1 is infinite and line2 is a segment, they intersect if:
    if (a > 0 && a < 1 && b > 0 && b < 1) {
        return true;
    }

    // if line1 and line2 are segments, they intersect if both of the above are true
    return false;
}