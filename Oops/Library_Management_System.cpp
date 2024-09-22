#include <iostream>
#include <vector>
#include <string>
#include <ctime>

using namespace std;

class Book{
    private:
        string title;
        string author;
        string isbn;
        bool isAvailable;

    public:
        Book(string t, string a, string i):title(t), author(a), isbn(i), isAvailable(true){}

    string getTitle() const {
        return title;
    }

    string getAuthor() const {
        return author;
    }

    string getIsbn() const {
        return isbn;
    }

    bool available() const {
        return isAvailable;
    }

    void borrowBook(){
        if(isAvailable){
            isAvailable=false;
        }else{
            cout<<"Book is already borrowed!\n";
        }
    }

    void returnBook(){
        if(!isAvailable){
            isAvailable=true;
        }
    }

};

class User{
    private:
        string name;
        vector<Book*>borrowedBooks;
        static const int borrowLimit=3;
    public:
        User(string n) : name(n){}

        string getName() const {return name;}

        void borrowBook(Book &book){
            if(borrowedBooks.size()>=borrowLimit){
                cout <<"You have reached the borrowing limit of"<<borrowLimit<<"books\n";
                return  ;
            }

            if(book.available()){
                book.borrowBook();
                borrowedBooks.push_back(&book);
                cout<<"You borrowed: ";
            }else{
                cout<<"Book is not available.\n";
            }
        } 

        void returnBook(Book &book){
            for (size_t i=0;i<borrowedBooks.size();++i){
                if(borrowedBooks[i]->getIsbn()==)
            }
        }
};