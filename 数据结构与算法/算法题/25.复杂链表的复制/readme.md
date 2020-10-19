## 题目 25.复杂链表的复制
  输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

### 解题思路
1. 复制单链表
    1.1. p指向头结点，只要p不为空，就一直循环；
    1.2. 创建新节点，值和p相同；
    1.3. 将新节点插入p节点之后；
2. 连接random域
    2.1. p指向头结点；
    2.2. 将含有random的p节点的后继节点添加random域；
    PS：有些节点本身就没有random，再访问random的后继就会出现空指针！
3. 拆分单链表
    3.1. p指向头结点，依次向后移动；
    3.2. 将p指向后继的后继；
    3.3. p的后继指向p的后继的后继的后继；
    PS：若p已经为最后一个元素，则p的后继直接为null，否则出现空指针！
#### 递归法
```
public class Solution {
    public RandomListNode Clone(RandomListNode pHead)
    {
        if (pHead == null) return null;
         
        RandomListNode newNode = new RandomListNode(pHead.label);
         
        newNode.random = pHead.random;
        newNode.next = Clone(pHead.next);
         
        return newNode;
    }
}
```
#### 方法一：map关联
    首先遍历一遍原链表，创建新链表（赋值label和next），用map关联对应结点；再遍历一遍，更新新链表的random指针。（注意map中应有NULL ----> NULL的映射）

```
class Solution {
public:
    RandomListNode* Clone(RandomListNode* pHead)
    {
        if(pHead==NULL) return NULL;
 
        map<RandomListNode*,RandomListNode*> m;
        RandomListNode* pHead1 = pHead;
        RandomListNode* pHead2 = new RandomListNode(pHead1->label);
        RandomListNode* newHead = pHead2;
        m[pHead1] = pHead2;
        while(pHead1){
            if(pHead1->next) pHead2->next = new RandomListNode(pHead1->next->label);
            else pHead2->next = NULL;
            pHead1 = pHead1->next;
            pHead2 = pHead2->next;
            m[pHead1] = pHead2;
        }
 
        pHead1 = pHead;
        pHead2 = newHead;
        while(pHead1){
            pHead2->random = m[pHead1->random];
            pHead1 = pHead1->next;
            pHead2 = pHead2->next;
        }
        return newHead;
    }
};
```

#### 方法二：next指针关联

    创建新链表的时候，用原结点的next指针指向对应新结点，新结点的next指针指向下一个原结点，以此类推，形成之字形关联。然后，就可以先更新新链表的random指针，再解除next关联，更新next指针。这种方法不需要map来辅助，不管查找next还是random指针都是O(1)的，效率很高。

```
class Solution {
public:
    RandomListNode* Clone(RandomListNode* pHead)
    {
        if(pHead==NULL) return NULL;
 
        RandomListNode *newHead = new RandomListNode(pHead->label);
        RandomListNode *pHead1=NULL, *pHead2=NULL;
 
        // 上链，使新旧链表成之字形链接
        for(pHead1=pHead,pHead2=newHead;pHead1;){
            RandomListNode* tmp = pHead1->next;
            pHead1->next = pHead2;
            pHead2->next = tmp;
 
            // next
            pHead1 = tmp;
            if(tmp) pHead2 = new RandomListNode(tmp->label);
            else pHead2 = NULL;
        }
 
        // 更新新链表的random指针
        for(pHead1=pHead,pHead2=newHead;pHead1;){
            if(pHead1->random) pHead2->random = pHead1->random->next;
            else pHead2->random = NULL;
 
            pHead1 = pHead2->next;
            if(pHead1) pHead2 = pHead1->next;
            else pHead2 = NULL;
        }
 
        // 脱链，更新各链表的next指针
        for(pHead1=pHead,pHead2=newHead;pHead1;){
            pHead1->next = pHead2->next;
            if(pHead1->next) pHead2->next = pHead1->next->next;
            else pHead2->next = NULL;
 
            pHead1 = pHead1->next;
            pHead2 = pHead2->next;
        }
         return newHead;
    }
};
```