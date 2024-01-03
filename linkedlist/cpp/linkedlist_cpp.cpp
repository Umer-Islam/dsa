#include <iostream>
using namespace std;
// for creating a node 
struct Node{

	int data;
	struct node * link;

};
// main function
int main(){
//head pointer which will point to the first node of the list	
	struct Node *head = NULL;
// memory allocation for the node in the below line (struct Node *) is type casting and not necessary)	
	head = (struct Node *) malloc(sizeof(struct Node));
	// head pointer is accessing the data and the pointer for the next node also known as the link
	head -> data = 666;
	head-> link =NULL ; //initially the value of NULL is given
			    cout<<"the first node"<<endl;
	printf ("%d", head->data);
	cout<< "the second node"<<endl;
	struct Node * current = malloc(sizeof(struct Node));
	current = maloc(sizeof(struct Node));
	current -> data = 999;
	current -> link = current;
	//third node
	struct Node * current = malloc(sizeof(struct Node));
	
	return 0;
}
