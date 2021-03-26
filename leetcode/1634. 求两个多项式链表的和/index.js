/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function (poly1, poly2) {
  let dump = new PolyNode();
  let cur = dump;
  while (poly1 || poly2) {
    if (poly2 === null || (poly1 && poly1.power > poly2.power)) {
      cur.next = poly1;
      poly1 = poly1.next;
      cur = cur.next;
    } else if (poly1 === null || (poly1 && poly2.power > poly1.power)) {
      cur.next = poly2;
      poly2 = poly2.next;
      cur = cur.next;
    } else {
      let c = poly1.coefficient + poly2.coefficient;
      if (c !== 0) {
        cur.next = new PolyNode(c, poly1.power);
        cur = cur.next;
      } else {
        cur.next = null;
      }
      poly1 = poly1.next;
      poly2 = poly2.next;
    }
  }
  return dump.next;
};
