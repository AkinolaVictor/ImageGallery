import firebase from 'firebase';
import fire from './config/fire';
import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props){
        super();

        this.state={
            button:[0, 5],
            bookData:[],
            imageData:[],
            imageLoading:false,
            noImage:false,
            keyEmpty:true,
            keyEmpty2:true,
            searchKey:undefined,
            bookLoading: false,
            noBook:false,
            prevLoading: false,
            videoKey: undefined,
            which:5,
            preview:0,
            preview2:0,
            bookPage:0,
            bookMaxPage:undefined,
            x:0,
            user:{},
            userId:undefined,
            Email: '',
            Password: '',
            errMsg: '',
            errMsg2: '',
            errMsg3:'',
            Auth:false,
            imageCount:undefined,
            bookCount:undefined,
            savefail:false,
            savedBooks:[],
            savedImages:[],
            commenter:'',
            comment:'',
            commentError:'',
            allComments:[],
            
        }

        this.handleStyle= this.handleStyle.bind(this);
        this.GetKey= this.GetKey.bind(this);
        this.navToggle= this.navToggle.bind(this);
        this.activatePreview= this.activatePreview.bind(this);
        this.activatePreview2= this.activatePreview2.bind(this);
        this.exitPreview= this.exitPreview.bind(this);
        this.prevControlup= this.prevControlup.bind(this);
        this.prevControldown= this.prevControldown.bind(this);
        this.prevControlup2= this.prevControlup2.bind(this);
        this.prevControldown2= this.prevControldown2.bind(this);
        this.getBooks= this.getBooks.bind(this);
        this.pageAdd= this.pageAdd.bind(this);
        this.pageSub= this.pageSub.bind(this);
        this.exitPreview= this.exitPreview.bind(this);
        this.login= this.login.bind(this);
        this.logout= this.logout.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.getComment= this.getComment.bind(this);
        this.signUp= this.signUp.bind(this);
        this.savePics= this.savePics.bind(this);
        this.saveBooks= this.saveBooks.bind(this);
        this.authListener= this.authListener.bind(this);
        this.removeBooks= this.removeBooks.bind(this);
        this.removeImages= this.removeImages.bind(this);
        // this.saveBooks= this.saveBooks.bind(this);
        // this.authListener= this.authListener.bind(this);

    }



    
    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                // console.log(user);
                
                this.setState({
                    user, 
                    Auth:true,
                    userId: user.uid,
                    savefail:""
                })
                firebase.database().ref(`users/${user.uid}`)
                    .once('value')
                    .then(snapshot => {
                        const val=snapshot.val();
                        // console.log(val);

                        this.setState({
                            imageCount:val.imageCount,
                            bookCount:val.bookCount
                        })
                    })
                    .catch(e=>{
                        console.log(e);
                    })

                    //subscribe to books
                    firebase.database().ref(`users/${user.uid}/books`)
                    .on('value', (snapshot=>{
                        const books=[];
                        // console.log(val);
                        snapshot.forEach((childSnapshot)=>{
                            books.push({
                                pid: childSnapshot.key,
                                ...childSnapshot.val()
                            });
                        });
                        // console.log(books)
                        this.setState({
                            savedBooks:books
                        });
                    }));
                    
                    //subscribe to image
                    firebase.database().ref(`users/${user.uid}/images`)
                    .on('value', (snapshot=>{
                        const images=[];
                        // console.log(val);
                        snapshot.forEach((childSnapshot)=>{
                            images.push({
                                pid: childSnapshot.key,
                                ...childSnapshot.val()
                            });
                        });
                        // console.log(images)
                        this.setState({
                            savedImages:images
                        });
                    }));
                    

                    //fetch comments
                    firebase.database().ref('appDetail/comments/comment')
                    .on('value', (snapshot=>{
                        const allComments=[];
                        // console.log(val);
                        snapshot.forEach((childSnapshot)=>{
                            let id=childSnapshot.key;
                            allComments.push({
                                id: id,
                                ...childSnapshot.val()
                            });

                            this.setState({
                                allComments
                            });
                          
                        });
                        
                       
                        // console.log(this.state.allComments);
                    }));
            }else {
                this.setState({user:null})
                // console.log(user);
            }
        }
    )}

    navToggle(e){
        // console.log(screen.width);
        if(window.screen.width<=768){
            let button = document.querySelectorAll('.mediaNav'); 
            for(let i=0; i<button.length; i++){
                // console.log('From button nav: ', button[i]);
                if(button[i].classList.contains('clickeD')){
                    button[i].classList.remove('clickeD')
                }
            }
            e.target.classList.add('clickeD')
            // console.log(e.target.classList);
        }
    }
    
    handleStyle(e){
        let save = this.state.button[0];
        let sav=this.state.button[1];
        let button = document.querySelectorAll('button'); 
        let i = e.currentTarget.dataset.id;
        let form = document.querySelector('.form'); 
        
      if (i>4){
            button[sav].classList.remove('hover2');
            this.setState({
                button:[save, i],
                which:i  
            });
            button[i].classList.add('hover2');
            if (form.classList.contains('hide')) {
                form.classList.remove('hide');
            }
        }else{
            button[save].classList.remove('hover');
            button[i].classList.add('hover');
            this.setState({button:[i, sav]});
        }

        //this.setState({sav:i});
        //console.log(i, save, sav);
    }

    GetKey(event){
        event.preventDefault();
        let key = document.querySelector('#searchs').value;
        this.setState({
            searchKey:key
        });
        firebase.database().ref('appDetail/noOfSearches')
            .once('value')
            .then(snapshot => {
                const val = snapshot.val();
                firebase.database().ref('appDetail').update({
                    noOfSearches: val+1
                })
            })
            .catch(e=>{
                console.log(e);
            })
        if(this.state.which==5 && key){
            this.setState({imageLoading:false, keyEmpty:false});
            let clientId='SqtYHolrPeB5UOF5Dga8tGaXVstztr5PBJ3jhkCoELE';
            let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${key}`;
            fetch(url)
                .then((response)=>{
                   return response.json();
                })
                .then((data)=>{
                    if (data.results.length==0) this.setState({noImage: true})
                   this.setState({
                      imageData: data.results,
                      imageLoading:true
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.setState({
                       imageLoading:false,
                       noImage:true
                     })
                });
        }

        if (this.state.which==6 && key){
            this.setState({bookLoading:false, bookPage:0, keyEmpty2:false});
            this.getBooks(key);
        }
        
    }

    getBooks(key){
        this.setState({ 
            keyEmpty2:false
        });
        let ApiKey='AIzaSyA-iw7xzb3r88tmiLbw8JCvrOCIBlIOtBg';
        let startIndex=this.state.bookPage;
        let max=20;
        let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${key}&startIndex=${startIndex}&maxResults=${max}&key=${ApiKey}`;
        fetch(url)
            .then((response)=>{
               return response.json();
            })
            .then((data)=>{
                // //console.log(typeof(data));
                // console.log(this.state.searchKey);
                // console.log(data);
                // console.log(data.totalItems);
                if (data.totalItems!=0 ){
                    if (data.items[0].volumeInfo.imageLinks.smallThumbnail ||
                         data.items[0].volumeInfo.imageLinks.authors ||
                         data.items[0].volumeInfo.imageLinks.publishedDate ||
                         data.items[0].volumeInfo.imageLinks.id){
                            // console.log(this.state.searchKey);
                            // console.log(data);
                            // console.log(data.totalItems);
                        let total = Math.round(data.totalItems/max);
                        this.setState({ bookData:data.items, bookLoading: true, bookMaxPage: total});
                        // console.log(this.state.bookData);
                    }else{
                        this.setState({ 
                                        bookLoading: false,
                                        keyEmpty2:false
                                 });
                    }
                }else{
                    this.setState({ bookLoading: false,
                                    keyEmpty2:false,
                                    noBook:true
                            });
                            }
            })
            .catch((error) => {
              console.error('Error:', error);
              this.setState({
                bookLoading:false,
                bookData:[],
                noBook:true
               })
            });
    }

    pageAdd(){
        if (this.state.bookPage<=this.state.bookMaxPage){
            this.setState({ 
                bookPage: this.state.bookPage+1,
                bookLoading:false
            });
            this.getBooks(this.state.searchKey);
        }    
    }

    pageSub(){
        if (this.state.bookPage>=0 && this.state.bookPage<=this.state.bookMaxPage){
            this.setState({ 
                bookPage: this.state.bookPage-1,
                bookLoading:false
            });
            this.getBooks(this.state.searchKey);
        } 
    }

    prevControlup(){
        if(this.state.preview == this.state.imageData.length-2){
            this.setState({preview:this.state.imageData.length-1});
        } else if(this.state.preview == this.state.imageData.length-1){
            this.setState({preview:this.state.imageData.length-1});
        } else {
            this.setState({preview:this.state.preview+1});
            // console.log(this.state.preview);
        }   
    }


    prevControldown(){
        if(this.state.preview == 1){
            this.setState({preview: 0});
        } else if(this.state.preview == 0){
            this.setState({preview: 0});
        } else {
            this.setState({preview:this.state.preview-1});
        }    
    }

    prevControlup2(){
        if(this.state.preview2 == this.state.bookData.length-2){
            this.setState({preview2:this.state.bookData.length-1});
        } else if(this.state.preview2 == this.state.bookData.length-1){
            this.setState({preview2:this.state.bookData.length-1});
        } else {
            this.setState({preview2:this.state.preview2+1});
            // console.log(this.state.preview2);
        }   
    }


    prevControldown2(){
        if(this.state.preview2 == 1){
            this.setState({preview2: 0});
        } else if(this.state.preview2 == 0){
            this.setState({preview2: 0});
        } else {
            this.setState({preview2:this.state.preview2-1});
        }    
    }


    activatePreview(x, id){
        let preview = document.querySelector('.Allpreview');
        let searchControl = document.querySelector('.search-control');
        let form = document.querySelector('.form');
        let carrier = document.querySelectorAll('.center');
        let resize = document.querySelectorAll('.resize');

        preview.classList.remove('hide');
        searchControl.classList.add('hide');
        form.classList.add('hide');
        carrier[x].classList.add('hide');
        resize[x].classList.add('hide');
        let a=this.state.imageData.map(i=> i.id).indexOf(id);
        this.setState({x:x, preview: a});
        // console.log(a)

    }

    activatePreview2(x, id){
        let preview = document.querySelector('.Allpreview');
        let searchControl = document.querySelector('.search-control');
        let form = document.querySelector('.form');
        let carrier = document.querySelectorAll('.center');
        let resize = document.querySelectorAll('.resize');

        preview.classList.remove('hide');
        searchControl.classList.add('hide');
        form.classList.add('hide');
        carrier[x].classList.add('hide');
        resize[x].classList.add('hide');
        let a=this.state.bookData.map(i=> i.id).indexOf(id);
        this.setState({x:x, preview2: a, prevLoading: true});
        // console.log(a)

    }

    exitPreview(){
        let preview = document.querySelector('.Allpreview');
        let searchControl = document.querySelector('.search-control');
        let form = document.querySelector('.form');
        let carrier = document.querySelectorAll('.center');
        let resize = document.querySelectorAll('.resize');
        
        preview.classList.add('hide');
        searchControl.classList.remove('hide');
        form.classList.remove('hide');
        carrier[this.state.x].classList.remove('hide');
        resize[this.state.x].classList.remove('hide');
        this.setState({ preview2: 0 });
    }

    getresolution(width, height){
        let total = width + height;
        const wp=(width/total)*100;
        const hp=(height/total)*100;        
        let a = 93, b, Fwidth, Fheight;

        if (width>height){
            return `${a}%`
        }else{
            b=hp-wp;
            return `${a-b}%`
        }
        
    }

    getheight(width, height){
        let total = width + height;
        const wp=(width/total)*100;
        const hp=(height/total)*100;        
        let a = 95, b, Fwidth, Fheight;

        if (height>width){
            return `${a}%`
        }else{
            b=wp-hp;
            return `${a-b}%`
        }
        
    }

    fetchImage(width, height){
        let total = width + height;
        const wp=(width/total)*100;
        const hp=(height/total)*100;
        let a = 95, b, Fwidth, Fheight;
        if(wp>hp){
            return b=wp-hp
            Fwidth=a;
            Fheight=a-b
        } else {
            return b=hp-wp
            Fwidth=a;
            Fheight=a-b

            // so use this.setState
        } 
        
    }

    newUser(){
        let signin = document.querySelector('.sign');
        signin.classList.add('hide');
        let signup = document.querySelector('.signup');
        signup.classList.remove('hide')
    }
    
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
            .then(u =>{
                // console.log(u.user.uid);
                // console.log(u);
                this.setState({
                    userId: u.user.uid,
                    Auth: true
                })
                firebase.database().ref(`users/${u.user.uid}`)
                    .once('value')
                    .then(snapshot => {
                        const val=snapshot.val();
                        // console.log(val);
                        this.setState({
                            imageCount:val.imageCount,
                            bookCount:val.bookCount
                        })
                    })
                    .catch(e=>{
                        console.log(e);
                    })
            })
            .catch(err => {
                console.log(err.message);
                this.setState({
                    errMsg:err.message
                })
            })
        this.setState({
            Email: '',
            Password: '',
            savefail:""
       })
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp(e){
        e.preventDefault();
        let p1 = document.querySelector(".pass1").value;
        let p2 = document.querySelector(".pass2").value;
        let mail = document.querySelector(".mail").value;
        //Add Name
        if (p1 !== p2){
            this.setState({
                errMsg2:'',
                errMsg3:'password do not match'
            })
        }else {
            fire.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
            .then(u=>{
                console.log(u.user.uid);
                console.log(u);
                let id=u.user.uid;
                this.setState({
                    userId: id,
                    Auth: true,
                    imageCount:0,
                    bookCount: 0,
                    savefail:""
                })
                firebase.database().ref(`users/${id}`).set({
                    mail: mail,
                    Password: p1,
                    imageCount:0,
                    bookCount:0
                })
                firebase.database().ref('appDetail/noOfUsers')
                    .once('value')
                    .then(snapshot => {
                        const val = snapshot.val();
                        firebase.database().ref('appDetail').update({
                            noOfUsers: val+1
                        })
                    })
                    .catch(e=>{
                        console.log(e);
                    })
            }).catch(err=>{
                console.log(err.message);
                this.setState({
                    errMsg2:err.message,
                    errMsg3:''
                })
            })
        }

    }

    logout(){
        fire.auth().signOut();
        this.setState({
            userId: undefined,
            Auth: false
        })
    }

    savePics(id){
        // console.log("i'm working", id);
        let a=this.state.imageData.map(i=> i.id).indexOf(id);
        if (this.state.user){
            let ids= document.querySelector(`#s${id}`);
            ids.classList.add("hide");
            // let newCount = this.state.imageCount;
            firebase.database().ref(`users/${this.state.userId}/images`).push(this.state.imageData[a])
        
            firebase.database().ref(`users/${this.state.userId}`).update({
                imageCount: this.state.imageCount+1
            })
        
            this.setState({
                imageCount: this.state.imageCount+1,
                savefail:""
            })
        }else{
            // console.log('You Need to be Logged in to save documents, you can do that from the board section');
            
            this.setState({savefail:'You Need to be Logged in to save documents, you can do that from the Gallery section'})
        }
    }

    saveBooks(id){
        // console.log("i'm working", id);
        let a= this.state.bookData.map((i)=> {return i.id}).indexOf(id);
        if (this.state.user){
            let ids= document.querySelector(`#s${id}`);
            ids.classList.add("hide");
            //let newCount = this.state.bookCount;
            firebase.database().ref(`users/${this.state.userId}/books`).push(this.state.bookData[a])
        
            firebase.database().ref(`users/${this.state.userId}`).update({
                bookCount: this.state.bookCount+1
            })
            
        
            this.setState({
                bookCount:this.state.bookCount+1,
                savefail:""
            })
        }else{
            
            this.setState({savefail:'You Need to be Logged in to save documents, you can do that from the board section'})
        }
    }

    removeBooks(pid){
        firebase.database().ref(`users/${this.state.userId}/books`)
        .on('value', (snapshot=>{
            // console.log(val);
            snapshot.forEach((childSnapshot)=>{
                if (childSnapshot.key==pid){
                    firebase.database().ref(`users/${this.state.userId}/books/${pid}`).set(null);
                    firebase.database().ref(`users/${this.state.userId}`).update({
                        bookCount: this.state.bookCount-1
                    });
                    this.setState({
                        bookCount:this.state.bookCount-1
                    })
                    // console.log(pid, this.state.bookCount)
                }
            });
        }));
    }
    
    removeImages(pid){
        firebase.database().ref(`users/${this.state.userId}/images`)
        .on('value', (snapshot=>{
            // console.log(val);
            snapshot.forEach((childSnapshot)=>{
                if (childSnapshot.key==pid){
                    firebase.database().ref(`users/${this.state.userId}/images/${pid}`).set(null);
                    firebase.database().ref(`users/${this.state.userId}`).update({
                        imageCount: this.state.imageCount-1
                    });
                    this.setState({
                        imageCount:this.state.imageCount-1
                    })
                    // console.log(pid, this.state.imageCount)
                }
            });
        }));
    }

    chooseBoard(e){
        let images = document.querySelector('.boardI');
        let books = document.querySelector('.boardB');
        let image = document.querySelectorAll('.boardIm');
        let book = document.querySelectorAll('.boardBk');
        let i = e.currentTarget.dataset.id;
        if (i==111) {
            books.classList.add("hide");
            images.classList.remove("hide");

            image[0].classList.add("hover");
            image[1].classList.add("hover");
            book[0].classList.remove("hover");
            book[1].classList.remove("hover");
            
        } else if(i==222){
            images.classList.add("hide");
            books.classList.remove("hide");

            image[0].classList.remove("hover");
            image[1].classList.remove("hover");
            book[0].classList.add("hover");
            book[1].classList.add("hover");
            
        }

    }

    hide(){
        let ann = document.querySelector('.commentSize');
        let bnn = document.querySelector('.theComment');
        ann.classList.add('hide');
        bnn.classList.remove('hide')
    }

    getComment(e){
        e.preventDefault()
        

        if( this.state.commenter && this.state.comment ){
            this.setState({commentError:''});

            firebase.database().ref('appDetail/comments/noOfComment')
                    .once('value')
                    .then(snapshot => {
                        const val = snapshot.val();
                        firebase.database().ref(`appDetail/comments/comment`).push({
                            name: this.state.commenter,
                            comment: this.state.comment,
                            no: val+1
                        })

                        firebase.database().ref(`appDetail/comments`).update({
                            noOfComment:val+1
                        })
                        this.hide();
                    })
                    .catch(e=>{
                        console.log(e);
                    })


            console.log(this.state.commenter, this.state.comment);
        }else if(!this.state.commenter && !this.state.comment ){
            this.setState({commentError:'You have not entered your name and your comment below'});
        }else if(!this.state.commenter){
            this.setState({commentError:'Enter your name below'});
        }else if(!this.state.comment){
            this.setState({commentError:'You have not Entered your comment'});
        }
        
    }

    render(){
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleStyle: this.handleStyle,
                    navToggle: this.navToggle,
                    numb:this.numb,
                    GetKey: this.GetKey,
                    getwidth:this.getwidth,
                    getresolution:this.getresolution,
                    newUser:this.newUser,
                    activatePreview:this.activatePreview,
                    activatePreview2:this.activatePreview2,
                    exitPreview:this.exitPreview,
                    prevControlup:this.prevControlup,
                    prevControldown:this.prevControldown,
                    prevControlup2:this.prevControlup2,
                    prevControldown2:this.prevControldown2,
                    pageAdd:this.pageAdd,
                    pageSub:this.pageSub,
                    login: this.login,
                    handleChange: this.handleChange,
                    signUp: this.signUp,
                    logout: this.logout,
                    savePics:this.savePics,
                    saveBooks:this.saveBooks,
                    removeBooks: this.removeBooks,
                    removeImages: this.removeImages,
                    chooseBoard: this.chooseBoard,
                    hide: this.hide,
                    getComment:this.getComment
                    
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

