import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Contact from './pages/contact/contact.component';  
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';




class App extends React.Component 
{

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) 
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser( 
            {
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      }
      else
      {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" render={() => this.props.currentUser? (<Redirect to="/" />) : (<SignInAndSignUp />) } />
        </Switch>
        <Footer /> 
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch)  => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
