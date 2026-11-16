#include<vector>

using namespace std;
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

vector<int> traverse(ListNode *node){
    // if(n1->val == nullptr) return nullptr;
    if(node == nullptr) return;
    return {traverse(node->next)};
}

class Solution
{
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
    }
};