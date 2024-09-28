#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(){
        data=0;
        next=NULL;
    }

    Node(int data){
        this->data=data;
        this->next=NULL;
    }
};

class Solution {
  public:
    Node* constructLL(vector<int>& arr) {
        // code here
        Node *head=new Node(arr[0]);
        Node *curr=head;
        for(int i=1;i<arr.size();i++){
            Node *newNode=new Node(arr[i]);
            curr->next=newNode;
            curr=newNode;
        }
        
        return head;
        
    }
};

int main() {
    Solution s;
    vector<int> values = {1, 2, 3, 4, 5};
    Node* head = s.constructLL(values);
    Node* curr = head;
    while (curr != NULL) {
        cout << curr->data << " ";
        curr = curr->next;
    }
    return 0;
}