#include <iostream>
#include <vector>
using namespace std;

class Book {
    private:
        string title;
        string author;
        int id;
    
    public:
        Book(string t, string a, int i){
            this->title=t;
            this->author=a;
            this->id=i;
        }


        void displayBookinfo(){
            cout<<"Book Id: "<<id<<"\n";
            cout<<"Title: "<<title<<"\n";
            cout<<"Author: "<<author<<"\n";
        }

        //Getter and Setter methods

        string getTitle(){
            return title;
        }

        void setTitle(string t){
             title=t;
        }
        string getAuthor(){
            return author;
        }

        void setAuthot(string a){
            author=a;
        }

        int getId(){
            return id;
        }
        
        void setId(int i){
            id=i;
        }

};

class Library {
    private:
        vector<Book>books;
    public:
        void addBook(Book book){
            books.push_back(book);
        }

        void displayAllBooks(){
            for(Book book: books){
                book.displayBookinfo();
                cout<<"------------\n";
            }
        }


        //search functionality
        void searchFunction(int id){
            for (Book book:books){
                if(book.getId()==id){
                    cout<<"Book Found \n";
                    book.displayBookinfo();
                    return;
                }
            }
        }
};

int main(){

    Book book1("Science", "Prakhar Singh",101);
    Library library;
    library.addBook(Book(book1));
    library.addBook(Book("Maths", "Wakanda", 102));
    library.addBook(Book("Computer", "Bill Gates", 103));
    library.displayAllBooks();

    library.searchFunction(102);
    // book1.displayBookinfo();
    
    // book1.setTitle("Maths");

    // cout<<"Updated title: "<<book1.getTitle()<<endl;

    // book1.displayBookinfo();

    return 0;
}