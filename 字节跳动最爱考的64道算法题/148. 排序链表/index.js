/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const merge = (list1, list2) => {
    let res = new ListNode(0);
    let tail = res;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        res.next = list1;
        list1 = list1.next;
      } else {
        res.next = list2;
        list2 = list2.next;
      }
      res = res.next;
    }
    if (list1) {
      res.next = list1;
    } else if (list2) {
      res.next = list2;
    }
    return tail.next;
  };
  const toSortList = (head, tail) => {
    if (head === null) {
      return head;
    }
    if (head.next == tail) {
      head.next = null;
      return head;
    }
    let fast = (slow = head);
    while (fast !== tail && fast.next !== tail) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
  };

  return toSortList(head, null);
};
