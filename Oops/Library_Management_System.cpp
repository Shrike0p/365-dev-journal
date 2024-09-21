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
}