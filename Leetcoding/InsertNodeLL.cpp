#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(){
        int data=0;
        next=NULL;
    }
    Node(int data){
        this->data=data;
        this->next=NULL;
    }
};

class Solution{
    public:
    Node* InsertLL(Node* head, int data){
        if(head==NULL){
            Node* head=new Node(data);
            return head;
        }

        Node* curr=head;
        while(curr->next!=NULL){
            curr=curr->next;
        }

        Node* last=new Node(data);
        curr->next=last;
        return head;
    }
};

void printLinkedList(Node* head) {
    while (head != NULL) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main(){
    Solution s;
    Node* head = NULL;
    head = s.InsertLL(head, 1);
    head = s.InsertLL(head, 2);
    head = s.InsertLL(head, 3);
    printLinkedList(head);
    return 0;
}